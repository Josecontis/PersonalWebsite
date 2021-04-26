import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/header-logo.svg";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Skills } from "../../assets/skills.svg";
import { ReactComponent as Works } from "../../assets/works.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";

import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

import {
  Container,
  Header,
  Logo,
  Nav,
  NavLink,
  LinkBlank,
  List,
  ChildrenList
} from "./styles";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Link to="/">
            <Logo src={logo} alt="Giuseppe Conticchio Logo" />
          </Link>
        </Header>
        <Nav>
          <NavLink exact to="/" name=".home()" activeClassName="active">
            <Home />
          </NavLink>
          <NavLink to="about" name=".info personali()" activeClassName="active">
            <About />
          </NavLink>
          <NavLink to="skills" name=".abilità()" activeClassName="active">
            <Skills />
          </NavLink>
          <NavLink to="works" name=".progetti()" activeClassName="active">
            <Works />
          </NavLink>
          <NavLink to="contact" name=".contatti()" activeClassName="active">
            <Contact />
          </NavLink>
        </Nav>
        <List>
          <ChildrenList>
            <LinkBlank
              id="github"
              href="https://github.com/Josecontis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </LinkBlank>
          </ChildrenList>
          <ChildrenList>
            <LinkBlank
              id="linkedin"
              href="https://www.linkedin.com/in/giuseppe-conticchio-01a414159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </LinkBlank>
          </ChildrenList>
          <ChildrenList>
            <LinkBlank
              id="facebook"
              href="https://www.facebook.com/giuseppe.conticchio.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </LinkBlank>
          </ChildrenList>
        </List>
      </Container>
    </React.Fragment>
  );
}
