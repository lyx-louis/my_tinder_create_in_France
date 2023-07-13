import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { getDatabase, get, ref, onValue, off, update } from 'firebase/database';




export default function Chat({ onBack, myData, selectedUser }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [messages, setMessages] = useState([]);



    useEffect(() => {
        //charger les anciens messages
        const loadData = async () => {
            const myChatroom = await fetchMessages();

            setMessages(renderMessages(myChatroom.messages));
        };

        loadData();

        // mise en place du chatroom change listener
        const database = getDatabase();
        const chatroomRef = ref(database, `chatrooms/${selectedUser.chatroomId}`);
        onValue(chatroomRef, snapshot => {
            const data = snapshot.val();
            setMessages(renderMessages(data.messages));
        });

        return () => {
            //enlever chatroom listener
            off(chatroomRef);
        };
    }, [fetchMessages, renderMessages, selectedUser.chatroomId]);

    const renderMessages = useCallback(
        msgs => {

            return msgs
                ? msgs.reverse().map((msg, index) => ({
                    ...msg, //ancien message
                    _id: index,
                    user: {
                        _id:
                            msg.sender === myData.username
                                ? myData.username
                                : selectedUser.username,
                        avatar:
                            msg.sender === myData.username
                                ? myData.avatar
                                : selectedUser.avatar,
                        name:
                            msg.sender === myData.username
                                ? myData.username
                                : selectedUser.username,
                    },
                }))
                : [];
        },
        [
            myData.avatar,
            myData.username,
            selectedUser.avatar,
            selectedUser.username,
        ],
    );

    const fetchMessages = useCallback(async () => {
        const database = getDatabase();

        const snapshot = await get(
            ref(database, `chatrooms/${selectedUser.chatroomId}`),
        );

        return snapshot.val();
    }, [selectedUser.chatroomId]);

    const onSend = useCallback(
        async (msg = []) => {
            const database = getDatabase();

            //chercher les nv message 
            const currentChatroom = await fetchMessages();

            const lastMessages = currentChatroom.messages || [];

            //propos injurieux


            const msgToCheck = msg[0].text.toLowerCase();
            const msgSupp = 'Ce message a été supprime car il contient des propos injurieux';
            let isBadWord = false;

            let dataBadWords = require('./badWords/badWords.json');

            dataBadWords.injury.forEach(element => {
                if (msgToCheck.includes(element)) {
                    console.log('Bad word');
                    isBadWord = true;
                }
            });



            console.log(isBadWord);

            //ajout nv messages
            update(ref(database, `chatrooms/${selectedUser.chatroomId}`), {
                messages: [
                    ...lastMessages,
                    {
                        text:
                            isBadWord === true ? msgSupp : msg[0].text,
                        sender: myData.username,
                        createdAt: new Date(),
                    },
                ],
            });

            setMessages(prevMessages => GiftedChat.append(prevMessages, msg));
        },
        [fetchMessages, myData.username, selectedUser.chatroomId],
    );





    return (
        <>
            <View style={{
                backgroundColor: 'white',
                width: '100%',
                flexDirection: 'row',
                height: '12%',
            }}>
                <TouchableOpacity onPress={onBack}>
                    <Image
                        source={require('../../assets/back.png')}
                        resizeMode='contain'
                        style={{
                            width: 45,
                            height: '100%',

                        }
                        } />
                </TouchableOpacity>
                <View style={{
                    width:windowWidth-90,
                }}>
                    <View style={{
                        flexDirection: 'column',
                        alignSelf:'center',
                        width:'20%'
                    }}>
                        <Image style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            borderRadius: 30,
                            width: '100%',
                            height: '75%',
                            resizeMode: 'cover',

                        }}
                            source={{ uri: selectedUser.avatar }} />
                        <Text style={{
                            alignSelf: 'center',
                            justifyContent: 'center',


                        }}>{selectedUser.username}</Text>
                    </View>
                </View>
            </View>


            <GiftedChat
                messages={messages}
                onSend={newMessage => onSend(newMessage)}
                user={{
                    _id: myData.username,
                }}
                renderBubble={props => {
                    return (
                        <Bubble
                            {...props}
                            textStyle={{
                                right: {
                                    color: 'white',
                                },
                                left: {
                                    color: 'white',
                                },
                            }}
                        />
                    );
                }}

            />

        </>
    );
}

