import React, { createContext } from "react";

import firebase from "firebase";
import "firebase/auth";
// import '@react-native-firebase/auth';
import "firebase/firestore";
import config from "../config/firebase";

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

      await db.collection("users").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      if (user.profilePhoto) {
        profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
      }
      ``;

      delete user.password;

      return { ...user, profilePhotoUrl, uid };
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

  
//   createPost: async (post) => {
//     const uid = Firebase.getCurrentUser().uid;
//     try{
//       await db.collection("POST").doc(uid).set({
//         productname: user.productname,
//         detail: user.detail,

//       });
//       return { ...POST };
//     }catch(error){
//       console.log("Error @createPost: ", error.message);
//     }
// },


  createPost: async (post)=>{
    firebase.firestore()
    .collection('POST')
    .add(post)
  },

// addPost = async ({ text, localUri }) => {
//   const remoteUri = await this.uploadPhotoAsync(localUri);

//   return new Promise((res, rej) => {
//     this.firestore
//       .collection("posts")
//       .add({
//         text,
//         uid: this.uid,
//         timestamp: this.timestamp,
//         image: remoteUri,
//       })
//       .then((ref) => {
//         res(ref);
//       })
//       .catch((error) => {
//         rej(error);
//       });
//   });
// },






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
