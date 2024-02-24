/**
 * Sizing
 */
import {Dimensions} from 'react-native';

const dimentions = Dimensions.get('window');
const screenWidth = dimentions.width;
const screenHeight = dimentions.height;
let adjustedScreenWidth = screenWidth;

// if (screenWidth / screenHeight > 0.5) {
//   adjustedScreenWidth = screenHeight * 0.5;
// }
const Sizing = {
  vw: screenWidth / 100,
  vh: screenHeight / 100,
  screenWidth: screenWidth,
};

export default Sizing;