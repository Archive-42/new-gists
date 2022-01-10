import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
 
PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  {
    'title': 'Contacts',
    'message': 'Let us us access your contacts',
    'buttonPositive': 'Please accept'
  }
)
.then(Contacts.getAll)
.then(contacts => {
  ...
})
