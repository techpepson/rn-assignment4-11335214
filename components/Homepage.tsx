import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { imageTexts, popularJobs } from "@/external Resources/imageTexts";

const Homepage = () => {
  return (
    //wrapper View component
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View style={{ backgroundColor: "#dcfce7" }}>
          <View style={styles.rowFlex}>
            {/*View component to wrap name and email*/}
            <View style={styles.columnFlex}>
              <Text style={styles.largeText}>Eric Atsu</Text>
            </View>
            <Image
              style={styles.roundedImage}
              source={require("../assets/images/bro.jpg")}
            />
          </View>
          {/*search button view*/}
          <View>
            <TextInput placeholder="Search for a job position" />
            <Image />
          </View>
          {/*View component for flatlist*/}

          <View>
            <FlatList
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Featured Jobs
                </Text>
              }
              data={imageTexts}
              renderItem={({ item, index }) => {
                return (
                  //view component for card items
                  <View
                    key={index}
                    style={[
                      styles.columnFlex,
                      {
                        backgroundColor: "#16a34a",
                        borderRadius: 10,
                        gap: 10,
                        margin: 10,
                        height: 200,
                      },
                    ]}
                  >
                    <Link href="/auth" style={{ fontSize: 20 }}>
                      Login
                    </Link>
                    <View style={[styles.rowFlex]}>
                      <Image style={[styles.roundedImage]} source={item.icon} />
                      {/*container for upper and footer texts*/}
                      <View>
                        <Text style={{ fontSize: 20, color: "white" }}>
                          {item.textHeader}
                        </Text>
                        <Text style={{ fontSize: 15, color: "white" }}>
                          {item.footerText}
                        </Text>
                      </View>
                    </View>
                    {/*container for the location and amount*/}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 100,
                      }}
                    >
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {item.amount}
                      </Text>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          {/*view component for popular jobs*/}
          <View>
            <FlatList
              ListHeaderComponent={
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Popular Jobs
                </Text>
              }
              data={popularJobs}
              renderItem={({ item, index }) => (
                <View key={index} style={[styles.rowFlex, { margin: 18 }]}>
                  <Image source={item.image} style={styles.roundedImage} />
                  <View style={styles.columnFlex}>
                    <Text style={{ fontSize: 20 }}>{item.HeaderText}</Text>
                    <Text style={{ fontSize: 16 }}>{item.footerText}</Text>
                  </View>
                  {/*view component for the flatlist for the bottom list*/}
                  <View style={styles.columnFlex}>
                    <Text>{item.amount}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              )}
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  columnFlex: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  rowFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  largeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  lightText: {
    fontSize: 16,
    color: "#95969D",
  },
  roundedImage: {
    borderRadius: 50,
    width: 54,
    height: 54,
  },
  searchBackground: {
    backgroundColor: "grey",
    borderColor: "white",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 30,
  },
});
