# Spotify OAuth backend Client Credentials flow
This is a Node.js Express server example that utilizes the Spotify OAuth client credentials flow API, to generate an access token for use in your front end application.
This OAuth flow allows limited access and only allows you to get public data. If you need logins in your app you will need a different authorisation.
You can find more information about Spotify authorisation here https://developer.spotify.com/documentation/general/guides/authorization-guide/
### Register Spotify App to gain credentials, then use them to login via this application
To allow this application to login to Spotify, you must register your application here: https://developer.spotify.com/my-applications
Next, go into your  **Dashboard** at https://developer.spotify.com/dashboard/applications click the  **application** you registered, and open edit settings.
Then, add  http://localhost:3002 as the **Website**,, and http://localhost:3002/callback  as the **Redirect URI**.
**IMPORTANT** you must scroll down and click save for these changes to take effect.
Make note of your Client ID and your Client Secret, but do not expose the Client Secret such as committing it. 
### Allow application to use Spotify credentials, without exposing them
Create a PROCESS.ENV file and ensure you add it to git ignore as your Client Id and Client Secret should not be exposed to anyone.

export SPOTIFY_CLIENT_ID=your-client-id

export SPOTIFY_CLIENT_SECRET=your-client-secret


Run your server using npm run server or whatever you have called your server. Then run curl http://localhost:3002/callback in your terminal and you should see your token being returned. You can then use this in your front end application to fetch data from the Spotify API.
