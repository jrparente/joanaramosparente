import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paragraph, Section, Title } from "../components/Theme/Utils";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <>
      <Section>
        <Title>404 - Not Found</Title>
        <Paragraph>
          Looks like the page you were looking for decided to take a break! 🦥
          You will be redirected to the homepage soon!
        </Paragraph>
      </Section>
    </>
  );
}
