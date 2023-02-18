
import styled from "styled-components";
import Image from "next/image";
import PhotographyBackground from 'public/images/GalleryPage/4.jpg'
import HeaderPageImage1 from 'public/images/GalleryPage/1.webp'
import TheMountain from 'public/images/GalleryPage/3.webp'
import Air from 'public/images/GalleryPage/2.webp'
import { motion } from "framer-motion";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import NavBar from "../components/NavBar"

const GalleryPage = () => {
  const moveRight1 = {
    hidden: { x: -1500 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <Wrapper>
       <Image  className='object-cover z-0 'fill src={PhotographyBackground} />
    <SubWrapper>
       <NavBar />
    </SubWrapper>

  <div variants={moveRight1} initial="hidden" animate="show" className="flex justify-center flex-row content-center" >  


      <Link href={`/wildlife-gallery`}>
      <Card sx={{ maxWidth: 345 }} className="m-5">
      <CardActionArea style={{backgroundColor: "white"}}>
      <Image src={HeaderPageImage1}  />
        <CardContent>
        <Title>WILDLIFE</Title>
        <HR />
            <SubTitle>
              Hidden deep into the mountain, out of sight, they live an amazing
              life
            </SubTitle>
        </CardContent>
      </CardActionArea>
    </Card>
</Link>


    <Link href={`/wildlife-gallery`}>
    <Card sx={{ maxWidth: 345 }} className="m-5">
      <CardActionArea style={{backgroundColor: "white"}}>
      <Image src={TheMountain}  />
        <CardContent>
        <Title>THE MOUNTAIN</Title>
            <HR />
            <SubTitle>The higher in mountain, the lighter is soul</SubTitle>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>  
    

       <Link href={`/air-gallery`}>
    <Card sx={{ maxWidth: 345 }} className="m-5">
      <CardActionArea style={{backgroundColor: "white"}}>
      <Image src={Air}  />
        <CardContent>
        <Title>AIR</Title>
            <HR />
            <SubTitle>Fly high to feel the silence</SubTitle>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>  
    

   </div>
    </Wrapper>
  );
};

const HR = styled.div`
  border-bottom: 1px solid gray;
  margin: 3px;
  opacity: 0.7;
  width: 100%;
`;
const Title = styled(motion.h2)`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const SubTitle = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  height: 20px;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
  margin-bottom: 30px;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
  }
`;
const ImageInContainer = styled.img`
  object-fit: cover;
  max-width: 100%;

  @media (max-width: 768px) {
    margin-top: 0px;
    height: 200px;
  }
`;
const ImageInContainer1 = styled.img`
  object-fit: cover;
  max-width: 100%;

  @media (max-width: 768px) {
    margin-top: 0px;
    height: 200px;
  }
`;

const AboutMeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 30vw;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: black;
  font-weight: 300;
  letter-spacing: 1px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ffffff;
  transition: 500ms;
  opacity: 0.97;
  height: 450px;
  cursor: zoom-in;
  &:hover {
    transition: 500ms;
    -webkit-box-shadow: -6px 7px 19px -4px #000000;
    box-shadow: -6px 7px 19px -4px #000000;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  @media (max-width: 768px) {
    width: 90vw;
    height: auto;
    padding-bottom: 10px;
    border: 1px solid gray;
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

export default GalleryPage;
