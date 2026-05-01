#!/usr/bin/env bash

set -euo pipefail

ROOT="."
OUT_DOCUSAURUS="docs/sidebar.js"
OUT_MKDOCS="mkdocs.yml"
OUT_README="README_INDEX.md"

IGNORE_DIRS=("node_modules" ".git" "dist" "build" ".next")

is_ignored() {
  local name="$1"
  for i in "${IGNORE_DIRS[@]}"; do
    [[ "$name" == "$i" ]] && return 0
  done
  return 1
}

# -------------------------------
# Collect Markdown Files
# -------------------------------
mapfile -t FILES < <(
  find "$ROOT" -type f -name "*.md" | sort
)

# -------------------------------
# Build Tree Structure (in-memory)
# -------------------------------
declare -A TREE

for file in "${FILES[@]}"; do
  clean="${file#./}"
  dir=$(dirname "$clean")
  base=$(basename "$clean")

  skip=false
  for ig in "${IGNORE_DIRS[@]}"; do
    [[ "$clean" == *"$ig"* ]] && skip=true && break
  done
  $skip && continue

  TREE["$dir"]+="$base"$'\n'
done

# -------------------------------
# README INDEX (Clickable)
# -------------------------------
{
  echo "# Documentation Index"
  echo ""
  echo "_Auto-generated on $(date)_"
  echo ""

  for dir in "${!TREE[@]}"; do
    echo "## ${dir:-root}"
    echo ""

    while read -r file; do
      [[ -z "$file" ]] && continue
      path="$dir/$file"
      echo "- [$file]($path)"
    done <<< "${TREE[$dir]}"

    echo ""
  done | sort

} > "$OUT_README"

# -------------------------------
# Docusaurus Sidebar
# -------------------------------
{
  echo "module.exports = {"
  echo "  docs: ["

  for dir in "${!TREE[@]}"; do
    echo "    {"
    echo "      type: 'category',"
    echo "      label: '${dir:-root}',"
    echo "      items: ["

    while read -r file; do
      [[ -z "$file" ]] && continue
      id="${dir}/${file}"
      id="${id%.md}"
      echo "        '${id}',"
    done <<< "${TREE[$dir]}"

    echo "      ],"
    echo "    },"
  done | sort

  echo "  ],"
  echo "};"

} > "$OUT_DOCUSAURUS"

# -------------------------------
# MkDocs Navigation
# -------------------------------
{
  echo "site_name: Project Docs"
  echo "nav:"

  for dir in "${!TREE[@]}"; do
    echo "  - ${dir:-root}:"

    while read -r file; do
      [[ -z "$file" ]] && continue
      path="$dir/$file"
      echo "      - $file: $path"
    done <<< "${TREE[$dir]}"

  done | sort

} > "$OUT_MKDOCS"

echo "Generated:"
echo " - $OUT_README"
echo " - $OUT_DOCUSAURUS"
echo " - $OUT_MKDOCS"