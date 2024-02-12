import { graphql } from "../gql/gql.js";

graphql(
  `
    query GetBlockByHeight($height: Int!) {
      block(height: $height) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        snarkJobs {
          fee
          prover
          workIds
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetUserCommandsByHeight($height: Int!) {
      block(height: $height) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetZkAppCommandsByHeight($height: Int!) {
      block(height: $height) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetSnarkJobsByHeight($height: Int!) {
      block(height: $height) {
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
        }
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        snarkJobs {
          fee
          prover
          workIds
        }
      }
    }
  `
);

graphql(
  `
    query GetBlockByHash($stateHash: String!) {
      block(stateHash: $stateHash) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        snarkJobs {
          fee
          prover
          workIds
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetUserCommandsByBlockHash($stateHash: String!) {
      block(stateHash: $stateHash) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetZkAppCommandsByBlockHash($stateHash: String!) {
      block(stateHash: $stateHash) {
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
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
      }
    }
  `
);

graphql(
  `
    query GetSnarkJobsByBlockHash($stateHash: String!) {
      block(stateHash: $stateHash) {
        transactions {
          feeTransfer {
            fee
            recipient
            type
          }
        }
        creatorAccount {
          publicKey
        }
        protocolState {
          blockchainState {
            bodyReference
            utcDate
            snarkedLedgerHash
            stagedLedgerHash
          }
          consensusState {
            blockCreator
            blockHeight
            blockStakeWinner
            coinbaseReceiever
            epoch
            epochCount
            slot
          }
          previousStateHash
        }
        snarkJobs {
          fee
          prover
          workIds
        }
      }
    }
  `
);

graphql(`
  query GetGenesisBlock {
    genesisBlock {
      creatorAccount {
        publicKey
      }
      protocolState {
        blockchainState {
          bodyReference
          utcDate
          snarkedLedgerHash
          stagedLedgerHash
        }
        consensusState {
          blockCreator
          blockHeight
          blockStakeWinner
          coinbaseReceiever
          epoch
          epochCount
          slot
        }
        previousStateHash
      }
      snarkJobs {
        fee
        prover
        workIds
      }
      transactions {
        feeTransfer {
          fee
          recipient
          type
        }
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
    }
  }
`);
