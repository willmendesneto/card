My own npm business card.

# Usage

Via npx:

```
npx willmendesneto
```

## Setup and installation

Make sure that you are using the NodeJS version is the same as `.nvmrc` file version. If you don't have this version please use a version manager such as `nvm` or `n` to manage your local nodejs versions.

> Please make sure that you are using NodeJS version 6.10.2

Assuming that you are using `nvm`, please run the commands inside this folder:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
```

In Windows, please install NodeJS using one of these options:

Via `NVM Windows` package: Dowload via [this link](https://github.com/coreybutler/nvm-windows). After that, run the commands:

```bash
$ nvm install $(cat .nvmrc); # install required nodejs version
$ nvm use $(cat .nvmrc); # use nodejs version
```

Via Chocolatey:

```bash
$ choco install nodejs.install -version 6.10.2
```

### Run the code locally

```bash
$ npm start # prints the card
```

or

```bash
$ node ./bin/card.js # prints the card
```

## Demo

![npx willmendesneto](https://user-images.githubusercontent.com/1252570/88490447-0d9f8180-cf72-11ea-991d-a6e5ba4e3e9a.gif)

## Author

**Wilson Mendes (willmendesneto)**

- <https://twitter.com/willmendesneto>
- <http://github.com/willmendesneto>
