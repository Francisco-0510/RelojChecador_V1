import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PlaceholderInput = memo(() => {
  return <Text style={styles.ingresaTuCdigo}>Ingresa tu código de acceso</Text>;
});

const styles = StyleSheet.create({
  ingresaTuCdigo: {
    fontSize: FontSize.reactNativePaperTextLabelTextLabelLargue_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.reactNativePaperTextLabelTextLabelLargue,
    color: Color.gray500,
    textAlign: "left",
    marginLeft: 5,
  },
});

export default PlaceholderInput;
