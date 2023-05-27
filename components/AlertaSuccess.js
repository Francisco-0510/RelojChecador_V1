import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import TextAlerts from "./TextAlerts";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const AlertaSuccess = memo(() => {
  return (
    <View style={styles.alertaSuccess}>
      <Text style={styles.alertaDeExitoContainer}>
        <Text style={styles.alertaDeExito}>¡Alerta de Exito!</Text>
        <TextAlerts />
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  alertaDeExito: {
    fontWeight: "700",
    fontFamily: FontFamily.reactNativePaperTextLabelTextLabelLargue,
  },
  alertaDeExitoContainer: {
    flex: 1,
    fontSize: FontSize.reactNativePaperTextLabelTextLabelLargue_size,
    lineHeight: 20,
    color: Color.darkslategray_100,
    textAlign: "left",
  },
  alertaSuccess: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.green300,
    width: 293,
    flexDirection: "row",
    padding: Padding.p_base,
    marginTop: 29,
  },
});

export default AlertaSuccess;
