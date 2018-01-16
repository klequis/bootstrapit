import React from 'react';
import styles from './style.css';
import classNames from 'classnames'
import Identicon from '../../elements/Identicon'

import { log } from '../../../lib/ke-utils'

/*
  size: object (width, height)
*/
const Card = ({ src, title, subTitle, size = {} }) => {
  const imgStyle = {
    width: size.width || '',
    height: size.height || '',
  }
  const imgClass = classNames({
    'card-img-top': true,
  })
  const cardClass = classNames({
    card: true,
    [styles.cardModified]: true,
  })
  const cardBodyClass = classNames({
    'card-body': true,
    [styles.cardBodyModified]: true,
  })
  const cardTitleClass = classNames({
    'card-title': true,
    [styles.cardTitleModified]: true,
  })
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
      return <img className={imgClass} style={imgStyle} src={src} alt="member" />
    }
  }
  // If props.name is not passed in then don't render the name text
  let renderTitles
  if (title && subTitle) {
    renderTitles = (<div className={cardBodyClass}>
      <h5 className={cardTitleClass}>{title}</h5>
      <h6 className={cardSubTitleClass}>{subTitle}</h6>
    </div>)
 } else if ( title ) {
   renderTitles = (<div className={cardBodyClass}>
      <h5 className={cardTitleClass}>{title}</h5>
    </div>)
} else {
  renderTitles = null
}

  log(`${src}, ${title}, ${title}`)
  log('typeof', renderTitles, 'blue')

  return (
    <div className={cardClass}>
      <div>
        {getPicture()}
      </div>
      {renderTitles}
    </div>
  );
};
export default Card
