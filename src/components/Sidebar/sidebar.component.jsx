import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Home } from "../../assets/sideBarImg/home.svg";
import { ReactComponent as About } from "../../assets/sideBarImg/about.svg";
import { ReactComponent as Skills } from "../../assets/sideBarImg/skills.svg";
import { ReactComponent as Works } from "../../assets/sideBarImg/works.svg";
import { ReactComponent as Contact } from "../../assets/sideBarImg/contact.svg";

import { ReactComponent as Facebook } from "../../assets/sideBarImg/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/sideBarImg/linkedin.svg";
import { ReactComponent as Github } from "../../assets/sideBarImg/github.svg";
import SwitchButton from "../Themebutton/themebutton.component";
import { ReactComponent as Logo } from "../../assets/pages-logo.svg";

import {
  Container,
  Header,
  LogoContainer,
  Nav,
  NavLink,
  LinkBlank,
  List,
  ChildrenList,
} from "./sidebar.styles";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Link to="*">
            <LogoContainer src={"../../assets/pages-logo.svg"} alt="My logo">
              <Logo />
            </LogoContainer><SwitchButton />
          </Link>
          
        </Header>
        <Nav>
          <NavLink exact to="*" name=".home()">
            <Home />
          </NavLink>
          <NavLink to="/about" name=".info personali() " replace>
            <About />
          </NavLink>
          <NavLink to="skills" name=".abilità()" replace>
            <Skills />
          </NavLink>
          <NavLink to="works" name=".progetti()" replace>
            <Works />
          </NavLink>
          <NavLink to="contacts" name=".contatti()" replace>
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
