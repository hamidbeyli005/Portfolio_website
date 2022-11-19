import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import { AppWrap,MotionWrap } from '../wrapper';


const Container = styled.div``;

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

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
`;
const Card = styled(motion.div)`
  width: 190px;
  @media screen and (min-width: 2000px) {
    width: 370px;
    margin: 2rem 4rem;
  }

  > h2 {
    font-size: 1rem;
    font-weight: 800;
    color: var(--black-color);
    text-align: left;
    margin-bottom: 4px;

    @media screen and (min-width: 2000px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 0.9rem;
    }
  }
  > p {
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 10px;
  @media screen and (min-width: 2000px) {
    height: 320px;
  }
`;

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <Container id="about">
      <Title>
        I Know That <Text>Good Developer</Text>
        <br />
        Means <Text>Good Business</Text>
      </Title>
      <Wrapper>
        {abouts.map((about, index) => (
          <Card
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4, type: "tween" }}
          >
            <Image src={urlFor(about.imgUrl)} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default AppWrap(MotionWrap( About),"about");
