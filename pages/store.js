import React from "react";
import Image from "next/image";
import MountainGallery1 from "../public/images/storeBackground.webp"

import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar"
import Link from "next/link";

const MountainGallery = () => {
  return (
    <Wrapper>
      <NavBar />

      <Image
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="object-cover h-screen"
        src={MountainGallery1}
      />
      <GalleryItemsWrpper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 2 }}
      >
        <Title>Dear friend,</Title>
        <SubTitle>
          {" "}
          In case you need an photograph, you can contact with me on email -
          www.t.s.cholakov@gmail.com or use the website{" "}
          <b>
            <Link href="/contact">Contact</Link>
          </b>{" "}
          form. I will send you the original image with no charge. Just leave an
          email or phone number for contact and short message what you like in
          the photograph and if the image will be used for personal or public
          use.
        </SubTitle>
        <SubTitle1>Thank you for vising the site!</SubTitle1>
      </GalleryItemsWrpper>
    </Wrapper>
  );
};

const GalleryItemsWrpper = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -60vh;
  background-color: #f2f0ef;
  a {
    text-decoration: none;
  }
`;
const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 5px;
`;
const SubTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: justify;

  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  font-style: italic;
`;
const SubTitle1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: right;
  width: 100%;
  margin-right: 40px;
  font-style: italic;
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

export default MountainGallery;
