import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: black;
  width: 90px;
  z-index: 1;
  min-height: 100vh;
  max-height: 100vh;
  text-align: center;

  @media screen and (min-width: 320px) and (max-width: 819px) and (orientation: landscape) {
    min-height: 100vw;
  }
`;

export const Header = styled.div`
  background: black;
  display: block;
  padding: 1px 8px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 30px 3px;
  width: 100%;
`;

export const LinkBlank = styled.a``;

export const Nav = styled.nav`
  top: 27%;
  width: 100%;
  display: block;
  position: absolute;
  text-align: center;
  border-top: 1px solid #515152;
`;

export const NavLink = styled(Link)`
  padding: 12px 27px;
  color: ${props => props.theme.accent};
  display: block;
  position: relative;
  text-align: center;
  font-size: 25px;
  border-bottom: 1px solid #515152;

  > svg {
    transition: all 0.3s ease-out;
  }

  &.active,
  &:hover {
    color: ${props => props.theme.primary};
  }

  &:hover svg {
    opacity: 0;
  }

  &:after {
    font-size: 15px;
    letter-spacing: 1px;
    position: absolute;
    bottom: 30%;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &[name]:after {
    text-transform: uppercase;
    content: attr(name);
  }

  &:hover:after {
    opacity: 1;
  }
`;


export const List = styled.ul`
  position: absolute;
  height: 40px;
  bottom: 25%;
  width: 100%;
  display: block;
  padding: 0;
  list-style: none;
  

  @media only screen and (max-height: 619px) {
    display: none;
  }
`;

export const ChildrenList = styled.li`
  > a {
    padding: 7px 0;
    display: block;
    width: 40%;
    margin: auto;
    color: ${props => props.theme.primary};
    transition: transform .5s;

    &#github:hover {
      color: white;
      transform: scale(1.2);
    }
    &#facebook:hover {
      color: white;
      transform: scale(1.2);
    }
    &#linkedin:hover {
      color: white;
      transform: scale(1.2);
    }
  }
`;
