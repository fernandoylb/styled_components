import { FormEvent, useState } from 'react'
import { FormContainer, Campo, Botao } from './FormStyles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Botao type="submit">
        Pesquisar
      </Botao>
    </FormContainer>
  )
}

export default FormVagas