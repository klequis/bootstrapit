import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import Identicon from '../../elements/Identicon'

import { log } from '../../../lib/ke-utils'

const Card = ({ id, src, title, subTitle, styleName, cardSize = {}, imageSize = {} }) => {
  // card
  const cardClass = classNames({
    card: true,
    [styles.cardModified]: true,
  })
  const cardStyle = {
    width: cardSize.width || '',
    height: cardSize.height || '',
  }
  // img
  const imgClass = classNames({
    [styles.smallImg]: styleName === 'smallImage',
    [styles.wideImg]: styleName === 'wideImage',
    'card-img-top': true,
  })
  const imgStyle = {
    width: imageSize.width || '',
    height: imageSize.height || '',
  }
  // body
  const cardBodyClass = classNames({
    'card-body': true,
    [styles.cardBodyModified]: true,
  })
  // title
  const cardTitleClass = classNames({
    'card-title': true,
    [styles.cardTitleModified]: true,
  })
  // subTitle
  const cardSubTitleClass = classNames({
    color: 'orange',
  })
  // Passing an _id but not a src will result in an identicon being produced
  const getPicture = () => {
    if (src === '') {
      return <Identicon
        hash={id}
             />
    } else {
      return <img className={imgClass} src={src} style={imgStyle} alt="member" />
    }
  }
  const renderTitles = () => {
    if (title && subTitle) {
      return (<div className={cardBodyClass}>
        <h5 className={cardTitleClass}>{title}</h5>
        <h6 className={cardSubTitleClass}>{subTitle}</h6>
      </div>)
    } else if ( title ) {
      return (<div className={cardBodyClass}>
        <h5 className={cardTitleClass}>{title}</h5>
      </div>)
    } else {
      return null
    }
  }

  return (
    <div className={cardClass} style={cardStyle}>
      {getPicture()}
      {renderTitles()}
    </div>
  );
};
export default Card
