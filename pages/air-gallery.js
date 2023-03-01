
import { useState } from "react";
import AirGalleryImg from 'public/images/GalleryPage/AirHeader_1920_350.webp'
import Image from "next/image";
import { useQuery } from 'urql'
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar"
import Link from "next/link";
import Footer from "../components/Footer"
import { AIR_QUERY } from "../lib/airGalleryQuery";
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const AirGallery = () => {
  //fetch 
  const [index, setIndex] = useState(-1);
  const [resultsAir] = useQuery({query:AIR_QUERY})
  console.log (resultsAir)
  const {data, fetching, error} = resultsAir
  if(fetching) {
  return <p></p>
  }
  if(error) {
   return <p>error o no {error.message}</p>
  }
  const itemsAir = data.airGalleryPhotos.data
  console.log (itemsAir)
console.log (itemsAir[0].attributes.image.data.attributes.formats.large.height)
 let arr = []

 itemsAir.map((product)=>arr.push({
 "width":product.attributes.image.data.attributes.formats.large.width, 
 "height":product.attributes.image.data.attributes.formats.large.height, 
 "src":product.attributes.image.data.attributes.formats.large.url}))
 console.log (arr)
 const slides = arr.map(({ src, width, height }) => ({
  src,
  width,
  height,
  
}));

  return (
    <Wrapper>
      <NavBar />
      
      <Image
      alt = "air-image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      cover
        src={AirGalleryImg}
      />
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Air
      </Title>
      <SubTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Fly high to feel the silence
      </SubTitle>
      <SubTitle1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/wildlife-gallery">Wildlife</Link>|
        <Link href="/mountain-gallery">Mountain</Link>
     
      </SubTitle1>
   
      <PhotoAlbum  layout="masonry"
      spacing={2}
      
        photos={slides}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}/>
      <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
      <Footer />
    </Wrapper>
  )
};

const Title = styled(motion.h2)`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 5px;
`;
const SubTitle = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
  font-style: italic;
`;
const SubTitle1 = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;

  a {
    color: #000000;
    text-decoration: none;
    padding: 15px 10px;
    &:hover {
      opacity: 0.7;
    }
  }
`;
const Wrapper = styled.div`
 display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 1060px) {
    height:auto;
    position: relative;
  }
`;

export default AirGallery;
