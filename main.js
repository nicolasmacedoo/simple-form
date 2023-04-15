import { showCPFError, showEmailError, showNameError } from './showError'
import './style.css'
import { isValidCPF, formatarCPF } from './validateCPF.js'
import { validateEmail } from './validateEmail'

const form = document.querySelector('#form-cadastrar')
const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const cpfInput = document.querySelector('#cpf-input')

const name = nameInput.value
const cpf = cpfInput.value
const email = emailInput.value

nameInput.addEventListener('blur', showNameError)

emailInput.addEventListener('blur', showEmailError)

cpfInput.addEventListener('input', formatarCPF)

cpfInput.addEventListener('blur', (showCPFError))

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if(name === '') {
    showNameError()
    return
  }

  if(!isValidCPF(cpf)) {
    showCPFError()
    return
  }

  if(!validateEmail(email)) {
    showEmailError()
    return
  }

  nameInput.value = ''
  cpfInput.value = ''
  emailInput.value = ''

  const formData = {
    name,
    cpf,
    email
  }
    
  const formDataJSON = JSON.stringify(formData)
    
  console.log(formDataJSON)

})
