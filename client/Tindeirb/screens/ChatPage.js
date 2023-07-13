import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import Chat from '../Components/Chat/Chat';
import Login from '../Components/Chat/Login';
import Users from '../Components/Chat/Users';
import {
    getDatabase,
    get,
    ref,
    set,
    onValue,
    push,
    update,
} from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxqisDpZdJdkDTncAObeyZWaRHI1cUOeI",
    authDomain: "tindeirb-d3e84.firebaseapp.com",
    databaseURL: "https://tindeirb-d3e84-default-rtdb.firebaseio.com",
    projectId: "tindeirb-d3e84",
    storageBucket: "tindeirb-d3e84.appspot.com",
    messagingSenderId: "584491393786",
    appId: "1:584491393786:web:f9ad807ce0709e17665f43"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function ChatPage() {

    const navigation = useNavigation();

    const [currentPage, setCurrentPage] = useState('login');
    const [username, setUsername] = useState(null);
    const [users, setUsers] = useState([]);
    const [userToAdd, setUserToAdd] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [myData, setMyData] = useState(null);

    const onLogin = async () => {
        try {
            //acces à la database
            const database = getDatabase();

            //verifier si user deja enregistrer
            const user = await findUser(username);

            //creation nouvel user si pas enregistré
            if (user) {
                setMyData(user);
            } else {
                const newUserObj = {
                    username: username,
                    avatar: 'https://i.pravatar.cc/150?u=' + Date.now(),
                };

                set(ref(database, `users/${username}`), newUserObj);
                setMyData(newUserObj);
            }

            const myUserRef = ref(database, `users/${username}`);
            onValue(myUserRef, snapshot => {
                const data = snapshot.val();
                setUsers(data.matchs);
                setMyData(prevData => ({
                    ...prevData,
                    matchs: data.matchs,
                }));
            });

            //on change de page vers pages 'users'
            setCurrentPage('users');
            
        } catch (error) {
            console.error(error);
        }
    };

    const findUser = async name => {
        const database = getDatabase();

        const mySnapshot = await get(ref(database, `users/${name}`));

        return mySnapshot.val();
    };

    const onClickUser = user => {
        setCurrentPage('chat');
        setSelectedUser(user);
    };

    const onAddMatch = async name => {
        try {
            //trouver user et l'ajouter aux matchs user et m'ajouter à ses matchs
            const database = getDatabase();

            const user = await findUser(name);

            if (user) {
                if (user.username === myData.username) {
                    // ne pas s'auto ajouter 
                    return;
                }

                if (
                    myData.matchs &&
                    myData.matchs.findIndex(f => f.username === user.username) > 0
                ) {
                    // ne pas ajouter 2 fois meme user
                    return;
                }

                // creation chatroom and stocker  chatroom id

                const newChatroomRef = push(ref(database, 'chatrooms'), {
                    firstUser: myData.username, //the user
                    secondUser: user.username, //the match
                    messages: [],
                });

                const newChatroomId = newChatroomRef.key;

                const usermatchs = user.matchs || [];
                //m'ajouter à la liste des matchs de l'user
                update(ref(database, `users/${user.username}`), {
                    matchs: [
                        ...usermatchs,
                        {
                            username: myData.username,
                            avatar: myData.avatar,
                            chatroomId: newChatroomId,
                        },
                    ],
                });

                const mymatchs = myData.matchs || [];
                //ajouter user à ma match list
                update(ref(database, `users/${myData.username}`), {
                    matchs: [
                        ...mymatchs,
                        {
                            username: user.username,
                            avatar: user.avatar,
                            chatroomId: newChatroomId,
                        },
                    ],
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onBack = () => {
        setCurrentPage('users');
    };

    switch (currentPage) {
        case 'login':
            return (
                <Login
                    onLogin={onLogin}
                    username={username}
                    setUsername={setUsername}
                />
            );
        case 'users':
            return (
                <Users
                    users={users}
                    onClickUser={onClickUser}
                    userToAdd={userToAdd}
                    setUserToAdd={setUserToAdd}
                    onAddMatch={onAddMatch}
                />
            );
        case 'chat':
            return (
                <Chat myData={myData} selectedUser={selectedUser} onBack={onBack} />

            );
         default:
             return null;
    }
}







