import React from 'react';
import classNames from 'classnames'
import Card from '../../../elements/Card'
import {logoRow1, logoRow2} from './logo-data'

const TechLogos = (props) => {

  const logoRowStyle = classNames({
    'd-flex': true,
    'flex-row': true,
    'flex-wrap': true,
    'justify-content-around': true
  })

  const renderLogoRow1 = logoRow1.map((t) => (
    <Card 
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}/>
  ))
  const renderLogoRow2 = logoRow2.map((t) => (
    <Card
      key={t.name}
      url={t.image}
      style={t.style}
      maxWidth={t.maxWidth}
      maxHeight={t.maxHeight}
    />
  ))

  return (<div>
    <div className={logoRowStyle}>
      {renderLogoRow1}
    </div>
    <div className={logoRowStyle}>
      {renderLogoRow2}
    </div>
  </div>)
}

export default TechLogos;
