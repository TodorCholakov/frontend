import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
const Nav = () => {
  const [popUp, setPopUp] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const changePopUp = () =>{
    if (popUp==true){
      document.getElementById("thisWrapper").style.display = "none";
      setPopUp(false)
     // orderLengthRef.current= orderLength
    }
  }
  return (
    <Container>
      <Burger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Burger>
      <Logo id="Logo" isOpen={isOpen}>
       

        <Link
          onClick={() => setIsOpen(!isOpen)}
          href="/"
          exact="true"
          className="m-2.5"
        >
          Home
        </Link>
       
        <Link
          onClick={() => setIsOpen(!isOpen)}
          href="/gallery"
          exact="true"
          className="m-2.5"
        >
          Photography
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          href="/store"
          exact="true"
          className="m-2.5"
        >
          Request an image
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          href="/contact"
          exact="true"
          className="m-2.5"
        >
         Contact
        </Link>
      
      </Logo>
    </Container>
  );
};

const Burger = styled.div`
  width: 30px;
  height: 30px;
  justify-content: space-around;
  flex-flow: column nowrap;
  margin-right: 10px;
  display: none;
  margin-top:5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 10px;
    
  }
  div {
    width: 30px;
    height: 4px;
    background-color: ${({ isOpen }) => (isOpen ? `#cccccc` : `#cccccc`)};
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? `rotate(45deg)` : `rotate(0)`)};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? `translateX(100%)` : `translateX(0)`};
      opacity: ${({ isOpen }) => (isOpen ? `0` : `1`)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right:20px;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 1px;
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 0px 10px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    top:20px;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }

 

  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    top: 40px;

    background: rgba(25, 25, 25, 1);
    color: #ffffff;
    transition: all 0.5s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? `translateX(0px)` : `translateX(100%)`};
  }
`;

const Container = styled.div`
  z-index: 9999;
  height: 40px;
  display: flex;
  flex-direction: column;
  width:100vw;
  position: fixed;
  color: #ffffff;
  background-color: black;
  opacity: 0.7;
  font-family: 'Montserrat', sans-serif;
  justify-content: right;
  padding-right:10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default Nav;
