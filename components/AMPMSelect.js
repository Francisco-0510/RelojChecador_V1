import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import AM from "./AM";
import PM from "./PM";
import { Border } from "../GlobalStyles";

const AMPMSelect = memo(() => {
  return (
    <View style={styles.amPm}>
      <AM />
      <PM />
    </View>
  );
});

const styles = StyleSheet.create({
  amPm: {
    borderRadius: Border.br_12xs,
    borderStyle: "solid",
    borderColor: "#4ca456",
    borderWidth: 1,
    width: 50,
    height: 82,
    marginLeft: 25,
  },
});

export default AMPMSelect;
