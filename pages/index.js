

import Image from 'next/image'
import background from 'public/images/HomePageBackground.jpg'
import styled from 'styled-components'
import { PRODUCT_QUERY } from "../lib/query"
import { motion } from "framer-motion";
import { useQuery } from 'urql'
import NavBar from '@/components/NavBar'


export default function Home() {

  //fetch 
  const [results] = useQuery({query:PRODUCT_QUERY})
  const {data, fetching, error} = results
  
  if(fetching) {
    return <p>loading</p>
  }
  if(error) {
    return <p>error o no {error.message}</p>
  }
  const products = data.products.data
  return (
    
       <Wrapper >
         <NavBar />
               <Image className='object-cover z-0 '
      fill
      src={background}
    />
        <SubWrapper>
 
      
    
   </SubWrapper>
    <GalleryItemsWrpper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 5 }}
        >
        
            <AboutMeContainer>
              <Title>Todor Cholakov</Title>
              <HR />
              <SubTitle>Nature photography</SubTitle>
            </AboutMeContainer>
        </GalleryItemsWrpper> 

</Wrapper >
  )
}

const HR = styled.div`
  border-bottom: 1px solid white;
  margin: 3px;
  opacity: 0.7;
  width: 100%;
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
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
  }
`;

const GalleryItemsWrpper = styled(motion.div)`
display: flex;
margin-bottom:10px;
justify-content: center;
`;

const AboutMeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  letter-spacing: 1px;
  transition: 500ms;
`;

const Title = styled(motion.h2)`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;
  z-index: 99;
`;
const SubTitle = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  z-index: 99;
`;