import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import iMeetup from './images/meetup-swarm.svg'
import SectionWrapper from '../../elements/SectionWrapper'
import Section from '../../elements/Section'
import TechLogos from './TechLogos'
import P from '../../elements/P'
import Button from '../../elements/Button'
import Image from '../../elements/Image'
import iCommunity from './images/community.4.jpg'
import { Grid, Row, Col } from 'react-bootstrap'
// import Responsive from 'react-responsive'
// import { breakPoints } from '../TopBar/topbar.config'

const Header = () => {
  const btnStyle = classNames({
    [styles.btn]: true,
    [styles.btnSuccess]: true,
  })
  const btnColStyle = classNames({
    'd-flex': true,
    [styles.btnCol]: true,
  })

  return (
    <div>
      <SectionWrapper id='home' whiteBackground>
        <Section title='A Community' backgroundColorGray>
          <Grid>
            <Row>
              <Col md={6}>
                <Image src={iCommunity} alt="people in coffeshop"/>
              </Col>
              <Col md={6}>
                <P textAlign='justify'>TriValley Coders is a community of developers helping developers. We hold free bi-weekly meetings where beginner and experienced developers mix and learn together.</P>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} className={btnColStyle}>
                <a href='https://www.meetup.com/trivalleycoders/'>
                  <Button red><i className="fa fa-meetup fa-2x" aria-hidden="true"></i>Join Us via Meetup!</Button>
                </a>
              </Col>
            </Row>
          </Grid>
        </Section>
      </SectionWrapper>
      <SectionWrapper>
        <Section title='A School'>
          <P justify>We run periodic classes for those serious about learning to make software. Our courses cover HTML, CSS, JavaScript, React, Express, Node and MongoDB.</P>
          <div className={styles.techLogosWrapper}>
            <TechLogos />
          </div>
        </Section>
      </SectionWrapper>
      <SectionWrapper grayBackground>
        <Section title='More than Coding - Making Software'>
          <P justify>'Learning to code' is a great catch-phrase but it doesn't accurately describe what employers are looking for. At TriValley Coders we cover project creation to deployment and everything in between.</P>
        </Section>
      </SectionWrapper>
    </div>
      )
      }

      export default Header;
