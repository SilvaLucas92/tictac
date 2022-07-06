import React from 'react'
import { HStack, Text } from '@chakra-ui/react'

const Winner = ({winner}) => {
  return (
    <HStack
    m={2}
    >
        <Text p={2}>And the Winner is...  </Text>
        <Text font fontSize={25} fontBold='500' color='red'>¡{winner}!</Text>
    </HStack>
  )
}

export default Winner