const express = require('express');
const { oauth2Client, getAuthUrl } = require('./auth');
const { createEvent } = require('./createEvent');
const { getEvent } = require('./getEvent');
const app = express();
const port = 3000;

app.get('/', async (_, res) => {
  res.send(`<a target='_self' href=${getAuthUrl()}>Authorize and proceed...</a>`);
});

app.get('/oauth2callback', async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  res.send('Authentication successful! You can close this window.');

  // Now you can use oauth2Client to make authenticated requests
  //await createEvent(oauth2Client);
  //await getEvent(oauth2Client, 'hfisdnob2hbfcr65dpobb8j4qg');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
