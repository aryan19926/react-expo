import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { Text, TextInput } from'react-native';
import Colors from '@/src/constants/Colors';
import Button from '@/src/components/Button';
import { Link } from 'expo-router';
import{ useState } from'react';

export default function SignIN () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View style={styles.container}>
        <Stack.Screen options={{title:'SignIn'}}/>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />
       <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        style={styles.input}
        secureTextEntry
      />
      <Button text="Sign In" onPress={() => {}} />
      <Text>Don't have an account? <Link href={'/signup'} asChild>
       <Text style={styles.textButton}> Sign Up</Text>
      </Link></Text>
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
