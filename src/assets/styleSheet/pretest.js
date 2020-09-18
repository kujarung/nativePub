import {StyleSheet, Dimensions} from 'react-native';
import color from './color';
const {width, height} = Dimensions.get('window');

const pretest = StyleSheet.create({
  contentContainer: {
    marginTop: 17,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleContainer: {
    marginBottom: 30,
  },
  contentProblem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  contentProblemHor: {
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  anserContainer: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 80,
    minHeight: 26,
  },
  percentTitle: {
    fontSize: 44,
  },
  percentDesc: {
    fontSize: 12,
  },
  innerPercent: {
    textAlign: 'center',
    width: 100,
    position: 'absolute',
    top: 75,
    left: '50%',
    transform: [{translateX: -50}],
  },
});

export default pretest;
