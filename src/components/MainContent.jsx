import React from 'react';
import styled from 'styled-components';


const BodyContainer = styled.div`
  font-family: "Anton SC", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HeroSection = styled.section`
  font-family: "Anton SC", sans-serif;
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1503350860469-854c1c495118?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
`;


const HeroText = styled.h1`
  position: absolute;
  color: white;
  font-size: 48px;
  top: ${(props) => props.top || '50%'};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, -50%);
`;


const PaddedSection = styled.section`
  font-family: "Anton SC", sans-serif;
  max-width: 1200px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  height: 600px;
  padding-top: 100px;
  padding-bottom: 150px;
`;

// Metade com imagem
const ImageHalf = styled.div`
  flex: 1;
  background-image: url('https://plus.unsplash.com/premium_photo-1678167657994-5b96138b6abb?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  border-radius: 20px 0 0 20px;
   
`;
const ImageHalf2 = styled.div`
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1679820022126-5002e68546e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  border-radius: 20px 0 0 20px;
   
`;
const ImageHalf3 = styled.div`
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  border-radius: 20px 0 0 20px;
   
`;
const ImageHalf4 = styled.div`
  flex: 1;
  background-image: url('https://images.unsplash.com/photo-1621853028127-488a65f4c22c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  border-radius: 20px 0 0 20px;
   
`;


const YellowHalf = styled.div`
  font-family: "Anton SC", sans-serif;
  flex: 1;
  background: linear-gradient(#4169E1, #87CEFA);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  padding: 20px;
  text-align: center;
  border-radius: 0 20px 20px 0;
  
`;


function MainContent() {
  return (
    <>
      <BodyContainer>
        <HeroSection>
          <HeroText top="50%" left="50%">Conheça mais sobre as energia renováveis</HeroText>
        </HeroSection>

        <PaddedSection>
          <ImageHalf2 />
          <YellowHalf>
          A energia eólica é gerada pela conversão do vento em eletricidade usando turbinas eólicas. É uma das fontes de energia renovável mais limpas e tem se expandido rapidamente nos últimos anos.
          </YellowHalf>
        </PaddedSection>
        <PaddedSection>
          <ImageHalf/>
          <YellowHalf>
          A energia hidrelétrica é gerada pelo aproveitamento do movimento da água em grandes represas. A força da água em queda ou em movimento é convertida em eletricidade através de turbinas.
          </YellowHalf>
        </PaddedSection>
        <PaddedSection>
          <ImageHalf3 />
          <YellowHalf>
          A energia solar é gerada a partir da luz e do calor do sol, captados por painéis solares fotovoltaicos ou sistemas térmicos. 
          </YellowHalf>
        </PaddedSection>
        <PaddedSection>
          <ImageHalf4/>
          <YellowHalf>
          A biomassa é a energia produzida a partir de matéria orgânica, como resíduos agrícolas, florestais e até lixo. Esses materiais são queimados ou convertidos em biocombustíveis, como o etanol, para gerar eletricidade ou calor. 
          </YellowHalf>
        </PaddedSection>

      </BodyContainer>
    </>
  );
}

export default MainContent;
