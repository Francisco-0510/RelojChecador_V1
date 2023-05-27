import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";

const Icon = memo(() => {
  return (
    <Image
      style={styles.keyIcon}
      resizeMode="cover"
      source={require("../assets/key.png")}
    />
  );
});

const styles = StyleSheet.create({
  keyIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
});

export default Icon;
