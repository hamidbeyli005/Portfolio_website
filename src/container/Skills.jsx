import React, { useEffect, useState } from "react";
import { AppWrap ,MotionWrap} from "../wrapper";
import styled from "styled-components";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import ReactTooltip from "react-tooltip";

const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;
  @media screen and (min-width: 2000px) {
    font-size: 3.8rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  padding: 0 6rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const SkillsList = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
const Skill = styled(motion.div)`
  > p {
    font-weight: 500;
    margin-top: 0.5rem;
    color: var(--gray-color);
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
  }
`;
const Icon = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  @media screen and (min-width: 2000px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 70px;
    height: 70px;
  }
  > img {
    width: 50%;
  }
`;

const Experience = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
const ExpItem = styled.div`
  display: flex;
  gap: 3.5rem;
`;
const ExpYear = styled.div``;
const Year = styled.p`
  color: var(--secondary-color);
  font-weight: 800;
  font-size: 1rem;
  text-align: left;
  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }
`;
const Works = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }
  .skills-tooltip {
    max-width: 300px !important;
    background-color: var(--white-color) !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: var(--gray-color) !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem !important;
      max-width: 500px !important;
      line-height: 2 !important;
    }
  }
`;
const Work = styled(motion.div)`
  cursor: pointer;
`;

const WorkName = styled.h4`
  font-weight: 500;
`;
const Company = styled.p`
  color: var(--gray-color);
  font-weight: 400;
  margin-top: 5px;
`;

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <Container>
      <Title>Skills & Experiences</Title>
      <Wrapper>
        <SkillsList>
          {skills.map((skill, index) => (
            <Skill
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={index}
            >
              <Icon style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </Icon>
              <p>{skill.name}</p>
            </Skill>
          ))}
        </SkillsList>

        <Experience>
          {experiences.map((experience, index) => (
            <ExpItem key={index}>
              <ExpYear>
                <Year>{experience.year}</Year>
              </ExpYear>

              <Works>
                {experience.works.map((work, index) => (
                  <div key={index}>
                    <Work
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tip
                      data-for={work.name}
                      key={index}
                    >
                      <WorkName>{work.name}</WorkName>
                      <Company>{work.company}</Company>
                    </Work>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </div>
                ))}
              </Works>
            </ExpItem>
          ))}
        </Experience>
      </Wrapper>
    </Container>
  );
};

export default AppWrap(MotionWrap(Skills), "skills");
