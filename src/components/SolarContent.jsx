import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  font-family: "Anton SC", sans-serif;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center 70%;
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

const EnergyPage = () => {
  const [climateData, setClimateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados fictícios simulando uma resposta de API sobre o clima em São Paulo
  const simulatedClimateData = {
    solarRadiation: 800, // em W/m²
    temperature: 28, 
    humidity: 65, 
    condition: 'Ensolarado', 
    isFavorable: null,
  };

  useEffect(() => {
    setTimeout(() => {
      // Condição favorável para geração de energia solar com base na radiação solar e nas condições climáticas
      if (simulatedClimateData.solarRadiation >= 600 && simulatedClimateData.condition === 'Ensolarado') {
        simulatedClimateData.isFavorable = 'Favorável para geração de energia solar';
      } else {
        simulatedClimateData.isFavorable = 'Desfavorável para geração de energia solar';
      }

      setClimateData(simulatedClimateData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <HeroSection>
        <HeroText top="30%">Energia Solar: Energia Limpa e Sustentável</HeroText>
        <SubText top="50%">
          A energia solar é uma das fontes mais promissoras e limpas, aproveitando a luz do sol para gerar eletricidade.
        </SubText>
      </HeroSection>

      <Section>
        <SectionTitle>O Que é Energia Solar?</SectionTitle>
        <SectionText>
          A energia solar é gerada a partir da radiação solar, que é convertida em eletricidade por meio de painéis solares. Esses painéis utilizam células fotovoltaicas para captar a luz do sol e transformá-la diretamente em energia elétrica. A energia solar é limpa, renovável e não emite gases poluentes, sendo uma das soluções mais eficazes para a transição energética. Ela pode ser utilizada tanto em áreas residenciais quanto comerciais e é uma alternativa cada vez mais acessível e eficiente para geração de eletricidade.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Benefícios da Energia Solar</SectionTitle>
        <List>
          <ListItem>Fonte de energia renovável e inesgotável</ListItem>
          <ListItem>Redução das emissões de CO2</ListItem>
          <ListItem>Baixo custo de operação e manutenção</ListItem>
          <ListItem>Possibilidade de instalação em diferentes locais (residenciais e comerciais)</ListItem>
          <ListItem>Geração de energia limpa e sustentável</ListItem>
        </List>
      </Section>

      <ApiSection>
        <ApiTitle>Dados - São Paulo</ApiTitle>
        {isLoading ? (
          <p>Carregando dados...</p>
        ) : (
          <ApiList>
            <ApiListItem>Radiação solar: {climateData.solarRadiation} W/m²</ApiListItem>
            <ApiListItem>Temperatura: {climateData.temperature}°C</ApiListItem>
            <ApiListItem>Umidade: {climateData.humidity}%</ApiListItem>
            <ApiListItem>Condição climática: {climateData.condition}</ApiListItem>
            <ApiListItem>Condições para geração de energia solar: {climateData.isFavorable}</ApiListItem>
          </ApiList>
        )}
      </ApiSection>
    </div>
  );
};

export default EnergyPage;
