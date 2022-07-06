import React from 'react'
import {Flex, Heading} from '@chakra-ui/react'

const Board = ({ turn, winner, draw }) => {
  return (
    <Flex
    justify='center'
    align='center'
    direction='column'
    mt='120px'
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
      {!winner && !draw && (
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