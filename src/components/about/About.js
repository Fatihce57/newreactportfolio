import './About.scss'
import { Container, Row, Col, Image, Figure } from 'react-bootstrap'

function About() {
  return (
    <div className="about">
      <h2 id="abouthead">About me</h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs={6} sm={6} md={5} xl={3}>
            <Figure className="about-fatih">
              <Image src="./images/fatihphoto.jpg" roundedCircle />
              <figcaption>Fatih</figcaption>
            </Figure>
          </Col>
          <Col xs={12} sm={12} md={7} xl={7}>
            <p className="about-text">
              I studied economics in Turkey. I have work experience in different
              fields. I have been living in Germany since 2018. I took a
              full-stack web developer course in Berlin at DCI. I enjoy building
              interactive, effect-heavy JavaScript applications with an eye on
              animated content. I love doing projects with React.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
