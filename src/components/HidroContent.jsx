import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  font-family: "Anton SC", sans-serif;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1709131121922-028189a2c984?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center 80%;
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

const HidroPage = () => {
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
 
      if (simulatedClimateData.humidity >= 60 && simulatedClimateData.condition === 'Ensolarado') {
        simulatedClimateData.isFavorable = 'Favorável para geração de energia hidrelétrica';
      } else {
        simulatedClimateData.isFavorable = 'Desfavorável para geração de energia hidrelétrica';
      }

      setClimateData(simulatedClimateData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <HeroSection>
        <HeroText top="30%">Energia Hidrelétrica: O Poder das Águas</HeroText>
        <SubText top="50%">
          A energia hidrelétrica é uma das fontes mais utilizadas e confiáveis de energia renovável no Brasil.
        </SubText>
      </HeroSection>

      <Section>
        <SectionTitle>O Que é Energia Hidrelétrica?</SectionTitle>
        <SectionText>
          A energia hidrelétrica é gerada a partir do movimento das águas dos rios, que são represadas e liberadas para mover turbinas em usinas hidrelétricas. Essa energia é renovável, pois a água é um recurso que pode ser reutilizado, e a geração de eletricidade não gera emissões de CO2 diretamente. As hidrelétricas são responsáveis por uma grande parte da eletricidade consumida no Brasil, especialmente em períodos de alta demanda. Porém, a dependência de chuvas e da quantidade de água disponível pode influenciar a eficiência da geração de energia.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Benefícios da Energia Hidrelétrica</SectionTitle>
        <List>
          <ListItem>Fontes renováveis e inesgotáveis</ListItem>
          <ListItem>Baixa emissão de gases de efeito estufa</ListItem>
          <ListItem>Grande capacidade de geração de energia</ListItem>
          <ListItem>Armazenamento de energia em reservatórios</ListItem>
          <ListItem>Benefícios sociais e econômicos para as regiões onde estão localizadas</ListItem>
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
            <ApiListItem>Condições para geração hidrelétrica: {climateData.isFavorable}</ApiListItem>
          </ApiList>
        )}
      </ApiSection>
    </div>
  );
};

export default HidroPage;
