import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LogoBienvenida from "../components/LogoBienvenida";
import InputHora from "../components/InputHora";
import InputMinutos from "../components/InputMinutos";
import AMPMSelect from "../components/AMPMSelect";
import TextFecha from "../components/TextFecha";
import CardWelcomeUser from "../components/CardWelcomeUser";
import AlertaSuccess from "../components/AlertaSuccess";
import Icon from "../components/Icon";
import PlaceholderInput from "../components/PlaceholderInput";
import ButtonNumber from "../components/ButtonNumber";
import Delete from "../components/Delete";
import ButtonSucess from "../components/ButtonSucess";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const RelojChecador = () => {
  return (
    <View style={styles.relojChecador}>
      <View style={styles.relojBienvendida}>
        <View style={styles.relojBienvendida}>
          <LogoBienvenida />
          <View style={styles.horaYFecha}>
            <View style={styles.reloj}>
              <View style={styles.timer}>
                <InputHora />
                <Text style={styles.text}>:</Text>
                <InputMinutos />
              </View>
              <AMPMSelect />
            </View>
            <TextFecha />
          </View>
        </View>
        <View style={styles.welcomeYAlert}>
          <CardWelcomeUser />
          <AlertaSuccess />
        </View>
      </View>
      <View style={styles.containerChecador}>
        <View style={styles.containerIngresarCode}>
          <View style={styles.inputCode}>
            <View style={styles.placeholder}>
              <Icon />
              <PlaceholderInput />
            </View>
          </View>
          <View style={styles.containerTeclado}>
            <View style={styles.reloj}>
              <ButtonNumber number="1" />
              <ButtonNumber t1MarginLeft={45} number="2" />
              <ButtonNumber t1MarginLeft={45} number="3" />
            </View>
            <View style={styles.rowNumber2}>
              <ButtonNumber t1MarginLeft="unset" number="4" />
              <ButtonNumber t1MarginLeft={45} number="5" />
              <ButtonNumber t1MarginLeft={45} number="6" />
            </View>
            <View style={styles.rowNumber2}>
              <ButtonNumber t1MarginLeft="unset" number="7" />
              <ButtonNumber t1MarginLeft={45} number="8" />
              <ButtonNumber t1MarginLeft={45} number="9" />
            </View>
            <View style={styles.rowNumber2}>
              <ButtonNumber t1MarginLeft="unset" number="0" />
              <Delete />
            </View>
          </View>
        </View>
        <ButtonSucess />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.materialThemeDisplayLarge_size,
    lineHeight: 64,
    fontFamily: FontFamily.materialThemeDisplayLarge,
    color: Color.materialThemeSysLightOnSurface,
    textAlign: "center",
    display: "flex",
    width: 24,
    height: 80,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    alignItems: "center",
    flexDirection: "row",
  },
  reloj: {
    flexDirection: "row",
  },
  horaYFecha: {
    marginTop: 35,
    alignItems: "flex-end",
  },
  relojBienvendida: {
    alignItems: "center",
  },
  welcomeYAlert: {
    marginTop: 114,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  inputCode: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#adb5bd",
    borderWidth: 1,
    width: 348,
    height: 58,
    justifyContent: "center",
  },
  rowNumber2: {
    marginTop: 28,
    flexDirection: "row",
  },
  containerTeclado: {
    marginTop: 45,
  },
  containerIngresarCode: {
    alignItems: "flex-end",
  },
  containerChecador: {
    marginLeft: 183,
    alignItems: "center",
  },
  relojChecador: {
    backgroundColor: "#f7f7f7",
    flex: 1,
    width: "100%",
    paddingHorizontal: 92,
    paddingVertical: 110,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default RelojChecador;
