# プロジェクト作成(備忘)

## Next.js(v13)で初期化

```
$ yarn create next-app

yarn create v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-next-app@13.4.4" with binaries:
      - create-next-app
✔ What is your project named? … next-front
✔ Would you like to use TypeScript with this project? … Yes
✔ Would you like to use ESLint with this project? … Yes
✔ Would you like to use Tailwind CSS with this project? … Yes
✔ Would you like to use `src/` directory with this project? … Yes
✔ Use App Router (recommended)? … No
✔ Would you like to customize the default import alias? … No
```

## Prettier, ESLint追加設定

```shell
$ yarn add -D prettier prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
$ yarn add -D eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
$ yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript-eslint
```

### `.prettierrc`

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "endOfLine": "lf",
  "printWidth": 120,
  "importOrder": ["<THIRD_PARTY_MODULES>", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  "pluginSearchDirs": false
}
```

### `.eslintrc.json`

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next/core-web-vitals",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "endOfLine": "lf",
        "semi": false,
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2
      }
    ]
  }
}
```

### `.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## デバッグ設定

### `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

## ダークテーマと多言語対応

```
$ yarn add next-themes
```

### `next.config.js`

```js
const nextConfig = {
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
}
```