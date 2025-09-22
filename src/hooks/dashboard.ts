import { usuariosMock } from "@/data/data";

export const quantidadeAtivo = usuariosMock.filter(
    (user) => user.situacao === "Ativo"
  ).length;
export const quantidadeInativo = usuariosMock.filter(
    (user) => user.situacao === "Inativo"
  ).length;
export const somaSalarios = usuariosMock.reduce((soma, user) => {
    return soma + user.salarioBruto;
  }, 0);
export const salarioMedio =
    usuariosMock.length > 0 ? somaSalarios / usuariosMock.length : 0;

export const QuantidadeEscolariedade1 = usuariosMock.filter(
    (user) => user.escolaridade === "Ensino Superior Completo"
  ).length;
export const QuantidadeEscolariedade2 = usuariosMock.filter(
    (user) => user.escolaridade === "Ensino Médio Completo"
  ).length;
export const QuantidadeEscolariedade3 = usuariosMock.filter(
    (user) => user.escolaridade === "Especialização"
  ).length;
export const QuantidadeEscolariedade4 = usuariosMock.filter(
    (user) => user.escolaridade === "Mestrado"
  ).length;
export const QuantidadeEscolariedade5 = usuariosMock.filter(
    (user) => user.escolaridade === "Ensino Técnico"
  ).length;
export const QuantidadeEscolariedade6 = usuariosMock.filter(
    (user) => user.escolaridade === "Pós-graduação"
  ).length;
export const QuantidadeEscolariedade7 = usuariosMock.filter(
    (user) => user.escolaridade === "Ensino Superior Incompleto"
  ).length;

export const chartConfigEscolariedade = {
    valor:{
        label: "Grau",
        color: "#3D769E"
    }
}

export const chartDataEscolariedade = [
    {grau:"Ensino Superior Completo", valor:QuantidadeEscolariedade1},
    {grau:"Ensino Médio Completo", valor:QuantidadeEscolariedade2},
    {grau:"Especialização", valor:QuantidadeEscolariedade3},
    {grau:"Mestrado", valor:QuantidadeEscolariedade4},
    {grau:"Ensino Técnico", valor:QuantidadeEscolariedade5},
    {grau:"Pós-graduação", valor:QuantidadeEscolariedade6},
    {grau:"Ensino Superior Incompleto", valor:QuantidadeEscolariedade7},
]

export const generoMasculino = usuariosMock.filter(
    (user) => user.genero === "Masculino"
  ).length;

export const generoFeminino = usuariosMock.filter(
  (user) => user.genero === "Feminino"
).length;


export const chatDataGenero = [
  { genero: "feminino", visitors: generoFeminino, fill: "#e0218a" },
  { genero: "maculino", visitors: generoMasculino, fill: "#3D769E" },
]
export const chatConfigGenero = {
  chrome: {
    label: "feminino",
    color: "var(--chart-1)",
  },
  safari: {
    label: "masculino",
    color: "var(--chart-2)",
  },
} 

const quantidadePorEstado: Record<string,number> = {};

usuariosMock.forEach((user) =>{
  const estado = user.endereco.estado;
  if(quantidadePorEstado[estado]){
    quantidadePorEstado[estado] += 1;
  } else {
    quantidadePorEstado[estado] = 1;
  }
})

export const chartDataEstados = Object.entries(quantidadePorEstado).map(
  ([estado, quantidade]) => ({
    name: estado,
    valor: quantidade,
    fill: "#3D769E"
  })
);




export const chartConfigEstados = {
  SP: {
    label: "SP",
    color: "var(--chart-1)",
  },
  DF: {
    label: "DF",
    color: "var(--chart-1)",
  },
  BA: {
    label: "BA",
    color: "var(--chart-1)",
  },
  CE: {
    label: "CE",
    color: "var(--chart-1)",
  },
  RS: {
    label: "RS",
    color: "var(--chart-1)",
  },
  GO: {
    label: "GO",
    color: "var(--chart-1)",
  },
  PR: {
    label: "PR",
    color: "var(--chart-1)",
  },
  ES: {
    label: "ES",
    color: "var(--chart-1)",
  },
  MG: {
    label: "MG",
    color: "var(--chart-1)",
  },
  RJ: {
    label: "RJ",
    color: "var(--chart-1)",
  },
  PE: {
    label: "PE",
    color: "var(--chart-1)",
  },
  SC: {
    label: "SC",
    color: "var(--chart-1)",
  },
  RR: {
    label: "RR",
    color: "var(--chart-1)",
  },
};