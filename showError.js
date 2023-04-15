import { validateEmail } from './validateEmail'
import { isValidCPF } from './validateCPF.js'

const errorName = document.querySelector('#error-name')
const errorCPF = document.querySelector('#error-cpf')
const errorEmail = document.querySelector('#error-email')

const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const cpfInput = document.querySelector('#cpf-input')

export function showNameError() {
  if(nameInput.value === '') {
    errorName.innerHTML = 'Preecha um nome'
    nameInput.classList.add('invalid')
  } else {
    errorName.innerHTML = ''
    nameInput.classList.remove('invalid')
  }
}

export function showEmailError() {
  if (!validateEmail(emailInput.value)) {
    errorEmail.innerHTML = 'Preencha um e-mail válido'
    emailInput.classList.add('invalid')
  } else {
    errorEmail.innerHTML = ''
    emailInput.classList.remove('invalid')
  }
}

export function showCPFError() {
  if(!isValidCPF(cpfInput.value)) {
    errorCPF.innerHTML = 'Preencha um CPF válido'
    cpfInput.classList.add('invalid')
  } else {
    errorCPF.innerHTML = ''
    cpfInput.classList.remove('invalid')
  }
}