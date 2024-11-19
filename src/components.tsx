
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Drops, produtos ou marcas"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      
      <View style={styles.nav}>
        <Text style={styles.navText}>MARCAS</Text>
        <Text style={styles.navText}>CALENDÁRIO</Text>
        <Text style={styles.navText}>FEED</Text>
      </View>

      
      <View style={styles.containerImg1}>
        <Image source={{ uri: 'https://droper-lapse.us-southeast-1.linodeobjects.com/20241023023140462-520.webp' }} style={styles.img1}/>    
      </View>

      
      <ScrollView horizontal style={styles.marcasContainer}>
        {['Nike', 'Corteiz', 'Yeezy', 'Supreme', 'ASSC', 'Puma', 'Adidas', 'MAD', 'Sufgang' ].map((brand, index) => (
          <View style={styles.marcas} key={index}>
            <Text style={styles.textMarcas}>{brand}</Text>
          </View>
        ))}
      </ScrollView>

     
      <ScrollView horizontal style={styles.containerProduto}>
        {['Air Jordan 4', 'Air Jordan 4', 'Air Jordan 4','Air Jordan 4','Air Jordan 4' ].map((product, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={{ uri: 'https://droper-media.us-southeast-1.linodeobjects.com/911202215728112.webp' }}
              style={styles.tenisImgCard}
            />
            <Text style={styles.nomeProduto}>{product}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    padding: 15,
    marginTop: 30,
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerImg1: {
    backgroundColor:'white',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    width: '100%',
  },
  img1:{
    width: 300,
    height: 300,
    marginTop:'35%',
    resizeMode: 'contain',
    marginVertical: 10,
    alignItems:'center',
    
  },
  marcasContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  marcas: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  textMarcas: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
  containerProduto: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 120,
    backgroundColor: '#222',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 10,
    
    
  },
  tenisImgCard: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
    
    
  },
  nomeProduto: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});