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
  return (
    <div className={cardStyle}>
      <img className={imgStyle} src={url} alt="Card cap" />
      <div className={cardBodyStyle}>
        <h5 className={cardTitle}>{name}</h5>
      </div>
    </div>
  );
};
export default TechLogo
