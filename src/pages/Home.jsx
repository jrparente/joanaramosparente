import styled from "styled-components";
import { Link, Paragraph, Section, FW600 } from "../components/Theme/Utils";

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
          <Link
            href="https://github.com/jrparente/"
            target="_blank"
            rel="noopener noreferrer"
            Link
          >
            Developer in-training
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.linkedin.com/in/joanaparente"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jack of all trades
          </Link>
          .
        </HomeTitle>
        <Paragraph>
          I'm currently learning the fundamentals of{" "}
          <FW600>front-end development</FW600>. My goal is to build web
          applications that are user-friendly, written in code that is easy to
          maintain and understand.
        </Paragraph>
      </Section>
    </>
  );
}
