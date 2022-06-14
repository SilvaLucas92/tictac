import React from 'react'
import {Flex, Heading} from '@chakra-ui/react'

const Board = ({ turn, winner }) => {
  return (
    <Flex
    justify='center'
    align='center'
    direction='column'
    >
      <Heading
       as='h1'
       size='4xl'
       m={5}
       textAlign='center'
       bgClip="text"
        bgGradient="linear(to-r, green.400,purple.500)"
       >
          Tic Tac Toe
      </Heading>
      {!winner && (
        <Heading
       as='h3'
       size='3x1'
       m={2}
       textAlign='left'
       >
        Turn: {turn}
      </Heading>
      )}
    </Flex>
  )
}

export default Board