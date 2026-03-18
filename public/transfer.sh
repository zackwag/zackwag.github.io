#!/usr/bin/env bash

# ==============================
# transfer.sh uploader
# ==============================
# Usage: ./transfer.sh file1 [file2 ...]
# Requires: $UPLOAD_TOKEN environment variable
# ==============================

HOST="https://files.zackwag.com"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;36m'
RESET='\033[0m'

if [[ -z "$UPLOAD_TOKEN" ]]; then
    echo -e "${RED}⚠️  Please set the UPLOAD_TOKEN environment variable before running.${RESET}"
    echo "Example: export UPLOAD_TOKEN=MYSECRET"
    exit 1
fi

if [[ $# -eq 0 ]]; then
    echo -e "${YELLOW}⚠️  Usage: $0 file1 [file2 ...]${RESET}"
    exit 1
fi

for FILE in "$@"; do
    if [[ ! -f "$FILE" ]]; then
        echo -e "${YELLOW}⚠️  File not found: $FILE${RESET}"
        continue
    fi

    SIZE=$(stat -c%s "$FILE" 2>/dev/null || stat -f%z "$FILE")
    echo -e "${BLUE}💾 Uploading '$FILE' (${SIZE} bytes)...${RESET}"

    RESPONSE=$(curl --silent --show-error --progress-bar \
        -H "X-Upload-Token: $UPLOAD_TOKEN" \
        --upload-file "$FILE" \
        "$HOST/")

    if [[ $? -ne 0 ]]; then
        echo -e "${RED}❌ Upload failed for '$FILE'.${RESET}"
        continue
    fi

    # Validate the server response is a URL
    if [[ ! "$RESPONSE" =~ ^https?:// ]]; then
        echo -e "${RED}❌ Unexpected server response: $RESPONSE${RESET}"
        continue
    fi

    # Extract ID and file name from the returned URL
    ID=$(echo "$RESPONSE" | awk -F/ '{print $(NF-1)}')
    NAME=$(basename "$FILE")

    echo -e "${GREEN}✅ Uploaded '$FILE'${RESET}"
    echo -e "🔗 Download at: $HOST/get/$ID/$NAME"
    echo
done
