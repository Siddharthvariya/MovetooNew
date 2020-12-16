import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
//styles
import styles from './style';

import {Theme} from '@global';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



class DrawerScreen extends Component {
  state = {
    data: [
      { name: 'ShopNow'},
      {name: 'Logout'}
    ],
  };
  render() {
    return this.renderMainView();
  }

  onPresslist = (index) => {
    switch (index) {
      case 0:
        this.props.navigation.navigate('Dashboard')
        break;
     
     
      default:
        console.log('no navigation available!');
    }
  };

  renderMainView = () => {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderDrawerList()}
      </SafeAreaView>
    );
  };

  renderDrawerList = () => {
    return (
      <SafeAreaView>
        <View style={styles.headerCard}>
        </View>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{marginTop: 0, height: '100%'}}
          renderItem={({item, index}) => {
            return (
              <View>
                <View style={styles.border} />
                <TouchableOpacity
                  style={styles.dataList}
                  onPress={() => this.onPresslist(index)}>
                
                  {item.name == 'Logout' ? (
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: Theme.FONT_SIZE_MEDIUM,
                        fontWeight: '500',
                        color: Theme.RED,
                      }}>
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: Theme.FONT_SIZE_MEDIUM,
                        fontWeight: '500',
                      }}>
                      {item.name}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  };
}

export default DrawerScreen;
