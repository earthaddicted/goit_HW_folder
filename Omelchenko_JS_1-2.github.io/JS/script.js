/*TASK1
 Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число
 в указанную степень. Указать число и степень пользователь должен через команду prompt.
 Результат выполнения функции вывести в консоль. Работать с целыми числами,
 большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать*/

// var userNumber = prompt('Укажите число');
// var power = prompt('Укажите степень');
// pow(userNumber, power);
//
// function pow(a, b) {
//     var number = a;
//     var result;
//
//     if (a === 0) {
//         result = 0;
//         return alert(result);
//     }
//
//     if (b > 0) {
//         for (var i = 1; i <= b; i++) {
//             number *= a;
//             result = number;
//         }
//     } else if (b < 0) {
//         var positivePow =  -b;
//         for (var j = 1; j <= positivePow; j++) {
//             number *= a;
//             result = 1 / number;
//         }
//     } else if (b === 0) {
//         result = 1;
//     }
//     // else if (a === 0) {
//     //     result = 0;
//     // } else {
//     //     result = 'you entered not a number';
//     // }
//     return alert(result);
// }


(function () {
	
})()



// TASK2
/*Создать программу, которая будет выполнять следующие действия:
 Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
 Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
 Введенное имя, циклом сравнивать с именами в массиве
 Если нет совпадения, то есть введенное имя пользователя не существует в массиве — выдавать с помощью alert сообщение об ошибке
 Если есть совпадение — выводить сообщение «Андрей, вы успешно вошли». Вместо «Андрей» должно быть имя текущего пользователя*/

   (function () {

    'use strict';

	var userName = [];

	for (var i = 0; i < 5; i++) {

	userName[i] = name;

	name = prompt("Будь ласка, напишіть ім'я");
	}

	console.log(userName);

	var userLogin = prompt("Будь ласка, напишіть ім'я користувача");

	for (var i = 0; i < userName.length; i++) {
		if ( userLogin === userName[i] ) {

			var trueUser = userLogin;
		}
	}

	if ( trueUser) {
		alert( userLogin + ' , ви успішно авторизувалися');

	} else {
		alert("oops! Спробуйте інше ім'я");
	}

})();