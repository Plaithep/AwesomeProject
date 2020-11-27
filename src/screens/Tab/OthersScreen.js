import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../context/UserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity } from "react-native";

import Text from "../../components/Text";

export default OtherScreen = ({ navigation }) => {

  const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };
  return (
    <ImageBackground source={imagebackground} style={styles.image}>
      <View style={styles.container}>

        <View style={{ alignItems: 'center' }}>
          <View style={styles.profilepicon}>
            <Image
              style={styles.profilephoto}
              source={
                user.ProfilePhotoUrl === "default"
                  ? require("../../../assets/defaultProfilePicture.jpg")
                  : { uri: user.profilePhotoUrl }
              }
            />
          </View>

          <Text
            style={{ fontWeight: 'bold' }}
            medium bold margin="16px 0 32px 0">
            {user.username}
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.fontmenu}>PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Seller")}>
            <Text style={styles.fontmenu}>SELLER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("History")}>
            <Text style={styles.fontmenu}>HISTORY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Admin")}>
            <Text style={styles.fontmenu}>ADMIN</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{ marginBottom: 32 }}
            onPress={logOut}>
            <Text style={styles.logOut}>Log out</Text>
          </TouchableOpacity></View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 64,
    flex: 1
  },
  logOut: {
    color: 'firebrick',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  profilepicon: {
    shadowOpacity: 0.8,
    shadowRadius: 30,
    shadowColor: '#222222',
  },
  profilephoto: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#707070'
  },
  menu: {
    width: 100,
    padding: 10,
    borderColor: '#707070',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    margin: 16
  },
  fontmenu: {
    fontSize: 13,
    fontWeight: 'bold',
  }
});
