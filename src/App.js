import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View ,ScrollView } from "react-native";
import { WebView } from "react-native-webview";

/**
 * Biblioteca de icones
 * É necessario utilizar o comando após instalar com o npm no projeto:
 * react-native link react-native-vector-icons
 */
import Icon from "react-native-vector-icons/Feather";
import foto from "./assests/Eu.jpg";
import Card from './components/Card'

export default props => {
  const [url, setUrl] = useState("");
  const [go, setGo] = useState(false);

  if (!go) {
    return (
      <>
        <ScrollView style={style.page}>
          <View style={style.container_header}>
            <Image style={style.foto} source={foto} />
            <Text style={style.name}>Gabriel Leandro da Silva</Text>
            <Text style={style.work}>Desenvolvedor Mobile e Web</Text>
            <View style={style.websites}>
              <TouchableOpacity onPress={() => {
                setUrl("https://github.com/GabrielLeandroSilva");
                setGo(true);
              }}><Icon color="#171515" name="github" size={30} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setUrl("https://www.facebook.com/gabriel.leandrodasilva");
                setGo(true);
              }}><Icon color="#3b5998" name="facebook" size={30} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                setUrl("https://www.linkedin.com/in/gleandro0795/")
                setGo(true)
              }}><Icon color="#0e76a8" name="linkedin" size={30} />
              </TouchableOpacity>
            </View>
          </View>

          <Card titulo="Formação Acadêmica">
            <Text style={style.cardText}>Fatec</Text>
            <Text style={style.cardText}>Facens</Text>
            <Text style={style.cardText}>ETEC</Text>
          </Card>

          <Card titulo="Experiência Proficional">
            <Text style={style.cardText}>Kenntech Tecnologia Eletrônica</Text>
            <Text style={style.cardText}>Citi Industrial Systems</Text>
            <Text style={style.cardText}>LIGA - Laboratorio de Games e Inovações</Text>
          </Card>

          <Card titulo="Contato">
            <Text style={style.cardText}>(99) 99999-9999</Text>
            <Text style={style.cardText}>email@gmail.com</Text>
          </Card>

        </ScrollView>
      </>
    );
  } else {
    return (
      <WebView source={{ uri: url }} />
    );
  }
};

const style = StyleSheet.create({
  page: {
    backgroundColor: "#E7E7E7",
    flex: 1,
  },

  container_header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  work: {
    color: "#939393",
    marginBottom: 10,
  },

  websites: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 10,
  },

  cardText: {
    color: "#939393",
  },

});
