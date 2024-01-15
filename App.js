import { Text, SafeAreaView, StyleSheet, View, avatar, Button, Image} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
        style={styles.avatar}
        source={require('./assets/ak.jpeg')}
      />
      <Text style={styles.title}>Intan Maharani</Text>
      <Text style={styles.paragraph}>Nama saya Intan Maharani, saya suka matcha</Text>
      <Button
      onPress={() => Alert.alert('Thank you!')}
      style={styles.Button}
      title="contact Me"
      color="#841584"
      />
      <Text style={styles.mrp}>My Recent Project</Text> 
     <Image
        style={styles.pj1}
        resizeMode={'stretch'}
        source={require('./assets/kedua.png')}
      />
      <Text style={styles.uid1}>UI Design Figma</Text>
      <Text style={styles.uid1sub}>Edu App</Text>  
      <Button
      style={styles.Button2}
      title="view here"
      color="orange"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  paragraph: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center'
  },
  avatar: {
    height: 120,
    width: 120,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: '28%'
  },
  mrp: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  pj1: {
    width: 300,
    height: 200,
    marginBottom: 50,
    marginLeft: '10%',
    borderRadius: 5,
  },
  uid1: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center'
  },
});