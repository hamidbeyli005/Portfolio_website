import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import { AppWrap, MotionWrap } from "../wrapper";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Title = styled.h2`
  text-align: center;
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;
  @media screen and (min-width: 2000px) {
    font-size: 3.8rem;

  }
`;

const Text = styled.span`
  color: var(--secondary-color);
`;
const Container = styled.div``;
const WorkFilter = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  > .item-active {
    background-color: var(--secondary-color);
    color: #fff;
  }
`;
const Button = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  color: #000;
  cursor: pointer;
  font-weight: 800;
  font-size: 15px;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--secondary-color);
    color: #fff;
  }
`;
const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  width: 270px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  }
  background: var(--white-color);
  padding: 16px;
`;

const Top = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`;
const Deatails = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: 400ms opacity;

  &:hover{
    opacity: 1;
  }

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-family: var(--font-base);
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 50%;
      height: 50%;
      color: var(--white-color);
    }
  }
`;

const Content = styled.div`
  padding: 0.5rem;
  width: 100%;
  position: relative;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    margin-top: 1rem;
    line-height: 1.5;
    @media screen and (min-width: 2000px) {
      margin-top: 3rem;
    }
  }

  p {
    position: absolute;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: #fff;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--gray-color);
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <Container>
      <Title>
        My Creative <Text>Portfolio </Text> Section
      </Title>
      <WorkFilter>
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <Button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </Button>
          )
        )}
      </WorkFilter>
      <Wrapper
        animate={animateCard}
        transition={{ duration: 0.2, delayChildren: 0.2 }}
      >
        {filterWork.map((work, index) => (
          <Card>
            <Top>
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <Deatails
                // whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </Deatails>
            </Top>

            <Content>
              <h4>{work.title}</h4>
              <div>
                <p>{work.tags[0]}</p>
              </div>
            </Content>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default AppWrap(MotionWrap(Work), "work");
