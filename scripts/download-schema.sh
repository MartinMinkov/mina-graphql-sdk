#!/bin/bash
set -eou pipefail

# Check if an argument is provided
if [[ $# -eq 0 ]]; then
  echo "Usage: $0 <branch>"
  echo "branch - 'develop' or 'berkeley'"
  exit 1
fi

BRANCH=$1

if [[ "$BRANCH" != "develop" && "$BRANCH" != "berkeley" ]]; then
  echo "Invalid branch specified. Use 'develop' or 'berkeley'."
  exit 1
fi

# Download the file from the specified branch
curl -L "https://raw.githubusercontent.com/MinaProtocol/mina/$BRANCH/graphql_schema.json" -o "$BRANCH.schema.json"
