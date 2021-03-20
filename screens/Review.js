import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Avatar } from 'react-native-elements';
import { firestore } from '../components/Firebase/method';

const Review = ({ route, navigation }) => {
  const media = route.params.id;
  const title = route.params.title;
  const [post, setPost] = useState([]);

  useEffect(() => {
    firestore.collection('reviews')
    .doc(media).collection('posts')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = {
          id: doc.id,
          user: doc.data().userName,
          rating: doc.data().rate,
          review: doc.data().review
        };
        setPost(post => [...post, data]);
      })
    })
  }, []);

  let posts = post.filter( (ele, ind) => ind === post.findIndex( elem => elem.id === ele.id));

  /*if(posts.length > 0) {
    const name = posts[0].user.split(' ');
    const firstName = name[0];
    const lastName = name[1];
    initials = (firstName[0] || "") + (lastName[0] || "");
  }*/
  
  //const initials = 'UH';

  const renderItem = ({ item }) => {
    const name = item.user.split(' ');
    const firstName = name[0];
    const lastName = name[1];
    const initials = (firstName[0] || "") + (lastName[0] || "");
    console.log(initials);
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf : 'flex-start', marginLeft: 20, marginTop: 10}}>
        <View style = {{marginTop: 30, marginRight: 20}}>
          <Avatar
            size="large"
            rounded
            title={initials}
            overlayContainerStyle={{ backgroundColor: '#FF8600'}}
            />
          </View>
        <View style = {styles.body}>
          <Text style = {styles.name}>{item.user}</Text>
          <Text style = {styles.review} >{item.review}</Text>
          <Text style = {styles.rating}>{item.rating} stars</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Text style = {styles.title}>User Reviews</Text>
      <Text style = {styles.subtitle}>{title}</Text>
      <View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            contentContainerStyle={{ paddingVertical: 10 }}
          />
      </View>
    </View>
    /*<View style={styles.container}>
      <View style={styles.profileReview}>
        <View style={styles.profilePicRow}>
          <ProfilePic style={styles.profilePic}></ProfilePic>
          <ReviewUpdated style={styles.reviewUpdated}></ReviewUpdated>
        </View>
      </View>
      <View style={styles.profileReview2}>
        <View style={styles.profilePic2Row}>
          <ProfilePic style={styles.profilePic2}></ProfilePic>
          <ReviewUpdated style={styles.reviewUpdated2}></ReviewUpdated>
        </View>
      </View>
      <ReviewComponent style={styles.reviewComponent}></ReviewComponent>
      <Homebar style={styles.homebar}></Homebar>
      <View style={styles.backArrowRow}>
        <BackArrow style={styles.backArrow}></BackArrow>
        <Text style={styles.userReviews}>User Reviews</Text>
      </View>
      <Text style={styles.mediaName}>Media Name</Text>
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    fontSize: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10, 
    marginTop: 10,
    alignSelf: "center"
  },
  subtitle: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(255,134,0,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  body: {
    backgroundColor: "rgba(217,240,255,1)",
    borderRadius: 38,
    opacity: 0.75,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    width: 230,
    height: 116,
    alignSelf: "center",
    alignItems: "center"
  },
  profileReview: {
    width: 317,
    height: 116,
    flexDirection: "row",
    marginTop: 237,
    marginLeft: 23
  },
  profilePic: {
    height: 75,
    width: 75,
    marginTop: 21
  },
  reviewUpdated: {
    width: 230,
    height: 116,
    marginLeft: 12
  },
  profilePicRow: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  profileReview2: {
    width: 319,
    height: 116,
    flexDirection: "row",
    marginTop: 31,
    marginLeft: 21
  },
  profilePic2: {
    width: 75,
    height: 75,
    marginTop: 24
  },
  reviewUpdated2: {
    height: 116,
    width: 230,
    marginLeft: 14
  },
  profilePic2Row: {
    height: 116,
    flexDirection: "row",
    flex: 1
  },
  name: {
    alignSelf: "flex-start",
    marginLeft: 20, 
    marginTop: 15,
    fontFamily: "OpenSans_700Bold",
    color: "#006BA6",
    fontSize: 18, 
    marginBottom: 5
  },
  review: {
    alignSelf: "flex-start",
    marginLeft: 20, 
    marginBottom: 5,
    fontFamily: "OpenSans_400Regular",
    fontSize: 16
  }, 
  rating: {
    alignSelf: "flex-start",
    marginLeft: 20, 
    marginBottom: 5, 
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 16
  },
  reviewComponent: {
    height: 116,
    width: 319,
    marginTop: 37,
    marginLeft: 21
  },
  homebar: {
    width: 360,
    height: 65,
    marginTop: 22,
    alignSelf: "center"
  },
  backArrow: {
    width: 48,
    height: 76
  },
  userReviews: {
    fontFamily: "OpenSans_800ExtraBold",
    color: "rgba(27,6,94,1)",
    height: 133,
    width: 230,
    fontSize: 48,
    textAlign: "center",
    marginLeft: 21
  },
  backArrowRow: {
    height: 133,
    flexDirection: "row",
    marginTop: -717,
    marginLeft: 10,
    marginRight: 51
  },
  mediaName: {
    fontFamily: "OpenSans_600SemiBold",
    color: "rgba(255,134,0,1)",
    height: 41,
    width: 169,
    fontSize: 24,
    marginTop: 13,
    marginLeft: 109
  }
});

export default Review;
