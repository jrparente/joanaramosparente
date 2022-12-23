import {
  BtnDark,
  Card,
  FlexWrap,
  CardSubtitle,
} from "../../components/Theme/Utils";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CertificationCard(props) {
  return (
    <Card>
      <CardSubtitle>{props.name}</CardSubtitle>
      <img src={props.imgURL} alt={props.name} />
      <FlexWrap>
        {props.link && (
          <BtnDark href={props.link} target="_blank">
            <FontAwesomeIcon icon={faUpRightFromSquare} /> Check Certification
          </BtnDark>
        )}
        {props.finalProject.liveDemo && (
          <BtnDark href={props.finalProject.liveDemo} target="_blank">
            <FontAwesomeIcon icon={faUpRightFromSquare} /> View Final Project
          </BtnDark>
        )}
      </FlexWrap>
    </Card>
  );
}
