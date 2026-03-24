import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import { ListaVagasContainer } from './ListaVagasStyles'

type Vaga = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: Vaga[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLowerCase().includes(filtro)
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />

      <ListaVagasContainer>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </ListaVagasContainer>
    </div>
  )
}

export default ListaVagas