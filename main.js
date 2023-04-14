import './style.css'
import { validateCPF } from './validateCPF.js'
import { validateEmail } from './validateEmail'

const form = document.querySelector('#form-cadastrar')
const errorName = document.querySelector('#error-name')
const errorCPF = document.querySelector('#error-cpf')
const errorEmail = document.querySelector('#error-email')

const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input')
const cpfInput = document.querySelector('#cpf-input')

// código para criar mascara de CPF

function createMaskCPF(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

nameInput.addEventListener('blur', () => {
  if(nameInput.value === '') {
    errorName.innerHTML = 'Preecha um nome'
    nameInput.classList.add('invalid')
  }else {
    errorName.innerHTML = ''
    nameInput.classList.remove('invalid')
  }
})

emailInput.addEventListener('blur', () => {
  if (!validateEmail(emailInput.value)) {
    errorEmail.innerHTML = 'Preencha um e-mail válido'
    emailInput.classList.add('invalid')
  } else {
    errorEmail.innerHTML = ''
    emailInput.classList.remove('invalid')
  }
})

cpfInput.addEventListener('blur', () => {
  // if (!validateCPF(cpfInput.value)) {
  //   errorCPF.innerHTML = 'Preencha um CPF válido'
  //   cpfInput.classList.add('invalid')
  // } else {
  //   errorCPF.innerHTML = ''
  //   cpfInput.classList.remove('invalid')
  // }

  cpfInput.value = createMaskCPF(cpfInput.value)
  console.log(cpfInput.value)

})

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('#name-input').value
  const cpf = document.querySelector('#cpf-input').value
  const email = document.querySelector('#email-input').value

  if(name === '') {
    errorName.innerHTML = 'Preecha um nome'
    nameInput.classList.add('invalid')
  }else {
    nameInput.classList.remove('invalid')
  }

  if(!validateCPF(cpf)) {
    errorCPF.innerHTML = 'Preencha um CPF válido'
  }

  if(!validateEmail(email)) {
    errorEmail.innerHTML = 'Preencha um e-mail válido'
  }

  // if(name === '' || !validateCPF(cpf) || !validateEmail(email)){
  //   console.log('error')
  // }else {
  //   const formData = {
  //     name,
  //     cpf,
  //     email
  //   }
  
  //   const formDataJSON = JSON.stringify(formData)
  
  //   console.log(formDataJSON)
  // }

  const formData = {
        name,
        cpf,
        email
      }
    
      const formDataJSON = JSON.stringify(formData)
    
      console.log(formDataJSON)

})

/** 
 * validar ao sair do input de cpf
 * event keydown validar ao dgitar
 const cpf = document.querySelector('#cpf-input')

cpf.addEventListener('blur', () => {
  if(!validateCPF(cpf.value)) {
    console.log('erro')
  }
}) */