import React, { useState } from "react";
import styled from "styled-components";
import { images } from "../constants";
import { HiMenuAlt4 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

const Nav = styled.nav`
  padding: 1rem 2rem;

  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  z-index: 2;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 90px;
    height: 20px;
    @media screen and (min-width: 2000px) {
      width: 180px;
      height: 40px;
    }
  }
  > span {
    font-size: 1.5rem;
    color: #000000;
    font-weight: 500;
    padding-left: 20px;
    >span{
      color:red
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 26px;
  @media screen and (max-width: 900px) {
    display: none;
  }
  > li {
    cursor: pointer;

    > div {
      width: 5px;
      height: 5px;
      background: transparent;
      border-radius: 50%;

      margin-bottom: 5px;
      margin-left: 46%;
    }
    > a {
      color: var(--gray-color);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 500;
      transition: all 0.3s ease-in-out;
      font-size: 15px;
      @media screen and (min-width: 2000px) {
        font-size: 30px;
      }
      &:hover {
        color: var(--secondary-color);
      }
    }
    &:hover {
      > div {
        background: var(--secondary-color);
      }
    }
  }
`;
const Menu = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);

  svg {
    width: 70%;
    height: 70%;
    color: var(--white-color);
  }

  div {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;

    padding: 1rem;

    width: 80%;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;

    background: url("../assets/bgWhite.png");
    background-color: var(--white-color);
    background-size: cover;
    background-repeat: repeat;

    box-shadow: 0px 0px 20px rgba(168, 168, 168, 0.15);

    svg {
      width: 35px;
      height: 35px;
      color: var(--secondary-color);
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      li {
        margin: 1rem;

        a {
          color: var(--gray-color);
          text-decoration: none;
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: 500;

          transition: all 0.3s ease-in-out;

          &:hover {
            color: var(--secondary-color);
          }
        }
      }
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  @media screen and (min-width: 900px) {
    height: 0;
  }
`;
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav>
      <Logo>
        <span>
          <span>H.</span>
          Hamid
        </span>
      </Logo>

      <Ul>
        {["home", "about", "work", "skills", "contact"].map((item, index) => (
          <li key={index}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </Ul>

      <Menu>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <GrClose onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
