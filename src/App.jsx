import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Projeto from './pages/Projeto.jsx'
import Regras from './pages/Regras.jsx'
import Seguranca from './pages/Seguranca.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import ProcessoIA from './pages/ProcessoIA.jsx'
import Contato from './pages/Contato.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="projeto" element={<Projeto />} />
        <Route path="regras" element={<Regras />} />
        <Route path="seguranca" element={<Seguranca />} />
        <Route path="tecnologias" element={<Tecnologias />} />
        <Route path="processo-ia" element={<ProcessoIA />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  )
}
