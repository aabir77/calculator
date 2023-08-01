

class Calculator {
 constructor(previousOperandTextElement, currentOperandTextElement) {                // it will take the inputs data and operaions, here will be previous and current data as it will be in ooutput
  this.previousOperandTextElement = previousOperandTextElement 
  this.currentOperandTextElement = currentOperandTextElement
  this.clear()
 }

 clear() {                                // creating class for every operation
  this.currentOperand = ''               // delete current element first
  this.previousOperand = ''      
  this.operation = undefined              // after finishing call this fn in construction.

}

delete() {
 
}

appendNumber(number) {             //Take the given number by user
  if (number == '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {

}

compute() {

}

updateDisplay () {
  this.currentOperandTextElement.innerText = this.currentOperand      // if there is a no .like 7 in the current operand after calling update it will update with current whatever valule we press
  console.log('updated')

}

}

const numberButtons = documnent.querySelectorAll('[data-number]')
const operationButtons  = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButoon = documnent.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator  = new Calculator(previousOperandTextElement,
currentOperandTextElement)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innertext)
      calculator.updateDisplay()
    })
  })