'use strict';

const debug = require('debug')('gh-database-api:lib:githubBackend');
const Octokit = require('@octokit/rest');

const { GITHUB_TOKEN, OWNER, REPO } = process.env;

if (!GITHUB_TOKEN || !OWNER || !REPO) {
  console.error('The following ENV variables need to be set: GITHUB_TOKEN, OWNER, REPO');
  process.exit(1);
}

debug('GOT_ENV', process.env);

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

module.exports = {
  addEntry,
};

async function addEntry(entry) {
  debug('ADDING_GITHUB_DB_ENTRY');
  debug('TODO: Getting correct file content');

  debug('TODO: Adjusting new file content');

  debug('TODO: Uploading new file');

  return;
}
