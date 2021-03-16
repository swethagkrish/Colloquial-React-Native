import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from 'react-native-elements'
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { UserAuthContext } from '../navigation/UserAuthProvider';
import { firestore } from '../components/Firebase/method';

function Profile({navigation}) {
  const { user } = useContext(UserAuthContext);
  //const [email, setEmail];
  const currentUser = user.toJSON();
  //const email = firestore.collection('users').doc(user.uid).doc('email');

  return (
    <View>
      <Text>{currentUser.uid}</Text>
      <Text>{currentUser.email}</Text>
      <Text>{currentUser.birthdate}</Text>
      <Text>{currentUser.language}</Text>
      <Button title='Change Password' type='outline' onPress={() => {route.navigation.navigate('Review', {id: media.id})}} />
      <Button title='Delete Account' type='outline' onPress={() => {route.navigation.navigate('WriteReview', {mediaID: media.id, userID: currentUser.uid})}} />
      <Button title='Change Levels' type='outline' onPress={() => {save}} />
    </View>
    /*<View style={styles.container}>
      <View style={styles.changePasswordButtonRow}>
        <View style={styles.changePasswordButton}>
          <View style={styles.changePasswordBodyStack}>
            <View style={styles.changePasswordBody}>
              <ChangeProfile style={styles.changeProfile}></ChangeProfile>
            </View>
            <Text style={styles.changePassword}>Change Password</Text>
          </View>
        </View>
        <View style={styles.deleteAccountButton}>
          <View style={styles.deleteBody}>
            <MaterialIconsIcon
              name="delete-forever"
              style={styles.garbage}
            ></MaterialIconsIcon>
            <Text style={styles.deleteAccount}>Delete {"\n"}Account</Text>
          </View>
        </View>
        <View style={styles.changeLevelButton}>
          <View style={styles.changeLevelBody}>
            <FontAwesomeIcon
              name="language"
              style={styles.levelIcon2}
            ></FontAwesomeIcon>
            <Text style={styles.changeLevels}>Change Levels</Text>
          </View>
        </View>
      </View>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.profileBody}>
        <View style={styles.body}>
          <View style={styles.emailInfo}>
            <View style={styles.emailIconRow}>
              <FeatherIcon name="mail" style={styles.emailIcon}></FeatherIcon>
              <Text style={styles.email}>email</Text>
            </View>
          </View>
          <View style={styles.langLevelsInfo}>
            <View style={styles.levelIconRow}>
              <FontAwesomeIcon
                name="language"
                style={styles.levelIcon}
              ></FontAwesomeIcon>
              <Text style={styles.langLevels}>Lang Levels</Text>
            </View>
          </View>
          <View style={styles.birthdayInfo}>
            <View style={styles.birthdayIconRow}>
              <FontAwesomeIcon
                name="birthday-cake"
                style={styles.birthdayIcon}
              ></FontAwesomeIcon>
              <Text style={styles.birthday}>birthday</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profilePicStack}>
        <Svg viewBox="0 0 100.34 99.81" style={styles.profilePic}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          ></Ellipse>
        </Svg>
        <Text style={styles.name}>Name</Text>
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  changePasswordButton: {
    width: 104,
    height: 142
  },
  changePasswordBody: {
    top: 0,
    left: 5,
    width: 94,
    height: 142,
    position: "absolute",
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  changeProfile: {
    height: 58,
    width: 52,
    marginTop: 12,
    marginLeft: 18
  },
  changePassword: {
    top: 71,
    left: 0,
    position: "absolute",
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 55,
    width: 104,
    fontSize: 18,
    textAlign: "center"
  },
  changePasswordBodyStack: {
    width: 104,
    height: 142
  },
  deleteAccountButton: {
    width: 94,
    height: 142,
    marginLeft: 14
  },
  deleteBody: {
    width: 94,
    height: 142,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  garbage: {
    color: "rgba(0,107,166,1)",
    fontSize: 52,
    height: 52,
    width: 52,
    marginTop: 15,
    marginLeft: 21
  },
  deleteAccount: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 55,
    width: 83,
    fontSize: 18,
    textAlign: "center",
    marginTop: 4,
    marginLeft: 6
  },
  changeLevelButton: {
    width: 94,
    height: 142,
    marginLeft: 19
  },
  changeLevelBody: {
    width: 94,
    height: 142,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  levelIcon2: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 40,
    width: 35,
    marginTop: 21,
    marginLeft: 30
  },
  changeLevels: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    height: 45,
    width: 94,
    fontSize: 18,
    textAlign: "center",
    marginTop: 9
  },
  changePasswordButtonRow: {
    height: 142,
    flexDirection: "row",
    marginTop: 551,
    marginLeft: 15,
    marginRight: 20
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 22
  },
  profileBody: {
    width: 321,
    height: 346,
    marginTop: -593,
    marginLeft: 20
  },
  body: {
    width: 321,
    height: 346,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70
  },
  emailInfo: {
    width: 242,
    height: 40,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 47
  },
  emailIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40
  },
  email: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 24,
    width: 165,
    fontSize: 18,
    marginLeft: 37,
    marginTop: 8
  },
  emailIconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  langLevelsInfo: {
    width: 198,
    height: 40,
    flexDirection: "row",
    marginTop: 67,
    marginLeft: 47
  },
  levelIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40
  },
  langLevels: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 20,
    width: 127,
    fontSize: 18,
    marginLeft: 38
  },
  levelIconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  birthdayInfo: {
    width: 240,
    height: 40,
    flexDirection: "row",
    marginTop: 109,
    marginLeft: 44
  },
  birthdayIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40
  },
  birthday: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 24,
    width: 165,
    fontSize: 18,
    marginLeft: 35,
    marginTop: 8
  },
  birthdayIconRow: {
    height: 40,
    flexDirection: "row",
    flex: 1
  },
  profilePic: {
    top: 0,
    width: 100,
    height: 100,
    position: "absolute",
    left: 35
  },
  name: {
    top: 91,
    left: 0,
    position: "absolute",
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 61,
    width: 170,
    fontSize: 48,
    textAlign: "center"
  },
  profilePicStack: {
    width: 170,
    height: 152,
    marginTop: -504,
    marginLeft: 95
  }
});

export default Profile;
