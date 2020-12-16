import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//COLORS
import { Theme } from '@global';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Theme.WHITE
  },
  Header: {
    backgroundColor: Theme.PRIMARY_COLOR,
    // height: 50,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',

    // borderBottomStartRadius: 180,
    // borderBottomEndRadius: 180,
  },
  headerCard: {
    // alignItems:"center",
    height: hp('12%'),
    backgroundColor: Theme.PRIMARY_COLOR,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  dataList: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // elevation: 5,
    // marginTop: 5,
    marginHorizontal: 10,
    paddingVertical: 10
  },
  profileimage: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginLeft: 10,
    justifyContent:"center",
    alignSelf:"center"
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
  },
  txtName:{
    color:Theme.WHITE,
    fontSize:Theme.FONT_SIZE_MEDIUM,
  },
  txtEmail:{
    color:Theme.WHITE,
    fontSize:Theme.FONT_SIZE_SMALL,
  },
  border: {
    justifyContent: 'center',
    height: 1,
    fontWeight: '200',
    backgroundColor: Theme.BORDER,
  },
})