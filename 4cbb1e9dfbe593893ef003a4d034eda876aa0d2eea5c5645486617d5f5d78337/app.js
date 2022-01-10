import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
 
check(PERMISSIONS.IOS.CAMERA)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'feature is not available',
        );
        break;
      case RESULTS.DENIED:
        console.log('permission has not been requested / is denied but requestable',);
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });
