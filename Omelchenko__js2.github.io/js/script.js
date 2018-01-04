//1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>.
var magicBtn = document.getElementById('magic-btn');

function contentToParagraph() {
  var contentsElements = document.getElementById('new1'); 
  var arr = ['Alohomora!' ];
  
  for (var i = 0, max = arr.length; i < max; i++) {
    contentsElements.innerHTML +=  arr[i] + " ";
  }
}
// magicBtn.addEventListener('click', contentToParagraph);

// 2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение. По нажатию “ОК” - массив выводится.
var inputBtn = document.getElementById('input-btn');
var arr = [ ];
// var inputForIndex = document.getElementById('input-index');
var inputForValue = document.getElementById('input-value');

function addInputs() {
  var arrIndex = arr.length;
  var p = document.getElementById("new");
  var arrResult = document.getElementById("span-arr");
  
  p.innerHTML = "Array length: " + arrIndex + '<br>';
  // arrResult.innerHTML = "Array: " + arr[i] + '<br>';
  
    for(var i = 0; i < arrIndex; i++) {
      p.innerHTML +=  i + arr[i] + ' ';
    }
  console.log(arr);
  }
  // 3.	Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 
  var popBtn =  document.getElementById('button-pop');
  var shiftBtn =  document.getElementById('button-shift');
  var pushBtn =  document.getElementById('button-push');
  var unshiftBtn =  document.getElementById('button-unshift');
  
    function popArr() {
      arr.pop();
      addInputs();
    }
    popBtn.addEventListener('click', popArr);

// 4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 
    function shiftArr() {
        arr.shift();
        addInputs();
      }
    shiftBtn.addEventListener('click', shiftArr);


//5.	Добавьте кнопку push реализующую метод push() для введенного выше массива. Данные для записи необходимо считывать из input.

  function pushArr() {
      var pushContent =  document.getElementById('input-value').value;
      arr.push(pushContent);
      addInputs();
      document.getElementById('input-value').value=" ";
    }

  pushBtn.addEventListener('click', pushArr);

// 6.	Добавьте кнопку push реализующую метод push() для введенного выше массива. Данные для записи необходимо считывать из input.
    function unshiftArr() {
      var unshiftContent =  document.getElementById('input-value').value;
      arr.push(unshiftContent);
      addInputs();
      document.getElementById('input-value').value=" ";
    }
    unshiftBtn.addEventListener('click', unshiftArr);


inputBtn.addEventListener('click', addInputs);


