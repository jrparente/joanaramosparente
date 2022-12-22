import { Section, Title } from "../../components/Theme/Utils";
import styled from "styled-components";
import CertificationData from "./CertificationData";
import CertificationCard from "./CertificationCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  gap: 4rem;
  padding: 2rem 0;
  margin: 2rem 0;
`;

export default function Certifications() {
  const card = CertificationData.map((item) => {
    return <CertificationCard key={item.id} {...item} />;
  });
  return (
    <Section>
      <Title>Certifications</Title>
      <Grid>{card}</Grid>
    </Section>
  );
}
