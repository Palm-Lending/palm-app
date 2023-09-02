import { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Flex,
  Link,
  Spacer,
  Text,
  IconButton,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'; // Import Chakra UI icons

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'FAQs', href: '#' },
];

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure(); // Hook for handling menu open/close

  return (
    <>
      <header>
        <Container maxWidth="container.xl">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py="8"
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <Image
              src="/images/z_logo.png"
              alt="Palm logo"
              width={100}
              height={40}
              // cursor="pointer"
            />

            <Spacer />

            {/* Hamburger menu icon */}
            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              onClick={onToggle}
              display={{ base: 'block', md: 'none' }} // Show on mobile, hide on desktop
            />

            <Flex
              py={{ base: 4, md: 0 }}
              justifyContent={{ base: 'center', md: 'flex-end' }}
              display={{ base: isOpen ? 'block' : 'none', md: 'flex' }} // Show on mobile when menu is open
            >
              {navItems.map((navItem) => (
                <NextLink key={navItem.title} href={navItem.href} passHref>
                  <Link fontSize="1rem" px="4" py="1">
                    {navItem.title}
                  </Link>
                </NextLink>
              ))}
              <ConnectButton />
            </Flex>
          </Flex>
        </Container>

        {/* Mobile menu */}
        {isOpen && (
          <Box
            pt={20}
            position="absolute"
            w="100%"
            p="4"
            boxShadow="md"
            display={{ base: 'block', md: 'none' }}
          >
            {/* Close menu icon */}
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              onClick={onToggle}
              alignSelf="flex-end"
            />
            {navItems.map((navItem) => (
              <NextLink key={navItem.title} href={navItem.href} passHref>
                <Link fontSize="1rem" py="2" display="block">
                  {navItem.title}
                </Link>
              </NextLink>
            ))}
          </Box>
        )}
      </header>
    </>
  );
}
