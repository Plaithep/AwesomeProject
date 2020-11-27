import React, { Component } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default PollSellerScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    return (
        <ImageBackground source={imagebackground} style={prop.image}>
            <KeyboardAwareScrollView>
                <SafeAreaView>

                    {/* poll */}
                    <View style={prop.container}>
                        <View style={component.cardproductdetail}>

                            <Text style={text.title}>NEW DELICIOUS CUPCAKE</Text>
                            <Text style={text.detail}>
                                I like to make cupcakes I hope you'll enjoy it and it's no
                                peanuts. Ingredients 1. flour 2. wiping cream 3. candy
                </Text>

                            {/* choice 1 */}
                            <View style={prop.cardpoll}>
                                <TouchableOpacity>
                                    <View style={prop.poll}>
                                        <Text style={prop.carddetail2}>Chocolate Cupcake</Text>
                                        <View style={prop.votepoll}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* choice 2 */}
                            <View style={prop.cardpoll}>
                                <TouchableOpacity>
                                    <View style={prop.poll}>
                                        <Text style={prop.carddetail2}>Strawberry Cupcake</Text>
                                        <View style={prop.votepoll2}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/* voted choice */}
                            <View style={prop.cardpoll}>
                                <TouchableOpacity>
                                    <View style={prop.poll}>
                                        <Text style={prop.carddetail2}>Lemon Cupcake</Text>
                                        <View style={prop.votepoll3}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center', marginTop: 18, }}>
                                <TouchableOpacity style={{ width: 110, height: 30, backgroundColor: '#D85C5C', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Close Post</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={prop.containercontect}>
                            {/* card contect 1 */}
                            <TouchableOpacity style={component.contectcard}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={component.piccontect}></View>
                                        <View>
                                            <Text style={text.textname}>PLAITHEP POLRATA</Text>
                                            {/* vote 1 */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                                <Text style={text.title2}>Voted: </Text>
                                                <Text style={text.detail}> Chocolate cupcake</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View><Ionicons name="ios-chatboxes" size={36} color="gray" style={{ marginLeft: 20 }} /></View>
                                    </View>
                                </View>

                            </TouchableOpacity>

                            {/* card contect 2 */}
                            <TouchableOpacity style={component.contectcard}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View style={component.piccontect}></View>
                                        <View>
                                            <Text style={text.textname}>PLAITHEP POLRATA</Text>
                                            {/* vote 2 */}
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                                                <Text style={text.title2}>Voted: </Text>
                                                <Text style={text.detail}> Strawberry cupcake</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <View><Ionicons name="ios-chatboxes" size={36} color="gray" style={{ marginLeft: 20 }} /></View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
};

const prop = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
    rowcontent: {
        marginTop: 3,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textcol: {
        width: "45%",
    },
    containercontect: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    cardpoll: {
        width: '100%',
        alignItems: 'center',
        padding: 4,
    },
    poll: {
        backgroundColor: 'whitesmoke',
        padding: 4,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 40
    },
    votepoll: {
        width: '60%',
        height: 5,
        backgroundColor: 'lightpink',
        borderRadius: 10,
    },
    votepoll2: {
        width: '10%',
        height: 5,
        backgroundColor: 'lightskyblue',
        borderRadius: 10,
    },
    votepoll3: {
        width: '30%',
        height: 5,
        backgroundColor: 'mediumaquamarine',
        borderRadius: 10,
    }
});

const component = StyleSheet.create({
    cardproductdetail: {
        marginTop: 20,
        padding: 25,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    picproduct: {
        width: "50%",
        height: 160,
        backgroundColor: "gray",
    },
    contectcard: {
        padding: 12,
        paddingLeft: 15,
        paddingRight: 15,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        flexDirection: "column",
        marginBottom: 15,
    },
    piccontect: {
        width: 47,
        height: 47,
        borderRadius: 50,
        backgroundColor: "gray",
        marginRight: 12,
    },
});

const text = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 12,
        color: "#707070",
    },
    textPrice: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#e37272",
    },
    title2: {
        fontSize: 12,
        color: "#707070",
        fontWeight: 'bold'
    },
    textname: {
        fontSize: 14,
        color: "#707070",
        fontWeight: 'bold'
    }
})
