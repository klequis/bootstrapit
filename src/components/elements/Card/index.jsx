import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import { log } from '../../../lib/ke-utils'

const Card = ({ src, title, subTitle, style }) => {
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
  const cardSubTitle = classNames({
    color: 'orange',
  })

  // If props.name is not passed in then don't render the name text
  let renderTitles
  if (title && subTitle) {
    renderTitles = (<div className={cardBodyStyle}>
      <h5 className={cardTitle}>{title}</h5>
      <h6 className={cardSubTitle}>{subTitle}</h6>
    </div>)
 } else if ( title ) {
   renderTitles = (<div className={cardBodyStyle}>
      <h5 className={cardTitle}>{title}</h5>
    </div>)
} else {
  renderTitles = null
}

  log(`${src}, ${title}, ${title}`)
  log('typeof', renderTitles, 'blue')

  return (
    <div className={cardStyle}>
      <div>
        <img className={imgStyle} src={src} alt="Card cap" />
      </div>
      {renderTitles}
    </div>
  );
};
export default Card
