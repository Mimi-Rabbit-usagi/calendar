"use strict";

console.clear();

{
  const year = 2024;
  const month = 4; //5月

  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      //30
      //29,30
      //28,29,30
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    console.log(dates);
  }

  function getCalendarBody() {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    console.log(dates);
  }

  getCalendarHead();
  //   getCalendarBody();
}
