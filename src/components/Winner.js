import React from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const Winner = ({winner, handleRestart}) => {
  return (
    <HStack
    m={2}
    >
        <Text p={2}>And the Winner is...  </Text>
        <Text font fontSize={25} color='red'>¡{winner}!</Text>
        <Button size='sm' onClick={() => handleRestart()}>Play Again</Button>
    </HStack>
  )
}

export default Winner