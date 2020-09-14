import { StyleSheet, Dimensions } from 'react-native';
import color from './color';
const { width, height } = Dimensions.get('window');

const interest = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 16,
    marginTop: 10
  },
  bottomCard: {
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: color.likeWhite
  },
  bottomTxt: {
    height: 28,
    borderColor: color.borderGray,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginRight: 10,
    borderRadius: 15
  },
  innerCard: {
    flexDirection: 'row',
  },
  levelTxt: {
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 3,
    paddingTop: 3,
    borderWidth: 1,
    borderColor: color.borderGray
  },
  innerImage: {
    width: 100,
    height: 80,
    borderRadius: 3
  },
  topDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  selectItem: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: color.borderGray,
    borderRadius: 20
  },
  selectItemFont: {
    fontSize: 16
  },
  selectedFont: {
    fontWeight: 'bold',
    color: color.primary
  },
  selectedCotainer: {
    borderColor: color.primary
  },
  autoCompleteWarp: {
    paddingLeft: 15,
    paddingRight: 15
  },
  autoCompleteContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 17,
    marginBottom: 15,
    borderBottomColor: color.borderGray,
    borderBottomWidth: 1
  }
})

export default interest;