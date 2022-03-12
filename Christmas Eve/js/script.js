const timeForMilkAndCookies = (year, month, date) => {
    if (month === 11 && date === 24 && year > 0) {
        return true;
    } else {
        return false;
    };
  };
  
  console.log(timeForMilkAndCookies(2013, 11, 24));
  console.log(timeForMilkAndCookies(2013, 0, 23));
  console.log(timeForMilkAndCookies(3000, 11, 24));