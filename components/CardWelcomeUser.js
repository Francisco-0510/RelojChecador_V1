import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const CardWelcomeUser = memo(() => {
  return (
    <View style={styles.cardHolaUser}>
      <Image
        style={styles.unsplashe5q5vwo55uuIcon}
        resizeMode="cover"
        source={require("../assets/unsplashe5q5vwo55uu.png")}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.holaDanielBrena}>¡Hola Daniel Brena!</Text>
        <Text style={styles.bienvenidoAlSistemaContainer}>
          <Text style={styles.bienvenidoAlSistema}>{`Bienvenido al Sistema
`}</Text>
          <Text style={styles.elZapotal}>El Zapotal</Text>
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  unsplashe5q5vwo55uuIcon: {
    borderRadius: Border.br_9xs,
    width: 80,
    height: 80,
  },
  holaDanielBrena: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: Color.black,
    textAlign: "center",
  },
  bienvenidoAlSistema: {
    fontWeight: "700",
    fontFamily: FontFamily.reactNativePaperTextLabelTextLabelLargue,
    color: Color.gray500,
  },
  elZapotal: {
    letterSpacing: 0,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtrabold,
    color: Color.seagreen,
  },
  bienvenidoAlSistemaContainer: {
    alignSelf: "stretch",
    fontSize: FontSize.reactNativePaperTextTitleTextTitleMedium_size,
    lineHeight: 24,
    marginTop: 4,
    textAlign: "center",
  },
  cardContainer: {
    marginLeft: 12,
  },
  cardHolaUser: {
    flexDirection: "row",
  },
});

export default CardWelcomeUser;
