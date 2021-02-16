import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email);
  console.log(password);

  function handleSubmit() {
    
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'íos' ? 'padding' : null} style={styles.container}>
      <View>
        <Text style={styles.title}>Entrar</Text>

        <Text style={styles.label}>E-EMAIL</Text>
        <TextInput
          value={email}
          onChange={text => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => passwordInput.focus()}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          value={password}
          onChange={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
          ref={element => {
            passwordInput = element;
          }}
          onSubmitEditing={handleSubmit}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignIn;
