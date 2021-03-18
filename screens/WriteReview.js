import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Alert, TouchableOpacity, Image} from "react-native";
import { firestore } from '../components/Firebase/method';
import { UserAuthContext } from '../navigation/UserAuthProvider';

const WriteReview = (route, navigation) => {
  const { user } = useContext(UserAuthContext);
  const currentUser = user.toJSON();
  const mediaID = route.route.params.id;
  const name = route.route.params.title;
  const [review, setReview] = useState('');
  const [rate, setRate] = useState(0);
  const [userName, setUserName] = useState('');

  const save = () => {
    firestore.collection('users').doc(currentUser.uid)
    .get()
    .then(doc => {
      setUserName(doc.data().fullName);
      console.log(userName);
    });
    const data = {
      mediaID,
      userName,
      rate,
      review
    }
    firestore.collection('reviews')
    .doc(mediaID).collection('posts')
    .add(data).then(() => {
      alert('Your review is saved!');
    })
  }
  return (
    <View style={styles.container}>
      <View style ={styles.box}>
        <Text style ={styles.reviewTitle}>Review</Text>
      </View>
      <View style = {styles.body}>
        <View style={styles.mediaName}>
              <Text style = {styles.name}>
                {name}
              </Text>
        </View>
        <View style = {styles.box}>
          <Text style={styles.rating}>Rating</Text>
            <View style={styles.ratingBoxStack}>
              <View style={styles.ratingBox}>
                <TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={10}
                  numberOfLines={1}
                  multiline={true}
                  spellCheck={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  placeholderTextColor="rgba(0,0,0,1)"
                  style={styles.ratingInput}
                  value={rate}
                  onChangeText={(text) => setRate(text)}
                ></TextInput>
              </View>
            </View>
          <View style={styles.enterReview}>
              <View style={styles.reviewInstructionStack}>
                <Text style={styles.reviewInstruction}>
                  We recommend you write the review in your selected language.
                  Include what you liked/disliked and whether you would
                  recommend the movie
                </Text>
              </View>
              <View style={styles.reviewBox}>
                <TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={200}
                  numberOfLines={5}
                  multiline={true}
                  spellCheck={true}
                  placeholderTextColor="rgba(0,0,0,1)"
                  selectionColor="rgba(255,255,255,1)"
                  style={styles.reviewInput}
                  value={review}
                  onChangeText={text => setReview(text)}
                ></TextInput>
              </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => save()}>
          <View style = {styles.press}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25,  marginLeft: 30, alignSelf : 'flex-start'}}>
              <Image style={{ width: 40, height: 40, marginLeft: 40, alignSelf: "center"}} source = {require("../assets/emojis/save.png")} />
              <Text style = {styles.saveReview}> Save Review </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

{/*       <View>
        <View style={styles.reviewBody}>
          <View style={styles.body}>
            <View style={styles.mediaName}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.nameOfMedia}>Name of Media</Text>
            </View>
            <View style={styles.enterRating}>
              <Text style={styles.rating}>Rating</Text>
              <View style={styles.ratingBoxStack}>
                <View style={styles.ratingBox}></View>
                <TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={5}
                  numberOfLines={1}
                  multiline={true}
                  spellCheck={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  placeholderTextColor="rgba(0,0,0,1)"
                  style={styles.ratingInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.enterReview}>
              <View style={styles.reviewInstructionStack}>
                <Text style={styles.reviewInstruction}>
                  We recommend you write the review in your selected language.
                  Include what you liked/disliked and whether you would
                  recommend the movie
                </Text>
                <Text style={styles.yourReview}>Your Review</Text>
              </View>
              <View style={styles.reviewBox}>
                <TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={200}
                  numberOfLines={5}
                  multiline={true}
                  spellCheck={true}
                  placeholderTextColor="rgba(0,0,0,1)"
                  selectionColor="rgba(255,255,255,1)"
                  style={styles.reviewInput}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.review}>Review</Text>
      </View>
      <View style={styles.saveReviewButton}>
        <View style={styles.saveBody}>
          <View style={styles.saveIconRow}>
            <Icon name="save" style={styles.saveIcon}></Icon>
            <Text style={styles.saveReview}>Save Review</Text>
          </View>
        </View>
      </View>
    </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  reviewBody: {
    top: 60,
    left: 0,
    width: 319,
    height: 492,
    position: "absolute"
  },
  press: {
    width: 325,
    height: 80,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    marginBottom: "3%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignSelf : 'center', 
    marginTop: 65
  }, 
  box: {
    marginTop: 10
  },
  body: {
    width: 319,
    height: 525,
    backgroundColor: "rgba(217,240,255,0.75)",
    borderRadius: 70,
    alignSelf: "center", 
    alignItems: "center"
  },
  mediaName: {
   alignItems: "center"
  },
  name: {
    fontFamily: "OpenSans_700Bold",
    color: "rgba(255,134,0,1)",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 25
  },
  nameOfMedia: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 50,
    width: 149,
    fontSize: 20,
    alignSelf: "center"
  },
  enterRating: {
    width: 295,
    height: 85
  },
  rating: {
    fontFamily: "OpenSans_700Bold",
    color: "rgba(0,107,166,1)",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 10
  },
  ratingBox: {
    width: 295,
    height: 40,
    borderWidth: 6,
    borderColor: "rgba(0,107,166,1)",
    borderRadius: 74,
    borderStyle: "solid",
    backgroundColor: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginLeft: 10
  },
  ratingInput: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 15
  },
  ratingBoxStack: {
    width: 295,
    height: 52,
    marginBottom: 10 
  },
  enterReview: {
    width: 295,
    height: 188,
    marginTop: 132,
    marginLeft: 12
  },
  reviewInstruction: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    height: 109,
    width: 326,
    fontSize: 18,
    textAlign: "center",
    marginTop: 5
  },
  yourReview: {
    fontFamily: "OpenSans_700Bold",
    color: "rgba(0,107,166,1)",
    fontSize: 20,
    alignSelf: "center"
  },
  reviewInstructionStack: {
    width: 326,
    height: 0,
    marginTop: -143,
    marginLeft: -15
  },
  reviewBox: {
    width: 295,
    height: 225,
    borderWidth: 6,
    borderColor: "rgba(0,107,166,1)",
    borderRadius: 74,
    borderStyle: "solid",
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 120
  },
  reviewInput: {
    fontFamily: "OpenSans_400Regular",
    color: "#121212",
    fontSize: 20,
    width: 250,
    height: 175,
    marginTop: 30,
    marginLeft: 28
  },
  reviewTitle: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 68,
    width: 267,
    fontSize: 48,
    textAlign: "center",
    marginBottom: 10
  },
  backArrow: {
    position: "absolute",
    left: 0,
    top: 1,
    width: 48,
    height: 76
  },
  reviewBodyStack: {
    width: 319,
    height: 552,
    marginTop: 25,
    marginLeft: 19
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 98
  },
  saveReviewButton: {
    width: 325,
    height: 68,
    marginTop: -151,
    marginLeft: 18
  },
  saveBody: {
    width: 325,
    height: 68,
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 82,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    flexDirection: "row"
  },
  saveIcon: {
    color: "rgba(0,107,166,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  saveReview: {
    fontFamily: "OpenSans_700Bold",
    color: "#121212",
    fontSize: 20,
    marginTop: 5, 
    marginLeft: 20
  },
  saveIconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 58,
    marginLeft: 63,
    marginTop: 12
  }
});

export default WriteReview;
