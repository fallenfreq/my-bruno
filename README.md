# Bruno, PNPM, TypeScript Monorepo Example

This repository provides an example architecture for structuring a monorepo using pnpm workspaces, focusing on integrating [Bruno](https://github.com/usebruno/bruno) API collections with shared tooling and configurations.

## Purpose

The goal of this repository is to demonstrate a potential layout for managing multiple Bruno API collections within a single pnpm monorepo. It showcases how to incorporate standard development tools like TypeScript, ESLint, and Prettier, along with setting up shared scripts for common tasks across collections.

**Note:** The example Bruno request included in this repository is for illustrative purposes only and does not target a live endpoint. It is intended to show the directory structure, naming conventions, and how Bruno collections can be organized within this TypeScript monorepo setup.

## Features Demonstrated

- **pnpm workspaces:** Efficient dependency management and project linking within a monorepo.
- **Bruno Collection Integration:** Organizing Bruno `.bru` files and collections within the monorepo structure.
- **TypeScript:** Using TypeScript for any shared utilities or scripts.
- **ESLint:** Enforcing code quality and consistency with a shared ESLint configuration.
- **Prettier:** Automating code formatting with a shared Prettier configuration.
- **Shared Scripts:** Defining common scripts in the root `package.json` that can be executed across different Bruno collections or packages using pnpm's filtering capabilities.

## Understanding Shared Bruno Globals

This monorepo includes a `bruno-globals` package. Its purpose is to provide TypeScript type definitions for the global variables that Bruno makes available in its script execution sandbox at runtime.

By adding `@my-bruno/bruno-globals` as a development dependency to the collection packages and including `"@my-bruno/bruno-globals"` in the `compilerOptions.types` array of their `tsconfig.json`, we inform the TypeScript compiler and your editor that these globals will exist at runtime. This setup provides:

- **Intellisense:** Autocomplete suggestions and type information for Bruno's global objects and their properties/methods within your typescript scripts.
- **Type Safety:** TypeScript can check the usage of these globals in your scripts, catching potential type-related errors before runtime.

This configuration is already set up in the example collection within this repository to demonstrate how you can achieve a better development experience when writing Bruno scripts with TypeScript.

## Tools and Technologies Used

- [Bruno](https://www.usebruno.com/) (API Client)
- [pnpm](https://pnpm.io/) (Package Manager)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) (Linter)
- [Prettier](https://prettier.io/) (Code Formatter)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/fallenfreq/my-bruno.git](https://github.com/fallenfreq/my-bruno.git)
    # or using SSH
    # git clone git@github.com:fallenfreq/my-bruno.git
    cd my-bruno # Use the actual repository directory name
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install --shamefully-hoist
    ```

3.  **Build bruno-globals**

    ```bash
    pnpm build:bruno-globals
    ```

4.  **Build shared**

    ```bash
    pnpm build:shared
    ```

5.  **Start TypeScript compilation in watch mode:**

    ```bash
    pnpm dev
    ```

    It is necessary to build the bruno-globals and shared packages first since they rely on each other. [Turborepo ](https://turborepo.com/) or something similar will be added to address this soon!

Explore the directory structure to see how the Bruno collections (`apps/bruno-collections`), shared configurations (`packages/config`), and potential shared scripts are organized.

To open and interact with the Bruno collections, you will need to have the Bruno application installed.

---

_This README was generated by an AI model._
