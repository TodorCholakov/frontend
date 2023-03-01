
import { useState } from "react";
import WildlifeHeader from 'public/images/GalleryPage/WildlifeHeader_1920_350.webp'
import Image from "next/image";
import { useQuery } from 'urql'
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar"
import Link from "next/link";
import Footer from "../components/Footer"
import { WILDLIFE_QUERY } from "../lib/wildlifeGalleryQuery";
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const WildlifeGallery = () => {
  //fetch 
  const [index, setIndex] = useState(-1);
  const [resultsWildlife] = useQuery({query:WILDLIFE_QUERY})

  const {data, fetching, error} = resultsWildlife
  
  if(fetching) {
    return <p>loading</p>
 }
  if(error) {
    return <p>error o no {error.message}</p>
  }

  console.log (resultsWildlife)
  const itemsWildlife = data.wildlifePhotoGalleries.data
  console.log (itemsWildlife)
 let arr = []

 itemsWildlife.map((product)=>arr.push({"width":product.attributes.image.data.attributes.formats.large.width, "height":product.attributes.image.data.attributes.formats.large.height, "src":product.attributes.image.data.attributes.formats.large.url}))
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
        alt = "wildlife-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        cover
        src={WildlifeHeader}
      />

      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Wildlife
      </Title>
      <SubTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Hidden deep into the mountain, out of sight, they live an amazing life
      </SubTitle>
      <SubTitle1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/mountain-gallery">The mountain</Link>|
        <Link href="/air-gallery">Air</Link>
     
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

export default WildlifeGallery;
