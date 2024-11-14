import styled from "styled-components";
import { Link } from 'react-router-dom';  // Importação do Link

const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#4169E1, #87CEFA);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;  /* Evita o overflow devido ao padding */
  font-family: "Anton SC", sans-serif;
  
  position: sticky;  /* Tornar o header fixo */
  top: 0;  /* Fixa o header no topo da página */
  z-index: 1000; /* Garante que o header ficará sobre outros elementos */
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;

  &::before {
    font-size: 4rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }

  font-family: "Anton SC", sans-serif;

  /* Garantir que o link dentro da logo não herde o estilo de link */
  a {
    text-decoration: none;  /* Remove o sublinhado */
    color: inherit;         /* Herda a cor do logo (branco) */
  }
`;


const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: "Anton SC", sans-serif;
`;

const NavLink = styled(Link)`  // Mudando de <a> para <Link>
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    font-weight: 600;
  }
  font-family: "Anton SC", sans-serif;
`;

const SignInButton = styled.a`
  background-color: #4169E1;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b0e8;
  }

  &::before {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  font-family: "Anton SC", sans-serif;
`;

const Header = () => (
  <HeaderContainer>
   
    <Logo>
      <Link to="/">Energias Renováveis</Link>  
    </Logo>
    <Nav>
      <NavLink to="/energia-eolica">Eólica</NavLink>
      <NavLink to="/hidro-eletrica">Hidrelétrica</NavLink>
      <NavLink to="/bio-massa">Biomassa</NavLink>
      <NavLink to="/solar-energia">Solar</NavLink>
      <SignInButton href="/">Home</SignInButton>
    </Nav>
  </HeaderContainer>
);

export default Header;
