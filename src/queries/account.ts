import { graphql } from "../gql/gql.js";

graphql(
  `
    query GetAccount($publicKey: PublicKey!) {
      account(publicKey: $publicKey) {
        actionState
        index
        inferredNonce
        leafHash
        locked
        provedState
        publicKey
        receiptChainHash
        stakingActive
        tokenId
        tokenSymbol
        verificationKey {
          hash
          verificationKey
        }
        votingFor
        zkappState
        zkappUri
        nonce
        balance {
          blockHeight
          liquid
          locked
          total
          stateHash
        }
        timing {
          cliffAmount
          cliffTime
          initialMinimumBalance
          vestingIncrement
          vestingPeriod
        }
        delegateAccount {
          publicKey
        }
        delegators {
          publicKey
        }
        epochDelegateAccount {
          publicKey
        }
      }
    }
  `
);

graphql(`
  query GetMerklePath($publicKey: PublicKey!) {
    account(publicKey: $publicKey) {
      merklePath {
        left
        right
      }
    }
  }
`);

graphql(`
  query GetPermissions($publicKey: PublicKey!) {
    account(publicKey: $publicKey) {
      permissions {
        access
        editActionState
        editState
        incrementNonce
        receive
        send
        setDelegate
        setPermissions
        setTiming
        setTokenSymbol
        setVerificationKey {
          auth
          txnVersion
        }
        setVotingFor
        setZkappUri
      }
    }
  }
`);

graphql(
  `
    query GetRecentPayments($maxLength: Int!) {
      bestChain(maxLength: $maxLength) {
        transactions {
          userCommands {
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
        stateHash
        protocolState {
          consensusState {
            blockHeight
            epoch
            slot
          }
        }
      }
    }
  `
);

graphql(
  `
    query GetRecentZkAppCommands($maxLength: Int!) {
      bestChain(maxLength: $maxLength) {
        transactions {
          zkappCommands {
            hash
            id
            zkappCommand {
              memo
              accountUpdates {
                body {
                  actions
                  authorizationKind {
                    isProved
                    isSigned
                    verificationKeyHash
                  }
                  balanceChange {
                    magnitude
                    sgn
                  }
                  callData
                  callDepth
                  events
                  implicitAccountCreationFee
                  incrementNonce
                  mayUseToken {
                    inheritFromParent
                    parentsOwnToken
                  }
                  publicKey
                  tokenId
                  useFullCommitment
                  preconditions {
                    account {
                      actionState
                      balance {
                        lower
                        upper
                      }
                      nonce {
                        lower
                        upper
                      }
                      isNew
                      delegate
                      provedState
                      state
                      receiptChainHash
                    }
                    network {
                      blockchainLength {
                        lower
                        upper
                      }
                      globalSlotSinceGenesis {
                        lower
                        upper
                      }
                      minWindowDensity {
                        lower
                        upper
                      }
                      nextEpochData {
                        epochLength {
                          lower
                          upper
                        }
                        ledger {
                          hash
                          totalCurrency {
                            lower
                            upper
                          }
                        }
                        lockCheckpoint
                        seed
                        startCheckpoint
                      }
                      snarkedLedgerHash
                      stakingEpochData {
                        epochLength {
                          lower
                          upper
                        }
                        lockCheckpoint
                        ledger {
                          hash
                          totalCurrency {
                            lower
                            upper
                          }
                        }
                        seed
                        startCheckpoint
                      }
                      totalCurrency {
                        lower
                        upper
                      }
                    }
                    validWhile {
                      upper
                      lower
                    }
                  }
                  update {
                    appState
                    delegate
                    permissions {
                      access
                      editActionState
                      editState
                      incrementNonce
                      receive
                      send
                      setDelegate
                      setPermissions
                      setTiming
                      setTokenSymbol
                      setVerificationKey {
                        auth
                        txnVersion
                      }
                      setVotingFor
                      setZkappUri
                    }
                    timing {
                      cliffAmount
                      cliffTime
                      initialMinimumBalance
                      vestingIncrement
                      vestingPeriod
                    }
                    zkappUri
                    votingFor
                    verificationKey {
                      data
                      hash
                    }
                    tokenSymbol
                  }
                }
              }
              feePayer {
                authorization
                body {
                  fee
                  validUntil
                  publicKey
                  nonce
                }
              }
            }
            failureReason {
              failures
              index
            }
          }
        }
        stateHash
        protocolState {
          consensusState {
            blockHeight
            epoch
            slot
          }
        }
      }
    }
  `
);
