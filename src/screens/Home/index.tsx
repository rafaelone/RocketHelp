import React, {useState} from 'react';
import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from 'native-base';

import Logo from '../../assets/images/logo_secondary.svg';
import {ChatTeardropText, SignOut} from 'phosphor-react-native';
import {Filter} from '../../components/Filter';
import {Order, OrderData} from '../../components/Order';
import {Button} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>(
    'open',
  );
  const [orders, setOrders] = useState<OrderData[]>([
    {
      id: '123',
      patrimony: '99999',
      when: '18/07/2022 às10:00',
      status: 'open',
    },
  ]);
  const {colors} = useTheme();

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', {
      orderId,
    });
  }

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}>
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center">
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'} solicitações{' '}
                {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />
        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
