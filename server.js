const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3002;

app.use(cors())
app.use(express.json())
require('dotenv').config()

// Client Credentials Auth flow
// 1.Request access token - returns access token

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env

async function authoriseSpotify() {
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');

    const options = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        json: true,
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
    }

    //This is where I use the token to get the response from Spotify
    const response = await fetch('https://accounts.spotify.com/api/token', options)

    if (response.status !== 200) {
        return null
    }
    return (
        await response.json()
    )}

app.get('/callback', async (req, res) => {
  
    const tokens = await authoriseSpotify()

    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
              "authorization": 'Bearer ' + tokens.access_token
        },
     
          json: true,
    };

    res.json({token:tokens.access_token})
})

app.listen(port, () => console.log(`Listening on port ${port}`));
