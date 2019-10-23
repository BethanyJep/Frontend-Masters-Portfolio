// function Sum(num1, num2) {
//     return num1 + num2;
// }
// function Sub(num1, num2) {
//     return num1 - num2;
// }
// function Multiplication(num1, num2) {
//     return num1 * num2;
// }
// function Division(num1, num2) {
//     return num1 / num2;
// }

// let num1 = ('1', '2', '3', '4', '5', '6', '7', '8', '9')
// if (!action) {
//          console.log('number key!')
//      }
//      if (
//          action === 'add' ||
//          action === 'subtract' ||
//          action === 'multiply' ||
//          action === 'divide'
//      ) {
//          console.log('operator key!')
//      }
//      if (action === 'clear') {
//          console.log('clear key!')
//      }
//      if (action === 'calculate') {
//          console.log('equal key!')
//      }

const calculator = document.querySelector('.screen')
const keys = document.querySelector('.item')

keys.addEventListener('click', e => {
    if (e.target.matches('.item5')) {
     console.log('reached a number')
    }
})