import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Agenda de Monitorias",
    descricao: "Marcação de horários entre alunos e monitores.",
    responsavel: "Bruno",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Firebase"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Biblioteca Comunitária",
    descricao: "Empréstimo e devolução de livros do bairro.",
    responsavel: "Carla",
    status: "Concluído",
    tecnologias: ["React", "Express", "MongoDB"],
    destaque: false,
  },
  {
    id: 4,
    titulo: "Diário de Estudos",
    descricao: "Registro de metas, horas e anotações por matéria.",
    responsavel: "Diego",
    status: "Planejamento",
    tecnologias: ["React", "Tailwind"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Mapa de Reciclagem",
    descricao: "Pontos de coleta seletiva da cidade em um só lugar.",
    responsavel: "Elisa",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Leaflet", "Node.js"],
    destaque: true,
  },
  {
    id: 6,
    titulo: "Quiz de Programação",
    descricao: "Perguntas rápidas para revisar lógica e JavaScript.",
    responsavel: "Felipe",
    status: "Concluído",
    tecnologias: ["React", "JavaScript"],
    destaque: false,
  },
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
