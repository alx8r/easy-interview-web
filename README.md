### Init Project

To init new project you should run the following cmd.

```bash
npx create-next-app@latest my-app --yes
```

Additional information: https://nextjs.org/docs/app/getting-started/installation

### Add node.js files

```bash
node -v > .nvmrc
```

```bash
echo engine-strict=true > .npmrc
```

Open package.json and past “engines” before “scripts”:

```json
"engines": {
  "node": ">=<your_version>",
  "yarn": ">=<your_version>",
  "npm": "please-use-yarn"
},
```

### Eslint, prettier and husky

#### Eslint

Use default configuration file of eslint (eslint.config.mjs)

Copy eslint.config.mjs to your project

#### Prettier

```bash
yarn add -D prettier eslint-config-prettier
```

Copy .prettierrc and .prettierignore to your project

#### Husky

```bash
yarn add -D husky
```

How to add pre-commit commands to husky you can find here: https://typicode.github.io/husky/get-started.html

### Package.json

```json
  "lint": "next lint",
  "prettier": "prettier . --write"
```

### I18n (next-intl)

```bash
npm install next-intl
```

How to add new language and use i18n you can find here: https://next-intl.dev/docs/getting-started