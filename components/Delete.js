import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const Delete = memo(() => {
  return (
    <View style={styles.delete}>
      <Image
        style={styles.backspaceIcon}
        resizeMode="cover"
        source={require("../assets/backspace.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  backspaceIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  delete: {
    backgroundColor: Color.red100,
    width: 217,
    height: 64,
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 45,
  },
});

export default Delete;
