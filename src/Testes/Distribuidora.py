faturamentoMensal = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
}

totalFaturamento = sum(faturamentoMensal.values())

for estado, faturamento in faturamentoMensal.items():
    percentual = round((faturamento / totalFaturamento) * 100, 1)
    print(f'{estado}: {percentual}%')
