// logo-data.js
import iHTML from './images/html-5.01.svg'
import iCSS from './images/css-3.01.svg'
import iJS from './images/javascript.svg'
import iReact from './images/react.svg'
import iNode from './images/nodejs.on-black.01.svg'
import iMongo from './images/mongo.01.svg'
// import iExpress from './images/express.01.svg'
import iExpress from './images/express.black.01.svg'

export const logoRow1 = [
  {
    title: 'HTML 5',
    src: iHTML,
    style: "smallImage",
    // maxHeight: 50,
  },
  {
    title: 'CSS 3',
    src: iCSS,
    style: "smallImage",
    // maxHeight: 50,
  },
  {
    title: 'JavaScript',
    src: iJS,
    style: "smallImage",
    // maxHeight: 50,
  },
  {
    title: 'React',
    src: iReact,
    style: "smallImage",
    // maxHeight: 50,
  },
  {
    title: 'Node',
    src: iNode,
    style: "smallImage",
    // maxHeight: 50,
  },
]

export const logoRow2 = [
  {
    title: 'MongoDB',
    src: iMongo,
    style: 'wideImage',
    imageHeight: 60,
  },
  {
    title: 'Express',
    src: iExpress,
    style: 'wideImage',
    imageHeight: 60,
  },
]
