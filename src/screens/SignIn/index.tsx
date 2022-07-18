import React, {useState} from 'react';
import {Heading, Icon, useTheme, VStack} from 'native-base';

import Logo from '../../assets/images/logo_primary.svg';
import {Input} from '../../components/Input';
import {Envelope, Key} from 'phosphor-react-native';
import {Button} from '../../components/Button';

export function SignIn() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {colors} = useTheme();

  function handleSignIn() {
    console.log(name, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        SignIn
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={setName}
      />
      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mb={8}
        onChangeText={setPassword}
      />
      <Button title="Entrar" w="full" onPress={handleSignIn} />
    </VStack>
  );
}
