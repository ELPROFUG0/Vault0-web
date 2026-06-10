#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 3 ]]; then
  echo "Usage: $0 <dmg-path> <marketing-version> <build-number> [release-notes-html]"
  echo "Example: $0 ~/Desktop/Vault0-1.0.1.dmg 1.0.1 2 '<p>Bug fixes and improvements.</p>'"
  exit 1
fi

DMG_PATH="$1"
MARKETING_VERSION="$2"
BUILD_NUMBER="$3"
RELEASE_NOTES="${4:-<p>Bug fixes and improvements.</p>}"

if [[ ! -f "$DMG_PATH" ]]; then
  echo "DMG not found: $DMG_PATH"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
PUBLIC_DIR="$REPO_ROOT/public"
DOWNLOADS_DIR="$PUBLIC_DIR/downloads"
APPCAST_PATH="$PUBLIC_DIR/appcast.xml"
DMG_NAME="Vault0-${MARKETING_VERSION}.dmg"
PUBLIC_DMG_PATH="$DOWNLOADS_DIR/$DMG_NAME"
DOWNLOAD_URL="https://vault0.me/downloads/$DMG_NAME"

SIGN_UPDATE="${SPARKLE_SIGN_UPDATE:-/Users/contentmanager/Library/Developer/Xcode/DerivedData/Vault0-gkdoombixmdibzeqocjjeexkxied/SourcePackages/artifacts/sparkle/Sparkle/bin/sign_update}"

if [[ ! -x "$SIGN_UPDATE" ]]; then
  echo "Sparkle sign_update not found or not executable."
  echo "Set SPARKLE_SIGN_UPDATE=/path/to/sign_update and run again."
  exit 1
fi

mkdir -p "$DOWNLOADS_DIR"
cp "$DMG_PATH" "$PUBLIC_DMG_PATH"

SIGN_OUTPUT="$("$SIGN_UPDATE" "$PUBLIC_DMG_PATH")"
ED_SIGNATURE="$(printf '%s\n' "$SIGN_OUTPUT" | sed -n 's/.*sparkle:edSignature="\([^"]*\)".*/\1/p')"
LENGTH="$(printf '%s\n' "$SIGN_OUTPUT" | sed -n 's/.*length="\([^"]*\)".*/\1/p')"

if [[ -z "$ED_SIGNATURE" || -z "$LENGTH" ]]; then
  echo "Could not parse Sparkle signature output:"
  printf '%s\n' "$SIGN_OUTPUT"
  exit 1
fi

PUB_DATE="$(LC_ALL=C date -u '+%a, %d %b %Y %H:%M:%S +0000')"

cat > "$APPCAST_PATH" <<XML
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:sparkle="http://www.andymatuschak.org/xml-namespaces/sparkle" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <channel>
        <title>Vault0 Changelog</title>
        <link>https://vault0.me/appcast.xml</link>
        <description>Most recent changes to Vault0.</description>
        <language>en</language>

        <item>
            <title>Version ${MARKETING_VERSION}</title>
            <sparkle:version>${BUILD_NUMBER}</sparkle:version>
            <sparkle:shortVersionString>${MARKETING_VERSION}</sparkle:shortVersionString>
            <description><![CDATA[
                ${RELEASE_NOTES}
            ]]></description>
            <pubDate>${PUB_DATE}</pubDate>
            <enclosure
                url="${DOWNLOAD_URL}"
                sparkle:version="${BUILD_NUMBER}"
                sparkle:shortVersionString="${MARKETING_VERSION}"
                sparkle:edSignature="${ED_SIGNATURE}"
                length="${LENGTH}"
                type="application/octet-stream"
            />
        </item>

    </channel>
</rss>
XML

echo "Updated $APPCAST_PATH"
echo "Copied DMG to $PUBLIC_DMG_PATH"
echo "Download URL: $DOWNLOAD_URL"
