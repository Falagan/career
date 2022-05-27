# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Init Configuration

 > Husky, Prettier, lint-staged and conventional commit
```
npm install --save husky lint-staged prettier
npm install --save-dev @commitlint/{config-conventional,cli}
npm set-script prepare "husky install"
npx husky install
```

> Add git hook pre-commit

```
npx husky add .husky/pre-commit
```

> Add to pre-commit file:
```
"#!/bin/sh 
. "$(dirname "$0")/_/husky.sh"
npm run lint-staged"
```
> Add to git hook
```
git add .husky/pre-commit
```

> Add git hook commit-msg

```
npx husky add .husky/commit-msg
```
> Add to commit-msg file:
```
"#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no -- commitlint --edit ''"
```
> Add to git hook
```
git add .husky/commit-msg
```
> Add lint-staged config to package.json
```
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write",
      "eslint"
+   ]
+ },
  "scripts": {
``` 
> Add commitlint file config
```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```
> Add prettier config
.prettierrc
```
{
  "trailingComma": "none",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "bracketSpacing": true
}

```
> Storybook
```
npx -p @storybook/cli sb init
```
> Analyzing Bundle Size
```
npm install --save source-map-explorer

   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```
> Adding bootstrap
```
npm install bootstrap
```
> Router
```
npm install --save react-router-dom
``` 
> Environments

```
$ set REACT_APP_STAGE=dev"
```
```
"scripts": {
    "start": "REACT_APP_STAGE=dev react-scripts start",
```
* We define a src/config.js with the different configuration by environment: dev, pre and pro.