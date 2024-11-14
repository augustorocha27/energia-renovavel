import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  font-family: "Anton SC", sans-serif;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('https://plus.unsplash.com/premium_photo-1679917152317-170f1613fbfe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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

const EnergyPage = () => {
  const [climateData, setClimateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const simulatedClimateData = {
    windSpeed: 12, 
    windDirection: 'Norte', 
    temperature: 28, 
    humidity: 65, 
    condition: 'Ensolarado', 
    isFavorable: null,
  };

  useEffect(() => {
  
    setTimeout(() => {

      if (simulatedClimateData.windSpeed >= 10) {
        simulatedClimateData.isFavorable = 'Favorável para energia eólica';
      } else {
        simulatedClimateData.isFavorable = 'Desfavorável para energia eólica';
      }

      setClimateData(simulatedClimateData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <HeroSection>
        <HeroText top="30%">Energia Eólica: A Força do Vento</HeroText>
        <SubText top="50%">
          A energia eólica é uma fonte renovável, limpa e inesgotável, essencial para a transição energética global.
        </SubText>
      </HeroSection>

      <Section>
        <SectionTitle>O Que é Energia Eólica?</SectionTitle>
        <SectionText>
          A energia eólica é gerada a partir da força do vento, que é convertida em eletricidade por turbinas eólicas. O vento faz as lâminas das turbinas girarem, gerando energia mecânica, que é transformada em eletricidade por um gerador. Essa forma de energia é renovável, limpa e não emite gases poluentes, contribuindo para a redução das mudanças climáticas. Além disso, a energia eólica é uma das fontes mais competitivas, com baixo custo de operação após a instalação das turbinas. Ao ser inesgotável, também oferece benefícios ambientais e sociais, como a criação de empregos e o apoio à transição para um futuro mais sustentável.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Benefícios da Energia Eólica</SectionTitle>
        <List>
          <ListItem>Fontes renováveis e inesgotáveis</ListItem>
          <ListItem>Redução das emissões de CO2</ListItem>
          <ListItem>Geração de empregos e desenvolvimento econômico</ListItem>
          <ListItem>Baixo custo de operação e manutenção</ListItem>
          <ListItem>Não gera resíduos ou poluição atmosférica</ListItem>
        </List>
      </Section>

      <ApiSection>
        <ApiTitle>Dados - São Paulo</ApiTitle>
        {isLoading ? (
          <p>Carregando dados...</p>
        ) : (
          <ApiList>
            <ApiListItem>Velocidade do vento: {climateData.windSpeed} km/h</ApiListItem>
            <ApiListItem>Direção do vento: {climateData.windDirection}</ApiListItem>
            <ApiListItem>Temperatura: {climateData.temperature}°C</ApiListItem>
            <ApiListItem>Umidade: {climateData.humidity}%</ApiListItem>
            <ApiListItem>Condição climática: {climateData.condition}</ApiListItem>
            <ApiListItem>Condições para energia eólica: {climateData.isFavorable}</ApiListItem>
          </ApiList>
        )}
      </ApiSection>
    </div>
  );
};

export default EnergyPage;
