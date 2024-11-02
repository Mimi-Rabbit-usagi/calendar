"use strict";
{
  const year = 2000;
  const month = 4; //5月

  function getCalenderBody() {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push(i);
    }

    console.log(dates);
  }

  getCalenderBody();
}
