import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import { Text, TextInput } from'react-native';
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';
export default function SignIN () {
  return(
    <View style={styles.container}>
        <Text style={styles.label}>EMail</Text>
        <TextInput
        placeholder="Margarita..."
        style={styles.input}
      />
      <Text style={styles.label}>EMail</Text>
        <TextInput
        placeholder="Margarita..."
        style={styles.input}
      />
      <Button text="Create Account" onPress={() => {}} />
      
    </View>
  ); 
}
const styles = StyleSheet.create({
    container: {    
      padding: 10,
    },
    textButton: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: Colors.light.tint,
      marginVertical: 10,
    },
    label: {
      color: 'gray',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginTop: 5,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    
  });
