import { graphql } from "../gql/gql.js";

graphql(
  `
    query GetPooledUserCommands {
      pooledUserCommands {
        fee
        id
        hash
        memo
        kind
        receiver {
          publicKey
          nonce
        }
        source {
          nonce
          publicKey
        }
        validUntil
        ... on UserCommandPayment {
          id
          amount
          failureReason
          fee
          feeToken
          hash
          kind
          memo
          receiver {
            publicKey
            nonce
          }
          source {
            publicKey
            nonce
          }
          token
          validUntil
        }
      }
    }
  `
);

graphql(
  `
    query GetPooledUserCommandsByPublicKey($publicKey: PublicKey!) {
      pooledUserCommands(publicKey: $publicKey) {
        fee
        id
        hash
        memo
        kind
        receiver {
          publicKey
          nonce
        }
        source {
          nonce
          publicKey
        }
        validUntil
        ... on UserCommandPayment {
          id
          amount
          failureReason
          fee
          feeToken
          hash
          kind
          memo
          receiver {
            publicKey
            nonce
          }
          source {
            publicKey
            nonce
          }
          token
          validUntil
        }
      }
    }
  `
);

graphql(
  `
    query GetPooledUserCommandsByHashes($hashes: [String!]) {
      pooledUserCommands(publicKey: $publicKey) {
        fee
        id
        hash
        memo
        kind
        receiver {
          publicKey
          nonce
        }
        source {
          nonce
          publicKey
        }
        validUntil
        ... on UserCommandPayment {
          id
          amount
          failureReason
          fee
          feeToken
          hash
          kind
          memo
          receiver {
            publicKey
            nonce
          }
          source {
            publicKey
            nonce
          }
          token
          validUntil
        }
      }
    }
  `
);
