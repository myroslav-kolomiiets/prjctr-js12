import { CalendarAPI } from './calendarAPI.js';

(async () => {
    const calendarAPI = new CalendarAPI();
    console.log(await calendarAPI.getData());
})()
