import { GraphQLClient } from "graphql-request";
import { getSdk } from "./gql/sdk.js";
import { UserCommandPayment } from "./gql/graphql.js";

const k = 290 as const;

export default class MinaGraphQLClient {
  private client: GraphQLClient;
  private sdk: ReturnType<typeof getSdk>;

  constructor(url: string) {
    try {
      new URL(url);
      this.client = new GraphQLClient(url);
      this.sdk = getSdk(this.client);
    } catch (e) {
      throw Error(
        `Failed to initialize GraphQL client with URL '${url}'. This can occur if the URL is malformed or missing a protocol (e.g., 'https://'). Please ensure the URL is correctly formatted and includes a protocol like http:// or https://. Example: 'https://api.example.com/graphql'. Original error: ${e.message}`
      );
    }
  }

  query = {
    raw: async (query: string, variables: any) => {
      return await this.client.request(query, variables);
    },
  };

  account = {
    getAccount: async (publicKey: string) => {
      return await this.sdk.GetAccount({ publicKey });
    },

    getMerklePath: async (publicKey: string) => {
      return await this.sdk.GetMerklePath({ publicKey });
    },

    getPermissions: async (publicKey: string) => {
      return await this.sdk.GetPermissions({ publicKey });
    },
  };

  blocks = {
    getBlockByHeight: async (height: number) => {
      return await this.sdk.GetBlockByHeight({ height });
    },

    getTransactionsByHeight: async (height: number) => {
      return await this.sdk.GetUserCommandsByHeight({ height });
    },

    getZkAppTransactionsByHeight: async (height: number) => {
      return await this.sdk.GetZkAppCommandsByHeight({ height });
    },

    getSnarkJobsByHeight: async (height: number) => {
      return await this.sdk.GetSnarkJobsByHeight({ height });
    },

    getBlockByHash: async (stateHash: string) => {
      return await this.sdk.GetBlockByHash({ stateHash });
    },

    getTransactionsByHash: async (stateHash: string) => {
      return await this.sdk.GetUserCommandsByBlockHash({ stateHash });
    },

    getZkAppTransactionsByHash: async (stateHash: string) => {
      return await this.sdk.GetZkAppCommandsByBlockHash({ stateHash });
    },

    getSnarkJobsByHash: async (stateHash: string) => {
      return await this.sdk.GetSnarkJobsByBlockHash({ stateHash });
    },

    getGenesisBlock: async () => {
      return await this.sdk.GetGenesisBlock();
    },
  };

  transactions = {
    getRecentSentPayments: async (publicKey: string, maxLength: number = k) => {
      const responseData = await this.sdk.GetRecentPayments({ maxLength });
      if (!responseData || !responseData.bestChain) return [];

      return responseData.bestChain.filter((blocks) => {
        return blocks.transactions.userCommands.some((command) => {
          return (command as UserCommandPayment).source.publicKey === publicKey;
        });
      });
    },

    getRecentReceievedPayments: async (
      publicKey: string,
      maxLength: number = k
    ) => {
      const responseData = await this.sdk.GetRecentPayments({ maxLength });
      if (!responseData || !responseData.bestChain) return [];

      return responseData.bestChain.filter((blocks) => {
        return blocks.transactions.userCommands.some((command) => {
          return (
            (command as UserCommandPayment).receiver.publicKey === publicKey
          );
        });
      });
    },

    getRecentZkAppTransactions: async (
      publicKey: string,
      maxLength: number = k
    ) => {
      const responseData = await this.sdk.GetRecentZkAppCommands({ maxLength });
      if (!responseData || !responseData.bestChain) return [];

      return responseData.bestChain.filter((blocks) => {
        return blocks.transactions.zkappCommands.some((command) => {
          return command.zkappCommand.feePayer.body.publicKey === publicKey;
        });
      });
    },
  };

  pool = {
    getPooledUserCommands: async () => {
      return await this.sdk.GetPooledUserCommands();
    },

    getPooledUserCommandsByPublicKey: async (publicKey: string) => {
      return await this.sdk.GetPooledUserCommandsByPublicKey({ publicKey });
    },

    getPooledUserCommandsByHashes: async (hashes: string[]) => {
      return await this.sdk.GetPooledUserCommandsByHashes({ hashes });
    },
  };
}
