// Leia um valor de ponto flutuante com duas casas decimais.
// Este valor representa um valor monetário.
// A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto.
// As notas consideradas são de 100, 50, 20, 10, 5, 2.
// As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
// A seguir mostre a relação de notas necessárias.

function leitor(floatingValue) {
  const nota100 = Math.floor(floatingValue / 100);
  const nota50 = Math.floor(floatingValue % 100 / 50);
  const nota10 = Math.floor(floatingValue % 100 % 50 / 10);
  const nota5 = Math.floor(floatingValue % 100 % 50 % 10 / 5);
  const nota2 = Math.floor(floatingValue % 100 % 50 % 10 % 5 / 2);
  const nota1 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 / 1);
  const moeda50 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 % 1 / 0.5);
  const moeda25 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 % 1 % 0.5 / 0.25);
  const moeda10 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 % 1 % 0.5 % 0.25 / 0.10);
  const moeda05 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 % 1 % 0.5 % 0.25 % 0.10 / 0.05);
  const moeda01 = Math.floor(floatingValue % 100 % 50 % 10 % 5 % 2 % 1 % 0.5 % 0.25 % 0.10 % 0.05 / 0.01);

  console.log(
    `
    NOTAS:
    ${nota100} nota(s) de R$ 100.00
    ${nota50} nota(s) de R$ 50.00
    ${nota10} nota(s) de R$ 10.00
    ${nota5} nota(s) de R$ 5.00
    ${nota2} nota(s) de R$ 2.00
    ${nota1} nota(s) de R$ 1.00
    MOEDAS:
    ${moeda50} moeda(s) de R$ 0.50
    ${moeda25} moeda(s) de R$ 0.25
    ${moeda10} moeda(s) de R$ 0.10
    ${moeda05} moeda(s) de R$ 0.05
    ${moeda01} moeda(s) de R$ 0.01
    `
  );
}

leitor(299.99);
