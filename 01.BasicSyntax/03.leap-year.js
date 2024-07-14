function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
      console.log('yes');
   } else {
      console.log('no');
   }
}

isLeapYear (1984);
isLeapYear (1900);
isLeapYear (1800);
isLeapYear (1600);
isLeapYear (0);
