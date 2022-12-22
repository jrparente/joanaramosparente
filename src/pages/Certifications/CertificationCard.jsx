import { BtnDark, Subtitle, Card } from "../../components/Theme/Utils";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CertificationCard(props) {
  return (
    <Card>
      <Subtitle>{props.name}</Subtitle>
      <img src={props.imgURL} alt={props.name} />
      <BtnDark href={props.link} target="_blank">
        <FontAwesomeIcon icon={faUpRightFromSquare} />
        Check Certification
      </BtnDark>
    </Card>
  );
}
