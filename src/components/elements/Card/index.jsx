// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';

const TechLogo = ({ url, name }) => {
  const imgStyle = classNames({
    [styles.imgWidth]: true,
    'card-img-top': true,
  })
  const cardStyle = classNames({
    card: true,
    [styles.cardModified]: true,
  })
  const cardBodyStyle = classNames({
    'card-body': true,
    [styles.cardBodyModified]: true,
  })
  const cardTitle = classNames({
    'card-title': true,
    [styles.cardTitleModified]: true,
  })
  // If props.name is not passed in then don't render the name text
  const renderName = name
    ? (<div className={cardBodyStyle}>
      <h5 className={cardTitle}>{name}</h5>
    </div>)
    : null
  return (
    <div className={cardStyle}>
      <img className={imgStyle} src={url} alt="Card cap" />
      {renderName}
    </div>
  );
};
export default TechLogo
