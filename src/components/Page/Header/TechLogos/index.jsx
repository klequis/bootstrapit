// TechLogos
import React from 'react';
import { Row, Col } from 'react-bootstrap'
import classNames from 'classnames'
import styles from './style.css';
import TechLogo from './TechLogo';
import { logoRow1, logoRow2 } from './logo-data'

const TechLogos = (props) => {

  const logoRowStyle = classNames({
    'd-flex': true,
    'flex-row': true,
    'justify-content-around': true,
  })

  const renderLogoRow1 = logoRow1.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}
    />
  ))
  const renderLogoRow2 = logoRow2.map((t) => (
    <TechLogo
      key={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}
    />
  ))

  return (
    <div>
      <Row >
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
        <Col md={2}>
          <img src={logoRow1[0].image} className='img-fluid' />
          <p>Text</p>
        </Col>
      </Row>
      <Row >
        <Col md={12} className={logoRowStyle}>
          {renderLogoRow2}
        </Col>
      </Row>
    </div>
  )
}

export default TechLogos;

/*
<div>
  <div className={styles.logoRow1}>
    {renderLogoRow1}
  </div>
  <div className={styles.logoRow2}>
    {renderLogoRow2}
  </div>
</div>

*/
