import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LogoBienvenida = memo(() => {
  return (
    <View style={styles.logoBuenosDias}>
      <View style={styles.logoText}>
        <Text style={[styles.z, styles.zTypo]}>z</Text>
        <Text style={[styles.a, styles.zTypo]}>a</Text>
        <Text style={[styles.p, styles.zTypo]}>p</Text>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Text style={[styles.p, styles.zTypo]}>t</Text>
        <Text style={[styles.p, styles.zTypo]}>a</Text>
        <Text style={[styles.p, styles.zTypo]}>l</Text>
      </View>
      <Text style={styles.buenosDias}>{`¡Buenos Dias! `}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  zTypo: {
    color: Color.black,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 60,
    fontSize: FontSize.size_41xl,
    textAlign: "left",
  },
  z: {
    textAlign: "left",
    letterSpacing: 4,
    color: Color.black,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 60,
    fontSize: FontSize.size_41xl,
  },
  a: {
    letterSpacing: 35,
    marginLeft: 4,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 60,
    fontSize: FontSize.size_41xl,
  },
  p: {
    marginLeft: 4,
    textAlign: "left",
    letterSpacing: 4,
    color: Color.black,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 60,
    fontSize: FontSize.size_41xl,
  },
  logoIcon: {
    width: 48,
    height: 48,
  },
  logoWrapper: {
    marginLeft: 4,
    flexDirection: "row",
  },
  logoText: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buenosDias: {
    fontSize: FontSize.reactNativePaperTextTitleTextTitleMedium_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.reactNativePaperTextTitleTextTitleMedium,
    color: Color.statusColorBgDark,
    textAlign: "left",
  },
  logoBuenosDias: {
    alignItems: "center",
  },
});

export default LogoBienvenida;
