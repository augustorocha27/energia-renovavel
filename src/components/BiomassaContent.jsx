import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  font-family: "Anton SC", sans-serif;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('https://plus.unsplash.com/premium_photo-1688124010168-659d723bf6c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center 10%;
`;

const HeroText = styled.h1`
  position: absolute;
  color: white;
  font-size: 48px;
  top: ${(props) => props.top || '50%'};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubText = styled.p`
  position: absolute;
  color: white;
  font-size: 24px;
  top: ${(props) => props.top || '60%'};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(#4169E1, #87CEFA);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionText = styled.p`
  font-size: 24px;
  line-height: 1.6;
  color: #555;
  text-align: justify;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 24px;
  color: #333;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
`;

const ApiSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
`;

const ApiTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(#4169E1, #87CEFA);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ApiList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ApiListItem = styled.li`
  font-size: 24px;
  color: #333;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
`;

const Biomass = () => {
  const [climateData, setClimateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados fictícios simulando uma resposta de API sobre o clima em São Paulo
  const simulatedClimateData = {
    biomassAvailability: 85, 
    temperature: 28, 
    humidity: 65, 
    condition: 'Ensolarado', 
    isFavorable: null,
  };

  useEffect(() => {
    setTimeout(() => {
      // Condição favorável para geração de energia a partir de biomassa baseada na disponibilidade de biomassa e nas condições climáticas
      if (simulatedClimateData.biomassAvailability >= 70 && simulatedClimateData.condition === 'Ensolarado') {
        simulatedClimateData.isFavorable = 'Favorável para geração de energia a partir de biomassa';
      } else {
        simulatedClimateData.isFavorable = 'Desfavorável para geração de energia a partir de biomassa';
      }

      setClimateData(simulatedClimateData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <HeroSection>
        <HeroText top="30%">Energia Biomassa: Sustentabilidade e Renovação</HeroText>
        <SubText top="50%">
          A energia de biomassa utiliza resíduos orgânicos para gerar eletricidade, contribuindo para a sustentabilidade.
        </SubText>
      </HeroSection>

      <Section>
        <SectionTitle>O Que é Energia Biomassa?</SectionTitle>
        <SectionText>
          A energia de biomassa é gerada a partir da queima ou decomposição de materiais orgânicos, como resíduos agrícolas, florestais e até lixo urbano. Esses materiais são transformados em energia térmica, que pode ser convertida em eletricidade. A biomassa é uma fonte renovável, pois os resíduos orgânicos se regeneram naturalmente, ao contrário dos combustíveis fósseis. Além disso, a biomassa ajuda a reduzir a quantidade de resíduos e emissões de carbono ao ser utilizada para a produção de energia.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Benefícios da Energia Biomassa</SectionTitle>
        <List>
          <ListItem>Redução de resíduos orgânicos</ListItem>
          <ListItem>Fonte de energia renovável e sustentável</ListItem>
          <ListItem>Ajuda na redução das emissões de gases de efeito estufa</ListItem>
          <ListItem>Geração de emprego no setor agrícola e florestal</ListItem>
          <ListItem>Reaproveitamento de materiais desperdiçados</ListItem>
        </List>
      </Section>

      <ApiSection>
        <ApiTitle>Dados - São Paulo</ApiTitle>
        {isLoading ? (
          <p>Carregando dados...</p>
        ) : (
          <ApiList>
            <ApiListItem>Disponibilidade de biomassa: {climateData.biomassAvailability}%</ApiListItem>
            <ApiListItem>Temperatura: {climateData.temperature}°C</ApiListItem>
            <ApiListItem>Umidade: {climateData.humidity}%</ApiListItem>
            <ApiListItem>Condição climática: {climateData.condition}</ApiListItem>
            <ApiListItem>Condições para geração de energia a partir de biomassa: {climateData.isFavorable}</ApiListItem>
          </ApiList>
        )}
      </ApiSection>
    </div>
  );
};

export default Biomass;
