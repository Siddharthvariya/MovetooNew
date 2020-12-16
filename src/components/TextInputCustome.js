import { View, Text, StyleSheet, Dimensions, TextInput, Platform } from 'react-native'
import React, { Component } from 'react';
import { Color ,Matrics} from '../utils';
import { Theme } from '@global'
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class TextInputCustome extends Component {
    render() {
        const {
            border,
            keyboardType,
            marginHorzontal,
            marginVertical,
            marginTop,
            onChangeText,
            placeholder,
            underlineColorAndroid,
            placeholderTextColor,
            borderColor,
            full,
            height,
            multiline,
            numberOfLines,
            textAlignVertical,
            paddingRight,
            type,
            secureTextEntry
        } = this.props;
        console.log(placeholderTextColor);
        return (
            <TextInput style={[
                {
                    width: full == true ? DEVICE_WIDTH - 20 : null,
                    height: height != undefined ? height : Platform.OS == 'ios' ? hp('6%') : hp('6%'),
                    borderColor: borderColor,
                    borderWidth: border == true ? 1.5 : 0,
                    marginHorizontal:  Matrics.Scale(marginHorzontal) != undefined ? marginHorzontal : 0,
                    marginVertical:  Matrics.Scale(marginVertical) != undefined ? marginVertical : 0,
                    marginTop:  Matrics.Scale(marginTop) != undefined ? marginTop : 0,
                    paddingRight:  Matrics.Scale(paddingRight) != undefined ? paddingRight : 0,
                    textAlignVertical: textAlignVertical != undefined ? textAlignVertical: null
                }
                , styles.input]
            }
                underlineColorAndroid={underlineColorAndroid}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor != undefined ? placeholderTextColor : Color.gray}
                autoCapitalize="none"
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                multiline={multiline}
                numberOfLines={numberOfLines}
                secureTextEntry={secureTextEntry}
            />
        )
    }
}

export default TextInputCustome;

const styles = StyleSheet.create({
    input: {
        paddingLeft:  Matrics.Scale(15),
        borderRadius:  Matrics.Scale(5),
        fontSize: Theme.FONT_SIZE_LARGE,
    },
});
