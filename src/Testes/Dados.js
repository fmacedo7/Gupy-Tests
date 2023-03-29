const fs = require("fs");

fs.readFile("dados.json", "utf8", (err, data) => {
  if (err) throw err;

  const jsonData = JSON.parse(data);

  // Calcula o menor faturamento ocorrido em um dia do mês
  const menorFaturamento = jsonData.reduce((min, dia) => {
    if (dia.valor !== 0 && dia.valor < min) {
      return dia.valor;
    }
    return min;
  }, Infinity);
  console.log(`Menor faturamento: ${menorFaturamento}`);

  // Calcula o maior faturamento ocorrido em um dia do mês
  const maiorFaturamento = jsonData.reduce((max, dia) => {
    if (dia.valor > max) {
      return dia.valor;
    }
    return max;
  }, -Infinity);
  console.log(`Maior faturamento: ${maiorFaturamento}`);

  // Calcula o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
  const diasAcimaDaMedia =
    jsonData
      .filter((dia) => dia.valor > 0)
      .reduce((total, dia) => total + dia.valor, 0) /
    jsonData.filter((dia) => dia.valor > 0).length;

  const quantidadeDiasAcimaDaMedia = jsonData.filter(
    (dia) => dia.valor > diasAcimaDaMedia
  ).length;
  console.log(`Dias acima da média: ${quantidadeDiasAcimaDaMedia}`);
});
