import React, { useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/list/ListItemSeperator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";
import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "Emily clark",
    description:
      "Hi, intrested in buying thedfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff item!!!",
    image: require("../assets/message1.jpg"),
  },
  {
    id: 2,
    title: "Michael B. Jordan",
    description: "How are you Alex ???",
    image: require("../assets/message2.jpg"),
  },
  {
    id: 3,
    title: "Joey Degrandis",
    description: "Bye dude... ",
    image: require("../assets/message3.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  console.log(messages, setMessages);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Messages</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message seleted", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "Kevin Dodger",
              description: "Let's go out for a walk.",
              image: require("../assets/message4.jpg"),
            },
            {
              id: 1,
              title: "Joey Degrandis",
              description: "Hi, intrested in buying the item!!!",
              image: require("../assets/message1.jpg"),
            },
            {
              id: 2,
              title: "Emily clark",
              description: "How are you Alex ???",
              image: require("../assets/message2.jpg"),
            },
            {
              id: 3,
              title: "Michael B. Jordan",
              description: "Bye dude... ",
              image: require("../assets/message3.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    height: 60,
    backgroundColor: colors.secondary,
    width: "100%",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Roboto",
    paddingLeft: 15,
  },
});

export default MessagesScreen;
