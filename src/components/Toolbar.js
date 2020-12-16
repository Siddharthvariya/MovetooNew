import React from 'react'
import { View, StyleSheet, StatusBar, Platform, Dimensions } from 'react-native'
import { Color } from '../utils'
import { Appbar } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Theme } from '@global';


const Toolbar = (props) => {
    const { onPress, title, backButton, notification, menu, textCenter } = props;

    return (

             backButton == true && notification == false ?
            <Appbar.Header style={styles.toolbar}>
                <Appbar.BackAction onPress={onPress} />
                <Appbar.Content style={{ alignItems: textCenter != null ? 'center' : 'flex-start' }} title={title} />
            </Appbar.Header> :
            backButton == true && notification == true ?
                <Appbar.Header style={styles.toolbar}>
                    <Appbar.BackAction onPress={onPress} />
                    <Appbar.Content style={{ alignItems: textCenter != null ? 'center' : 'flex-start' }} title={title} />
                    <Appbar.Action size={30} icon="bell-circle" />
                </Appbar.Header> :
                menu == true && notification == true ?
                    <Appbar.Header style={styles.toolbar}>
                        <Appbar.Action
                            icon="menu"
                            onPress={onPress}
                        />
                        <Appbar.Content style={{ alignItems: textCenter != null ? 'center' : 'flex-start' }} title={title} />
                        <Appbar.Action size={30} icon="bell-circle" />
                    </Appbar.Header> :
                    menu == true ?
                        <Appbar.Header style={styles.toolbar}>
                            <Appbar.Action
                                icon="menu"
                                onPress={onPress}
                            />
                            <Appbar.Content style={{ alignItems: textCenter != null ? 'center' : 'flex-start' }} title={title} />
                        </Appbar.Header> :
                        <Appbar.Header style={styles.toolbar}>
                            <Appbar.Content style={{ alignItems: textCenter != null ? 'center' : 'flex-start' }} title={title} />
                        </Appbar.Header>
    )
}
export default Toolbar
const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.PRIMARY_COLOR,
        width: wp('100%'),
    },
    toolbar: {
        backgroundColor: Theme.PRIMARY_COLOR,
        // marginTop: Platform.OS === 'ios' ? 0 : 56,
        width: wp('100%'),

    },
    titleCss: {
        alignItems: 'flex-start'
    },
    iconCss: {
        //    backgroundColor:'#ffffff',
        height: 35,
        width: 35,
        tintColor: '#000',
        borderColor: "#ffffff"
    }
});