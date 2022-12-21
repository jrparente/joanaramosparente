import {
  BtnDark,
  FlexWrap,
  FW600,
  Paragraph,
  TechStack,
  TechStackItem,
  Subtitle,
  Card,
} from "../../components/Theme/Utils";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard(props) {
  const techstack = props.techstack.map((item) => {
    return <TechStackItem key={item}>{item}</TechStackItem>;
  });

  return (
    <Card>
      <Subtitle>
        <FW600>{props.name}</FW600>
      </Subtitle>

      <Paragraph>{props.description}</Paragraph>

      <TechStack>{techstack}</TechStack>

      <FlexWrap>
        {props.links.github && (
          <BtnDark
            href={props.links.github}
            target="_blank"
            key={`git-${props.id}`}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </BtnDark>
        )}
        {props.links.live && (
          <BtnDark
            href={props.links.live}
            target="_blank"
            key={`live-${props.id}`}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} /> Live Website
          </BtnDark>
        )}
        {props.links.instagram && (
          <BtnDark
            href={props.links.instagram}
            target="_blank"
            key={`insta-${props.id}`}
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </BtnDark>
        )}
      </FlexWrap>
    </Card>
  );
}
