import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Homepage from "@/components/Homepage";
import { StatusBar } from "expo-status-bar";
import Login from "@/components/Login";

export default function HomeScreen() {
  return (
    <View>
      <Homepage />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
