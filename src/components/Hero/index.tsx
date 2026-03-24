import { HeroContainer, Conteudo, Titulo } from './HeroStyles';

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <Conteudo>
        <Titulo>
          As melhores vagas para tecnologia, design e artes visuais.
        </Titulo>
      </Conteudo>
    </div>
  </HeroContainer>
);

export default Hero;