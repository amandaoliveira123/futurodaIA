const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
        enunciado: "A IA pode ajudar na medicina?",
        alternativas: [
            "Sim, pode auxiliar no diagnóstico de doenças.",
            "Não, nunca poderá ser usada em hospitais."
        ]
},
{
        enunciado: "A IA vai substituir todos os empregos?",
        alternativas: [
            "Não, vai transformar e criar novas profissões.",
            "Sim, ninguém mais precisará trabalhar."
        ]
},
{
        enunciado: "A IA pode aprender com os erros?",
        alternativas: [
            "Sim, ela pode melhorar com novos dados.",
            "Não, sempre repete os mesmos erros.
"
        ]
},
{
        enunciado: "A IA pode ser usada na educação?",
        alternativas: [
            "Sim, pode ajudar alunos a aprender mais rápido.",
            "Não, porque não entende nada de estudo."
        ]
},
{
        enunciado: "A IA pode ser perigosa se mal usada?",
        alternativas: [
            "Sim, precisa de regras para evitar riscos.",
            "Não, é sempre totalmente segura."
        ]
},
