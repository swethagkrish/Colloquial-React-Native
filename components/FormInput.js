import React from 'react';
import { StyleSheet, Dimensions, TextInput } from 'react-native';
//import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export default function FormInput({ labelName, ...rest }) {
  return (
    <View></View>
    /*<TextInput
      label={labelName}
      style={styles.input}
      numberOfLines={1}
      {...rest}
    />*/
    /*<TextInput
                  placeholder=""
                  keyboardAppearance="default"
                  maxLength={10}
                  numberOfLines={1}
                  multiline={true}
                  spellCheck={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  placeholderTextColor="rgba(0,0,0,1)"
                  style={styles.ratingInput}
                  //value={rate}
                  onChangeText={(text) => setRate(text)}
    ></TextInput>*/
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 1.5,
    height: height / 15
  }
});