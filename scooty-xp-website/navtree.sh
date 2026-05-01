#!/usr/bin/env bash

# ============================================
# Repo Navigation Tree Generator
# ============================================
# Features:
# - Recursive file + folder listing
# - Special handling for node_modules (dirs only)
# - Deterministic sorted output
# - Markdown-friendly tree structure
# ============================================

set -euo pipefail

OUTPUT="NAV.md"
ROOT="."

# -------- Helpers --------

indent() {
  local depth=$1
  printf "%*s" $((depth * 2)) ""
}

print_tree() {
  local dir="$1"
  local depth="$2"

  # List entries (dirs + files), sorted
  mapfile -t entries < <(find "$dir" -mindepth 1 -maxdepth 1 | sort)

  for entry in "${entries[@]}"; do
    name=$(basename "$entry")

    if [[ -d "$entry" ]]; then
      echo "$(indent "$depth")- 📁 $name"

      if [[ "$name" == "node_modules" ]]; then
        # Only show subdirectories inside node_modules
        mapfile -t subdirs < <(find "$entry" -mindepth 1 -maxdepth 1 -type d | sort)
        for sub in "${subdirs[@]}"; do
          subname=$(basename "$sub")
          echo "$(indent $((depth + 1)))- 📁 $subname"
        done
      else
        print_tree "$entry" $((depth + 1))
      fi

    elif [[ -f "$entry" ]]; then
      echo "$(indent "$depth")- 📄 $name"
    fi
  done
}

# -------- Generate --------

{
  echo "# Repository Navigation"
  echo ""
  echo "_Auto-generated on $(date)_"
  echo ""
  print_tree "$ROOT" 0
} > "$OUTPUT"

echo "Navigation generated → $OUTPUT"