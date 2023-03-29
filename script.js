let portos = [
  {
    "cidade": "Pernambuco (PE)",
    "quantidadeDePortos": 2 + ' ' + '(' + ((2 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Santa Catarina (SC)",
    "quantidadeDePortos": 3 + ' ' + '(' + ((3 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Maranhão (MA)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Paraíba (PB)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "São Paulo (SP)",
    "quantidadeDePortos": 2 + ' ' + '(' + ((2 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Paraná (PR)",
    "quantidadeDePortos": 2 + ' ' + '(' + ((2 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Rio Grande do Sul (RS)",
    "quantidadeDePortos": 3 + ' ' + '(' + ((3 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Rondônia (RO)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Santa Catarina (SC)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Amapá (AP)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Rio de Janeiro (RJ)",
    "quantidadeDePortos": 5 + ' ' + '(' + ((5 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Amazonas (AM)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Espiríto Santos (ES)",
    "quantidadeDePortos": 2 + ' ' + '(' + ((2 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Bahia (BA)",
    "quantidadeDePortos": 3 + ' ' + '(' + ((3 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Alagoas (AL)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Rio Grande do Norte (RN)",
    "quantidadeDePortos": 2 + ' ' + '(' + ((2 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Ceará (CE)",
    "quantidadeDePortos": 1 + ' ' + '(' + ((1 / 35) * 100).toFixed(2) + '%' + ')'
  },
  {
    "cidade": "Pará (PA)",
    "quantidadeDePortos": 3 + ' ' + '(' + ((3 / 35) * 100).toFixed(2) + '%' + ')'
  }
]

const tabela = document.querySelector('tbody')
portos.map((item) => {
  tabela.innerHTML = tabela.innerHTML + `<tr>
    <td>${item.cidade}</td>
    <td>${item.quantidadeDePortos}</td>
  </tr>`
})