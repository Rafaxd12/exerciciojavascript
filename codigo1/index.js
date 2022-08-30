var ValorDoEmprestimo = Number(window.prompt("Digite o valor:"))
var quantidadeMeses = Number(window.prompt("Digite a quantidade de meses"))
var taxaDeJuros =0.06
var M = ValorDoEmprestimo*(1 + taxaDeJuros)**quantidadeMeses

document.write("<h1>O Valor final do emprestimo é:<h1>"+ M.toFixed(2))