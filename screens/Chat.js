import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard
  } from "react-native";
import { usePubNub } from "pubnub-react";

  const Chat = ({ route }) => {
    const user = route.params.userID;
    const room = route.params.room;
    // Here we obtain our PubNub instance thanks to using the provider
    const pubnub = usePubNub();

    // In next two statements we define the state needed for our chat
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    // First we need to set our PubNub UUID and subscribe to chat channel.
    // We will use `useEffect` hook for that.
    useEffect(() => {
      // We need to make sure that PubNub is defined
      if (pubnub) {
        // Set the UUID of our user using the ID from firebase
        pubnub.setUUID(user.id);

        // Create a listener that will push new messages to our `messages` variable
        // using the `setMessages` function.
        const listener = {
          message: envelope => {
            setMessages(msgs => [
              ...msgs,
              {
                id: envelope.message.id,
                author: envelope.publisher,
                content: envelope.message.content,
                timetoken: envelope.timetoken
              }
            ]);
          }
        };

        // Add the listener to pubnub instance and subscribe to `chat` channel.
        pubnub.addListener(listener);
        pubnub.subscribe({ channels: [room] });
        
        // We need to return a function that will handle unsubscription on unmount
        return () => {
          pubnub.removeListener(listener);
          pubnub.unsubscribeAll();
        };
      }
    },[pubnub]);

    // This function handles sending messages.
    const handleSubmit = () => {
      // Clear the input field.
      setInput("");

      // Create the message with random `id`.
      const message = {
        content: input,
        id: Math.random()
          .toString(16)
          .substr(2)
      };

      // Publish our message to the channel `chat`
      pubnub.publish({ channel: room, message });
    };
  }

  export default Chat;