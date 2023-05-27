import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AM = memo(() => {
  return (
    <View style={styles.am}>
      <Text style={styles.am1}>AM</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  am1: {
    fontSize: FontSize.reactNativePaperTextLabelTextLabelLargue_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.green200,
    textAlign: "center",
  },
  am: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.green400,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AM;
