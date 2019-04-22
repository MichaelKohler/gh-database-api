'use strict';

const {
  GITHUB_TOKEN,
  GITHUB_OWNER,
  GITHUB_REPO,
  DB_FILE,
  PATH_JSON_ARRAY,
  DEFAULT_COMMIT_MESSAGE,
  COMMIT_MESSAGE_FIELD
} = process.env;

const debug = require('debug')('gh-database-api:lib:config');

if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
  console.error('The following ENV variables need to be set: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO');
  throw new Error('NOT_ALL_ENV_VARS_SET');
}

const config = {
  githubToken: GITHUB_TOKEN,
  githubOwner: GITHUB_OWNER,
  githubRepo: GITHUB_REPO,
  dbFile: DB_FILE || 'db.json',
  pathJsonArray: PATH_JSON_ARRAY,
  defaultCommitMessage: DEFAULT_COMMIT_MESSAGE || 'Update Database',
  commitMessageField: COMMIT_MESSAGE_FIELD
};

debug('CONFIG', config);

module.exports = config;
