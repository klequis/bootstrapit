import React from 'react';
import classNames from 'classnames'
import styles from './style.css';

const Card = ({ url, name, style }) => {
  const imgStyle = classNames({
    [styles.smallImg]: style === 'smallImage',
    [styles.wideImg]: style === 'wideImage',
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
      <div>
        <img className={imgStyle} src={url} alt="Card cap" />
      </div>
      {renderName}
    </div>
  );
};
export default Card
