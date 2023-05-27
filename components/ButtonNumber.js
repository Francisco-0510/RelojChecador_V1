import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonNumber = memo(({ t1MarginLeft, number }) => {
  const t1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", t1MarginLeft),
    };
  }, [t1MarginLeft]);

  return (
    <View style={[styles.t1, t1Style]}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  number: {
    fontSize: FontSize.size_6xl,
    lineHeight: 32,
    fontFamily: FontFamily.latoRegular,
    color: Color.statusColorBgSuccess,
    textAlign: "center",
  },
  t1: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_16xl,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonNumber;
