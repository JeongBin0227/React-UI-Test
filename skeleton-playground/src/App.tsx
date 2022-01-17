import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled/macro'
import Skeleton from './components/Skeleton'

interface ImageProps {
  src: string;
}

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5,1fr);
  column-gap: 12px;
  row-gap: 4px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0/ 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`

const ImageWrapper = styled.div`
  width: 100%;
`

const Image = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`

const Placeholder: React.FC = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} ></Skeleton>
    </ImageWrapper>

    <Info>
      <Skeleton width={150} height={29} rounded></Skeleton>
      <div style={{height:'8px'}}>
        <Skeleton width={200} height={19} rounded></Skeleton>
      </div>
    </Info>
  </Container>
)

const Item: React.FC=()=>{

  return(
    <Container>
      <ImageWrapper>
        <Image src='http://www.w3schools.com/images/w3schools_green.jpg'></Image>
      </ImageWrapper>
      <Info>
        <Title>Cat taking a nap</Title>
        <Description>coooooool, coooooool</Description>
      </Info>
    </Container>
  )
}


function App() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(()=>{setLoading(false)},2000)
  }, [])
  return (
    <Base>
      {loading?
        Array.from({length:25}).map((_,idx)=>(
          <Placeholder key={idx}/>
        ))
        :
        Array.from({length:25}).map((_,idx)=>(
          <Item key={idx}/>
        ))
      }
    </Base>
  );
}

export default App;
