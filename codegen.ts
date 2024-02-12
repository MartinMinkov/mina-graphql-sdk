import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql_schema.json",
  documents: ["./src/queries/*.ts"],
  ignoreNoDocuments: true,
  emitLegacyCommonJSImports: false,
  generates: {
    "src/gql/sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        skipTypename: true,
      },
    },
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
