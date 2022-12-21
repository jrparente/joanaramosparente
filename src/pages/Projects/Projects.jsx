import {
  Btn,
  FlexWrap,
  Paragraph,
  Section,
  Title,
} from "../../components/Theme/Utils";
import ProjectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  gap: 4rem;
  margin: 2rem 0;
`;

export default function Projects() {
  const card = ProjectData.map((item) => {
    return <ProjectCard key={item.id} {...item} />;
  });
  return (
    <Section>
      <Title>Projects</Title>
      <Paragraph>
        Since I've started on this learning path, I've always kept busy, and I
        am always working on a project. Take a look at some of my favourites:
      </Paragraph>

      <Grid>{card}</Grid>

      <FlexWrap>
        <Btn href="https://github.com/jrparente/" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> More Projects
        </Btn>
        <Btn href="https://codepen.io/Jrparente" target="_blank">
          <FontAwesomeIcon icon={faCodepen} /> Coding Playground
        </Btn>
      </FlexWrap>
    </Section>
  );
}
