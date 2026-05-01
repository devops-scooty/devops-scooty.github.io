#!/usr/bin/env bash

set -euo pipefail

ROOT="."
APP_ROOT="scooty-xp-website/src"

OUT_README="README_INDEX.md"
OUT_DOCUSAURUS="docs/sidebar.js"
OUT_MKDOCS="mkdocs.yml"

IGNORE=(
  ".git"
  "node_modules"
  ".next"
  "dist"
  "build"
  ".vscode"
)

should_ignore() {
  local path="$1"
  for i in "${IGNORE[@]}"; do
    [[ "$path" == *"$i"* ]] && return 0
  done
  return 1
}

# -----------------------------------
# 1. README INDEX (REAL FILES ONLY)
# -----------------------------------

{
  echo "# Repository Index"
  echo ""
  echo "_Auto-generated on $(date)_"
  echo ""

  find "$ROOT" -type f \( -name "*.md" -o -name "*.ts" -o -name "*.tsx" \) \
    | sort \
    | while read -r file; do
        should_ignore "$file" && continue
        clean="${file#./}"
        echo "- [$clean]($clean)"
      done

} > "$OUT_README"

# -----------------------------------
# 2. DOCUSAURUS SIDEBAR (CODE-AWARE)
# -----------------------------------

mkdir -p docs

{
  echo "module.exports = {"
  echo "  docs: ["

  # ---- APP STRUCTURE ----
  echo "    {"
  echo "      type: 'category',"
  echo "      label: 'Application',"
  echo "      items: ["

  find "$APP_ROOT" -type d | sort | while read -r dir; do
    should_ignore "$dir" && continue
    rel="${dir#$APP_ROOT/}"
    [[ "$rel" == "$dir" ]] && continue

    echo "        {"
    echo "          type: 'category',"
    echo "          label: '${rel}',"
    echo "          items: [],"
    echo "        },"
  done

  echo "      ],"
  echo "    },"

  # ---- DOCS (if exist) ----
  if [ -d "docs" ]; then
    echo "    {"
    echo "      type: 'category',"
    echo "      label: 'Documentation',"
    echo "      items: ["

    find docs -name "*.md" | sort | while read -r file; do
      rel="${file#docs/}"
      id="${rel%.md}"
      echo "        '$id',"
    done

    echo "      ],"
    echo "    },"
  fi

  echo "  ],"
  echo "};"

} > "$OUT_DOCUSAURUS"

# -----------------------------------
# 3. MKDOCS NAV (CLEAN)
# -----------------------------------

{
  echo "site_name: Scooty XP Docs"
  echo "nav:"

  echo "  - Application:"
  find "$APP_ROOT" -type f \( -name "*.ts" -o -name "*.tsx" \) \
    | sort \
    | while read -r file; do
        should_ignore "$file" && continue
        rel="${file#$APP_ROOT/}"
        echo "      - $rel: $file"
      done

  if compgen -G "docs/*.md" > /dev/null; then
    echo "  - Documentation:"
    for file in docs/*.md; do
      name=$(basename "$file")
      echo "      - $name: $file"
    done
  fi

} > "$OUT_MKDOCS"

echo "Generated:"
echo " - $OUT_README"
echo " - $OUT_DOCUSAURUS"
echo " - $OUT_MKDOCS"