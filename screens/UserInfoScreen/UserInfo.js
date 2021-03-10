import React, { Component } from 'react';
import styles from './styles';
import Svg, { Ellipse } from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserAuthContext } from './UserAuthProvider';

export default function UserInfo({ navigation }) {
    //get the user data
    const { user, setUser } = useContext(UserAuthContext);

    /*function userLanguage() {
        const language = user.language;
        
    }*/

    return (
        <View style={styles.container}>
            <Svg viewBox="0 0 129.34 102.81" style={styles.ellipse}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(230, 230, 230,1)"
                    cx={65}
                    cy={51}
                    rx={65}
                    ry={51}
                ></Ellipse>
            </Svg>
            <Text>{}</Text>
            <Text style={styles.email}></Text>
            {/*<Text style={styles.languageLevels}>Language Levels</Text>
            <View>

            </View>*/}
            <Text style={styles.birthday}>Birthday </Text>
            <View style={styles.container}>
                <View style={styles.icon2Stack}>
                    <SimpleLineIconsIcon
                        name="reload"
                        style={styles.icon2}
                    ></SimpleLineIconsIcon>
                    <IoniconsIcon name="md-person" style={styles.icon4}></IoniconsIcon>
                </View>
            </View>
            <Icon name="delete-forever" style={styles.icon}></Icon>
        </View>
    );
}