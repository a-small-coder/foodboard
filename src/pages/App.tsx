import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/App.css';

function App() {
  return (
    <Flex flexDirection='column' height='100vh'>
      <Header/>
      <Box flex='1 0'>

      </Box>
      <Footer/>
    </Flex>
  );
}

export default App;
