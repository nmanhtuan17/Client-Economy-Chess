import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import CommonSection from '../shared/CommonSection'

const About = () => {
  return (
    <>
    <CommonSection title={"About with us"} />
			<section>
				<Container>
					<Row>
						<Col>About</Col>
					</Row>
				</Container>
			</section>
    </>
  )
}

export default About