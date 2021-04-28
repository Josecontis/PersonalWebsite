import React from "react";

import TagsArea from "../../components/TagsArea";
import TextArea from "../../components/TextArea";
import {Text} from "./styles";

export default function About() {
  document.title = "Bio | Giuseppe Conticchio";
  return (
    <React.Fragment>
      <TagsArea />
      <TextArea title="Biografia"><br/>
        <Text>
          cc em Análise e Desenvolvimento de Sistemas pela Universidade
          Anhanguera em São Paulo desde 2015.    <br/><br/>
       
          Trabalho desde 2009 em uma empresa do ramo de 'Confecções' onde já fui
          alocado em diversas posições dentre os setores administrativo e
          financeiro, hoje atuando como Analista de Sistemas.<br/><br/>
        
          Continuo estudando, porém hoje com um novo foco, o de me tornar
          Desenvolvedor Full-Stack, acompanhando as tendências do mercado estudo
          hoje para construir aplicações não somente funcionais mas de imenso
          valor agregado, seguindo os padrões da comunidade desde o back ao
          front-end, utilizando APIs, Bibliotecas e Frameworks.
          </Text>
      </TextArea>
    </React.Fragment>
  );
}
