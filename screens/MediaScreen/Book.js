import React, { useState, useEffect } from 'react';
import { COLORS, FONTS, SIZES } from '../../components/theme';
import Icon from 'react-native-ionicons';
/*import adventure from '../media/german/books/germanAdventure.json';
import comedy from '../media/german/books/germanComedy.json';
import drama from '../media/german/books/germanDrama.json';
import horror from '../media/german/books/germanHorror.json';
import romance from '../media/german/books/germanRomance.json';
import thriller from '../media/german/books/germanThriller.json';*/
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

/*import * as firebase from 'firebase';
import apiKey from '../firebase';*/

const Media = ({ navigation }) => {
  
  // Extracting the JSON objects
  const [adventureBook, setAdBooks] =  useState(adventure.items);
  const [comedyBook, setCoBooks] =  useState(comedy.items);
  const [dramaBook, setDrBooks] = useState(drama.items);
  const [horrorBook, setHoBooks] = useState(horror.items);
  const [romanceBook, setRoBooks] = useState(romance.items);
  const [thrillerBook, setThBook] = useState(thriller.items);

  const [books, setBooks] = useState([]);

  function renderAdventureBooks() {

    const renderItem = ({item, index}) => {
      var imageSrc = item.volumeInfo;
      if(!imageSrc.hasOwnProperty("imageLinks")) {
        imageSrc = 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-book-icon-png-image_1577305.jpg'
      } else {
        imageSrc = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={imageSrc}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Adventure</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={adventureBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  function renderComedyBooks() {
    const renderItem = ({item, index}) => {
      var imageSrc = item.volumeInfo;
      if(!imageSrc.hasOwnProperty("imageLinks")) {
        imageSrc = 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-book-icon-png-image_1577305.jpg'
      } else {
        imageSrc = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={imageSrc}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Comedy</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={comedyBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  function renderDramaBooks() {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={item.volumeInfo.imageLinks.smallThumbnail}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Drama</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={dramaBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  function renderHorrorBooks() {
    const renderItem = ({item, index}) => {
      var imageSrc = item.volumeInfo;
      if(!imageSrc.hasOwnProperty("imageLinks")) {
        imageSrc = 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-book-icon-png-image_1577305.jpg'
      } else {
        imageSrc = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={imageSrc}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Horror</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={horrorBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  function renderRomanceBooks() {
    const renderItem = ({item, index}) => {
      var imageSrc = item.volumeInfo;
      if(!imageSrc.hasOwnProperty("imageLinks")) {
        imageSrc = 'https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-vector-book-icon-png-image_1577305.jpg'
      } else {
        imageSrc = item.volumeInfo.imageLinks.smallThumbnail;
      }
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={imageSrc}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Romance</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={romanceBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  function renderThrillerBooks() {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: index == 0 ? SIZES.padding : 0,
              marginRight: SIZES.radius
            }}
            onPress={() => navigation.navigate("BookDetail", {
                book: item
            })}
        >
            {/* Book Cover */}
            <Image 
                source={item.volumeInfo.imageLinks.smallThumbnail}
                resizeMode="cover"
                style={{
                    width: 180,
                    height: 280,
                    borderRadius: 20
                    }}
            />
        </TouchableOpacity>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>Thriller</Text>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
            <FlatList
                data={thrillerBook}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        {/* Body Section */}
        <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
            <View style={{ paddingBottom: SIZES.padding}}>
                {renderAdventureBooks()}
            </View>
            <View style={{ paddingBottom: SIZES.padding}}>
                {renderComedyBooks()}
            </View>
            <View style={{ paddingBottom: SIZES.padding}}>
                {renderDramaBooks()}
            </View>
            <View style={{ paddingBottom: SIZES.padding}}>
                {renderHorrorBooks()}
            </View>
            <View style={{ paddingBottom: SIZES.padding}}>
                {renderRomanceBooks()}
            </View>
        </ScrollView>
      </SafeAreaView>
  );
}

export default Media;