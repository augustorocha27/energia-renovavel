import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  background: linear-gradient(#4169E1, #87CEFA);
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 30px;
  margin-top: 40px; /* Adiciona um afastamento do conteúdo principal */
  font-family: "Anton SC", sans-serif;
`;


const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  
  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
    font-family: "Anton SC", sans-serif;
    
    &:hover {
      color: #fff;
    }
  }
`;

const FooterBottom = styled.div`
  font-size: 12px;
  margin-top: 20px;
  font-family: "Anton SC", sans-serif;
`;


const ContactSection = styled.div`
  width: 100%;
  max-width: 800px;
   font-size: 30px;
  padding: 30px;
  border-radius: 10px;
  
  margin-bottom: 30px;
  color: #333;
`;

const ContactTitle = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-size: 30px;
  color: #fff;
`;

const InputField = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  margin-bottom: 15px;
  color: #fff;
  font-size: 30px;
`;

const TextAreaField = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  color: #fff;
  height: 150px;
  margin-bottom: 15px;
  font-size: 30px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #4169E1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 30px;

  &:hover {
    background-color: #87CEFA;
  }
`;

const ContactInfo = styled.div`
 ;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  font-size: 30px;
  color: #fff;
`;


const Footer = () => {
  return (
    <FooterContainer>
    

      {/* Seção de Contato */}
      <ContactSection>
        <ContactTitle>Entre em Contato</ContactTitle>
        <InputField type="text" placeholder="Seu nome" />
        <InputField type="email" placeholder="Seu e-mail" />
        <TextAreaField placeholder="Sua mensagem..." />
        <SubmitButton type="submit">Enviar</SubmitButton>

        {/* Informações de contato */}
        <ContactInfo>
          <div><strong>Telefone:</strong> (11) 1234-5678</div>
          <div><strong>Email:</strong> contato@energiasrenovaveis.com</div>
          <div><strong>Endereço:</strong> Rua Exemplo, 123, São Paulo, SP</div>
        </ContactInfo>
      </ContactSection>

    
    </FooterContainer>
  );
};

export default Footer;
