/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** account nonce */
  AccountNonce: { input: any; output: any; }
  /** action */
  Action: { input: any; output: any; }
  /** amount */
  Amount: { input: any; output: any; }
  /** Kind of authorization required */
  AuthRequired: { input: any; output: any; }
  /** balance */
  Balance: { input: any; output: any; }
  BlockTime: { input: any; output: any; }
  /** A reference to how the block header refers to the body of the block as a hex-encoded string */
  BodyReference: { input: any; output: any; }
  /** Base58Check-encoded chain hash */
  ChainHash: { input: any; output: any; }
  CurrencyAmount: { input: any; output: any; }
  /** epoch */
  Epoch: { input: any; output: any; }
  /** Base58Check-encoded epoch seed */
  EpochSeed: { input: any; output: any; }
  /** Block encoded in extensional block format */
  ExtensionalBlock: { input: any; output: any; }
  /** fee */
  Fee: { input: any; output: any; }
  /** fee transfer type */
  FeeTransferType: { input: any; output: any; }
  /** String representing an Fp Field element */
  Field: { input: any; output: any; }
  /** field element */
  FieldElem: { input: any; output: any; }
  GlobalSlotSinceGenesis: { input: any; output: any; }
  /** global slot since hard fork */
  GlobalSlotSinceHardFork: { input: any; output: any; }
  /** global slot span */
  GlobalSlotSpan: { input: any; output: any; }
  /** global slot */
  Globalslot: { input: any; output: any; }
  /** ocaml integer as a string */
  Index: { input: any; output: any; }
  /** network address */
  InetAddr: { input: any; output: any; }
  /** Arbitrary JSON */
  JSON: { input: any; output: any; }
  /** Base58Check-encoded ledger hash */
  LedgerHash: { input: any; output: any; }
  /** length */
  Length: { input: any; output: any; }
  Memo: { input: any; output: any; }
  /** Base58Check-encoded hash of a pending coinbase auxiliary hash */
  PendingCoinbaseAuxHash: { input: any; output: any; }
  /** Base58Check-encoded hash of a pending coinbase hash */
  PendingCoinbaseHash: { input: any; output: any; }
  /** Block encoded in precomputed block format */
  PrecomputedBlock: { input: any; output: any; }
  /** Base-64 encoded proof */
  PrecomputedBlockProof: { input: any; output: any; }
  /** Base58Check-encoded private key */
  PrivateKey: { input: any; output: any; }
  /** Base58Check-encoded public key string */
  PublicKey: { input: any; output: any; }
  /** A transaction encoded in the Rosetta format */
  RosettaTransaction: { input: any; output: any; }
  /** zkApp command for a test zkApp */
  SendTestZkappInput: { input: any; output: any; }
  Sign: { input: any; output: any; }
  Signature: { input: any; output: any; }
  /** slot */
  Slot: { input: any; output: any; }
  /** span */
  Span: { input: any; output: any; }
  /** Base58Check-encoded hash of the staged ledger hash's aux_hash */
  StagedLedgerAuxHash: { input: any; output: any; }
  /** Base58Check-encoded state hash */
  StateHash: { input: any; output: any; }
  /** Experimental: Bigint field-element representation of stateHash */
  StateHashAsDecimal: { input: any; output: any; }
  Time: { input: any; output: any; }
  /** String representation of a token's UInt64 identifier */
  TokenId: { input: any; output: any; }
  /** Base58Check-encoded transaction hash */
  TransactionHash: { input: any; output: any; }
  /** Base64-encoded transaction */
  TransactionId: { input: any; output: any; }
  /** transaction status failure */
  TransactionStatusFailure: { input: any; output: any; }
  /** String representing a uint32 number in base 10 */
  UInt32: { input: any; output: any; }
  /** String or Integer representation of a uint64 number. If the input is a string, it must represent the number in base 10 */
  UInt64: { input: any; output: any; }
  /** The kind of user command */
  UserCommandKind: { input: any; output: any; }
  /** verification key in Base64 format */
  VerificationKey: { input: any; output: any; }
  /** Hash of verification key */
  VerificationKeyHash: { input: any; output: any; }
  /** truncated vrf output */
  VrfOutputTruncated: { input: any; output: any; }
  /** consensus vrf scalar */
  VrfScalar: { input: any; output: any; }
  ZkappProof: { input: any; output: any; }
};

/** An account record according to the daemon */
export type Account = {
  /** Action state associated with this account */
  actionState?: Maybe<Array<Scalars['Action']['output']>>;
  /** The amount of MINA owned by the account */
  balance: AnnotatedBalance;
  /**
   * The public key to which you are delegating - if you are not delegating to anybody, this would return your public key
   * @deprecated use delegateAccount instead
   */
  delegate?: Maybe<Scalars['PublicKey']['output']>;
  /** The account to which you are delegating - if you are not delegating to anybody, this would return your public key */
  delegateAccount?: Maybe<Account>;
  /** The list of accounts which are delegating to you (note that the info is recorded in the last epoch so it might not be up to date with the current account status) */
  delegators?: Maybe<Array<Account>>;
  /** The account that you delegated on the staking ledger of the current block's epoch */
  epochDelegateAccount?: Maybe<Account>;
  /** The index of this account in the ledger, or null if this account does not yet have a known position in the best tip ledger */
  index?: Maybe<Scalars['Int']['output']>;
  /** Like the `nonce` field, except it includes the scheduled transactions (transactions not yet included in a block) (stringified uint32) */
  inferredNonce?: Maybe<Scalars['AccountNonce']['output']>;
  /** The list of accounts which are delegating to you in the last epoch (note that the info is recorded in the one before last epoch so it might not be up to date with the current account status) */
  lastEpochDelegators?: Maybe<Array<Account>>;
  /** The base58Check-encoded hash of this account to bootstrap the merklePath */
  leafHash?: Maybe<Scalars['FieldElem']['output']>;
  /** True if locked, false if unlocked, null if the account isn't tracked by the queried daemon */
  locked?: Maybe<Scalars['Boolean']['output']>;
  /** Merkle path is a list of path elements that are either the left or right hashes up to the root */
  merklePath?: Maybe<Array<MerklePathElement>>;
  /** A natural number that increases with each transaction (stringified uint32) */
  nonce?: Maybe<Scalars['AccountNonce']['output']>;
  /** Permissions for updating certain fields of this account */
  permissions?: Maybe<AccountPermissions>;
  /** Path of the private key file for this account */
  privateKeyPath: Scalars['String']['output'];
  /** Boolean indicating whether all 8 fields on zkAppState were last set by a proof-authorized account update */
  provedState?: Maybe<Scalars['Boolean']['output']>;
  /** The public identity of the account */
  publicKey: Scalars['PublicKey']['output'];
  /** Top hash of the receipt chain Merkle-list */
  receiptChainHash?: Maybe<Scalars['ChainHash']['output']>;
  /** True if you are actively staking with this account on the current daemon - this may not yet have been updated if the staking key was changed recently */
  stakingActive: Scalars['Boolean']['output'];
  /** The timing associated with this account */
  timing: AccountTiming;
  /**
   * The token associated with this account
   * @deprecated Use tokenId
   */
  token: Scalars['TokenId']['output'];
  /** The token associated with this account */
  tokenId: Scalars['TokenId']['output'];
  /** The symbol for the token owned by this account, if there is one */
  tokenSymbol?: Maybe<Scalars['String']['output']>;
  /** Verification key associated with this account */
  verificationKey?: Maybe<AccountVerificationKeyWithHash>;
  /** The previous epoch lock hash of the chain which you are voting for */
  votingFor?: Maybe<Scalars['ChainHash']['output']>;
  /** The 8 field elements comprising the zkApp state associated with this account encoded as bignum strings */
  zkappState?: Maybe<Array<Scalars['FieldElem']['output']>>;
  /** The URI associated with this account, usually pointing to the zkApp source code */
  zkappUri?: Maybe<Scalars['String']['output']>;
};

/** Kind of authorization required */
export enum AccountAuthRequired {
  Either = 'Either',
  Impossible = 'Impossible',
  None = 'None',
  Proof = 'Proof',
  Signature = 'Signature'
}

export type AccountPermissions = {
  /** Authorization required to access the account */
  access: AccountAuthRequired;
  /** Authorization required to edit the action state */
  editActionState: AccountAuthRequired;
  /** Authorization required to edit zkApp state */
  editState: AccountAuthRequired;
  /** Authorization required to increment the nonce */
  incrementNonce: AccountAuthRequired;
  /** Authorization required to receive tokens */
  receive: AccountAuthRequired;
  /** Authorization required to send tokens */
  send: AccountAuthRequired;
  /** Authorization required to set the delegate */
  setDelegate: AccountAuthRequired;
  /** Authorization required to change permissions */
  setPermissions: AccountAuthRequired;
  /** Authorization required to set the timing of the account */
  setTiming: AccountAuthRequired;
  /** Authorization required to set the token symbol */
  setTokenSymbol: AccountAuthRequired;
  /** Authorization required to set the verification key of the zkApp associated with the account */
  setVerificationKey: VerificationKeyPermission;
  /** Authorization required to set the state hash the account is voting for */
  setVotingFor: AccountAuthRequired;
  /** Authorization required to change the URI of the zkApp associated with the account  */
  setZkappUri: AccountAuthRequired;
};

export type AccountPrecondition = {
  actionState?: Maybe<Scalars['Field']['output']>;
  balance?: Maybe<BalanceInterval>;
  delegate?: Maybe<Scalars['PublicKey']['output']>;
  isNew?: Maybe<Scalars['Boolean']['output']>;
  nonce?: Maybe<NonceInterval>;
  provedState?: Maybe<Scalars['Boolean']['output']>;
  receiptChainHash?: Maybe<Scalars['Field']['output']>;
  state: Array<Maybe<Scalars['Field']['output']>>;
};

export type AccountPreconditionInput = {
  actionState?: InputMaybe<Scalars['Field']['input']>;
  balance?: InputMaybe<BalanceIntervalInput>;
  delegate?: InputMaybe<Scalars['PublicKey']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  nonce?: InputMaybe<NonceIntervalInput>;
  provedState?: InputMaybe<Scalars['Boolean']['input']>;
  receiptChainHash?: InputMaybe<Scalars['Field']['input']>;
  state: Array<InputMaybe<Scalars['Field']['input']>>;
};

export type AccountTiming = {
  /** The cliff amount for a time-locked account */
  cliffAmount?: Maybe<Scalars['Amount']['output']>;
  /** The cliff time for a time-locked account */
  cliffTime?: Maybe<Scalars['Globalslot']['output']>;
  /** The initial minimum balance for a time-locked account */
  initialMinimumBalance?: Maybe<Scalars['Balance']['output']>;
  /** The vesting increment for a time-locked account */
  vestingIncrement?: Maybe<Scalars['Amount']['output']>;
  /** The vesting period for a time-locked account */
  vestingPeriod?: Maybe<Scalars['GlobalSlotSpan']['output']>;
};

export type AccountUpdateBody = {
  actions: Array<Array<Scalars['Field']['output']>>;
  authorizationKind: AuthorizationKindStructured;
  balanceChange: BalanceChange;
  callData: Scalars['Field']['output'];
  callDepth: Scalars['Int']['output'];
  events: Array<Array<Scalars['Field']['output']>>;
  implicitAccountCreationFee: Scalars['Boolean']['output'];
  incrementNonce: Scalars['Boolean']['output'];
  mayUseToken: MayUseToken;
  preconditions: Preconditions;
  publicKey: Scalars['PublicKey']['output'];
  tokenId: Scalars['TokenId']['output'];
  update: AccountUpdateModification;
  useFullCommitment: Scalars['Boolean']['output'];
};

export type AccountUpdateBodyInput = {
  actions: Array<Array<Scalars['Field']['input']>>;
  authorizationKind: AuthorizationKindStructuredInput;
  balanceChange: BalanceChangeInput;
  callData: Scalars['Field']['input'];
  callDepth: Scalars['Int']['input'];
  events: Array<Array<Scalars['Field']['input']>>;
  implicitAccountCreationFee: Scalars['Boolean']['input'];
  incrementNonce: Scalars['Boolean']['input'];
  mayUseToken: MayUseTokenInput;
  preconditions: PreconditionsInput;
  publicKey: Scalars['PublicKey']['input'];
  tokenId: Scalars['TokenId']['input'];
  update: AccountUpdateModificationInput;
  useFullCommitment: Scalars['Boolean']['input'];
};

export type AccountUpdateModification = {
  appState: Array<Maybe<Scalars['Field']['output']>>;
  delegate?: Maybe<Scalars['PublicKey']['output']>;
  permissions?: Maybe<Permissions>;
  timing?: Maybe<Timing>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
  verificationKey?: Maybe<VerificationKeyWithHash>;
  votingFor?: Maybe<Scalars['StateHash']['output']>;
  zkappUri?: Maybe<Scalars['String']['output']>;
};

export type AccountUpdateModificationInput = {
  appState: Array<InputMaybe<Scalars['Field']['input']>>;
  delegate?: InputMaybe<Scalars['PublicKey']['input']>;
  permissions?: InputMaybe<PermissionsInput>;
  timing?: InputMaybe<TimingInput>;
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  verificationKey?: InputMaybe<VerificationKeyWithHashInput>;
  votingFor?: InputMaybe<Scalars['StateHash']['input']>;
  zkappUri?: InputMaybe<Scalars['String']['input']>;
};

/** Verification key with hash */
export type AccountVerificationKeyWithHash = {
  /** Hash of verification key */
  hash: Scalars['VerificationKeyHash']['output'];
  /** verification key in Base64 format */
  verificationKey: Scalars['VerificationKey']['output'];
};

export type AddAccountInput = {
  /** Password used to encrypt the new account */
  password: Scalars['String']['input'];
};

export type AddAccountPayload = {
  /** Details of created account */
  account: Account;
  /**
   * Public key of the created account
   * @deprecated use account field instead
   */
  publicKey: Scalars['PublicKey']['output'];
};

export type AddrsAndPorts = {
  bindIp: Scalars['String']['output'];
  clientPort: Scalars['Int']['output'];
  externalIp: Scalars['String']['output'];
  libp2pPort: Scalars['Int']['output'];
  peer?: Maybe<Peer>;
};

/** A total balance annotated with the amount that is currently unknown with the invariant unknown <= total, as well as the currently liquid and locked balances. */
export type AnnotatedBalance = {
  /** Block height at which balance was measured */
  blockHeight: Scalars['Length']['output'];
  /** The amount of MINA owned by the account which is currently available. Can be null if bootstrapping. */
  liquid?: Maybe<Scalars['Balance']['output']>;
  /** The amount of MINA owned by the account which is currently locked. Can be null if bootstrapping. */
  locked?: Maybe<Scalars['Balance']['output']>;
  /** Hash of block at which balance was measured. Can be null if bootstrapping. Guaranteed to be non-null for direct account lookup queries when not bootstrapping. Can also be null when accessed as nested properties (eg. via delegators).  */
  stateHash?: Maybe<Scalars['StateHash']['output']>;
  /** The amount of MINA owned by the account */
  total: Scalars['Balance']['output'];
  /** The amount of MINA owned by the account whose origin is currently unknown */
  unknown: Scalars['Balance']['output'];
};

export type Applied = {
  applied: Scalars['Boolean']['output'];
};

export type AuthorizationKindStructured = {
  isProved: Scalars['Boolean']['output'];
  isSigned: Scalars['Boolean']['output'];
  verificationKeyHash: Scalars['Field']['output'];
};

export type AuthorizationKindStructuredInput = {
  isProved: Scalars['Boolean']['input'];
  isSigned: Scalars['Boolean']['input'];
  verificationKeyHash: Scalars['Field']['input'];
};

export type BalanceChange = {
  magnitude: Scalars['CurrencyAmount']['output'];
  sgn: Scalars['Sign']['output'];
};

export type BalanceChangeInput = {
  magnitude: Scalars['CurrencyAmount']['input'];
  sgn: Scalars['Sign']['input'];
};

export type BalanceInterval = {
  lower: Scalars['Balance']['output'];
  upper: Scalars['Balance']['output'];
};

export type BalanceIntervalInput = {
  lower: Scalars['Balance']['input'];
  upper: Scalars['Balance']['input'];
};

export type Block = {
  /** Count of user command transactions in the block */
  commandTransactionCount: Scalars['Int']['output'];
  /**
   * Public key of account that produced this block
   * @deprecated use creatorAccount field instead
   */
  creator: Scalars['PublicKey']['output'];
  /** Account that produced this block */
  creatorAccount: Account;
  protocolState: ProtocolState;
  /** Snark proof of blockchain state */
  protocolStateProof: ProtocolStateProof;
  snarkJobs: Array<CompletedWork>;
  /** Base58Check-encoded hash of the state after this block */
  stateHash: Scalars['StateHash']['output'];
  /** Experimental: Bigint field-element representation of stateHash */
  stateHashField: Scalars['StateHashAsDecimal']['output'];
  transactions: Transactions;
  /** Account that won the slot (Delegator/Staker) */
  winnerAccount: Account;
};

export type BlockProducerTimings = {
  /** Consensus time of the block that was used to determine the next block production time */
  generatedFromConsensusAt: ConsensusTimeGlobalSlot;
  /** Next block production global-slot-since-genesis  */
  globalSlotSinceGenesis: Array<Scalars['Globalslot']['output']>;
  /** Next block production time */
  times: Array<ConsensusTime>;
};

export type BlockchainState = {
  /** A reference to how the block header refers to the body of the block as a hex-encoded string */
  bodyReference: Scalars['BodyReference']['output'];
  /** date (stringified Unix time - number of milliseconds since January 1, 1970) */
  date: Scalars['BlockTime']['output'];
  ledgerProofStatement: SnarkedLedgerState;
  /** Base58Check-encoded hash of the snarked ledger */
  snarkedLedgerHash: Scalars['LedgerHash']['output'];
  /** Base58Check-encoded hash of the staged ledger hash's aux_hash */
  stagedLedgerAuxHash: Scalars['StagedLedgerAuxHash']['output'];
  /** Base58Check-encoded hash of the staged ledger hash's main ledger hash */
  stagedLedgerHash: Scalars['LedgerHash']['output'];
  /** Base58Check-encoded staged ledger hash's pending_coinbase_aux */
  stagedLedgerPendingCoinbaseAux: Scalars['PendingCoinbaseAuxHash']['output'];
  /** Base58Check-encoded hash of the staged ledger hash's pending_coinbase_hash */
  stagedLedgerPendingCoinbaseHash: Scalars['PendingCoinbaseHash']['output'];
  /** Block finished a staged ledger, and a proof was emitted from it and included into this block's proof. If there is no transition frontier available or no block found, this will return null. */
  stagedLedgerProofEmitted?: Maybe<Scalars['Boolean']['output']>;
  /** utcDate (stringified Unix time - number of milliseconds since January 1, 1970). Time offsets are adjusted to reflect true wall-clock time instead of genesis time. */
  utcDate: Scalars['BlockTime']['output'];
};

/** Status for whenever the blockchain is reorganized */
export enum ChainReorganizationStatus {
  Changed = 'CHANGED'
}

/** Completed snark works */
export type CompletedWork = {
  /** Amount the prover is paid for the snark work */
  fee: Scalars['Fee']['output'];
  /** Public key of the prover */
  prover: Scalars['PublicKey']['output'];
  /** Unique identifier for the snark work purchased */
  workIds: Array<Scalars['Int']['output']>;
};

export type ConsensusConfiguration = {
  acceptableNetworkDelay: Scalars['Int']['output'];
  delta: Scalars['Int']['output'];
  epochDuration: Scalars['Int']['output'];
  genesisStateTimestamp: Scalars['Time']['output'];
  k: Scalars['Int']['output'];
  slotDuration: Scalars['Int']['output'];
  slotsPerEpoch: Scalars['Int']['output'];
};

export type ConsensusState = {
  /** The block producer public key that created this block */
  blockCreator: Scalars['PublicKey']['output'];
  /** Height of the blockchain at this block */
  blockHeight: Scalars['Length']['output'];
  /** The public key that is responsible for winning this block (including delegations) */
  blockStakeWinner: Scalars['PublicKey']['output'];
  /**
   * Length of the blockchain at this block
   * @deprecated use blockHeight instead
   */
  blockchainLength: Scalars['Length']['output'];
  coinbaseReceiever: Scalars['PublicKey']['output'];
  /** Epoch in which this block was created */
  epoch: Scalars['Epoch']['output'];
  epochCount: Scalars['Length']['output'];
  hasAncestorInSameCheckpointWindow: Scalars['Boolean']['output'];
  lastVrfOutput: Scalars['String']['output'];
  minWindowDensity: Scalars['Length']['output'];
  nextEpochData: NextEpochData;
  /** Slot in which this block was created */
  slot: Scalars['Slot']['output'];
  /** Slot since genesis (across all hard-forks) */
  slotSinceGenesis: Scalars['Globalslot']['output'];
  stakingEpochData: StakingEpochData;
  /** Whether or not this coinbase was "supercharged", ie. created by an account that has no locked tokens */
  superchargedCoinbase: Scalars['Boolean']['output'];
  /** Total currency in circulation at this block */
  totalCurrency: Scalars['Amount']['output'];
};

export type ConsensusTime = {
  endTime: Scalars['BlockTime']['output'];
  epoch: Scalars['UInt32']['output'];
  globalSlot: Scalars['GlobalSlotSinceHardFork']['output'];
  slot: Scalars['UInt32']['output'];
  startTime: Scalars['BlockTime']['output'];
};

/** Consensus time and the corresponding global slot since genesis */
export type ConsensusTimeGlobalSlot = {
  /** Time in terms of slot number in an epoch, start and end time of the slot since UTC epoch */
  consensusTime: ConsensusTime;
  globalSlotSinceGenesis: Scalars['Globalslot']['output'];
};

export type Control = {
  proof?: Maybe<Scalars['ZkappProof']['output']>;
  signature?: Maybe<Scalars['Signature']['output']>;
};

export type ControlInput = {
  proof?: InputMaybe<Scalars['ZkappProof']['input']>;
  signature?: InputMaybe<Scalars['Signature']['input']>;
};

export type CreateHdAccountInput = {
  /** Index of the account in hardware wallet */
  index: Scalars['UInt32']['input'];
};

export type CurrencyAmountInterval = {
  lower: Scalars['CurrencyAmount']['output'];
  upper: Scalars['CurrencyAmount']['output'];
};

export type CurrencyAmountIntervalInput = {
  lower: Scalars['CurrencyAmount']['input'];
  upper: Scalars['CurrencyAmount']['input'];
};

export type DaemonStatus = {
  addrsAndPorts: AddrsAndPorts;
  blockProductionKeys: Array<Scalars['String']['output']>;
  blockchainLength?: Maybe<Scalars['Int']['output']>;
  catchupStatus?: Maybe<Array<Scalars['String']['output']>>;
  chainId: Scalars['String']['output'];
  coinbaseReceiver?: Maybe<Scalars['String']['output']>;
  commitId: Scalars['String']['output'];
  confDir: Scalars['String']['output'];
  consensusConfiguration: ConsensusConfiguration;
  consensusMechanism: Scalars['String']['output'];
  consensusTimeBestTip?: Maybe<ConsensusTime>;
  consensusTimeNow: ConsensusTime;
  globalSlotSinceGenesisBestTip?: Maybe<Scalars['Int']['output']>;
  highestBlockLengthReceived: Scalars['Int']['output'];
  highestUnvalidatedBlockLengthReceived: Scalars['Int']['output'];
  histograms?: Maybe<Histograms>;
  ledgerMerkleRoot?: Maybe<Scalars['String']['output']>;
  metrics: Metrics;
  nextBlockProduction?: Maybe<BlockProducerTimings>;
  numAccounts?: Maybe<Scalars['Int']['output']>;
  peers: Array<Peer>;
  snarkWorkFee: Scalars['Int']['output'];
  snarkWorker?: Maybe<Scalars['String']['output']>;
  stateHash?: Maybe<Scalars['String']['output']>;
  syncStatus: SyncStatus;
  uptimeSecs: Scalars['Int']['output'];
  userCommandsSent: Scalars['Int']['output'];
};

export type DeleteAccountInput = {
  /** Public key of account to be deleted */
  publicKey: Scalars['PublicKey']['input'];
};

export type DeleteAccountPayload = {
  /** Public key of the deleted account */
  publicKey: Scalars['PublicKey']['output'];
};

export type EpochDataPrecondition = {
  epochLength?: Maybe<LengthInterval>;
  ledger: EpochLedgerPrecondition;
  lockCheckpoint?: Maybe<Scalars['Field']['output']>;
  seed?: Maybe<Scalars['Field']['output']>;
  startCheckpoint?: Maybe<Scalars['Field']['output']>;
};

export type EpochDataPreconditionInput = {
  epochLength?: InputMaybe<LengthIntervalInput>;
  ledger: EpochLedgerPreconditionInput;
  lockCheckpoint?: InputMaybe<Scalars['Field']['input']>;
  seed?: InputMaybe<Scalars['Field']['input']>;
  startCheckpoint?: InputMaybe<Scalars['Field']['input']>;
};

export type EpochLedgerPrecondition = {
  hash?: Maybe<Scalars['Field']['output']>;
  totalCurrency?: Maybe<CurrencyAmountInterval>;
};

export type EpochLedgerPreconditionInput = {
  hash?: InputMaybe<Scalars['Field']['input']>;
  totalCurrency?: InputMaybe<CurrencyAmountIntervalInput>;
};

export type ExportLogsPayload = {
  /** Tar archive containing logs */
  exportLogs: TarFile;
};

/** Fee excess divided into left, right components */
export type FeeExcess = {
  /** Fee for left component of fee excess */
  feeExcessLeft: SignedFee;
  /** Fee for right component of fee excess */
  feeExcessRight: SignedFee;
  /** Token id for left component of fee excess */
  feeTokenLeft: Scalars['TokenId']['output'];
  /** Token id for right component of fee excess */
  feeTokenRight: Scalars['TokenId']['output'];
};

export type FeePayerBody = {
  fee: Scalars['Fee']['output'];
  nonce: Scalars['UInt32']['output'];
  publicKey: Scalars['PublicKey']['output'];
  validUntil?: Maybe<Scalars['GlobalSlotSinceGenesis']['output']>;
};

export type FeePayerBodyInput = {
  fee: Scalars['Fee']['input'];
  nonce: Scalars['UInt32']['input'];
  publicKey: Scalars['PublicKey']['input'];
  validUntil?: InputMaybe<Scalars['GlobalSlotSinceGenesis']['input']>;
};

export type FeeTransfer = {
  /** Amount that the recipient is paid in this fee transfer */
  fee: Scalars['Fee']['output'];
  /** Public key of fee transfer recipient */
  recipient: Scalars['PublicKey']['output'];
  /** Fee_transfer|Fee_transfer_via_coinbase Snark worker fees deducted from the coinbase amount are of type 'Fee_transfer_via_coinbase', rest are deducted from transaction fees */
  type: Scalars['FeeTransferType']['output'];
};

export type GenesisConstants = {
  /** The fee charged to create a new account */
  accountCreationFee: Scalars['Fee']['output'];
  /** The amount received as a coinbase reward for producing a block */
  coinbase: Scalars['Amount']['output'];
  /** The genesis timestamp in ISO 8601 format */
  genesisTimestamp: Scalars['String']['output'];
};

export type GetFilteredLogEntries = {
  /** Whether we are capturing structured log messages */
  isCapturing: Scalars['Boolean']['output'];
  /** Structured log messages since the given offset */
  logMessages: Array<Scalars['String']['output']>;
};

export type GlobalSlotSinceGenesisInterval = {
  lower: Scalars['GlobalSlotSinceGenesis']['output'];
  upper: Scalars['GlobalSlotSinceGenesis']['output'];
};

export type GlobalSlotSinceGenesisIntervalInput = {
  lower: Scalars['GlobalSlotSinceGenesis']['input'];
  upper: Scalars['GlobalSlotSinceGenesis']['input'];
};

export type Histogram = {
  intervals: Array<Interval>;
  overflow: Scalars['Int']['output'];
  underflow: Scalars['Int']['output'];
  values: Array<Scalars['Int']['output']>;
};

export type Histograms = {
  acceptedTransitionLocalLatency?: Maybe<Histogram>;
  acceptedTransitionRemoteLatency?: Maybe<Histogram>;
  externalTransitionLatency?: Maybe<Histogram>;
  rpcTimings: RpcTimings;
  snarkWorkerMergeTime?: Maybe<Histogram>;
  snarkWorkerTransitionTime?: Maybe<Histogram>;
};

export type ImportAccountPayload = {
  /** True if the account had already been imported */
  alreadyImported: Scalars['Boolean']['output'];
  /** The public key of the imported account */
  publicKey: Scalars['PublicKey']['output'];
  success: Scalars['Boolean']['output'];
};

export type Interval = {
  start: Scalars['Span']['output'];
  stop: Scalars['Span']['output'];
};

export type LengthInterval = {
  lower: Scalars['UInt32']['output'];
  upper: Scalars['UInt32']['output'];
};

export type LengthIntervalInput = {
  lower: Scalars['UInt32']['input'];
  upper: Scalars['UInt32']['input'];
};

export type LocalState = {
  /** Account update index component of local state */
  accountUpdateIndex: Scalars['UInt32']['output'];
  /** Call stack component of local state */
  callStack: Scalars['FieldElem']['output'];
  /** Excess component of local state */
  excess: SignedAmount;
  /** Failure status table component of local state */
  failureStatusTable: Array<Array<Scalars['String']['output']>>;
  /** Full transaction commitment component of local state */
  fullTransactionCommitment: Scalars['FieldElem']['output'];
  /** Ledger component of local state */
  ledger: Scalars['LedgerHash']['output'];
  /** Stack frame component of local state */
  stackFrame: Scalars['FieldElem']['output'];
  /** Success component of local state */
  success: Scalars['Boolean']['output'];
  /** Supply increase component of local state */
  supplyIncrease: SignedAmount;
  /** Transaction commitment component of local state */
  transactionCommitment: Scalars['FieldElem']['output'];
  /** Will-succeed component of local state */
  willSucceed: Scalars['Boolean']['output'];
};

export type LockInput = {
  /** Public key specifying which account to lock */
  publicKey: Scalars['PublicKey']['input'];
};

export type LockPayload = {
  /** Details of locked account */
  account: Account;
  /** Public key of the locked account */
  publicKey: Scalars['PublicKey']['output'];
};

export type MayUseToken = {
  inheritFromParent: Scalars['Boolean']['output'];
  parentsOwnToken: Scalars['Boolean']['output'];
};

export type MayUseTokenInput = {
  inheritFromParent: Scalars['Boolean']['input'];
  parentsOwnToken: Scalars['Boolean']['input'];
};

export type MerklePathElement = {
  left?: Maybe<Scalars['FieldElem']['output']>;
  right?: Maybe<Scalars['FieldElem']['output']>;
};

export type Metrics = {
  blockProductionDelay: Array<Scalars['Int']['output']>;
  pendingSnarkWork: Scalars['Int']['output'];
  snarkPoolDiffBroadcasted: Scalars['Int']['output'];
  snarkPoolDiffReceived: Scalars['Int']['output'];
  snarkPoolSize: Scalars['Int']['output'];
  transactionPoolDiffBroadcasted: Scalars['Int']['output'];
  transactionPoolDiffReceived: Scalars['Int']['output'];
  transactionPoolSize: Scalars['Int']['output'];
  transactionsAddedToPool: Scalars['Int']['output'];
};

/** Network identifiers for another protocol participant */
export type NetworkPeer = {
  /** IP address of the remote host */
  host: Scalars['String']['input'];
  libp2pPort: Scalars['Int']['input'];
  /** base58-encoded peer ID */
  peerId: Scalars['String']['input'];
};

export type NetworkPeerPayload = {
  /** IP address of the remote host */
  host: Scalars['InetAddr']['output'];
  libp2pPort: Scalars['Int']['output'];
  /** base58-encoded peer ID */
  peerId: Scalars['String']['output'];
};

export type NetworkPrecondition = {
  blockchainLength?: Maybe<LengthInterval>;
  globalSlotSinceGenesis?: Maybe<GlobalSlotSinceGenesisInterval>;
  minWindowDensity?: Maybe<LengthInterval>;
  nextEpochData: EpochDataPrecondition;
  snarkedLedgerHash?: Maybe<Scalars['Field']['output']>;
  stakingEpochData: EpochDataPrecondition;
  totalCurrency?: Maybe<CurrencyAmountInterval>;
};

export type NetworkPreconditionInput = {
  blockchainLength?: InputMaybe<LengthIntervalInput>;
  globalSlotSinceGenesis?: InputMaybe<GlobalSlotSinceGenesisIntervalInput>;
  minWindowDensity?: InputMaybe<LengthIntervalInput>;
  nextEpochData: EpochDataPreconditionInput;
  snarkedLedgerHash?: InputMaybe<Scalars['Field']['input']>;
  stakingEpochData: EpochDataPreconditionInput;
  totalCurrency?: InputMaybe<CurrencyAmountIntervalInput>;
};

export type NextEpochData = {
  epochLength: Scalars['Length']['output'];
  ledger: EpochLedger;
  lockCheckpoint: Scalars['String']['output'];
  seed: Scalars['EpochSeed']['output'];
  startCheckpoint: Scalars['StateHash']['output'];
};

export type NonceInterval = {
  lower: Scalars['UInt32']['output'];
  upper: Scalars['UInt32']['output'];
};

export type NonceIntervalInput = {
  lower: Scalars['UInt32']['input'];
  upper: Scalars['UInt32']['input'];
};

export type Peer = {
  host: Scalars['String']['output'];
  libp2pPort: Scalars['Int']['output'];
  peerId: Scalars['String']['output'];
};

export type PendingCoinbaseStack = {
  /** Data component of pending coinbase stack */
  dataStack: Scalars['FieldElem']['output'];
  /** State component of pending coinbase stack */
  stateStack: StateStack;
};

/** Snark work bundles that are not available in the pool yet */
export type PendingSnarkWork = {
  /** Work bundle with one or two snark work */
  workBundle: Array<WorkDescription>;
};

export type Permissions = {
  access: Scalars['AuthRequired']['output'];
  editActionState: Scalars['AuthRequired']['output'];
  editState: Scalars['AuthRequired']['output'];
  incrementNonce: Scalars['AuthRequired']['output'];
  receive: Scalars['AuthRequired']['output'];
  send: Scalars['AuthRequired']['output'];
  setDelegate: Scalars['AuthRequired']['output'];
  setPermissions: Scalars['AuthRequired']['output'];
  setTiming: Scalars['AuthRequired']['output'];
  setTokenSymbol: Scalars['AuthRequired']['output'];
  setVerificationKey: VerificationKeyPermission;
  setVotingFor: Scalars['AuthRequired']['output'];
  setZkappUri: Scalars['AuthRequired']['output'];
};

export type PermissionsInput = {
  access: Scalars['AuthRequired']['input'];
  editActionState: Scalars['AuthRequired']['input'];
  editState: Scalars['AuthRequired']['input'];
  incrementNonce: Scalars['AuthRequired']['input'];
  receive: Scalars['AuthRequired']['input'];
  send: Scalars['AuthRequired']['input'];
  setDelegate: Scalars['AuthRequired']['input'];
  setPermissions: Scalars['AuthRequired']['input'];
  setTiming: Scalars['AuthRequired']['input'];
  setTokenSymbol: Scalars['AuthRequired']['input'];
  setVerificationKey: VerificationKeyPermissionInput;
  setVotingFor: Scalars['AuthRequired']['input'];
  setZkappUri: Scalars['AuthRequired']['input'];
};

export type Preconditions = {
  account: AccountPrecondition;
  network: NetworkPrecondition;
  validWhile?: Maybe<GlobalSlotSinceGenesisInterval>;
};

export type PreconditionsInput = {
  account: AccountPreconditionInput;
  network: NetworkPreconditionInput;
  validWhile?: InputMaybe<GlobalSlotSinceGenesisIntervalInput>;
};

export type ProtocolState = {
  /** State which is agnostic of a particular consensus algorithm */
  blockchainState: BlockchainState;
  /** State specific to the minaboros Proof of Stake consensus algorithm */
  consensusState: ConsensusState;
  /** Base58Check-encoded hash of the previous state */
  previousStateHash: Scalars['StateHash']['output'];
};

export type Registers = {
  /** First pass ledger hash */
  firstPassLedger: Scalars['LedgerHash']['output'];
  /** Local state */
  localState: LocalState;
  /** Pending coinbase stack */
  pendingCoinbaseStack: PendingCoinbaseStack;
  /** Second pass ledger hash */
  secondPassLedger: Scalars['LedgerHash']['output'];
};

export type ReloadAccountsPayload = {
  /** True when the reload was successful */
  success: Scalars['Boolean']['output'];
};

export type RpcPair = {
  dispatch?: Maybe<Histogram>;
  impl?: Maybe<Histogram>;
};

export type RpcTimings = {
  answerSyncLedgerQuery: RpcPair;
  getAncestry: RpcPair;
  getStagedLedgerAux: RpcPair;
  getTransitionChain: RpcPair;
  getTransitionChainProof: RpcPair;
};

export type SendDelegationInput = {
  /** Fee amount in order to send a stake delegation */
  fee: Scalars['UInt64']['input'];
  /** Public key of sender of a stake delegation */
  from: Scalars['PublicKey']['input'];
  /** Short arbitrary message provided by the sender */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** Should only be set when cancelling transactions, otherwise a nonce is determined automatically */
  nonce?: InputMaybe<Scalars['UInt32']['input']>;
  /** Public key of the account being delegated to */
  to: Scalars['PublicKey']['input'];
  /** The global slot since genesis after which this transaction cannot be applied */
  validUntil?: InputMaybe<Scalars['UInt32']['input']>;
};

export type SendDelegationPayload = {
  /** Delegation change that was sent */
  delegation: UserCommand;
};

export type SendPaymentInput = {
  /** Amount of MINA to send to receiver */
  amount: Scalars['UInt64']['input'];
  /** Fee amount in order to send payment */
  fee: Scalars['UInt64']['input'];
  /** Public key of sender of payment */
  from: Scalars['PublicKey']['input'];
  /** Short arbitrary message provided by the sender */
  memo?: InputMaybe<Scalars['String']['input']>;
  /** Should only be set when cancelling transactions, otherwise a nonce is determined automatically */
  nonce?: InputMaybe<Scalars['UInt32']['input']>;
  /** Public key of recipient of payment */
  to: Scalars['PublicKey']['input'];
  /** The global slot since genesis after which this transaction cannot be applied */
  validUntil?: InputMaybe<Scalars['UInt32']['input']>;
};

export type SendPaymentPayload = {
  /** Payment that was sent */
  payment: UserCommand;
};

export type SendRosettaTransactionPayload = {
  /** Command that was sent */
  userCommand: UserCommand;
};

export type SendZkappInput = {
  /** zkApp command structure representing the transaction */
  zkappCommand: ZkappCommandInput;
};

export type SendZkappPayload = {
  /** zkApp transaction that was sent */
  zkapp: ZkappCommandResult;
};

export type SetCoinbaseReceiverInput = {
  /** Public key of the account to receive coinbases. Block production keys will receive the coinbases if omitted. Warning: If the key is from a zkApp account, the account's receive permission must be None. */
  publicKey?: InputMaybe<Scalars['PublicKey']['input']>;
};

export type SetCoinbaseReceiverPayload = {
  /** Returns the public key that will receive coinbase, or none if it will be the block producer */
  currentCoinbaseReceiver?: Maybe<Scalars['PublicKey']['output']>;
  /** Returns the public key that was receiving coinbases previously, or none if it was the block producer */
  lastCoinbaseReceiver?: Maybe<Scalars['PublicKey']['output']>;
};

export type SetConnectionGatingConfigInput = {
  /** Peers we will never allow connections from (unless they are also trusted!) */
  bannedPeers: Array<NetworkPeer>;
  /** If true, resets added peers to an empty list (including seeds) */
  cleanAddedPeers?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, no connections will be allowed unless they are from a trusted peer */
  isolate: Scalars['Boolean']['input'];
  /** Peers we will always allow connections from */
  trustedPeers: Array<NetworkPeer>;
};

export type SetConnectionGatingConfigPayload = {
  /** Peers we will never allow connections from (unless they are also trusted!) */
  bannedPeers: Array<NetworkPeerPayload>;
  /** If true, no connections will be allowed unless they are from a trusted peer */
  isolate: Scalars['Boolean']['output'];
  /** Peers we will always allow connections from */
  trustedPeers: Array<NetworkPeerPayload>;
};

export type SetSnarkWorkFee = {
  /** Fee to get rewarded for producing snark work */
  fee: Scalars['UInt64']['input'];
};

export type SetSnarkWorkFeePayload = {
  /** Returns the last fee set to do snark work */
  lastFee: Scalars['Fee']['output'];
};

export type SetSnarkWorkerInput = {
  /** Public key you wish to start snark-working on; null to stop doing any snark work. Warning: If the key is from a zkApp account, the account's receive permission must be None. */
  publicKey?: InputMaybe<Scalars['PublicKey']['input']>;
};

export type SetSnarkWorkerPayload = {
  /** Returns the last public key that was designated for snark work */
  lastSnarkWorker?: Maybe<Scalars['PublicKey']['output']>;
};

/** A cryptographic signature -- you must provide either field+scalar or rawSignature */
export type SignatureInput = {
  /** Field component of signature */
  field?: InputMaybe<Scalars['String']['input']>;
  /** Raw encoded signature */
  rawSignature?: InputMaybe<Scalars['String']['input']>;
  /** Scalar component of signature */
  scalar?: InputMaybe<Scalars['String']['input']>;
};

/** Signed amount */
export type SignedAmount = {
  /** Amount */
  amountMagnitude: Scalars['Amount']['output'];
  /** +/- */
  sign: Sign;
};

/** Signed fee */
export type SignedFee = {
  /** Fee */
  feeMagnitude: Scalars['Fee']['output'];
  /** +/- */
  sign: Sign;
};

export type SnarkWorker = {
  /** Account of the current snark worker */
  account: Account;
  /** Fee that snark worker is charging to generate a snark proof */
  fee: Scalars['Fee']['output'];
  /**
   * Public key of current snark worker
   * @deprecated use account field instead
   */
  key: Scalars['PublicKey']['output'];
};

export type SnarkedLedgerState = {
  connectingLedgerLeft: Scalars['LedgerHash']['output'];
  connectingLedgerRight: Scalars['LedgerHash']['output'];
  feeExcess: FeeExcess;
  /** Placeholder for SOK digest */
  sokDigest?: Maybe<Scalars['String']['output']>;
  sourceRegisters: Registers;
  supplyIncrease: SignedAmount;
  targetRegisters: Registers;
};

export type StakingEpochData = {
  epochLength: Scalars['Length']['output'];
  ledger: EpochLedger;
  lockCheckpoint: Scalars['String']['output'];
  seed: Scalars['EpochSeed']['output'];
  startCheckpoint: Scalars['StateHash']['output'];
};

export type StateStack = {
  /** Current hash */
  current: Scalars['FieldElem']['output'];
  /** Initial hash */
  initial: Scalars['FieldElem']['output'];
};

/** Sync status of daemon */
export enum SyncStatus {
  Bootstrap = 'BOOTSTRAP',
  Catchup = 'CATCHUP',
  Connecting = 'CONNECTING',
  Listening = 'LISTENING',
  Offline = 'OFFLINE',
  Synced = 'SYNCED'
}

export type TarFile = {
  tarfile: Scalars['String']['output'];
};

export type Timing = {
  cliffAmount: Scalars['CurrencyAmount']['output'];
  cliffTime: Scalars['GlobalSlotSinceGenesis']['output'];
  initialMinimumBalance: Scalars['Balance']['output'];
  vestingIncrement: Scalars['CurrencyAmount']['output'];
  vestingPeriod: Scalars['GlobalSlotSpan']['output'];
};

export type TimingInput = {
  cliffAmount: Scalars['CurrencyAmount']['input'];
  cliffTime: Scalars['GlobalSlotSinceGenesis']['input'];
  initialMinimumBalance: Scalars['Balance']['input'];
  vestingIncrement: Scalars['CurrencyAmount']['input'];
  vestingPeriod: Scalars['GlobalSlotSpan']['input'];
};

/** Status of a transaction */
export enum TransactionStatus {
  /** A transaction that is on the longest chain */
  Included = 'INCLUDED',
  /** A transaction either in the transition frontier or in transaction pool but is not on the longest chain */
  Pending = 'PENDING',
  /** The transaction has either been snarked, reached finality through consensus or has been dropped */
  Unknown = 'UNKNOWN'
}

/** Different types of transactions in a block */
export type Transactions = {
  /** Amount of MINA granted to the producer of this block */
  coinbase: Scalars['Amount']['output'];
  /** Account to which the coinbase for this block was granted */
  coinbaseReceiverAccount?: Maybe<Account>;
  /** List of fee transfers included in this block */
  feeTransfer: Array<FeeTransfer>;
  /** List of user commands (payments and stake delegations) included in this block */
  userCommands: Array<UserCommand>;
  /** List of zkApp commands included in this block */
  zkappCommands: Array<ZkappCommandResult>;
};

export type TrustStatusPayload = {
  /** Banned status */
  bannedStatus?: Maybe<Scalars['Time']['output']>;
  /** IP address */
  ipAddr: Scalars['InetAddr']['output'];
  /** libp2p Peer ID */
  peerId: Scalars['String']['output'];
  /** Trust score */
  trust: Scalars['Float']['output'];
};

export type UnlockInput = {
  /** Password for the account to be unlocked */
  password: Scalars['String']['input'];
  /** Public key specifying which account to unlock */
  publicKey: Scalars['PublicKey']['input'];
};

export type UnlockPayload = {
  /** Details of unlocked account */
  account: Account;
  /**
   * Public key of the unlocked account
   * @deprecated use account field instead
   */
  publicKey: Scalars['PublicKey']['output'];
};

/** Common interface for user commands */
export type UserCommand = {
  /** Amount that the source is sending to receiver - 0 for commands that are not associated with an amount */
  amount: Scalars['Amount']['output'];
  /** null is no failure, reason for failure otherwise. */
  failureReason?: Maybe<Scalars['TransactionStatusFailure']['output']>;
  /** Fee that the fee-payer is willing to pay for making the transaction */
  fee: Scalars['Fee']['output'];
  /** Account that pays the fees for the command */
  feePayer: Account;
  /** Token used to pay the fee */
  feeToken: Scalars['TokenId']['output'];
  /**
   * Public key of the sender
   * @deprecated use feePayer field instead
   */
  from: Scalars['PublicKey']['output'];
  /**
   * Account of the sender
   * @deprecated use feePayer field instead
   */
  fromAccount: Account;
  hash: Scalars['TransactionHash']['output'];
  id: Scalars['TransactionId']['output'];
  /**
   * If true, this represents a delegation of stake, otherwise it is a payment
   * @deprecated use kind field instead
   */
  isDelegation: Scalars['Boolean']['output'];
  /** String describing the kind of user command */
  kind: Scalars['UserCommandKind']['output'];
  /** Short arbitrary message provided by the sender */
  memo: Scalars['String']['output'];
  /** Sequence number of command for the fee-payer's account */
  nonce: Scalars['Int']['output'];
  /** Account that the command applies to */
  receiver: Account;
  /** Account that the command is sent from */
  source: Account;
  /**
   * Public key of the receiver
   * @deprecated use receiver field instead
   */
  to: Scalars['PublicKey']['output'];
  /**
   * Account of the receiver
   * @deprecated use receiver field instead
   */
  toAccount: Account;
  /** Token used by the command */
  token: Scalars['TokenId']['output'];
  /** The global slot number after which this transaction cannot be applied */
  validUntil: Scalars['Globalslot']['output'];
};

export type UserCommandDelegation = UserCommand & {
  /** Amount that the source is sending to receiver; 0 for commands without an associated amount */
  amount: Scalars['Amount']['output'];
  delegatee: Account;
  delegator: Account;
  /** null is no failure or status unknown, reason for failure otherwise. */
  failureReason?: Maybe<Scalars['TransactionStatusFailure']['output']>;
  /** Fee that the fee-payer is willing to pay for making the transaction */
  fee: Scalars['Fee']['output'];
  /**
   * Account that pays the fees for the command
   * @deprecated use source field instead
   */
  feePayer: Account;
  /** Token used to pay the fee */
  feeToken: Scalars['TokenId']['output'];
  /**
   * Public key of the sender
   * @deprecated use feePayer field instead
   */
  from: Scalars['PublicKey']['output'];
  /**
   * Account of the sender
   * @deprecated use feePayer field instead
   */
  fromAccount: Account;
  hash: Scalars['TransactionHash']['output'];
  id: Scalars['TransactionId']['output'];
  /**
   * If true, this command represents a delegation of stake
   * @deprecated use kind field instead
   */
  isDelegation: Scalars['Boolean']['output'];
  /** String describing the kind of user command */
  kind: Scalars['UserCommandKind']['output'];
  /** A short message from the sender, encoded with Base58Check, version byte=0x14; byte 2 of the decoding is the message length */
  memo: Scalars['String']['output'];
  /** Sequence number of command for the fee-payer's account */
  nonce: Scalars['Int']['output'];
  /** Account that the command applies to */
  receiver: Account;
  /** Account that the command is sent from */
  source: Account;
  /**
   * Public key of the receiver
   * @deprecated use receiver field instead
   */
  to: Scalars['PublicKey']['output'];
  /**
   * Account of the receiver
   * @deprecated use receiver field instead
   */
  toAccount: Account;
  /** Token used for the transaction */
  token: Scalars['TokenId']['output'];
  /** The global slot number after which this transaction cannot be applied */
  validUntil: Scalars['Globalslot']['output'];
};

export type UserCommandPayment = UserCommand & {
  /** Amount that the source is sending to receiver; 0 for commands without an associated amount */
  amount: Scalars['Amount']['output'];
  /** null is no failure or status unknown, reason for failure otherwise. */
  failureReason?: Maybe<Scalars['TransactionStatusFailure']['output']>;
  /** Fee that the fee-payer is willing to pay for making the transaction */
  fee: Scalars['Fee']['output'];
  /**
   * Account that pays the fees for the command
   * @deprecated use source field instead
   */
  feePayer: Account;
  /** Token used to pay the fee */
  feeToken: Scalars['TokenId']['output'];
  /**
   * Public key of the sender
   * @deprecated use feePayer field instead
   */
  from: Scalars['PublicKey']['output'];
  /**
   * Account of the sender
   * @deprecated use feePayer field instead
   */
  fromAccount: Account;
  hash: Scalars['TransactionHash']['output'];
  id: Scalars['TransactionId']['output'];
  /**
   * If true, this command represents a delegation of stake
   * @deprecated use kind field instead
   */
  isDelegation: Scalars['Boolean']['output'];
  /** String describing the kind of user command */
  kind: Scalars['UserCommandKind']['output'];
  /** A short message from the sender, encoded with Base58Check, version byte=0x14; byte 2 of the decoding is the message length */
  memo: Scalars['String']['output'];
  /** Sequence number of command for the fee-payer's account */
  nonce: Scalars['Int']['output'];
  /** Account that the command applies to */
  receiver: Account;
  /** Account that the command is sent from */
  source: Account;
  /**
   * Public key of the receiver
   * @deprecated use receiver field instead
   */
  to: Scalars['PublicKey']['output'];
  /**
   * Account of the receiver
   * @deprecated use receiver field instead
   */
  toAccount: Account;
  /** Token used for the transaction */
  token: Scalars['TokenId']['output'];
  /** The global slot number after which this transaction cannot be applied */
  validUntil: Scalars['Globalslot']['output'];
};

export type VerificationKeyPermission = {
  /** Authorization required to set the verification key of the zkApp associated with the account */
  auth: AccountAuthRequired;
  txnVersion: Scalars['String']['output'];
};

export type VerificationKeyPermissionInput = {
  auth: Scalars['AuthRequired']['input'];
  txnVersion: Scalars['UInt32']['input'];
};

export type VerificationKeyWithHash = {
  data: Scalars['VerificationKey']['output'];
  hash: Scalars['Field']['output'];
};

export type VerificationKeyWithHashInput = {
  data: Scalars['VerificationKey']['input'];
  hash: Scalars['Field']['input'];
};

/** A witness to a vrf evaluation, which may be externally verified */
export type VrfEvaluation = {
  c: Scalars['VrfScalar']['output'];
  message: VrfMessage;
  publicKey: Scalars['PublicKey']['output'];
  s: Scalars['VrfScalar']['output'];
  /** A group element represented as 2 field elements */
  scaledMessageHash: Array<Scalars['String']['output']>;
  /** Whether the threshold to produce a block was met, if specified */
  thresholdMet?: Maybe<Scalars['Boolean']['output']>;
  /** The vrf output derived from the evaluation witness. If null, the vrf witness was invalid. */
  vrfOutput?: Maybe<Scalars['VrfOutputTruncated']['output']>;
  /** The vrf output derived from the evaluation witness, as a fraction. This represents a won slot if vrfOutputFractional <= (1 - (1 / 4)^(delegated_balance / total_stake)). If null, the vrf witness was invalid. */
  vrfOutputFractional?: Maybe<Scalars['Float']['output']>;
  vrfThreshold?: Maybe<VrfThreshold>;
};


/** A witness to a vrf evaluation, which may be externally verified */
export type VrfEvaluationThresholdMetArgs = {
  input?: InputMaybe<VrfThresholdInput>;
};

/** The witness to a vrf evaluation */
export type VrfEvaluationInput = {
  c: Scalars['String']['input'];
  message: VrfMessageInput;
  publicKey: Scalars['PublicKey']['input'];
  s: Scalars['String']['input'];
  scaledMessageHash: Array<Scalars['String']['input']>;
  vrfThreshold?: InputMaybe<VrfThresholdInput>;
};

/** The inputs to a vrf evaluation */
export type VrfMessage = {
  /** Position in the ledger of the delegator's account */
  delegatorIndex: Scalars['Int']['output'];
  epochSeed: Scalars['EpochSeed']['output'];
  globalSlot: Scalars['GlobalSlotSinceHardFork']['output'];
};

/** The inputs to a vrf evaluation */
export type VrfMessageInput = {
  /** Position in the ledger of the delegator's account */
  delegatorIndex: Scalars['Int']['input'];
  /** Formatted with base58check */
  epochSeed: Scalars['String']['input'];
  globalSlot: Scalars['UInt32']['input'];
};

/** The amount of stake delegated, used to determine the threshold for a vrf evaluation winning a slot */
export type VrfThreshold = {
  /** The amount of stake delegated to the vrf evaluator by the delegating account. This should match the amount in the epoch's staking ledger, which may be different to the amount in the current ledger. */
  delegatedStake: Scalars['Balance']['output'];
  /** The total amount of stake across all accounts in the epoch's staking ledger. */
  totalStake: Scalars['Amount']['output'];
};

/** The amount of stake delegated, used to determine the threshold for a vrf evaluation producing a block */
export type VrfThresholdInput = {
  /** The amount of stake delegated to the vrf evaluator by the delegating account. This should match the amount in the epoch's staking ledger, which may be different to the amount in the current ledger. */
  delegatedStake: Scalars['UInt64']['input'];
  /** The total amount of stake across all accounts in the epoch's staking ledger. */
  totalStake: Scalars['UInt64']['input'];
};

/** Transition from a source ledger to a target ledger with some fee excess and increase in supply  */
export type WorkDescription = {
  /** Total transaction fee that is not accounted for in the transition from source ledger to target ledger */
  feeExcess: FeeExcess;
  /** Base58Check-encoded hash of the source first-pass ledger */
  sourceFirstPassLedgerHash: Scalars['LedgerHash']['output'];
  /** Base58Check-encoded hash of the source second-pass ledger */
  sourceSecondPassLedgerHash: Scalars['LedgerHash']['output'];
  /** Increase/Decrease in total supply */
  supplyChange: SignedAmount;
  /**
   * Increase in total supply
   * @deprecated Use supplyChange
   */
  supplyIncrease: Scalars['Amount']['output'];
  /** Base58Check-encoded hash of the target first-pass ledger */
  targetFirstPassLedgerHash: Scalars['LedgerHash']['output'];
  /** Base58Check-encoded hash of the target second-pass ledger */
  targetSecondPassLedgerHash: Scalars['LedgerHash']['output'];
  /** Unique identifier for a snark work */
  workId: Scalars['Int']['output'];
};

/** An account update in a zkApp transaction */
export type ZkappAccountUpdate = {
  authorization: Control;
  body: AccountUpdateBody;
};

/** An account update in a zkApp transaction */
export type ZkappAccountUpdateInput = {
  authorization: ControlInput;
  body: AccountUpdateBodyInput;
};

export type ZkappCommand = {
  accountUpdates: Array<ZkappAccountUpdate>;
  feePayer: ZkappFeePayer;
  memo: Scalars['Memo']['output'];
};

export type ZkappCommandFailureReason = {
  /** Failure reason for the account update or any nested zkapp command */
  failures: Array<Scalars['TransactionStatusFailure']['output']>;
  /** List index of the account update that failed */
  index?: Maybe<Scalars['Index']['output']>;
};

export type ZkappCommandInput = {
  accountUpdates: Array<ZkappAccountUpdateInput>;
  feePayer: ZkappFeePayerInput;
  memo: Scalars['Memo']['input'];
};

export type ZkappCommandResult = {
  /** The reason for the zkApp transaction failure; null means success or the status is unknown */
  failureReason?: Maybe<Array<Maybe<ZkappCommandFailureReason>>>;
  /** A cryptographic hash of the zkApp command */
  hash: Scalars['TransactionHash']['output'];
  /** A Base64 string representing the zkApp command */
  id: Scalars['TransactionId']['output'];
  /** zkApp command representing the transaction */
  zkappCommand: ZkappCommand;
};

export type ZkappFeePayer = {
  authorization: Scalars['Signature']['output'];
  body: FeePayerBody;
};

export type ZkappFeePayerInput = {
  authorization: Scalars['Signature']['input'];
  body: FeePayerBodyInput;
};

export type EpochLedger = {
  hash: Scalars['LedgerHash']['output'];
  totalCurrency: Scalars['Amount']['output'];
};

export type Mutation = {
  /** Connect to the given peers */
  addPeers: Array<Peer>;
  /**
   * Add a wallet - this will create a new keypair and store it in the daemon
   * @deprecated use createAccount instead
   */
  addWallet: AddAccountPayload;
  archiveExtensionalBlock: Applied;
  archivePrecomputedBlock: Applied;
  /** Create a new account - this will create a new keypair and store it in the daemon */
  createAccount: AddAccountPayload;
  /** Create an account with hardware wallet - this will let the hardware wallet generate a keypair corresponds to the HD-index you give and store this HD-index and the generated public key in the daemon. Calling this command with the same HD-index and the same hardware wallet will always generate the same keypair. */
  createHDAccount: AddAccountPayload;
  /** Delete the private key for an account that you track */
  deleteAccount: DeleteAccountPayload;
  /**
   * Delete the private key for an account that you track
   * @deprecated use deleteAccount instead
   */
  deleteWallet: DeleteAccountPayload;
  /** Export daemon logs to tar archive */
  exportLogs: ExportLogsPayload;
  /** Reload tracked account information from disk */
  importAccount: ImportAccountPayload;
  /** Send zkApp transactions (for internal testing purposes) */
  internalSendZkapp: Array<SendZkappPayload>;
  /** Lock an unlocked account to prevent transaction being sent from it */
  lockAccount: LockPayload;
  /**
   * Lock an unlocked account to prevent transaction being sent from it
   * @deprecated use lockAccount instead
   */
  lockWallet: LockPayload;
  /** Mock a zkApp transaction, no effect on blockchain */
  mockZkapp: SendZkappPayload;
  /** Reload tracked account information from disk */
  reloadAccounts: ReloadAccountsPayload;
  /**
   * Reload tracked account information from disk
   * @deprecated use reloadAccounts instead
   */
  reloadWallets: ReloadAccountsPayload;
  /** Change your delegate by sending a transaction */
  sendDelegation: SendDelegationPayload;
  /** Send a payment */
  sendPayment: SendPaymentPayload;
  /** Send a transaction in Rosetta format */
  sendRosettaTransaction: SendRosettaTransactionPayload;
  /** Send a series of test payments */
  sendTestPayments: Scalars['Int']['output'];
  /** Send a zkApp transaction */
  sendZkapp: SendZkappPayload;
  /** Set the key to receive coinbases */
  setCoinbaseReceiver: SetCoinbaseReceiverPayload;
  /** Set the connection gating config, returning the current config after the application (which may have failed) */
  setConnectionGatingConfig: SetConnectionGatingConfigPayload;
  /** Set fee that you will like to receive for doing snark work */
  setSnarkWorkFee: SetSnarkWorkFeePayload;
  /** Set key you wish to snark work with or disable snark working */
  setSnarkWorker: SetSnarkWorkerPayload;
  /** TESTING ONLY: Start filtering and recording all structured events in memory */
  startFilteredLog: Scalars['Boolean']['output'];
  /** Allow transactions to be sent from the unlocked account */
  unlockAccount: UnlockPayload;
  /**
   * Allow transactions to be sent from the unlocked account
   * @deprecated use unlockAccount instead
   */
  unlockWallet: UnlockPayload;
};


export type MutationAddPeersArgs = {
  peers: Array<NetworkPeer>;
  seed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddWalletArgs = {
  input: AddAccountInput;
};


export type MutationArchiveExtensionalBlockArgs = {
  block: Scalars['ExtensionalBlock']['input'];
};


export type MutationArchivePrecomputedBlockArgs = {
  block: Scalars['PrecomputedBlock']['input'];
};


export type MutationCreateAccountArgs = {
  input: AddAccountInput;
};


export type MutationCreateHdAccountArgs = {
  input: CreateHdAccountInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteWalletArgs = {
  input: DeleteAccountInput;
};


export type MutationExportLogsArgs = {
  basename?: InputMaybe<Scalars['String']['input']>;
};


export type MutationImportAccountArgs = {
  password: Scalars['String']['input'];
  path: Scalars['String']['input'];
};


export type MutationInternalSendZkappArgs = {
  zkappCommands: Array<Scalars['SendTestZkappInput']['input']>;
};


export type MutationLockAccountArgs = {
  input: LockInput;
};


export type MutationLockWalletArgs = {
  input: LockInput;
};


export type MutationMockZkappArgs = {
  input: SendZkappInput;
};


export type MutationSendDelegationArgs = {
  input: SendDelegationInput;
  signature?: InputMaybe<SignatureInput>;
};


export type MutationSendPaymentArgs = {
  input: SendPaymentInput;
  signature?: InputMaybe<SignatureInput>;
};


export type MutationSendRosettaTransactionArgs = {
  input: Scalars['RosettaTransaction']['input'];
};


export type MutationSendTestPaymentsArgs = {
  amount: Scalars['UInt64']['input'];
  fee: Scalars['UInt64']['input'];
  receiver: Scalars['PublicKey']['input'];
  repeat_count: Scalars['UInt32']['input'];
  repeat_delay_ms: Scalars['UInt32']['input'];
  senders: Array<Scalars['PrivateKey']['input']>;
};


export type MutationSendZkappArgs = {
  input: SendZkappInput;
};


export type MutationSetCoinbaseReceiverArgs = {
  input: SetCoinbaseReceiverInput;
};


export type MutationSetConnectionGatingConfigArgs = {
  input: SetConnectionGatingConfigInput;
};


export type MutationSetSnarkWorkFeeArgs = {
  input: SetSnarkWorkFee;
};


export type MutationSetSnarkWorkerArgs = {
  input: SetSnarkWorkerInput;
};


export type MutationStartFilteredLogArgs = {
  filter: Array<Scalars['String']['input']>;
};


export type MutationUnlockAccountArgs = {
  input: UnlockInput;
};


export type MutationUnlockWalletArgs = {
  input: UnlockInput;
};

export type ProtocolStateProof = {
  /** Base-64 encoded proof */
  base64?: Maybe<Scalars['PrecomputedBlockProof']['output']>;
  /** JSON-encoded proof */
  json?: Maybe<Scalars['JSON']['output']>;
};

export type Query = {
  /** Find any account via a public key and token */
  account?: Maybe<Account>;
  /** Find all accounts for a public key */
  accounts: Array<Account>;
  /** Retrieve a list of blocks from transition frontier's root to the current best tip. Returns an error if the system is bootstrapping. */
  bestChain?: Maybe<Array<Block>>;
  /** Retrieve a block with the given state hash or height, if contained in the transition frontier. */
  block: Block;
  /** The pickles verification key for the protocol state proof */
  blockchainVerificationKey: Scalars['JSON']['output'];
  /** Check a vrf evaluation commitment. This can be used to check vrf evaluations without needing to reveal the private key, in the format returned by evaluateVrf */
  checkVrf: VrfEvaluation;
  /** The rules that the libp2p helper will use to determine which connections to permit */
  connectionGatingConfig: SetConnectionGatingConfigPayload;
  /** Get information about the current snark worker */
  currentSnarkWorker?: Maybe<SnarkWorker>;
  /** Get running daemon status */
  daemonStatus: DaemonStatus;
  /** Evaluate a vrf for the given public key. This includes a witness which may be verified without access to the private key for this vrf evaluation. */
  evaluateVrf: VrfEvaluation;
  /** The runtime configuration for a blockchain fork intended to be a continuation of the current one. By default, this returns the newest block that appeared before the transaction stop slot provided in the configuration, or the best tip if no such block exists. */
  fork_config: Scalars['JSON']['output'];
  /** Get the genesis block */
  genesisBlock: Block;
  /** The constants used to determine the configuration of the genesis block and all of its transitive dependencies */
  genesisConstants: GenesisConstants;
  /** TESTING ONLY: Retrieve all new structured events in memory */
  getFilteredLogEntries: GetFilteredLogEntries;
  /** List of peers that the daemon is currently connected to */
  getPeers: Array<Peer>;
  /** List of peers that the daemon first used to connect to the network */
  initialPeers: Array<Scalars['String']['output']>;
  /** The chain-agnostic identifier of the network this daemon is participating in */
  networkID: Scalars['String']['output'];
  /**
   * Wallets for which the daemon knows the private key
   * @deprecated use trackedAccounts instead
   */
  ownedWallets: Array<Account>;
  /** List of snark works that are yet to be done */
  pendingSnarkWork: Array<PendingSnarkWork>;
  /** Retrieve all the scheduled user commands for a specified sender that the current daemon sees in its transaction pool. All scheduled commands are queried if no sender is specified */
  pooledUserCommands: Array<UserCommand>;
  /** Retrieve all the scheduled zkApp commands for a specified sender that the current daemon sees in its transaction pool. All scheduled commands are queried if no sender is specified */
  pooledZkappCommands: Array<ZkappCommandResult>;
  /** The runtime configuration passed to the daemon at start-up */
  runtimeConfig: Scalars['JSON']['output'];
  /** List of completed snark works that have the lowest fee so far */
  snarkPool: Array<CompletedWork>;
  /** Network sync status */
  syncStatus: SyncStatus;
  /** A graphviz dot format representation of the deamon's internal thread graph */
  threadGraph: Scalars['String']['output'];
  /** The time offset in seconds used to convert real times into blockchain times */
  timeOffset: Scalars['Int']['output'];
  /** Find all accounts for a token ID */
  tokenAccounts: Array<Account>;
  /** Find the account that owns a given token */
  tokenOwner?: Maybe<Account>;
  /** Accounts for which the daemon tracks the private key */
  trackedAccounts: Array<Account>;
  /** Get the status of a transaction */
  transactionStatus: TransactionStatus;
  /** Trust status for an IPv4 or IPv6 address */
  trustStatus?: Maybe<Array<TrustStatusPayload>>;
  /** IP address and trust status for all peers */
  trustStatusAll: Array<TrustStatusPayload>;
  /** Validate the format and signature of a payment */
  validatePayment: Scalars['Boolean']['output'];
  /** The version of the node (git commit hash) */
  version?: Maybe<Scalars['String']['output']>;
  /**
   * Find any wallet via a public key
   * @deprecated use account instead
   */
  wallet?: Maybe<Account>;
};


export type QueryAccountArgs = {
  publicKey: Scalars['PublicKey']['input'];
  token?: InputMaybe<Scalars['TokenId']['input']>;
};


export type QueryAccountsArgs = {
  publicKey: Scalars['PublicKey']['input'];
};


export type QueryBestChainArgs = {
  maxLength?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBlockArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  stateHash?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckVrfArgs = {
  input: VrfEvaluationInput;
};


export type QueryEvaluateVrfArgs = {
  message: VrfMessageInput;
  publicKey: Scalars['PublicKey']['input'];
  vrfThreshold?: InputMaybe<VrfThresholdInput>;
};


export type QueryFork_ConfigArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  stateHash?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetFilteredLogEntriesArgs = {
  offset: Scalars['Int']['input'];
};


export type QueryPooledUserCommandsArgs = {
  hashes?: InputMaybe<Array<Scalars['String']['input']>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  publicKey?: InputMaybe<Scalars['PublicKey']['input']>;
};


export type QueryPooledZkappCommandsArgs = {
  hashes?: InputMaybe<Array<Scalars['String']['input']>>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  publicKey?: InputMaybe<Scalars['PublicKey']['input']>;
};


export type QueryTokenAccountsArgs = {
  tokenId: Scalars['TokenId']['input'];
};


export type QueryTokenOwnerArgs = {
  tokenId: Scalars['TokenId']['input'];
};


export type QueryTransactionStatusArgs = {
  payment?: InputMaybe<Scalars['ID']['input']>;
  zkappTransaction?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTrustStatusArgs = {
  ipAddress: Scalars['String']['input'];
};


export type QueryValidatePaymentArgs = {
  input: SendPaymentInput;
  signature?: InputMaybe<SignatureInput>;
};


export type QueryWalletArgs = {
  publicKey: Scalars['PublicKey']['input'];
};

export enum Sign {
  Minus = 'MINUS',
  Plus = 'PLUS'
}

export type Subscription = {
  /** Event that triggers when the best tip changes in a way that is not a trivial extension of the existing one */
  chainReorganization: ChainReorganizationStatus;
  /** Event that triggers when a new block is created that either contains a transaction with the specified public key, or was produced by it. If no public key is provided, then the event will trigger for every new block received */
  newBlock: Block;
  /** Event that triggers when the network sync status changes */
  newSyncUpdate: SyncStatus;
};


export type SubscriptionNewBlockArgs = {
  publicKey?: InputMaybe<Scalars['PublicKey']['input']>;
};

export type GetAccountQueryVariables = Exact<{
  publicKey: Scalars['PublicKey']['input'];
}>;


export type GetAccountQuery = { account?: { actionState?: Array<any> | null, index?: number | null, inferredNonce?: any | null, leafHash?: any | null, locked?: boolean | null, provedState?: boolean | null, publicKey: any, receiptChainHash?: any | null, stakingActive: boolean, tokenId: any, tokenSymbol?: string | null, votingFor?: any | null, zkappState?: Array<any> | null, zkappUri?: string | null, nonce?: any | null, verificationKey?: { hash: any, verificationKey: any } | null, balance: { blockHeight: any, liquid?: any | null, locked?: any | null, total: any, stateHash?: any | null }, timing: { cliffAmount?: any | null, cliffTime?: any | null, initialMinimumBalance?: any | null, vestingIncrement?: any | null, vestingPeriod?: any | null }, delegateAccount?: { publicKey: any } | null, delegators?: Array<{ publicKey: any }> | null, epochDelegateAccount?: { publicKey: any } | null } | null };

export type GetMerklePathQueryVariables = Exact<{
  publicKey: Scalars['PublicKey']['input'];
}>;


export type GetMerklePathQuery = { account?: { merklePath?: Array<{ left?: any | null, right?: any | null }> | null } | null };

export type GetPermissionsQueryVariables = Exact<{
  publicKey: Scalars['PublicKey']['input'];
}>;


export type GetPermissionsQuery = { account?: { permissions?: { access: AccountAuthRequired, editActionState: AccountAuthRequired, editState: AccountAuthRequired, incrementNonce: AccountAuthRequired, receive: AccountAuthRequired, send: AccountAuthRequired, setDelegate: AccountAuthRequired, setPermissions: AccountAuthRequired, setTiming: AccountAuthRequired, setTokenSymbol: AccountAuthRequired, setVotingFor: AccountAuthRequired, setZkappUri: AccountAuthRequired, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null } | null };

export type GetRecentPaymentsQueryVariables = Exact<{
  maxLength: Scalars['Int']['input'];
}>;


export type GetRecentPaymentsQuery = { bestChain?: Array<{ stateHash: any, transactions: { userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}> }, protocolState: { consensusState: { blockHeight: any, epoch: any, slot: any } } }> | null };

export type GetRecentZkAppCommandsQueryVariables = Exact<{
  maxLength: Scalars['Int']['input'];
}>;


export type GetRecentZkAppCommandsQuery = { bestChain?: Array<{ stateHash: any, transactions: { zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> }, protocolState: { consensusState: { blockHeight: any, epoch: any, slot: any } } }> | null };

export type GetBlockByHeightQueryVariables = Exact<{
  height: Scalars['Int']['input'];
}>;


export type GetBlockByHeightQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, snarkJobs: Array<{ fee: any, prover: any, workIds: Array<number> }>, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}>, zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> } } };

export type GetUserCommandsByHeightQueryVariables = Exact<{
  height: Scalars['Int']['input'];
}>;


export type GetUserCommandsByHeightQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}> } } };

export type GetZkAppCommandsByHeightQueryVariables = Exact<{
  height: Scalars['Int']['input'];
}>;


export type GetZkAppCommandsByHeightQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> } } };

export type GetSnarkJobsByHeightQueryVariables = Exact<{
  height: Scalars['Int']['input'];
}>;


export type GetSnarkJobsByHeightQuery = { block: { transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }> }, creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, snarkJobs: Array<{ fee: any, prover: any, workIds: Array<number> }> } };

export type GetBlockByHashQueryVariables = Exact<{
  stateHash: Scalars['String']['input'];
}>;


export type GetBlockByHashQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, snarkJobs: Array<{ fee: any, prover: any, workIds: Array<number> }>, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}>, zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> } } };

export type GetUserCommandsByBlockHashQueryVariables = Exact<{
  stateHash: Scalars['String']['input'];
}>;


export type GetUserCommandsByBlockHashQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}> } } };

export type GetZkAppCommandsByBlockHashQueryVariables = Exact<{
  stateHash: Scalars['String']['input'];
}>;


export type GetZkAppCommandsByBlockHashQuery = { block: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> } } };

export type GetSnarkJobsByBlockHashQueryVariables = Exact<{
  stateHash: Scalars['String']['input'];
}>;


export type GetSnarkJobsByBlockHashQuery = { block: { transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }> }, creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, snarkJobs: Array<{ fee: any, prover: any, workIds: Array<number> }> } };

export type GetGenesisBlockQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenesisBlockQuery = { genesisBlock: { creatorAccount: { publicKey: any }, protocolState: { previousStateHash: any, blockchainState: { bodyReference: any, utcDate: any, snarkedLedgerHash: any, stagedLedgerHash: any }, consensusState: { blockCreator: any, blockHeight: any, blockStakeWinner: any, coinbaseReceiever: any, epoch: any, epochCount: any, slot: any } }, snarkJobs: Array<{ fee: any, prover: any, workIds: Array<number> }>, transactions: { feeTransfer: Array<{ fee: any, recipient: any, type: any }>, userCommands: Array<{ id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } } | {}>, zkappCommands: Array<{ hash: any, id: any, zkappCommand: { memo: any, accountUpdates: Array<{ body: { actions: Array<Array<any>>, callData: any, callDepth: number, events: Array<Array<any>>, implicitAccountCreationFee: boolean, incrementNonce: boolean, publicKey: any, tokenId: any, useFullCommitment: boolean, authorizationKind: { isProved: boolean, isSigned: boolean, verificationKeyHash: any }, balanceChange: { magnitude: any, sgn: any }, mayUseToken: { inheritFromParent: boolean, parentsOwnToken: boolean }, preconditions: { account: { actionState?: any | null, isNew?: boolean | null, delegate?: any | null, provedState?: boolean | null, state: Array<any | null>, receiptChainHash?: any | null, balance?: { lower: any, upper: any } | null, nonce?: { lower: any, upper: any } | null }, network: { snarkedLedgerHash?: any | null, blockchainLength?: { lower: any, upper: any } | null, globalSlotSinceGenesis?: { lower: any, upper: any } | null, minWindowDensity?: { lower: any, upper: any } | null, nextEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, stakingEpochData: { lockCheckpoint?: any | null, seed?: any | null, startCheckpoint?: any | null, epochLength?: { lower: any, upper: any } | null, ledger: { hash?: any | null, totalCurrency?: { lower: any, upper: any } | null } }, totalCurrency?: { lower: any, upper: any } | null }, validWhile?: { upper: any, lower: any } | null }, update: { appState: Array<any | null>, delegate?: any | null, zkappUri?: string | null, votingFor?: any | null, tokenSymbol?: string | null, permissions?: { access: any, editActionState: any, editState: any, incrementNonce: any, receive: any, send: any, setDelegate: any, setPermissions: any, setTiming: any, setTokenSymbol: any, setVotingFor: any, setZkappUri: any, setVerificationKey: { auth: AccountAuthRequired, txnVersion: string } } | null, timing?: { cliffAmount: any, cliffTime: any, initialMinimumBalance: any, vestingIncrement: any, vestingPeriod: any } | null, verificationKey?: { data: any, hash: any } | null } } }>, feePayer: { authorization: any, body: { fee: any, validUntil?: any | null, publicKey: any, nonce: any } } }, failureReason?: Array<{ failures: Array<any>, index?: any | null } | null> | null }> } } };

export type GetPooledUserCommandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPooledUserCommandsQuery = { pooledUserCommands: Array<{ fee: any, id: any, hash: any, memo: string, kind: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { nonce?: any | null, publicKey: any } } | { id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } }> };

export type GetPooledUserCommandsByPublicKeyQueryVariables = Exact<{
  publicKey: Scalars['PublicKey']['input'];
}>;


export type GetPooledUserCommandsByPublicKeyQuery = { pooledUserCommands: Array<{ fee: any, id: any, hash: any, memo: string, kind: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { nonce?: any | null, publicKey: any } } | { id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } }> };

export type GetPooledUserCommandsByHashesQueryVariables = Exact<{
  hashes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetPooledUserCommandsByHashesQuery = { pooledUserCommands: Array<{ fee: any, id: any, hash: any, memo: string, kind: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { nonce?: any | null, publicKey: any } } | { id: any, amount: any, failureReason?: any | null, fee: any, feeToken: any, hash: any, kind: any, memo: string, token: any, validUntil: any, receiver: { publicKey: any, nonce?: any | null }, source: { publicKey: any, nonce?: any | null } }> };


export const GetAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"inferredNonce"}},{"kind":"Field","name":{"kind":"Name","value":"leafHash"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingActive"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"zkappState"}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"liquid"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"stateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegateAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"epochDelegateAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]}}]} as unknown as DocumentNode<GetAccountQuery, GetAccountQueryVariables>;
export const GetMerklePathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMerklePath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merklePath"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"left"}},{"kind":"Field","name":{"kind":"Name","value":"right"}}]}}]}}]}}]} as unknown as DocumentNode<GetMerklePathQuery, GetMerklePathQueryVariables>;
export const GetPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPermissions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}}]}}]}}]} as unknown as DocumentNode<GetPermissionsQuery, GetPermissionsQueryVariables>;
export const GetRecentPaymentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentPayments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxLength"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bestChain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxLength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxLength"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stateHash"}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecentPaymentsQuery, GetRecentPaymentsQueryVariables>;
export const GetRecentZkAppCommandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecentZkAppCommands"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxLength"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bestChain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"maxLength"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxLength"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stateHash"}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRecentZkAppCommandsQuery, GetRecentZkAppCommandsQueryVariables>;
export const GetBlockByHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockByHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"prover"}},{"kind":"Field","name":{"kind":"Name","value":"workIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockByHeightQuery, GetBlockByHeightQueryVariables>;
export const GetUserCommandsByHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCommandsByHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCommandsByHeightQuery, GetUserCommandsByHeightQueryVariables>;
export const GetZkAppCommandsByHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetZkAppCommandsByHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetZkAppCommandsByHeightQuery, GetZkAppCommandsByHeightQueryVariables>;
export const GetSnarkJobsByHeightDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSnarkJobsByHeight"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"height"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"height"},"value":{"kind":"Variable","name":{"kind":"Name","value":"height"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"prover"}},{"kind":"Field","name":{"kind":"Name","value":"workIds"}}]}}]}}]}}]} as unknown as DocumentNode<GetSnarkJobsByHeightQuery, GetSnarkJobsByHeightQueryVariables>;
export const GetBlockByHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBlockByHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"prover"}},{"kind":"Field","name":{"kind":"Name","value":"workIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBlockByHashQuery, GetBlockByHashQueryVariables>;
export const GetUserCommandsByBlockHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserCommandsByBlockHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserCommandsByBlockHashQuery, GetUserCommandsByBlockHashQueryVariables>;
export const GetZkAppCommandsByBlockHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetZkAppCommandsByBlockHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetZkAppCommandsByBlockHashQuery, GetZkAppCommandsByBlockHashQueryVariables>;
export const GetSnarkJobsByBlockHashDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSnarkJobsByBlockHash"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stateHash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stateHash"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"prover"}},{"kind":"Field","name":{"kind":"Name","value":"workIds"}}]}}]}}]}}]} as unknown as DocumentNode<GetSnarkJobsByBlockHashQuery, GetSnarkJobsByBlockHashQueryVariables>;
export const GetGenesisBlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGenesisBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genesisBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creatorAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"protocolState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bodyReference"}},{"kind":"Field","name":{"kind":"Name","value":"utcDate"}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stagedLedgerHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"consensusState"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockCreator"}},{"kind":"Field","name":{"kind":"Name","value":"blockHeight"}},{"kind":"Field","name":{"kind":"Name","value":"blockStakeWinner"}},{"kind":"Field","name":{"kind":"Name","value":"coinbaseReceiever"}},{"kind":"Field","name":{"kind":"Name","value":"epoch"}},{"kind":"Field","name":{"kind":"Name","value":"epochCount"}},{"kind":"Field","name":{"kind":"Name","value":"slot"}}]}},{"kind":"Field","name":{"kind":"Name","value":"previousStateHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"prover"}},{"kind":"Field","name":{"kind":"Name","value":"workIds"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feeTransfer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"zkappCommand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"accountUpdates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actions"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationKind"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isProved"}},{"kind":"Field","name":{"kind":"Name","value":"isSigned"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKeyHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"balanceChange"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"magnitude"}},{"kind":"Field","name":{"kind":"Name","value":"sgn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"callData"}},{"kind":"Field","name":{"kind":"Name","value":"callDepth"}},{"kind":"Field","name":{"kind":"Name","value":"events"}},{"kind":"Field","name":{"kind":"Name","value":"implicitAccountCreationFee"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"mayUseToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inheritFromParent"}},{"kind":"Field","name":{"kind":"Name","value":"parentsOwnToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"useFullCommitment"}},{"kind":"Field","name":{"kind":"Name","value":"preconditions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actionState"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nonce"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isNew"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"provedState"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"receiptChainHash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"network"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockchainLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSlotSinceGenesis"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"minWindowDensity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nextEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"snarkedLedgerHash"}},{"kind":"Field","name":{"kind":"Name","value":"stakingEpochData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"epochLength"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lockCheckpoint"}},{"kind":"Field","name":{"kind":"Name","value":"ledger"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"startCheckpoint"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCurrency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lower"}},{"kind":"Field","name":{"kind":"Name","value":"upper"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"validWhile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upper"}},{"kind":"Field","name":{"kind":"Name","value":"lower"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"update"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"appState"}},{"kind":"Field","name":{"kind":"Name","value":"delegate"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"editActionState"}},{"kind":"Field","name":{"kind":"Name","value":"editState"}},{"kind":"Field","name":{"kind":"Name","value":"incrementNonce"}},{"kind":"Field","name":{"kind":"Name","value":"receive"}},{"kind":"Field","name":{"kind":"Name","value":"send"}},{"kind":"Field","name":{"kind":"Name","value":"setDelegate"}},{"kind":"Field","name":{"kind":"Name","value":"setPermissions"}},{"kind":"Field","name":{"kind":"Name","value":"setTiming"}},{"kind":"Field","name":{"kind":"Name","value":"setTokenSymbol"}},{"kind":"Field","name":{"kind":"Name","value":"setVerificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"txnVersion"}}]}},{"kind":"Field","name":{"kind":"Name","value":"setVotingFor"}},{"kind":"Field","name":{"kind":"Name","value":"setZkappUri"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cliffAmount"}},{"kind":"Field","name":{"kind":"Name","value":"cliffTime"}},{"kind":"Field","name":{"kind":"Name","value":"initialMinimumBalance"}},{"kind":"Field","name":{"kind":"Name","value":"vestingIncrement"}},{"kind":"Field","name":{"kind":"Name","value":"vestingPeriod"}}]}},{"kind":"Field","name":{"kind":"Name","value":"zkappUri"}},{"kind":"Field","name":{"kind":"Name","value":"votingFor"}},{"kind":"Field","name":{"kind":"Name","value":"verificationKey"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenSymbol"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"feePayer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorization"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"failures"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGenesisBlockQuery, GetGenesisBlockQueryVariables>;
export const GetPooledUserCommandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPooledUserCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pooledUserCommands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}}]} as unknown as DocumentNode<GetPooledUserCommandsQuery, GetPooledUserCommandsQueryVariables>;
export const GetPooledUserCommandsByPublicKeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPooledUserCommandsByPublicKey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pooledUserCommands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"publicKey"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicKey"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}}]} as unknown as DocumentNode<GetPooledUserCommandsByPublicKeyQuery, GetPooledUserCommandsByPublicKeyQueryVariables>;
export const GetPooledUserCommandsByHashesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPooledUserCommandsByHashes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hashes"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pooledUserCommands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"hashes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hashes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserCommandPayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"failureReason"}},{"kind":"Field","name":{"kind":"Name","value":"fee"}},{"kind":"Field","name":{"kind":"Name","value":"feeToken"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"memo"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicKey"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}}]}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"validUntil"}}]}}]}}]}}]} as unknown as DocumentNode<GetPooledUserCommandsByHashesQuery, GetPooledUserCommandsByHashesQueryVariables>;