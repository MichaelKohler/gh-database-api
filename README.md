# GitHub Database API

Campaign Bug Reporting page for the upcoming Fenix Campaign lead by the Open Innovation Team.

## Setting up the server

### Requirements

* Create a repository to hold the database file
* Create a personal access token for your GitHub user

### Starting

Then you can start the server with the following command. Make sure to replace the placeholders with your data.

```
git clone <URL>
cd gh-database-api
npm ci
GITHUB_TOKEN=<yourGitHubToken> GITHUB_OWNER=<yourGitHubUsername> GITHUB_REPO=<yourGitHubRepoForIssues> npm start
```

Now you can create new entries with a POST request to ```localhost:4567```. The body of this request should contain the full new entry.

## Configuration

The three configuration options above are mandatory. The rest are set from reasonable defaults. Here's the full list of options:

| ENV   |      Description      |  default |
|----------|--------------|------|
| GITHUB_TOKEN | **mandatory** GitHub access token for a user which has write access to the configured repo |  |
| GITHUB_OWNER | **mandatory** User/Organization name where the repo is located |  |
| GITHUB_REPO | **mandatory** Repository name to be used as database |  |
| DB_FILE | file inside the repository which holds the JSON database | db.json  |
| PATH_JSON_ARRAY | property inside the JSON which holds the array to append to | expects array at root level |
| DEFAULT_COMMIT_MESSAGE | commit message to use when updating the dataset | Update Database |
| COMMIT_MESSAGE_FIELD | field of entry payload to use as commit message (for example: "commitMessage") | |

## Caveats

* There is no authentication yet!
* There is no way to query the database from the API yet (assumes client reading from the repo directly)