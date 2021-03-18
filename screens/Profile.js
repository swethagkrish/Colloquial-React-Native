import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Button, Avatar } from 'react-native-elements'
import { UserAuthContext } from '../navigation/UserAuthProvider';
import { firestore, auth } from '../components/Firebase/method';

function Profile({navigation}) {
  const { user } = useContext(UserAuthContext);
  //const [email, setEmail];
  const currentUser = user.toJSON();
  //const email = firestore.collection('users').doc(user.uid).doc('email');
  const [name, setName] = useState('');
  //const [password, setPassword] = useState('');
  const [initials, setInitials] = useState('');

  const ref = firestore.collection('users').doc(currentUser.uid);

  useEffect(() => {
    ref
    .get()
    .then(doc => {
      setName(doc.data().fullName);
    });
    if (name) {
      const fullName = name.split(' ');
      const firstName = fullName[0];
      const lastName = fullName[1];
      setInitials((firstName[0] || "") + (lastName[0] || ""));
    }
  })

  return (
    <View style={styles.container}>
      <View style = {styles.avatar}>
        <Avatar
            size="xlarge"
            rounded
            title={initials}
            overlayContainerStyle={{ backgroundColor: '#FF8600'}}
          />
        </View>
      <Text style = {styles.title}>{name}</Text>
      <View style = {styles.body}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 50, alignSelf : 'flex-start'}}>
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/email.png")} />
          <Text style = {styles.labels}>{currentUser.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 50, alignSelf : 'flex-start'}}>
          <Image style={{ width: 40, height: 40, alignSelf: "center"}} source = {require("../assets/emojis/changeLevelsShow.png")} />
          <View>
            <Text style = {styles.labelsB}>German A1</Text>
            <Text style = {styles.labelsA}>French A1</Text> 
            <Text style = {styles.labelsA}>Spanish B2</Text> 
            <Text style = {styles.labelsA}>Italian A1</Text> 
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginLeft: 50, alignSelf : 'flex-start'}}>
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/birthday.png")} />
          <Text style = {styles.labels}>March 12th, 1998</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginLeft: 50, alignSelf : 'flex-start'}}>
        <TouchableOpacity style = {styles.press}>
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/changeProfile.png")} />
          <Text style = {styles.labelsC}>Change</Text>
          <Text style = {styles.labelsD}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.press} >
          <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/delete.png")} />
          <Text style = {styles.labelsC}>Delete</Text>
          <Text style = {styles.labelsD}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.press}>
         <Image style={{ width: 40, height: 40, marginTop: 20, alignSelf: "center"}} source = {require("../assets/emojis/changeLevel.png")} />
         <Text style = {styles.labelsC}>Change</Text>
         <Text style = {styles.labelsD}>Levels</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    height: 50, 
    alignItems: "center"
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 48,
    textAlign: "center",
    marginBottom: 20
  },
  body: {
    width: 321,
    height: 300,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    alignSelf: "center"
  },
  labels: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    textAlign: "center",
    marginLeft: 30,
    marginTop: 30
  },
  labelsB: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    marginTop: 40,
    marginLeft: 30
  },
  labelsA: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    marginLeft: 30 
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
  avatar: {
    width: 100, 
    height: 100,
    marginTop: 40,
    marginBottom: 60,
    alignItems: "center"
  },
  garbage: {
    color: "rgba(0,107,166,1)",
    fontSize: 52,
    height: 52,
    width: 52,
    marginTop: 15,
    marginLeft: 21
  },
  press: {
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    width: 94,
    height: 142,
    marginRight: 25
  }, 
  labelsC: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    textAlign: "center",
    marginTop: 10
  },
  labelsD: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(0,107,166,1)",
    fontSize: 18,
    color: "#121212",
    textAlign: "center"
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
