# calendar-invite-test
PoC for creating a calendar event and reacting to RSVPs of the participants

Created with help of ChatGPT https://chat.openai.com/share/7d142b2c-20f7-4050-9316-3bd5bd8dda4f

## Setup
1. Clone the repository
2. Run `npm i`
3. Run `cp .env.template .env`
4. Fill in the required environment variables in the `.env` file (a project should be created in Google console and the credentials should be downloaded)
5. Run `node server`
6. Expose http://localhost:3000/ to the internet using ngrok or similar
7. Open the exposed URL in the browser and follow the link to authenticate with Google
8. Uncomment `createEvent` or `getEvent` in `server.js` to check different functionalities



