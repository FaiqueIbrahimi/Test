require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const gitData = {
  "login": "FaiqueIbrahimi",
  "id": 188364752,
  "node_id": "U_kgDOCzo30A",
  "avatar_url": "https://avatars.githubusercontent.com/u/188364752?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/FaiqueIbrahimi",
  "html_url": "https://github.com/FaiqueIbrahimi",
  "followers_url": "https://api.github.com/users/FaiqueIbrahimi/followers",
  "following_url": "https://api.github.com/users/FaiqueIbrahimi/following{/other_user}",
  "gists_url": "https://api.github.com/users/FaiqueIbrahimi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/FaiqueIbrahimi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/FaiqueIbrahimi/subscriptions",
  "organizations_url": "https://api.github.com/users/FaiqueIbrahimi/orgs",
  "repos_url": "https://api.github.com/users/FaiqueIbrahimi/repos",
  "events_url": "https://api.github.com/users/FaiqueIbrahimi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/FaiqueIbrahimi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-11-13T16:37:32Z",
  "updated_at": "2025-06-23T14:15:50Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('bhag ja')
})

app.get('/github', (req, res) => {
  res.json(gitData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening  on port ${process.env.PORT}`)
})