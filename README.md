# Mina GraphQL SDK

Mina GraphQL SDK simplifies interactions with Mina's GraphQL daemon interface by providing a typesafe TypeScript layer. It leverages code generation for improved developer experience and offers a direct GraphQL query option for advanced flexibility.

## Features

- Typesafe Queries and Mutations: Automatically generated types and wrapper functions based on your GraphQL schema, enabling robust type checking and auto-completion.
- Custom GraphQL Escape Hatch: Execute raw GraphQL queries directly to handle complex scenarios outside the generated code.
- Accounts, Blocks, and Transactions: Easily query account details, fetch blocks by height or hash, and explore various transaction types (sent, received, zkApp).
- Seamless Integration: Designed to easily integrate into your existing TypeScript projects.

## Basic Usage

```ts
// Accounts
const account = await client.account.getAccount("...public key...");

// Blocks
const recentBlock = await client.blocks.getBlockByHeight(100);

// Transactions
const recentPayments = await client.transactions.getRecentSentPayments(
  "...public key..."
);

const data = await client.query.raw(`query { ... }`);
```
