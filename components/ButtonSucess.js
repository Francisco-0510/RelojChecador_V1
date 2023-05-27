import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonSucess = memo(() => {
  return (
    <View style={styles.buttonDefault}>
      <Text style={styles.label}>Checar</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.reactNativePaperTextTitleTextTitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.greyColorsGrey800,
    textAlign: "left",
  },
  buttonDefault: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.aquamarine,
    width: 345,
    height: 61,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },
});

export default ButtonSucess;
