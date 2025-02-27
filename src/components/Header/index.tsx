import {useNavigation} from '@react-navigation/native';
import {Heading, HStack, IconButton, StyledProps, useTheme} from 'native-base';
import {CaretLeft} from 'phosphor-react-native';
import React from 'react';

type HeaderProps = StyledProps & {
  title: string;
};

export function Header({title, ...rest}: HeaderProps) {
  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}>
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        onPress={handleGoBack}
      />
      <Heading
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}>
        {title}
      </Heading>
    </HStack>
  );
}
