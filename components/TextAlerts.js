import React, { memo } from "react";
import { FontFamily } from "../GlobalStyles";

const TextAlerts = memo(() => {
  return (
    <Text style={styles.cambiaAlgunasCosas}>
      {" "}
      Cambia algunas cosas e intenta enviarlo de nuevo.
    </Text>
  );
});

const styles = StyleSheet.create({
  cambiaAlgunasCosas: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
  },
});

export default TextAlerts;
