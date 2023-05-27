import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TextFecha = memo(() => {
  return <Text style={styles.hoyEs00}>Hoy es 00 de Mayo de 2023</Text>;
});

const styles = StyleSheet.create({
  hoyEs00: {
    fontSize: FontSize.mobileH2TWtextLg_size,
    letterSpacing: -0.5,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: FontFamily.mobileH2TWtextLg,
    color: Color.aCDark,
    textAlign: "right",
    width: 276,
    marginTop: 10,
  },
});

export default TextFecha;
