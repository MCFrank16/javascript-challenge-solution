function dayOfProgrammer(year) {
    let result = '';

    (year == 1918) ? result = "26.09." + year : ((year <= 1917) && (year % 4 == 0)) || ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) ? result = '12.09.' + year : result = '13.09.' + year;
    
    console.log(result);
}

dayOfProgrammer(1800);
dayOfProgrammer(2500);
dayOfProgrammer(1918);
dayOfProgrammer(1737);