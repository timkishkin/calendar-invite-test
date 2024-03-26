const { google } = require('googleapis');

async function createEvent(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  const event = {
    summary: 'Test Event 2',
    location: 'Online',
    description: 'This is a test event.',
    start: {
      dateTime: '2024-03-30T09:00:00-07:00',
      timeZone: 'America/Los_Angeles',
    },
    end: {
      dateTime: '2024-03-30T10:00:00-07:00',
      timeZone: 'America/Los_Angeles',
    },
    attendees: [{email: 'test@test.com'}],
    reminders: {
      useDefault: false,
      overrides: [
        {method: 'email', minutes: 24 * 60},
        {method: 'popup', minutes: 10},
      ],
    },
  };

  calendar.events.insert({
    auth: auth,
    calendarId: 'primary',
    resource: event,
  }, function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.data.htmlLink);
    console.log('Event id: %s', event.data.id);
  });
}

module.exports = { createEvent };
