import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InputMinutos = memo(() => {
  return (
    <View style={styles.inputMinutos}>
      <Text style={styles.text}>00</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.materialThemeDisplayLarge_size,
    lineHeight: 57,
    fontFamily: FontFamily.materialThemeDisplayLarge,
    color: Color.green400,
    textAlign: "center",
  },
  inputMinutos: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#84e1bc",
    borderWidth: 3,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    marginLeft: 4,
  },
});

export default InputMinutos;
