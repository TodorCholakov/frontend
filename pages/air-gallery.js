
import AirGalleryImg from 'public/images/GalleryPage/BackgroundAir1600.webp'
import Image from "next/image";
import { useQuery } from 'urql'
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar"
import Link from "next/link";
import Footer from "../components/Footer"
import { AIR_QUERY } from "../lib/query"
import Gallery from 'react-photo-gallery';



const AirGallery = () => {
  //fetch 
  const [results] = useQuery({query:AIR_QUERY})
  console.log (results)
  const {data, fetching, error} = results
  
  if(fetching) {
    return <p>loading</p>
  }
  if(error) {
    return <p>error o no {error.message}</p>
  }
  const products = data.airGalleryPhotos.data
console.log (products)
 let arr = []

 products.map((product)=>arr.push({"width":product.attributes.width, "height":product.attributes.height, "src":product.attributes.image.data.attributes.formats.small.url}))
 console.log (arr)
  return (
    <Wrapper>
      <NavBar />
asdf
      <div className="h-3/6 bg-cover w-screen overflow-hidden z-0">
      <Image
        alt = "asd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        cover
        src={AirGalleryImg}
      />
</div>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Nature
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
      </SubTitle1>ASDGIT INIT
      {arr.length>0 ? <Gallery photos={arr} />: ""}
      ;
 
      <Footer />
    </Wrapper>
  );
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
