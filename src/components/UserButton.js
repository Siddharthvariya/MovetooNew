import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';

import { Theme } from '@global'
import { Color } from '../utils';
const MARGIN = 40;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

class UserButton extends Component {

  render() {
    const { title, onPress, textColor, fontSize, backgrounColor, height, full, margingTop } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            {
              width: full == true ? DEVICE_WIDTH - 20 : null,
              height: height != undefined ? height : MARGIN,
              marginTop: margingTop != undefined ? margingTop : 0,
              backgroundColor: backgrounColor != null
                ? backgrounColor : Color.AppColor
            }
            , styles.button]
          }
          onPress={onPress != null ? () => onPress() : null}
          activeOpacity={1}>
          <Text style={[
            {
              fontSize: fontSize != undefined ? fontSize : Theme.FONT_SIZE_BIG,
              color: textColor != undefined ? textColor : 'white',
            }
            , styles.text]
          }>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F035E0',
    // backgroundColor: Theme.PRIMARY_COLOR,
    // width:DEVICE_WIDTH- 40,
    borderRadius: 5,
    paddingHorizontal: 20,
    zIndex: 100,
  },
  text: {
    fontWeight: "bold",
    backgroundColor: 'transparent',
    fontFamily: Theme.fontFamily,
  },
});

export { UserButton }

