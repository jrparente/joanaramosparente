import {
  BtnDark,
  Card,
  FlexWrap,
  CardSubtitle,
} from "../../components/Theme/Utils";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SmallerBtn = styled(BtnDark)`
  font-size: 1rem;
`;

const SmallerTitle = styled(CardSubtitle)`
  font-size: 1rem;
`;

export default function CertificationCard(props) {
  return (
    <Card>
      <SmallerTitle>{props.name}</SmallerTitle>
      <img src={props.imgURL} alt={props.name} />
      <FlexWrap>
        {props.link && (
          <SmallerBtn href={props.link} target="_blank">
            <FontAwesomeIcon icon={faUpRightFromSquare} /> Check Certification
          </SmallerBtn>
        )}
        {props.finalProject.liveDemo && (
          <SmallerBtn href={props.finalProject.liveDemo} target="_blank">
            <FontAwesomeIcon icon={faUpRightFromSquare} /> View Final Project
          </SmallerBtn>
        )}
      </FlexWrap>
    </Card>
  );
}
