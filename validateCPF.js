function calculateDigit(cpfArray) {
  let total = 0;
  let multiplier = cpfArray.length + 1;
  cpfArray.forEach(digit => {
    total += digit * multiplier;
    multiplier--;
  });
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}

export function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,''); // Remove tudo que não é dígito
  if (cpf.length != 11) return false; // Verifica o tamanho do CPF

  const cpfArray = Array.from(cpf);
  const cpfArrayWithoutLastDigit = cpfArray.slice(0, -2);
  const firstDigit = Number(cpfArray[9]);
  const secondDigit = Number(cpfArray[10]);
  const firstDigitCalculated = calculateDigit(cpfArrayWithoutLastDigit);
  const secondDigitCalculated = calculateDigit(cpfArrayWithoutLastDigit.concat(firstDigitCalculated));
  console.log(firstDigitCalculated)
  console.log(secondDigitCalculated)
  return firstDigit === firstDigitCalculated && secondDigit === secondDigitCalculated;
}

export function formatarCPF() {
  var cpf = document.getElementById("cpf-input").value;
  cpf = cpf.replace(/\D/g, ""); // Remove tudo que não é dígito
  cpf = cpf.substring(0, 11); // Limita o CPF a 11 dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o terceiro e o quarto dígitos
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Coloca um ponto entre o sétimo e o oitavo dígitos
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca um hífen entre o décimo e o décimo primeiro dígitos
  document.getElementById("cpf-input").value = cpf;
}