/* task 1  */

/* Задание 1. Пользователь вводит год рождения в input.
Пользователь может ввести год рождения в двух форматах: 1988 или 02 (имеется ввиду 2002).
Программа должна вывести количество лет которое исполнилось пользователю. */

(function() {
	'use strict';

	var ageFinder = document.getElementById('total-age');
	function calculateAge() {
		var date = new Date();
		var year = date.getFullYear();
		var shortYear = parseInt(year.toString().substring(2, 4));
		var input = document.getElementById('year').value;
		var inputNum = parseInt(input);
		var age;
		var inp;

		if (input.length === 2) {
			if (inputNum > shortYear) {
				inp = '19' + input;
        event.preventDefault();
			} else {
				inp = '20' + input;
        
        event.preventDefault();
			}
				age = year - inp;
			alert('Your age is'+' '+age);
		}  else if (input.length === 4){
      event.preventDefault();
			age = year - input;
			alert('Your age is'+' '+age);
		} else if(input.length  !== NaN) {
      event.preventDefault();
			age = year - input;
			alert('Oops! Seems you entered something else! '+' '+ age );
		}
	}
  
	ageFinder.addEventListener('click', calculateAge, false);
  
})();

/*task 2
Задание 2. Пользователь вводит 2 числа. 
Найти и вывести максимальное из данных двух чисел. 
Учтите вариант равенства чисел.*/
(function() {
	'use strict';
	var btnForSecondTask = document.getElementById('task2');

	function maxnum() {
		var firstNumber = prompt( 'Please, enter first number:', ' ');
		var secondNumber = prompt( 'Please, enter second number:', ' ');
		var nums = [firstNumber, secondNumber];
		var  largestNumber = Math.max.apply(null, nums);
		var  smallestNumber = Math.min.apply(null, nums);
		
		if (largestNumber >= smallestNumber ) {
			console.log(nums);
      event.preventDefault();
			
			prompt('The largest number is :', largestNumber);

		} else if (largestNumber !== NaN || undefined) {
			alert('Please, try again and enter only numbers!');
      event.preventDefault();
		}
	}

btnForSecondTask.addEventListener('click', maxnum);
})();	

/* task 3
Задание 3. В первом подъезде номера квартир от 1 до 20, во втором от 21 до 64,  в третьем от 65 до 80. 
Пользователь вводит номер квартиры, необходимо указать в каком она подъезде. */

(function() {
	'use strict';

	var btnForThirdTask = document.getElementById('task3');

	function appartments() {
		var appartmentNumber = prompt( 'Please, enter the number of your appartment', ' ');

		if (appartmentNumber >= 1 && appartmentNumber <= 20) {
      event.preventDefault();
			alert('Your appartment belongs to the first entry');
		} else if (appartmentNumber >= 21 && appartmentNumber <= 64) {
      event.preventDefault();
			alert('Your appartment belongs to the second entry');
		} else if (appartmentNumber >= 65 && appartmentNumber <= 80) {
      event.preventDefault();
			alert('Your appartment belongs to the third entry');
		} else if (appartmentNumber !== NaN ) {
      event.preventDefault();
			alert('Please, try again and enter only numbers or check if your appartment is in a needed number range!');
		}

	}

	btnForThirdTask.addEventListener('click', appartments);

})();

/*Задача 4. Два поля ввода: Логин и пароль. Есть 3 пользователя:
ivan ->  333 ssss-> 666 gibs ->0000
Если введен правильный логин и пароль вывести “Добро пожаловать”, 
в противном случае - вывести “ошибка”.*/

// Correct
(function() {
	'use strict';

	var btnForFourthTask = document.getElementById('task4');

	function checklogin() {


		var userDb = {

			registeredUsers: [
				{
					login: 'ivan',
					password: 333
				},
				{
					login: 'ssss',
					password: 666
				},
				{
					login: 'gibs',
					password: 1111
				}
			]
		};

		var enterLogin = prompt( 'Please, enter your login:', ' ');
		var enterPassword = prompt( 'Please, enter your password:', ' ');

		function searchDB(dataBase) {
			for (var key in  dataBase) {
				for ( var i = 0, max = dataBase[key].length; i < max; i++ ) {

					if (dataBase[key][i].login === enterLogin && dataBase[key][i].password == enterPassword) {
            event.preventDefault();
						alert(enterLogin + ', welcome!');
						return;
					} else {
            event.preventDefault();
						alert('Something went wrong, please, check all fields!');
					}
				}
			}
		}
		searchDB(userDb);
	}

	btnForFourthTask.addEventListener('click', checklogin);
})();

/*Задание 5. Пользователь вводит 3 числа. 
Найти и вывести максимальное из данных трех чисел.*/
(function() {
	'use strict';
	var btnForFifthTask = document.getElementById('task5');

	function maxNumOfThree() {
		var firstNumber = prompt( 'Please, enter first number:', ' ');
		var secondNumber = prompt( 'Please, enter second number:', ' ');
		var thirdNumber = prompt( 'Please, enter third number:', ' ');

		var nums = [firstNumber, secondNumber,  thirdNumber];
		var  largestNumber = Math.max.apply(null, nums);
		var  smallestNumber = Math.min.apply(null, nums);
		
		if (largestNumber >= smallestNumber ) {
      event.preventDefault();
			console.log(nums);
			
			prompt('The largest number is :', largestNumber);

		} else if (largestNumber !== NaN || undefined) {
      event.preventDefault();
			alert('Please, try again and enter only numbers!');
		}
	}

	btnForFifthTask.addEventListener('click', maxNumOfThree);
})();	


/* LOOPS FOR tasks */
/*Задачи на цикл for*/


/*Вывести четные числа от 0 до 101. */
(function() {
	'use strict';

	var btnForLoopFirstTask = document.getElementById('loop-task1');

	for (var i = 0; i < 101; i++) {

		if(i%2 === 0) {
			// alert('result in browser console');
			console.log(i);
		}
	}
	// btnForLoopFirstTask.addEventListener('click', alert);
})();	


/*Вывести числа в следущей последовательности: 200 199 198 ... 0.*/
(function() {
	'use strict';
	var btnForLoopSecondTask = document.getElementById('loop-task2');

	for ( var  i = 200; i >= 1; i--) {
		// alert('result in browser console');
		console.log(i);
	}
	// btnForLoopSecondTask.addEventListener('click', alert);
})();


/*Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).*/
(function() {
	'use strict';

	var btnForLoopThirdTask = document.getElementById('loop-task3');

	function sumTo(n) {
		var sum = 0;
		for (var i = 1; i <= n; i++) {
			sum += i;
		}

		return sum;
		
	}

	// alert( sumTo(100) );
	console.log(sumTo(100) );

	btnForLoopThirdTask.addEventListener('click', sumTo);
})();

/*Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. 
Напечатайте результат. */
// btnForLoopFourthTask.onclick = function() {
// 	   form.classList.toggle('open');
// 	};

(function() {
 	'use strict';
 	var submit = document.getElementById('submit-pow');
 	var form = document.getElementById('form-to-pow');
 	var btnForLoopFourthTask = document.getElementById('loop-task4');

 	btnForLoopFourthTask.onclick = function() {
	   form.classList.toggle('open');
	};

 	function toPow() {
	 	var x = parseInt(document.getElementById('number').value);
	 	var n = parseInt(document.getElementById('pow').value);

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

	 			for (var i = 1; i < positivePow; i++) {
	 				number *= x;
	 				result = 1 / number;
	 			}

	 		} else if (isNaN(x)) {
	 			alert('It doesn\'t look like a number');
	 			result = 'It doesn\'t look like a number';
	 		} else if (isNaN(n)) {
	 			alert('It doesn\'t look like a number');
	 			result = 'It doesn\'t look like a number';
	 		}
	 		return result;
	 		return alert(result);
	 	} //end of function

	 	console.log(pow(x, n));
	 	alert('The answer: ' + pow(x, n));
 	}

 	submit.addEventListener('click', toPow);
})();

/*С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
Т.е.: 
1*7=7  
2*7=14 
3*7=21...*/
(function() {
 	'use strict';
 	var btnForLoopFifthTask = document.getElementById('loop-task5');


 	function multiplicationTable() {
 		for (var i = 1; i <=9; i++) {
 			var number = 1;
 			var multiplier = 7;
 			var result = i * multiplier;

 			console.log(i + "*" + multiplier +"=" + " " + result);
 			document.getElementById('result').innerHTML+=('\n' + i + " * " + multiplier + " = " + " " + result +'<br>');
 		}
 	}

btnForLoopFifthTask.addEventListener('click', multiplicationTable);
})();


/*С помощью цикла вывести произведение чисел от 1 до 50.*/
(function() {
 	'use strict';
 	var btnForLoopSixthTask = document.getElementById('loop-task6');

 	function numbersRange() {
 		var number = 1;
 		for (var i = 1; i <= 50; i++) {
 			number = number * i;
 			console.log(number);
 		}
 	}

	btnForLoopSixthTask.addEventListener('click', numbersRange);
})();

/*Выведите с помощью цикла коды спецсимволов от 1000 до 2000. 
Напомню, что спецсимвол получается комбинацией &#число;  Например &#1222;*/
(function() {
 	'use strict';
 	var btnForLoopSeventhTask = document.getElementById('loop-task7');

 		var test = String.fromCharCode([]);
 		function symbol(test) {

 			for (var i = 1000; i <= 2000; i++) {

 				var symb = String.fromCharCode(i);
				console.log(String.fromCharCode(i));
				// document.getElementById("symbols").innerHTML = symb;
        document.getElementById("symbols").innerHTML+= symb;
			}
 		}

	btnForLoopSeventhTask.addEventListener('click', symbol);
})();
