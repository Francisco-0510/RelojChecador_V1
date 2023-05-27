import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PM = memo(() => {
  return (
    <View style={styles.pm}>
      <Text style={styles.pm1}>PM</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  pm1: {
    fontSize: FontSize.reactNativePaperTextLabelTextLabelLargue_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.materialThemeSysLightOnSurface,
    textAlign: "center",
  },
  pm: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.green200,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PM;
