import React from "react";
import { Text, View } from "react-native";

import style from "./style";

export default ({ titulo, children }) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text>{titulo}</Text>
        </View>
        <View style={style.cardContent}>
          {children}
        </View>
      </View>
    </View>
  );
};
