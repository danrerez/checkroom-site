import { Link } from 'react-router-dom'
import { CalendarX } from 'lucide-react'

export default function NaoEncontrada() {
  return (
    <section className="secao nao-encontrada">
      <div className="container">
        <CalendarX size={48} />
        <h1>Esta sala não existe</h1>
        <p>A página que você procurou não foi encontrada. Que tal voltar para o início?</p>
        <Link to="/" className="botao botao--primario">Ir para o início</Link>
      </div>
    </section>
  )
}
