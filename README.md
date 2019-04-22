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
npm install
GITHUB_TOKEN=<yourGitHubToken> OWNER=<yourGitHubUsername> REPO=<yourGitHubRepoForIssues> npm start
```

Now you can create new entries with a POST request to ```localhost:4567```. The body of this request should contain the full new entry.
