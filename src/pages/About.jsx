import {
  Link,
  Title,
  Subtitle,
  Paragraph,
  Section,
  TechStack,
  TechStackItem,
  Btn,
  FlexWrap,
  Tooltip,
  Highlight,
} from "../components/Theme/Utils";

export default function Contact() {
  return (
    <>
      <Section>
        <Title>About Me</Title>
        <Paragraph>
          I've always loved <Highlight>tinkering with code</Highlight> and{" "}
          <Highlight>programming my own solutions</Highlight> to problems and
          challenges. I've learned HTML and built my first website when I was 12
          years old, the internet was slow and billed by the minute. At that
          time was was also playing around with the code of my favourite
          computer game at the time (called Petz), trying to make new pet breeds
          and create fancy fur color combinations.
        </Paragraph>
        <Paragraph>
          Althought it was obvious to everyone
          <Tooltip
            data-title="Specially to my father, who paid the aforementioned internet
                    bills"
          >
            *
          </Tooltip>{" "}
          that programming was my calling, I decided to experiment with
          different career routes. I went to college for one semester of
          Biological Engeneering (I passed everything with mediocre grades,
          except Programming in which I created a really cool project written in
          Fortran simulating an environment of mutating bacterias, and had a
          final score of 19/20). But I ended up majoring in Hotel Management
          with a Post-Graduation in Sales and Marketing Management and working
          in the hotel and tourism industry for nearly 15 years. This was not a
          bad thing: it gave me a lot of{" "}
          <Highlight>
            experience in sales, account and relationship management
          </Highlight>
          , and an eye for{" "}
          <Highlight>
            detecting the best solutions to bring in new streams of revenue
          </Highlight>
          <Tooltip data-title="Who doesn't want that, right? 😉">*</Tooltip>.
        </Paragraph>

        <Subtitle>TL;DR</Subtitle>

        <Paragraph>
          Fast forward a few years, to when I came across{" "}
          <Link href="#" target="_blank" className="link">
            SheCodes
          </Link>
          . My passion for programming kicked-in, I{" "}
          <Highlight>started learning how to code</Highlight> and{" "}
          <Link href="#projects" className="link">
            working on some side-projects
          </Link>
          . I have been loving to learn programming and am looking forward to{" "}
          <Highlight>working full time as a developer</Highlight>.
        </Paragraph>

        <Subtitle>Skills</Subtitle>
        <Paragraph>
          Through my studies I've gained some knowledge of computer science, web
          development and UX concepts, which I apply on the projects that I work
          on. Here is the current teck-stack that I'm most comfortable with:
        </Paragraph>
        <TechStack>
          <TechStackItem>HTML5</TechStackItem>
          <TechStackItem>CSS3</TechStackItem>
          <TechStackItem>JavaScript ES6</TechStackItem>
          <TechStackItem>React</TechStackItem>
          <TechStackItem>Git</TechStackItem>
          <TechStackItem>
            Bootstrap
            <Tooltip data-title="I'm comfortable with Bootstrap, but I prefer to find my own solutions to create responsive and beautiful UI.">
              *
            </Tooltip>
          </TechStackItem>
          <TechStackItem>API</TechStackItem>
          <TechStackItem>Shopify Liquid</TechStackItem>
        </TechStack>
        <FlexWrap>
          <Btn href="/">Check Certifications</Btn>
          <Btn href="https://www.linkedin.com/in/joanaparente" target="_blank">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </Btn>
        </FlexWrap>
      </Section>
    </>
  );
}
