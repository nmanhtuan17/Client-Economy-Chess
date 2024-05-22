import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'


const SearchResultList = () => {
  // cho phép truy cập thông tin ở urL
  const location = useLocation();
  console.log(location);
  const [data] = useState(location.state || []);  // Sử dụng [] nếu location.state không tồn tại
  console.log(data)
  
  return (
    <>
      <CommonSection title={'Product search Result'}/>
      <section>
        <Container>
          <Row>
            {
              data.length === 0 ? (<h4 className='text-center'>Not Found</h4>) :
              ( 
                data?.map( product => (
                  <Col lg={3} className='mb-4' key={product.id}>
                    <TourCard product={product}/>
                  </Col>
                ))
              )
            }
          </Row>
        </Container>
      </section>

      <Newsletter />
    
    </>
  )
}

export default SearchResultList
