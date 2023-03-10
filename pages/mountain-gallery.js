
import { useState } from "react";
import Mountain from 'public/images/GalleryPage/MountainGallery1600_510_.webp'
import Image from "next/image";
import { useQuery } from 'urql'
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "../components/Nav"
import Link from "next/link";
import Footer from "../components/Footer"
import { MOUNTAIN_QUERY } from "../lib/mountainGalleryQuery";
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const AirGallery = () => {
  //fetch 
  const [index, setIndex] = useState(-1);
  const [results] = useQuery({query:MOUNTAIN_QUERY})
  const {data, fetching, error} = results
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  
 if(fetching) {
   return <p></p>
 }
 if(error) {
  return <p>Error, we've problems loading the site {error.message}</p>
  }
  const products = data.mountainGalleryPhotos.data
  console.log (products)
console.log (products[0].attributes.image.data.attributes.formats.large.height)
 let arr = []

 products.map((product)=>arr.push({
  "width":product.attributes.image.data.attributes.formats.large.width, 
  "height":product.attributes.image.data.attributes.formats.large.height, 
  "src":product.attributes.image.data.attributes.formats.large.url}))
 console.log (arr)
 const slides = arr.map(({ src, width, height }) => ({
  src,
  width,
  height,
  
}));
const currentSlides = slides.slice((page-1)*30, (page-1)*30+30)
const paginatedPagesNum = Math.ceil(slides.length/30)
  return (
    <Wrapper>
      <Nav />
      <Image
      className = "-mt-10"
        alt = "mlointain-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        cover
        src={Mountain}
      />

      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        The mountain
      </Title>
      <SubTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
      The higher the mountain, the lighter is soul
      </SubTitle>
      <SubTitle1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/wildlife-gallery">Wildlife</Link>|
        <Link href="/air-gallery">Air</Link>
      
      </SubTitle1>
      
      <PhotoAlbum  layout="masonry"
      spacing={2}
      
        photos={currentSlides}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}/>
      <Lightbox
                slides={currentSlides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
           <Stack spacing={2} >
            <Pagination   className={"mt-4 flex justify-center"} count={paginatedPagesNum} page={page} onChange={handleChange} />
    </Stack>
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
