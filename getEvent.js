const { google } = require('googleapis');

async function getEvent(auth, eventId) {
  const calendar = google.calendar({version: 'v3', auth});
  try {
    const res = await calendar.events.get({
      calendarId: 'primary',
      eventId: eventId,
    });

    const event = res.data;
    console.log(`Event: ${event.summary}`);
    console.log('Attendees:');
    event.attendees.forEach(attendee => {
      console.log(`- ${attendee.email}: ${attendee.responseStatus}`);
    });
  } catch (error) {
    console.log('The API returned an error: ' + error);
  }
}

module.exports = { getEvent };
