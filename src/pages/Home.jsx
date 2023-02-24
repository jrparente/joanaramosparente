import styled from "styled-components";
import {
  StyledLink,
  Paragraph,
  Section,
  FW600,
} from "../components/Theme/Utils";

const Hello = styled.p`
  font-family: "Spectral", serif;
  font-size: 3rem;
`;

const HomeTitle = styled.h1`
  font-family: "Spectral", serif;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default function Home() {
  const date = new Date();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let today = days[date.getDay() - 1];

  return (
    <>
      <Section>
        <Hello>Hi, happy {today} 👋</Hello>
        <HomeTitle>
          I'm <FW600>Joana Parente</FW600>, a{" "}
          <StyledLink
            href="https://github.com/jrparente/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer in-training
          </StyledLink>{" "}
          and{" "}
          <StyledLink
            href="https://www.linkedin.com/in/joanaparente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jack of all trades
          </StyledLink>
          .
        </HomeTitle>
        <Paragraph>
          I'm an experienced Business Manager who has decided to pursue a career
          in web development. I am passionate about coding and creating
          beautiful, functional, and user-friendly websites.
        </Paragraph>
      </Section>
    </>
  );
}
