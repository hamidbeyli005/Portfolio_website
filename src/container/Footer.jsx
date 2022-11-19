import { AppWrap, MotionWrap } from "../wrapper";
import styled from "styled-components";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  /* width: 60%; */
  align-items: center;
  padding-bottom: 2rem;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
  color: var(--black-color);
  text-transform: capitalize;
  @media screen and (min-width: 2000px) {
    font-size: 3.8rem;
  }
`;
const Cards = styled.div`
  display: flex;
  gap: 2.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
const Card = styled.div`
  background: ${(props) => props.bgColor || "palevioletred"};
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin: 1rem 0;
  min-width: 290px;
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  > img {
    width: 40px;
    height: 40px;
    @media (max-width: 425px) {
      width: 30px;
      height: 30px;
    }
  }
  > p {
    color: var(--gray-color);
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
    font-weight: 500;
  }
  &:hover {
    box-shadow: 0 0 25px #f2f7fb;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Input = styled.input`
  background: #edf2f8;
  transition: all 0.3s ease-in-out;
  background-color: var(--primary-color);
  border: none;
  border-radius: 7px;
  color: var(--secondary-color);
  outline: none;
  padding: 0.95rem;
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: left;
  &:hover {
    box-shadow: 0 0 25px var(--primary-color);
  }
`;
const Textarea = styled.textarea`
  background-color: var(--primary-color);
  border: none;
  border-radius: 7px;
  color: var(--secondary-color);
  font-family: var(--font-base);
  outline: none;
  padding: 0.95rem;
  width: 100%;
  height: 170px;
  resize: vertical;

  &:hover {
    box-shadow: 0 0 25px var(--primary-color);
  }
`;
const Button = styled.button`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 10px;
  color: var(--white-color);
  cursor: pointer;
  font-family: var(--font-base);
  font-weight: 500;
  margin: 1.5rem 0 0;
  outline: none;
  padding: 1rem 2rem;
  transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
`;

const Footer = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Title>Take A Coffee & Chat With Me</Title>
      <Cards>
        <Card bgColor="#FEF4F5">
          <img src={images.email} alt="" />
          <p>hemidbeyli2020@gmail.com</p>
        </Card>
        <Card bgColor="#F2F7FB">
          <img src={images.mobile} alt="" />
          <p>+994 (060) 331-2804</p>
        </Card>
      </Cards>
      {isFormSubmitted ? (
        <Title> Thank you for getting in touch!</Title>
      ) : (
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder="Your Name"></Input>
          <Input
            type="email"
            name="user_email"
            placeholder="Your Email"
          ></Input>
          <Textarea name="message" placeholder="Your Message"></Textarea>
          <Button type="submit" onClick={() => setLoading(true)}>
            {" "}
            {loading ? "Sending.." : "Send Message"}{" "}
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AppWrap(MotionWrap(Footer), "contact");
