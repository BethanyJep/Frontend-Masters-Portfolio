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


const calculator = document.querySelector('.screen')
const keys = calculator.querySelector('.button')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
     const key = e.target
     const action = key.dataset.action
     if (!action) {
         console.log('number key!')
     }
     if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}
 }
})