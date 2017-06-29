/* TASK1
 Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное число
 в указанную степень. Указать число и степень пользователь должен через команду prompt.
 Результат выполнения функции вывести в консоль. Работать с целыми числами,
 большими, меньшими, и равными нулю. Бесконечности можно не обрабатывать*/

 (function() {
 	'use strict';

 	var x = prompt('Enter a number', '');
 	var n = prompt('Enter power', '');

 	function pow(x, n) {
 		var number = x;
 		var	result = 1;

 		if (x === 0) {
 			result = 0;
 		} else if (n == 0) {
 			result = 1;
 		} else if (n > 0) {
 			for (var i = 1; i < n; i++) {
 				number *= x;
 				result = number;
 			}
 		} else if (n < 0) {
 			var positivePow = -n;

 			for (var i = 0; i < positivePow; i++) {
 				number *= x;
 				result = 1 / number;
 			}

 		} else if (isNaN(x)) {
 			alert('Йой! Здається це не число');
 			result = 'Йой! Здається це не число';
 		} else if (isNaN(n)) {
 			alert('Йой! Здається це не число');
 			result = 'Йой! Здається це не число';
 		}
 		return result;

 	} //end of function

 	console.log(pow(x, n));

})();


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

	name = prompt('Будь ласка, напишіть ім\'я:', '');
	}

	console.log(userName);

	var userLogin = prompt('Будь ласка, напишіть ім\'я користувача:', '');

	for (var i = 0; i < userName.length; i++) {
		if ( userLogin === userName[i] ) {

			var trueUser = userLogin;
		}
	}

	if ( trueUser) {
		alert( userLogin + ' , Ви успішно авторизувалися');

	} else {
		alert('oops! Спробуйте інше ім\'я');
	}

})();