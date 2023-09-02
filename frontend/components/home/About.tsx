import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box py={['10', '14', '20']} bg="black">
      <Container maxW="container.xl" bg="black">
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            color="primary-lime-green"
            mb={['5', '10']}
          >
            About
          </Heading>
          <Text
            fontSize={['lg', 'xl']}
            color="neutral-grayish-blue"
            lineHeight={['5', '6']}
            mb={['10', '20']}
          >
            Experience the benefits of decentralized finance (DeFi) through our user-friendly interface, seamless transactions, and robust security protocols.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
