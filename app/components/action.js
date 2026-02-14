import { Octokit } from "@octokit/core";
export async function GetRepoDetails(
  user = "rajani-ranjan-jha",
  repo = "news-app",
) {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const res = await octokit.request(`GET /repos/${user}/${repo}`, {
    org: "ORG",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  // const data = res.json()
  console.log(res.data.description);
}

export async function GetUserAvatar(username='rajani-ranjan-jha') {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit();

  const res = await octokit.request(`GET /users/${username}`, {
    // username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(res.data)
}
// await GetRepoDetails();
await GetUserAvatar()
