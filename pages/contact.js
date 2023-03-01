import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar"
import HomePageBackground from "../public/images/contactBackground.jpg";
import { db } from "../utils/firebase";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";


const ContactPage = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let author = e.target.author.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    AddData(author, email, message);
  };

  async function AddData(author, email, message) {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        author: author,
        email: email,
        message: message,
      });

      setSuccessMessage("You have successfully sent your message! Thank you!");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Wrapper>
        <NavBar />
        <Image src={HomePageBackground} className="h-screen"/>

        <ContactWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 3 }}
        >
          {!successMessage ? (
            <AboutMeContainer>
              <Title>Contact Form</Title>
              <HR />
              <form onSubmit={onSubmitHandler}>
                <InputContainer>
                  <NavTitle>
                    <label htmlFor="item_title">Your name: </label>
                  </NavTitle>
                  <Input
                    id="author"
                    type="text"
                    defaultValue=""
                    name="author"
                    placeholder="Name..."
                    required
                  />
                </InputContainer>
                <InputContainer>
                  <NavTitle>
                    <label htmlFor="item_title">E-mail: </label>
                  </NavTitle>
                  <Input
                    id="email"
                    type="email"
                    defaultValue=""
                    name="email"
                    placeholder="Email..."
                    required
                  />
                </InputContainer>
                <InputContainer>
                  <NavTitle>
                    <label htmlFor="adress">Message: </label>
                  </NavTitle>
                  <TextArea
                    id="message"
                    type="text"
                    name="message"
                    defaultValue=""
                    required
                    placeholder="Your message..."
                  ></TextArea>
                </InputContainer>
                <InputContainer>
                  <NavTitle>
                    <label htmlFor=""></label>
                  </NavTitle>
                  <SubmitButton type="submit" value="Sent message" />
                </InputContainer>
              </form>{" "}
            </AboutMeContainer>
          ) : (
            <AboutMeContainer>
              <Title>{successMessage}</Title>
            </AboutMeContainer>
          )}
        </ContactWrapper>
      </Wrapper>
    </>
  );
};

const SubmitButton = styled.input`
  background-color: #ffffff;
  border: 1px solid #000000;
  display: inline-block;
  cursor: pointer;
  color: #39393f;
  min-width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  height: 40px;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: #ffffff;
    background-color: lightblue;
    background-color: #39393f;
  }
`;
const TextArea = styled.textarea`
  display: flex;
  justify-content: center;
  padding: 5px;
  min-width: 300px;
  height: 100px;
  border:1px solid gray;
`;
const NavTitle = styled.span`
  display: flex;
  font-size: 18px;
  width: 150px;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
`;
const InputContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: 500ms;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled(motion.input)`
  display: flex;
  justify-content: center;
  padding: 5px;
  min-width: 300px;
  height: 40px;
  border:1px solid gray;
`;
const HR = styled.div`
  border-bottom: 1px solid black;
  margin: 3px;
  opacity: 0.7;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const Title = styled(motion.h2)`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;


const ContactWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -80vh;
  a {
    text-decoration: none;
  }
`;
const AboutMeContainer = styled(motion.div)`
  align-items: center;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #000000;
  font-weight: 300;
  letter-spacing: 1px;
  width: 500px;
  background-color: #ffffff;
  opacity: 0.9;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
  }
`;
export default ContactPage;
