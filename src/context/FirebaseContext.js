import React, { createContext ,useContext,useState} from "react";

import firebase from "firebase";
import "firebase/auth";
// import '@react-native-firebase/auth';
import "firebase/firestore";
import config from "../config/firebase";

import { UserContext } from "../context/UserContext";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      const uid = Firebase.getCurrentUser().uid;

      let profilePhotoUrl = "default";
      let bio = "";
      let tel = "";
      let detail = "";
      let road = "";
      let subdistrict = "";
      let district = "";
      let province = "";

      await db.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
        bio: bio,
        tel: tel,
        detail: detail,
        road: road,
        subdistrict: subdistrict,
        district: district,
        province: province,
      });

      if (user.profilePhoto) {
        profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
      }
      ``;
      delete user.password;
      return { ...user, profilePhotoUrl, uid, bio, tel, detail, road, subdistrict, district, province };
      
    } catch (error) {
      console.log("Error @createUser: ", error.message);
      alert(error);
    }
  },

  uploadProfilePhoto: async (uri) => {
    const uid = Firebase.getCurrentUser().uid;

    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhotos").child(uid);
      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("users").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (error) {
      console.log("Error @uploadProfilePhoto: ", error);
    }
  },



  getBlob: async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        reject(new TypeError("NetWork request failed"));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection("users").doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("Error @getUserInfo:", error);
    }
  },
  
  getUserPostName: async (uid) => {
    try {
      const user = await db.collection("users").doc(uid).get(username);

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("Error @getUserInfo:", error);
    }
  },

  logOut: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (error) {
      console.log("Error @logOut: ", error);
      alert(error);
    }
    return false;
  },

  



  signIn: async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
