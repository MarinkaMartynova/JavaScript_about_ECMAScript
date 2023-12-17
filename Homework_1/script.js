// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 2;
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      get value() {
        return count;
      }
    };
  }
  
let counter = createCounter();
console.log(counter.value); 
counter.increment();
console.log(counter.value); 
counter.decrement();
console.log(counter.value); 


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
      return element;
    }
  
    for (let child of element.children) {
      let result = findElementByClass(child, className);
      if (result) {
        return result;
      }
    }  
    return null;
  }
  
// Пример использования
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement.innerHTML);

