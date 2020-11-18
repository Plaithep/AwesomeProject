import { useLinkProps } from "@react-navigation/native";
import React, { Component, useEffect,useContext,useState } from "react";
import { StyleSheet, TextInput, View, Text, RefreshControl } from "react-native";
import styled from "styled-components";

import { UserContext} from "../context/UserContext"
import {FirebaseContext} from "../context/FirebaseContext"
import { firestore } from "firebase";
import "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

export default HistoryScreen = () => {

    const [isMoreLoading, setIsMoreLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [lastDoc,setLastDoc] = useState(null);
    const [History, setHistory] = useState([])
   

    const Firebase = useContext(FirebaseContext);
    const uid = Firebase.getCurrentUser().uid;

    useEffect(() =>{
        getHistory();
    },[])

    const onRefresh = () =>{
        setTimeout(() => {
            getHistory();
        },1000)
    }

    const getHistory = async () => {
        setIsLoading(true);
        console.log(uid)
        const snapshot = await firestore().collection('order').where('UserCreateOrder','==', uid).orderBy('date','desc').get()
        if(!snapshot.empty){
            let newHistory = [];

            setLastDoc(snapshot.docs[snapshot.docs.length -1]);

            for(let i = 0; i < snapshot.docs.length; i++){
                newHistory.push(snapshot.docs[i].data())
            }
            setHistory(newHistory);
        }else{
            setLastDoc(null)
        }setIsLoading(false)
    }

    const renderList = ({posterId,username,date,orderDetail,orderProductPhotoUrl,orderQuantity,ordername}) =>{
    return (
        <View style={prop.container}>
            <View name='card history'>
                <View style={prop.leftScreen}>
                    <Text style={styles.textTime}>{date}<Text></Text></Text>
                </View>

                <View style={component.boxMessage}>
                    <View style={prop.iconcol}>
                        <View style={prop.icon}>
                            <StatusBar style={component.statusBar}></StatusBar>
                            <ProfilePic style={component.profilePic} soucre={{ uri : orderProductPhotoUrl}}/>
                        </View>
                    </View>

                    <View style={prop.textMessage}>
                        <Text style={styles.textMessage}>you have order {ordername} from {posterId.username}</Text>
                        <Text style={styles.textDelivery}>{orderQuantity} item(s) will delevery on 12 Aug 2020</Text> 
                    </View>
                </View>
            </View>

        </View>
        
    );
}
        return(
            <SafeAreaView>
                <FlatList data={History}
                renderItem={({item}) => renderList(item)}
                keyExtractor={(item,index) => String(index,item)}
                refreshControl={
                    <RefreshControl 
                    refreshing={isLoading}
                    onRefresh={onRefresh}
                    />
                }
                />
            </SafeAreaView>
        )
}

const StatusBar = styled.View``;

const ProfilePic = styled.Image``;

const styles = StyleSheet.create({
    textTime: {
        color: '#707070',
    },
    textMessage: {
        color: 'white',
        fontWeight: '100',
    },
    textDelivery: {
        color: 'white',
        fontWeight: 'bold',
    },
});

const component = StyleSheet.create({
    statusBar: {
        width: 15,
        height: 50,
        backgroundColor: '#F1D155',
    },
    profilePic: {
        width: 50,
        height: 50,
        backgroundColor: '#707070',
        borderRadius: 50,
        position: 'relative',
        left: -10,
    },
    boxMessage: {
        flexDirection: 'row',
        width: 350,
        backgroundColor: '#AEAEAE',
        padding: 10,
    }
});

const prop = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30,
        paddingTop: 15,
    },
    leftScreen: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 5,
        paddingTop: 10,
    },
    icon: {
        flexDirection: 'row',
    },
    textMessage: {
        width: 275,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    iconcol: {
        flexDirection: 'column',
        justifyContent: 'center',
    }
});