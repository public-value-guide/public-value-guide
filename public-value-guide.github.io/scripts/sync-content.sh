#!/bin/sh
# Copy the book's markdown from the source repository into this site.
#
# The site vendors the prose rather than building from a checkout of the book,
# so that `pnpm dev` and `pnpm build` work standalone. The cost is that the copy
# goes stale: run this after the book changes, then commit the result.
#
# Usage:
#   ./scripts/sync-content.sh [path-to-public-value-guide]
#
# The default path assumes the two repositories are siblings:
#   public-value-guide/
#   ├── public-value-guide/            <- the book
#   └── public-value-guide.github.io/  <- this site

set -eu

here=$(cd "$(dirname "$0")/.." && pwd)
source_repo=${1:-"$here/../public-value-guide"}
locales_dir="$source_repo/locales"

if [ ! -d "$locales_dir" ]; then
    echo "No locales/ directory under $source_repo" >&2
    echo "Pass the path to the book repository as the first argument." >&2
    exit 1
fi

destination="$here/src/content"

# GLOSSARY.md and INDEX.md are not localized in the book repo — one copy,
# shared across every locale on the site.
cp "$source_repo/GLOSSARY.md" "$destination/GLOSSARY.md"
cp "$source_repo/INDEX.md" "$destination/INDEX.md"

# llms.txt and llms.json are generated upstream by bin/build-llms; the site serves
# them verbatim at /llms.txt and /llms.json for AI agents.
cp "$source_repo/llms.txt" "$here/static/llms.txt"
cp "$source_repo/llms.json" "$here/static/llms.json"

# Remove first so a locale or topic removed upstream is removed here too,
# rather than lingering as an orphaned page the picker or sidebar still links
# to.
rm -rf "$destination/locales"
mkdir -p "$destination/locales"

# Each topic is its own directory upstream (`topics/<NN-NN-slug>/index.md`,
# alongside `.locale-peer-id` and a `README.md -> index.md` symlink — the
# locale-peer-id convention, see spec/index.md §4a upstream). Only `index.md`
# matters to the site's markdown glob (`$lib/server/book.ts`), but copying the
# whole topic directory is simpler than picking files apart and the extra
# files are harmless — they are never read at build time.
total=0
for locale_path in "$locales_dir"/*/; do
    slug=$(basename "$locale_path")
    # A non-English locale translates the name of its topics directory (`temas/`,
    # `主题/`, `トピック/`…). It is the subdirectory whose children carry a
    # `.locale-peer-id`; it is vendored back under the fixed name `topics/` so the
    # site's routes and content glob stay locale-agnostic.
    topics_dir=""
    for d in "$locale_path"*/; do
        for c in "$d"*/; do
            if [ -f "${c}.locale-peer-id" ]; then
                topics_dir=${d%/}
                break 2
            fi
        done
    done
    if [ -z "$topics_dir" ]; then
        continue
    fi
    # Skip a locale that has been scaffolded (directories exist) but has no
    # topic content synced upstream yet, so an empty locale never appears to
    # exist on the site.
    if ! find "$topics_dir" -mindepth 2 -maxdepth 2 -name index.md -size +0c | grep -q .; then
        echo "Skipping locale $slug: no non-empty topics yet"
        continue
    fi
    mkdir -p "$destination/locales/$slug/topics"
    # No trailing slash on the source glob: with one, cp copies each topic
    # directory's *contents* into the destination (flattening every topic's
    # index.md into one shared file); without one, cp preserves each topic
    # directory as its own named subdirectory of the destination, which is
    # what the site's glob (topics/*/index.md) expects.
    cp -R "$topics_dir/"* "$destination/locales/$slug/topics/"
    count=$(find "$destination/locales/$slug/topics" -name index.md -size +0c | wc -l | tr -d ' ')
    total=$((total + count))
    echo "Synced $count topics for locale $slug"
done

echo "Synced $total topic files across all locales, plus the glossary and the index, from $source_repo"
echo "Review with: git -C \"$here\" status"
echo "Remember: add any newly-complete locale to LOCALES in src/lib/book.ts before it will show up in the site's navigation."
