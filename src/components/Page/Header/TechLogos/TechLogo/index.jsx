// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import { Grid, Row, Col } from 'react-bootstrap'

// const TechLogo = (props) => {
//   const imgStyle = {
//     // maxHeight: props.maxHeight,
//     margin: 'auto',
//     display: 'block',
//     height: 'auto',
//     maxWidth: '100%'
//   }
//   const colStyle = classNames({
//     'd-flex': true,
//     'flex-row': true,
//     'justify-content-around': true,
//     // 'img-fluid': true,
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


const TechLogo = (props) => {
  const imgStyle = {
    maxHeight: props.maxHeight,
    margin: 'auto',
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
  }
  return (
    <div className={styles.techLogo}>
      <img style={imgStyle} src={props.url} alt="logo" />
      <div className={styles.logoText}>{props.name}</div>
    </div>

  );
};
export default TechLogo
