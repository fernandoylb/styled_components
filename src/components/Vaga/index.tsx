import {
  VagaItem,
  Titulo,
  Lista,
  ItemLista,
  Link
} from './VagaStyles';

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaItem>
    <Titulo>{props.titulo}</Titulo>

    <Lista>
      <ItemLista>Localização: {props.localizacao}</ItemLista>
      <ItemLista>Senioridade: {props.nivel}</ItemLista>
      <ItemLista>Tipo de contratação: {props.modalidade}</ItemLista>
      <ItemLista>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ItemLista>
      <ItemLista>
        Requisitos: {props.requisitos.join(', ')}
      </ItemLista>
    </Lista>

    <Link href="#">
      Ver detalhes e candidatar-se
    </Link>
  </VagaItem>
);

export default Vaga;