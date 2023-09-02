import React from 'react';
import { Container, Box, Grid, Text } from '@chakra-ui/react';

const articles = [
  {
    author: 'Justin Gaffney',
    description: 'Blockchain Developer',
    ext: 'Zencon 2022 Winner',
    imgPath: '/images/jj-img.png',
  },
  {
    author: 'Christopher Martinez',
    description: 'Backend Developer',
    ext: 'Zencon 2022 Winner',
    imgPath: '/images/cm-img.png',
  },
  {
    author: 'Xochitl Escamilla',
    description: 'UI/UX Design',
    ext: 'Zencon 2022 Winner',
    imgPath: '/images/xe-img.png',
  },
  {
    author: 'Miguel Segovia',
    description: 'Frontend Developer',
    ext: 'Future Zencon winner',
    imgPath: '/images/ms-img.png',
  },
];

export default function Blog() {
  return (
    <Box py={['10', '14', '20']} bg="black">
      <Container maxW="container.xl" bg="black">
        <Box textAlign="center">
          <Text
            fontSize={['2xl', '3xl', '4xl']}
            color="primary-lime-green"
            mb={['5', '10']}
            fontWeight="semibold"
          >
            Team
          </Text>
          <Text
            fontSize={['lg', 'xl']}
            color="neutral-grayish-blue"
            lineHeight={['5', '6']}
            mb={['10', '20']}
          >
            Join us in revolutionizing the financial industry and empowering global borrowers! VC investors, let's shape the future together.
          </Text>
        </Box>
        <Grid
          gridTemplateColumns={['1fr', '1fr', 'repeat(4, 1fr)']}
          gap={['5', '7']}
        >
          {articles.map((article, index) => (
            <Box
              key={index}
              bg="black"
              borderRadius="md"
              p={['5', '6']}
              shadow="md"
              textAlign="center"
            >
              <Box
                w={['full', 'full', '2/3']}
                mx="auto"
                pb={['5', '10']}
              >
                <img
                  src={article.imgPath}
                  alt={`Photo of ${article.author}`}
                  className="object-cover w-full h-auto rounded-md"
                />
              </Box>
              <Text
                fontSize="xs"
                color="neutral-grayish-blue"
                fontWeight="medium"
                mb="2"
              >
                {article.author}
              </Text>
              <Text
                fontSize="xs"
                color="neutral-grayish-blue"
                fontWeight="medium"
                mb="2"
              >
                {article.description}
              </Text>
              <Text
                fontSize="xs"
                color="neutral-grayish-blue"
                fontWeight="medium"
              >
                {article.ext}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
