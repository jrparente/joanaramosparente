import { Link, Paragraph, Section, Title } from "../components/Theme/Utils";

export default function Contact() {
  return (
    <Section>
      <Title>Contacts</Title>
      <Paragraph>
        Feel free to reach out, if you're looking for a developer, have a
        question, or just want to connect.
      </Paragraph>
      <Paragraph>
        <Link href="mailto:jrparente@gmail.com" className="link">
          jrparente@gmail.com
        </Link>
      </Paragraph>
    </Section>
  );
}
