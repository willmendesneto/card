#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Will Mendes /'),
  handle: chalk.cyan('@willmendesneto'),
  work: chalk.cyan('Atlassian, Senior Software Engineer'),
  medium: chalk.cyan('https://medium.com/@willmendesneto'),
  twitter: chalk.cyan('https://twitter.com/willmendesneto'),
  github: chalk.cyan('https://github.com/willmendesneto'),
  web: chalk.cyan('https://willmendesneto.github.io/'),
  npx: chalk.white('npx willmendesneto'),
  labelWork: chalk.white.bold('      Work:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const header = `${data.name} ${data.handle}`;
const work = `${data.labelWork}  ${data.work}`;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const web = `${data.labelWeb}  ${data.web}`;
const medium = `${data.labelMedium}  ${data.medium}`;
const card = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single constiable so we can use boxen effectively
const output =
  header +
  newline +
  newline +
  work +
  newline +
  github +
  newline +
  twitter +
  newline +
  medium +
  newline +
  web +
  newline +
  newline +
  card;

console.log(chalk.green(boxen(output, options)));
