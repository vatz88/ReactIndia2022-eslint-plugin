# ESLint plugin

## Setup

Any latest node and npm version should work, but at the time of writing this code, I was using node version `18.7.0` with npm version `8.15.0`.

To install dependencies, run

```sh
npm install
```

## Commits

- Initial setup

```sh
git checkout 7a5e95705a3fce7248e4154a8ef1f0acc45e592e
```

- Eslint plugin `no-class-components`

```sh
git checkout 8aee61bd29efc7c4cc9bfc9dc307ac27dc502013
```

- Eslint plugin `no-deprecated-prop`

```sh
git checkout bb673f5e3341170813ab835ed55a4f2566f9cba1
```

## Command

CLI

```sh
npx eslint tests/sample.js
```

VS Code

Install ESLint extension https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

If you update the plugin or ESLint config, please restart the ESLint server.

## Resources

- https://eslint.org/docs/latest/user-guide/getting-started
- https://eslint.org/docs/latest/developer-guide/working-with-rules
- https://eslint.org/docs/latest/developer-guide/working-with-plugins
