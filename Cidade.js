let cidades = [
  {nome: 'Sao Paulo', populacao: 12000000},
  {nome: 'Rio de Janeiro', populacao: 6700000},
  {nome: 'Bandeirantes', populacao: 31000},
  {nome: 'Florianopolis', populacao: 508826},
  {nome: 'Curitiba', populacao: 1948626}
];

let megaCidade = cidades.filter(function (e){
  return e.populacao > 10000000;
});

console.log(megaCidade);