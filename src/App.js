import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Cell from './components/Cell';
import { HStack, Flex, IconButton, useColorMode } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa';
import Winner from './components/Winner';
import Elmodal from './components/Elmodal';
function App() {
const [turn, setTurn] = useState('X');
const [cells, setCells] = useState(Array(9).fill(''));
const [winner, setWinner] = useState();
const [clicked, setClicked] = useState(true)

const { colorMode, toggleColorMode } = useColorMode();

const checkForWinner = (squares) => {
  let combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    
  ];

  for ( let i = 0 ; i < combos.length ; i++ ) {
    let [a, b, c] = combos[i];
    if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
        setWinner(squares[a]);
      }
  }
};

const handleClick = (num) => {
  if(winner) {
    setClicked(true)
    return;
  }
  if (cells[num] !== '') {
    setClicked(true)
    return;
  }

  let squares = [...cells];

  if (turn === 'X') {
    squares[num] = 'X';
    setTurn('O');
  } else {
    squares[num] = 'O';
    setTurn('X');
  }
  checkForWinner(squares);
  setCells(squares);
};

const handleRestart = () => {
  setWinner(null);
  setCells(Array(9).fill(''));
};


return (
  <Flex
  direction='column'
  justify='center'
  align='center'
  w='100%'
  >
    <Board turn={turn} winner={winner}/>
    {winner && <Winner handleRestart={handleRestart} winner={winner} />}
    {clicked && <Elmodal setClicked={setClicked} winner={winner}/> }
    <HStack>
          <Cell cells={cells} handleClick={handleClick} num={0} />
          <Cell cells={cells} handleClick={handleClick} num={1} />
          <Cell cells={cells} handleClick={handleClick} num={2} />
    </HStack>
    <HStack m={2}>
          <Cell cells={cells} handleClick={handleClick} num={3} />
          <Cell cells={cells} handleClick={handleClick} num={4} />
          <Cell cells={cells} handleClick={handleClick} num={5} />
    </HStack>
    <HStack>
          <Cell cells={cells} handleClick={handleClick} num={6} />
          <Cell cells={cells} handleClick={handleClick} num={7} />
          <Cell cells={cells} handleClick={handleClick} num={8} />
    </HStack>
    <Flex
    w='70%'
    justify='center'
    >
      <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound='true'
          size='md'
          alignSelf='center'
          onClick={toggleColorMode}
          m={5}
      />
    </Flex> 
  </Flex>
);
}

export default App;
