// TechLogo

import React from 'react';
import classNames from 'classnames'
import styles from './style.css';
import {Grid, Row, Col} from 'react-bootstrap'
import iHTML from '../images/html-5.01.png'

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

const TechLogo = (props) => {
  // const imgStyle = {
  //    maxHeight: props.maxHeight,
  //   maxHeight: 250,
  //   margin: 'auto',
  //   display: 'block',
  //    height: 'auto',
  //   maxWidth: '100%',
  // }
  const cardStyle = {
    width: '7rem',
    padding: '10px 20px',
  }
  const cardTitle = {
    fontSize: '1.0em',
    textAlign: 'center',
    marginTop: '5px',
  }
  const imgStyle = classNames({
    'img-fluid': true,
    [styles.imgStyle]: '250px'
  })
  return (
  <div className="card" style="width: 18rem;">
    <img className="card-img-top" src={iHTML} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
    </div>
  </div>


  );
};
export default TechLogo
