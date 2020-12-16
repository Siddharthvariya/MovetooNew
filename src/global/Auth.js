import {Constants} from '@global'
import{Alert} from 'react-native';
import {String} from '../utils/String';
const Auth = {
    PostServiceAuth:PostServiceAuth,
    PostAdminTokenAuth:PostAdminTokenAuth,
    ToastMessage:ToastMessage
};
function PostServiceAuth(data, action, cb) {
  debugger
    fetch(Constants.ApiBaseUrl + action, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data'
      }),
      body: data,
    })
      .then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(responseJson => {
        cb(responseJson);
      })
      .catch(error => {
        cb(error);
        console.error(error);
      });
  }
  function PostAdminTokenAuth(token,id,data,action,cb){
    fetch(Constants.ApiBaseUrl + action, {
      method: 'POST',
      headers: new Headers({
        'api-token':token,
        'admin-id':id
        // 'Content-Type': 'multipart/form-data'
      }),
      body: data,
    })
      .then(response => {
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      })
      .then(responseJson => {
        cb(responseJson);
      })
      .catch(error => {
        cb(error);
        console.error(error);
      });

     
  }
  function ToastMessage(message) {
    return (
    Alert.alert(
        String.app.App,
        message,
        [
            {
                text: "Ok",
                onPress: () => console.log("Cancel Pressed"),
            }
        ],
        
        { cancelable: false })
    )
}

  export default Auth;
