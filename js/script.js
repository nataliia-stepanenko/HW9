"use strict"
// 1
// let myBirthday = new Date(1989, 7, 24);
// let myMonth = myBirthday.getMonth() + 1;
// function showZero(x) {
//     if (x < 10) {
//         return `0${x}`;
//     } return x;
// }
// let info = `${myBirthday.getDate()}.${showZero(myMonth)}.${myBirthday.getFullYear()}`;
// alert(info);



// 2
// function getDiffDays(start, end) {
//     let dateStart = Date.parse(start);
//     let dateEnd = Date.parse(end);
//     const DAY_IN_MS = 60 * 60 * 24 * 1000;
//     if (isNaN(dateEnd) || isNaN(dateStart)) {
//         console.error(`Error: invalid date`);
//         return;
//     } else if (dateStart > dateEnd) {
//         console.error(`Error: your start date is later than end date`);
//         return;
//     }
//     let dif = (dateEnd - dateStart) / DAY_IN_MS;
//     return dif;
// }

// console.log(getDiffDays('2020-01-01', '2020-01-17')); // 16
// console.log(getDiffDays('2020-01-01', '2020-03-15')); // 74
// console.log(getDiffDays('2222222222', '2020-03-15')); // Error: invalid date
// console.log(getDiffDays('2021-01-02', '2020-03-15')); // Error: your start date is later than end



// 3
// function isWeekend(date) {
//     let day = (new Date(date)).getDay();
//     return day === 6 || day === 0;
// }

// console.log(isWeekend('2022-02-12')); // true
// console.log(isWeekend('2022-02-13')); // true
// console.log(isWeekend('2022-02-09')); // false


// 4
// const person = {
//    fullName: 'Sherlock Holmes',
//    address: {
//         street: "Baker Street",
// 		city: "London",
//         house: "221b"
//    }
// }

// let json = JSON.stringify(person);
// let personBack = JSON.parse(json);

// console.log(person);
// console.log(json);
// console.log(personBack);


// // Деструктуризация
// let {
//     fullName,
//     address: {
//         street,
//         city,
//         house
//     }
// } = person;


// console.log(`Fullname is ${fullName}`);
// console.log(`Street is ${street}`);
// console.log(`City is ${city}`);
// console.log(`House number is ${house}`);