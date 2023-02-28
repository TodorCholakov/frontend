import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = () => {
  const Hover = () => {};

  return (
    <NavWrapper>
      <UlList onMouseOver={Hover}>
        <ListElement>
          <Link href="#">Menu</Link>
        </ListElement>
        <ListElement>
          <Link href="/">Home</Link>
        </ListElement>
        <ListElement>
          <Link href="/gallery">Photography</Link>
        </ListElement>
        <ListElement>
          <Link href="/store">Request an image</Link>
        </ListElement>
        <ListElement>
          <Link href="/contact">Contact</Link>
        </ListElement>
      </UlList>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  z-index: 9999;
  height: 40px;
  display: flex;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  flex-direction: column;
  justify-content: space-between;
  width:100vw;
  position: fixed;
  @media (max-width: 768px) {
    transition: 500ms;
    transition-timing-function: ease-in;
    opacity: 1;
    overflow: hidden;
    background-color: #000000;
    &:hover {
      transition-timing-function: ease-in;
      z-index: 9999;
      transition: 500ms;
      height: 260px;
      
    }
  }
`;
const ListElement = styled.li`
  display: flex;
  color: #fff;
  fill: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 1px;
  &:nth-child(1) {
    display: none;
  }
  @media (max-width: 768px) {
    background-color: black;
    padding: 10px;
    justify-content: center;
    width: 100%;

    &:nth-child(1) {
      text-align: center;
      display: inline;
      margin-top:-5px;
    }
  }
`;
const UlList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: black;
  opacity: 0.7;
  font-family: 'Montserrat', sans-serif;
  justify-content: right;
  padding-right:10px;
  @media (max-width: 768px) {
    flex-direction: column;
    opacity: 1;
  }

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
