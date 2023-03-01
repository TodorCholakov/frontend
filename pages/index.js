
import styled from 'styled-components'
import Image from 'next/image'
import background from 'public/images/HomePageBackground.jpg'
import { motion } from "framer-motion";
import NavBar from '@/components/NavBar'


export default function Home() {

  //fetch 
  //const [results] = useQuery({query:PRODUCT_QUERY})
  //const {data, fetching, error} = results
  
  //if(fetching) {
  //  return <p>loading</p>
  //}
  //if(error) {
   // return <p>Error - the page cannot be loaded {error.message}</p>
  //}
  //const products = data.products.data
  return (
    
       <Wrapper >
         <NavBar/>
        <Image className='object-cover z-0 '
        fill
        alt="background-image"
        src={background}
    />
  
        
            <AboutMeContainer>
              <Title>Todor Cholakov</Title>
              <HR />
              <SubTitle>Nature photography</SubTitle>
            </AboutMeContainer>
    

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

const AboutMeContainer = styled(motion.div)`
  width:200px;
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  letter-spacing: 1px;
  margin-top:100px;
  z-index: 99;
  position: absolute;
  bottom:0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-bottom:10px;
`;

const Title = styled(motion.h2)`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: 400;

`;
const SubTitle = styled(motion.p)`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: italic;

`;