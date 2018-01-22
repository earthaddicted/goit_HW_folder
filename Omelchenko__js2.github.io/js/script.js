'use strict'
// 1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>.
let magicBtn = document.getElementById('magic-btn');

function contentToParagraph() {
  let contentsElements = document.getElementById('new1'); 
  let arr = ['Alohomora!' ];
  
  for (let i = 0, max = arr.length; i < max; i++) {
    contentsElements.innerHTML +=  arr[i] + " ";
  }
}
magicBtn.addEventListener('click', contentToParagraph);

// 2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение. По нажатию “ОК” - массив выводится.

let arr = [];

let inputForValue = document.getElementById('input-value');
function addInputs(arr, num) {

  let arrIndex = arr.length;
  let p = document.getElementById("new");
  // let arrResult = document.getElementById("span-arr");
  
  p.innerHTML = "Array length: " + arrIndex + '<br>';
  // arrResult.innerHTML = "Array: " + arr[i] + '<br>';
  
    for(let i = 0; i < arrIndex; i++) {
      p.innerHTML +=  i + arr[i] + ' ';
    }
  // arrResult.innerHTML += arr + '  ';
  console.log(arr);
  
  
 
  }

addInputs(arr);

  // 3.	Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 
  let popBtn =  document.getElementById('button-pop');
  let shiftBtn =  document.getElementById('button-shift');
  let pushBtn =  document.getElementById('button-push');
  let unshiftBtn =  document.getElementById('button-unshift');
  
    function popArr() {
      arr.pop();
      addInputs(arr);
    }
    popBtn.addEventListener('click', popArr);

// 4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 
    function shiftArr() {
        arr.shift();
        addInputs(arr);
      }
    shiftBtn.addEventListener('click', shiftArr);


//5.	Добавьте кнопку push реализующую метод push() для введенного выше массива. Данные для записи необходимо считывать из input.

  function pushArr() {
      let pushContent =  document.getElementById('input-value').value;
      arr.push(pushContent);
      addInputs(arr);
      // document.getElementById('input-value').value=" ";
    }

  pushBtn.addEventListener('click', pushArr);

// 6.	Добавьте кнопку push реализующую метод push() для введенного выше массива. Данные для записи необходимо считывать из input.
    function unshiftArr() {
      let unshiftContent =  document.getElementById('input-value').value;
      arr.unshift(unshiftContent);
      addInputs(arr);
    }
    unshiftBtn.addEventListener('click', unshiftArr);


inputBtn.addEventListener('click', addInputs);
