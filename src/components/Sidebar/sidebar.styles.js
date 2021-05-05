import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 95vh;
  background: black;
  width: 110px;
  z-index: 1;
  text-align: center;

  @media screen and (max-width: 800px){
    width: 85px;
  }
`;

export const Header = styled.div`
  background: black;
  display: block;
  padding: 6px 5px;
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 30px 3px;
  width: 100%;
  height: 100%;
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
  padding: 17px 35px;
  color: ${props => props.theme.accent};
  display: block;
  position: relative;
  text-align: center;
  border-bottom: 1px solid #515152;

 @media only screen and (max-width: 800px) {
    padding: 10px 27px;
  }
  @media only screen and (min-width: 800px) {
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
    font-family: 'Zen Dots', cursive;
    font-size: 13px;
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
    color: ${props => props.theme.primary};
    transition: transform .5s;

    @media screen and (max-width: 700px){
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
