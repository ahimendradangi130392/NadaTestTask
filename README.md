## Environment variables

```
cp .env.example .env
```

Default `.env` file contains `SKIP_PREFLIGHT_CHECK` which was added only for starter purpose and should be deleted when all dependencies resolved.

## `.npmrc`

Create `.npmrc` file with contents:
```
@affinidi:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=<GITLAB_TOKEN>
//registry.npmjs.org/:_authToken=<NPM_TOKEN>
```
- `GITLAB_TOKEN` can be generated [here](https://gitlab.com/-/profile/personal_access_tokens) (scope: `read_api`)
- `NPM_TOKEN` can be generated [here](https://docs.npmjs.com/creating-and-viewing-access-tokens)

## Build

```
$ npm run build
```

## Running the app

```
npm start
```

## Running tests

```
$ npm test
```
