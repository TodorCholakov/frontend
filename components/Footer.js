import React from "react";
import styled from "styled-components";
import Link from "next/link";
import AirGalleryImg from 'public/images/GalleryPage/BackgroundAir1600.webp'
import { BsInstagram } from "react-icons/bs";


const Nav = () => {
  const Hover = () => {};

  return (
    <NavWrapper>
      <UlList onMouseOver={Hover}>
        <ListElement>
          <Link href="https://www.instagram.com/todorscholakov/" target="_blank">
            <BsInstagram />
          </Link>
        </ListElement>
      </UlList>
      <Image src={AirGalleryImg} />
    </NavWrapper>
  );
};
const Image = styled.img`
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 40px;
  margin-top: -40px;
`;
const NavWrapper = styled.div`
  z-index: 9999;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ListElement = styled.li`
  display: flex;
  color: #fff;
  fill: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
`;
const UlList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: black;
  width: 100vw;
  opacity: 0.7;
  height: 40px;
  font-family: "Montserrat", sans-serif;
  justify-content: right;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 5px 10px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
`;

export default Nav;
