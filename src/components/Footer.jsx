import styled from "styled-components";
import { StyledLink } from "./Theme/Utils";
import {
  faGithub,
  faLinkedinIn,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  @media (min-width: 45rem) {
    flex-direction: row;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 1.5rem;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const SmallText = styled.p`
  font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <IconsContainer>
        <StyledLink
          href="https://www.linkedin.com/in/joanaparente"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink href="https://github.com/jrparente" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </StyledLink>
        <StyledLink href="https://codepen.io/Jrparente/" target="_blank">
          <FontAwesomeIcon icon={faCodepen} />
        </StyledLink>
        <StyledLink
          href="mailto:jrparente@gmail.com"
          className="text-dark fs-400"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </StyledLink>
      </IconsContainer>
      <TextContainer>
        <SmallText>
          Designed and coded by me. Open sourced on{" "}
          <StyledLink
            href="https://github.com/jrparente/joanaramosparente"
            className="link"
            target="_blank"
          >
            GitHub
          </StyledLink>{" "}
          and deployed with Netlify. Feedback is appreciated 😌
        </SmallText>
        <SmallText>Last updated on: December 21st 2022</SmallText>
      </TextContainer>
    </FooterContainer>
  );
}
