// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import {Grid, Row, Col} from 'react-bootstrap'
import iHTML from '../images/html-5.01.svg'

const TechLogo = (props) => {
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
  })
  // const imgStyle = classNames({
  //   'img-fluid': true,
  //   [styles.imgStyle]: '250px'
  // })
  return (
    <div className={cardStyle}>
      <img className={imgStyle} src={iHTML} alt="Card cap" />
      <div className={cardBodyStyle}>
        <h5 className={cardTitle}>Card title</h5>
      </div>
    </div>
  );
};
export default TechLogo


// const TechLogo = (props) => {
//   const imgStyle = {
//      maxHeight: props.maxHeight,
//     margin: 'auto',
//     display: 'block',
//     height: 'auto',
//     maxWidth: '100%'
//   }
//   const colStyle = classNames({
//     'd-flex': true,
//     'flex-row': true,
//     'justify-content-around': true,
//      'img-fluid': true,
//   })
//   return (
//     <Grid>
//       <Row>
//         <Col md={12} className={colStyle}>
//           <img style={imgStyle} src={props.url} alt="logo" />
//           {/* <img className='img-fluid' src={props.url} alt="logo" /> */}
//           <div className={styles.logoText}>{props.name}</div>
//         </Col>
//       </Row>
//     </Grid>
//
//
//   );
// };
// export default TechLogo;

// const TechLogo = (props) => {
//    const imgStyle = {
//       maxHeight: props.maxHeight,
//      maxHeight: 250,
//      margin: 'auto',
//      display: 'block',
//       height: 'auto',
//      maxWidth: '100%',
//    }
//   const imgStyle = classNames({
//     'img-fluid': true,
//     [styles.imgStyle]: '250px',
//   })
//   return (
//     <div className={styles.techLogo}>
//       {/* <img style={imgStyle} src={props.url} alt="logo" /> */}
//       <img className={imgStyle} src={props.url} alt="logo" />
//       <div className={styles.logoText}>{props.name}</div>
//     </div>
//
//   );
// };
// export default TechLogo
