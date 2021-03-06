import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  background: black;
  width: 90px;
  z-index: 1;
  text-align: center;

  @media screen and (max-width: 800px) {
    width: 85px;
  }
`;

export const Header = styled.div`
  background: black;
  display: block;
  padding: 6px 5px;
 
  }
`;

export const LogoContainer = styled.div`
  display: block;
  margin: 3px 3px;
  vertical-align: top;
  background-image: url(${props=>props.src}) no-repeat top left;
  z-index: 3;
  *#G {
    fill: ${(props) => props.theme.glogo};
  }
  *#C {
    fill: ${(props) => props.theme.clogo};
  
}
`;

export const LinkBlank = styled.a``;

export const Nav = styled.nav`
  top: 30%;
  width: 100%;
  display: block;
  position: absolute;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.foreground};
`;

export const NavLink = styled(Link)`
  padding: 11px 30px;
  color: ${(props) => props.theme.second};
  display: block;
  position: relative;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.foreground};

  @media only screen and (max-width: 800px) {
    padding: 10px 27px;
  }
  @media only screen and (min-width: 800px) {
    > svg {
      transition: all 0.3s ease-out;
    }

    &.active,
    &:hover {
      color: ${(props) => props.theme.primary};
    }

    &:hover svg {
      opacity: 0;
    }

    &:after {
      font-family: "Zen Dots", cursive;
      font-size: 10px;
      letter-spacing: 1px;
      position: absolute;
      bottom: 30%;
      left: 0;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 0.3s ease-out;
    }

    &[name]:after {
      content: attr(name);
    }

    &:hover:after {
      opacity: 1;
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  height: 20px;
  bottom: 25%;
  width: 100%;
  display: block;
  padding: 0;
  list-style: none;
`;

export const ChildrenList = styled.li`
  > a {
    padding: 7px 0;
    display: block;
    width: 40%;
    margin: auto;
    color: ${(props) => props.theme.primary};
    transition: transform 0.5s;

    @media screen and (max-width: 700px) {
      width: 35%;
      padding: 5px 0;
    }

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
