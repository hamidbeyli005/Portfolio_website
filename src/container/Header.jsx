import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { images } from "../constants";
import { AppWrap } from "../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 6rem 2rem 0rem ;

  @media screen and (min-width: 2000px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    padding: 6rem 1rem 2rem 0;
  }
`;
const Left = styled(motion.div)`
  flex: 0.75;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    align-items: flex-start;
    margin-left: 5rem;
  }
`;
const Center = styled(motion.div)`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
`;
const Circle = styled(motion.img)`
  position: absolute;
  left: 10%;
  right: 0;
  bottom: 0;
  z-index: 0;
  width: 90%;
  height: 90%;
`;
const ProfileImg = styled(motion.img)`
  width: 90%;
  object-fit: contain;
  z-index: 1;
`;
const Right = styled(motion.div)`
  flex: 0.75;
  display: flex;
  flex-direction: column;

  gap: 4.5rem;
  margin-left: 1.5rem;
  margin-top: 36px;
  @media screen and (min-width: 2000px) {
    margin-top: 6rem;
    margin-left: 2rem;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1.5rem auto;
  }
  @media screen and (max-width: 650px) {
    gap: 1rem;

    justify-content: center;
  }
`;
const Icon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white-color);
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  border-radius: 50%;

  > img {
    height: 100%;
    padding: 1rem;
  }

  &:nth-child(2) {
    width: 150px;
    height: 150px;
    margin-left: 2rem;
    > img {
      padding: 1.6rem;
    }
  }
  &:last-child {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 2000px) {
    img {
      padding: 2rem;
    }
    &:nth-child(2) {
      width: 300px;
      height: 300px;
      > img {
        padding: 3rem;
      }
    }

    &:nth-child(3) {
      width: 170px;
      height: 170px;
    }

    &:nth-child(1) {
      width: 200px;
      height: 200px;
    }
  }

  @media screen and (max-width: 1200px) {
    /* width: 100%; */
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;

    & {
      margin: 1rem;
    }
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 15px;
  background: var(--white-color);
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  padding: 1rem 2rem;
  gap: 1rem;
  @media screen and (max-width: 450px) {
    padding: 0.5rem 1rem;
    gap: 0.6rem;
  }
  /* @media screen and (max-width: 350px) {
    padding: 0.5rem 0.8rem;
  } */
  &:first-child {
    margin-bottom: 3rem;
  }
  &:last-child {
    margin-bottom: 2rem;
  }

  > span {
    font-size: 2.5rem;
    @media screen and (min-width: 2000px) {
      font-size: 5rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 2rem;
    }
  }
  p {
    color: var(--gray-color);
    font-size: 0.8rem;
    line-height: 1.4;
    @media screen and (min-width: 2000px) {
      font-size: 1.5rem;
    }
  }
  h1 {
    font-size: 2.75rem;
    font-weight: 800;
    text-align: center;
    color: var(--black-color);
    @media screen and (min-width: 2000px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 2.5rem;
    }
  }
`;

const Header = () => {
  return (
    <Container id="home">
      <Left
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Badge>
          <span>👋</span>
          <div>
            <p>Hello, I am</p>
            <h1>Hamid</h1>
          </div>
        </Badge>
        <Badge style={{ display: "inline-block", textAlign: "end" }}>
          <p>WEB DEVELOPER</p>
          <p>FREELANCER</p>
        </Badge>
      </Left>

      <Center
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <ProfileImg src={images.profile} alt=""  />
        <Circle
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
        ></Circle>
      </Center>

      <Right variants={scaleVariants} whileInView={scaleVariants.whileInView}>
        {[images.flutter, images.redux, images.sass].map((icon, index) => (
          <Icon key={index}>
            <img src={icon} alt=""  />
          </Icon>
        ))}
      </Right>
    </Container>
  );
};

export default AppWrap(Header,"home");
