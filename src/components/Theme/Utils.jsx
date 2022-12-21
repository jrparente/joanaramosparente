import styled from "styled-components";

// Layouts

export const Section = styled.section`
  margin-top: 6.5rem;
`;

export const FlexWrap = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

// Typography

export const Link = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.accent};
  transition: transform 250ms ease 0s, filter 250ms ease 0s;
  &:hover,
  &:focus {
    filter: hue-rotate(4deg) saturate(120%) brightness(120%);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const Title = styled.p`
  font-family: "Spectral", serif;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 3rem;
`;

export const Subtitle = styled.p`
  font-family: "Spectral", serif;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const FW600 = styled.span`
  font-weight: 600;
`;

export const Tooltip = styled.span`
  position: relative;
  font-weight: 600;
  color: ${({ theme }) => theme.accent};
  &:hover:after {
    content: attr(data-title);
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.body};
    border-radius: 0 0 125px 3px/3px 85px 5px 55px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    min-width: 200px;
  }
`;

export const Highlight = styled.span`
  position: relative;
  padding: 0.2rem 0.25rem;
  z-index: -1;
  border-radius: 0 0 125px 3px/3px 85px 5px 55px;
  font-weight: 500;
  background: ${({ theme }) => theme.highlight};
`;

// Components

export const Btn = styled.a`
  font-size: 1.5rem;
  padding: 0.7em 1.5em;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.accent};
  margin-top: 1rem;
  margin-bottom: 2rem;
  transition: transform 250ms ease 0s, filter 250ms ease 0s;
  &:hover {
    filter: hue-rotate(4deg) saturate(120%) brightness(120%);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const BtnDark = styled.a`
  font-size: 1.5rem;
  padding: 0.7em 1.5em;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
  margin-top: 1rem;
  margin-bottom: 2rem;
  transition: transform 250ms ease 0s, filter 250ms ease 0s;
  &:hover {
    filter: hue-rotate(4deg) saturate(120%) brightness(120%);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const TechStack = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const TechStackItem = styled.li`
  font-size: 1.2rem;
  padding: 0.1em 0.5em;
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.body};
`;

export const Card = styled.div`
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 50px 100px rgb(50 50 93 / 5%), 0 15px 35px rgb(50 50 93 / 10%),
    0 5px 15px rgb(0 0 0 / 10%);
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
`;