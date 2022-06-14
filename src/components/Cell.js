import React  from 'react'
import { Center, Text } from '@chakra-ui/react'
const Cell = ({ num, handleClick, cells }) => {
  return <Center
   onClick={() => handleClick(num)}
   w={{ base: '75px', md: '90px', lg: '100px' }}
   h={{ base: '75px', md: '90px', lg: '100px' }}
   bg='tomato'
   color='white'
   >
    <Text
    fontSize='5xl'
    textAlign='center'>{cells[num]}</Text>
   </Center>;
};

export default Cell;