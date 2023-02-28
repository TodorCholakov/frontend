
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
 
  return (
    <Wrapper   initial={{ opacity: 0 }}
    animate={{ opacity: 1, delay: 1 }}>
      <NavBar />
      <Image className='object-cover z-0 '
      fill
      src={PhotographyBackground}
     
    />
  
   
  <ContainerA >  
      <Link href={`/wildlife-gallery`}>
      <Card sx={{ maxWidth: 345, m: 0.5 }} >
      <CardActionArea style={{backgroundColor: "white"}}>
      <Image src={HeaderPageImage1}  />
        <CardContent >
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


    <Link href={`/mountain-gallery`}>
    <Card sx={{ maxWidth: 345, m: 0.5 }} >
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
    <Card sx={{ maxWidth: 345, m: 0.5}} >
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
    

   </ContainerA>
    </Wrapper>
  );
};
const ContainerA = styled.div`
  margin: 0;
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:100vw;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  @media (max-width: 1050px) {
  flex-direction: column;
  width:90vw;
  position:relative;
  margin:0 auto;
  height:auto;
  margin-top:60px;
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  }
`
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

`;


const Wrapper = styled(motion.div)`
 display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 1060px) {
    height:auto;
    position: relative;
  }
`;

export default GalleryPage;
