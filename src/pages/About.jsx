import {
  StyledLink,
  Title,
  Subtitle,
  Paragraph,
  Section,
  TechStack,
  TechStackItem,
  FlexWrap,
  Tooltip,
  Highlight,
  Btn,
  FW600,
} from "../components/Theme/Utils";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const BtnLink = styled(Link)`
  padding: 0.7em 1.5em;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ theme }) => theme.textLight};
  background-color: ${({ theme }) => theme.accent};
  transition: transform 250ms ease 0s, filter 250ms ease 0s;
  &:hover {
    filter: hue-rotate(4deg) saturate(120%) brightness(120%);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export default function Contact() {
  return (
    <>
      <Section>
        <Title>About Me</Title>
        <Paragraph>
          I've always loved <Highlight>tinkering with code</Highlight> and{" "}
          <Highlight>programming my own solutions</Highlight> to problems and
          challenges. I've learned HTML and built my first website when I was 12
          years old, the internet was slow and billed by the minute. At that
          time was was also playing around with the code of my favourite
          computer game at the time (called Petz), trying to make new pet breeds
          and create fancy fur color combinations.
        </Paragraph>
        <Paragraph>
          Althought it was obvious to everyone
          <Tooltip
            data-title="Specially to my father, who paid the aforementioned internet
                    bills"
          >
            *
          </Tooltip>{" "}
          that programming was my calling, I decided to experiment with
          different career routes. I went to college for one semester of
          Biological Engeneering (I passed everything with mediocre grades,
          except Programming in which I created a really cool project written in
          Fortran simulating an environment of mutating bacterias, and had a
          final score of 19/20). But I ended up majoring in Hotel Management
          with a Post-Graduation in Sales and Marketing Management and working
          in the hotel and tourism industry for nearly 15 years. This was not a
          bad thing: it gave me a lot of{" "}
          <Highlight>
            experience in sales, account and relationship management
          </Highlight>
          , and an eye for{" "}
          <Highlight>
            detecting the best solutions to bring in new streams of revenue
          </Highlight>
          <Tooltip data-title="Who doesn't want that, right? 😉">*</Tooltip>.
        </Paragraph>

        <Paragraph>
          Fast forward a few years, to when I came across{" "}
          <StyledLink href="https://shecodes.io/" target="_blank">
            SheCodes
          </StyledLink>
          . My passion for programming kicked-in, I{" "}
          <Highlight>started learning how to code</Highlight> and{" "}
          <StyledLink to="/projects">working on some side-projects</StyledLink>.
          I have been loving to learn programming and am looking forward to{" "}
          <Highlight>working full time as a developer</Highlight>.
        </Paragraph>

        <Subtitle>Skills</Subtitle>
        <Paragraph>
          Through my studies I've gained some knowledge of computer science, web
          development and UX concepts, which I apply on the projects that I work
          on. Here is the current teck-stack that I'm most comfortable with:
        </Paragraph>
        <Paragraph>
          {" "}
          <FW600>Programming Languages:</FW600>{" "}
        </Paragraph>
        <TechStack>
          <TechStackItem>JavaScript ES6</TechStackItem>
        </TechStack>
        <Paragraph>
          <FW600>Frontend:</FW600>
        </Paragraph>
        <TechStack>
          <TechStackItem>HTML5</TechStackItem>
          <TechStackItem>CSS3</TechStackItem>
          <TechStackItem>React</TechStackItem>
          <TechStackItem>
            Bootstrap
            <Tooltip data-title="I'm comfortable with Bootstrap, but I prefer to find my own solutions to create responsive and beautiful UI.">
              *
            </Tooltip>
          </TechStackItem>
          <TechStackItem>Shopify Liquid</TechStackItem>
        </TechStack>
        <Paragraph>
          <FW600>Backend:</FW600>
        </Paragraph>
        <TechStack>
          <TechStackItem>Node.js</TechStackItem>
        </TechStack>
        <Paragraph>
          <FW600>Other Tools:</FW600>
        </Paragraph>
        <TechStack>
          <TechStackItem>Git</TechStackItem>
          <TechStackItem>Github</TechStackItem>
          <TechStackItem>npm</TechStackItem>
          <TechStackItem>API</TechStackItem>
          <TechStackItem>Figma</TechStackItem>
          <TechStackItem>Canva</TechStackItem>
          <TechStackItem>Adobe Photoshop</TechStackItem>
        </TechStack>
        <FlexWrap>
          <BtnLink to="/certifications">Check Certifications</BtnLink>
          <Btn href="https://www.linkedin.com/in/joanaparente" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
          </Btn>
        </FlexWrap>
      </Section>
    </>
  );
}
