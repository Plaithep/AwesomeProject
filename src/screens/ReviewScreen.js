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

export default ReviewScreen = () => {

    const imagebackground = { uri: "https://i.pinimg.com/564x/36/ae/1c/36ae1c8441c61dc2e6268f8077f0dd19.jpg" };

    return (
        <ImageBackground source={imagebackground} style={prop.image}>
            <KeyboardAwareScrollView>

                {/* post */}
                <View style={prop.container}>
                    <View style={component.cardproductdetail}>

                        <View style={prop.cardheader}>
                            <View style={prop.profilecardheader}>
                                <View style={component.picprofilecontent}></View>
                                <Text style={prop.textcardheader}>
                                    Plaithep Polratanapibol
                                    </Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                            <View style={{ flexDirection: "row", width: '90%', marginTop: 2, marginBottom: 1, justifyContent: 'flex-end' }}>
                                <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                                </View>
                                <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                                </View>
                                <View style={{ backgroundColor: 'gray', paddingLeft: 8, paddingRight: 8, borderRadius: 16, marginLeft: 4, marginRight: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 13 }}>kathu</Text>
                                </View>
                            </View>
                        </View>

                        <View style={prop.rowcontent}>
                            <View style={component.picproduct}></View>
                            <View style={prop.textcol}>
                                <Text style={text.title}>NEW DELICIOUS CUPCAKE</Text>
                                <Text style={text.detail}>
                                    I like to make cupcakes I hope you'll enjoy it and it's no
                                    peanuts. Ingredients 1. flour 2. wiping cream 3. candy
                                    </Text>
                            </View>
                        </View>
                        <View style={prop.rowcontent}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={text.title2}>order: </Text>
                                    <Text style={text.detail}>20/40</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={text.title2}>delivery time: </Text>
                                    <Text style={text.detail}>11.00-12.00</Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={text.title2}>delivery on: </Text>
                                    <Text style={text.detail}>11 Aug 2020</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={text.textPrice}>45 ฿</Text>
                                <Text style={text.detail}>per 1 price</Text>
                            </View>
                        </View>
                    </View>
                    <View style={prop.containercontect}>

                    </View>

                    <View style={component.cardproductdetail}>
                        <Text style={text.label}>Review</Text>
                        <View style={text.detailcontainer}>
                            <TextInput
                                style={text.detailfield}
                                autoCapitalize="sentences"
                                placeholder="detail"
                                numberOfLines={6}
                                multiline={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={{ width: '100%', alignItems: 'center' }}
                        ><View style={component.orderbutton}>
                                <Text style={{ color: "white", fontWeight: '700', fontSize: 15 }}>
                                    confirm
                          </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ImageBackground>
    );
};

const prop = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
    },
    cardheader: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    profilecardheader: {
        flexDirection: "row",
        alignItems: "center",
    },
    textcardheader: {
        paddingLeft: 12,
        fontSize: 14,
        fontWeight: "bold",
        color: "#707070",
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
        padding: 25,
        paddingTop: 20,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    picproduct: {
        width: "50%",
        height: 160,
        backgroundColor: "gray",
    },
    picprofilecontent: {
        width: 45,
        height: 45,
        backgroundColor: "#e1e2e6",
        borderRadius: 100,
    },
    orderbutton: {
        width: '30%',
        height: 30,
        backgroundColor: "gray",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        bottom: -15,
    },
});

const text = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        fontSize: 14,
        color: "#707070",
    },
    textPrice: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#e37272",
    },
    title2: {
        fontSize: 14,
        color: "#707070",
        fontWeight: 'bold'
    },
    detailcontainer: {
        marginTop: 12,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    detailfield: {
        textAlignVertical: 'top',
        padding: 20,
        color: '#707070',
        fontStyle: 'italic',
    },
    label: {
        flexDirection: 'row',
        color: '#707070',
        fontWeight: 'bold',
        paddingLeft: 8
    }
})
