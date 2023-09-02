import { useState } from 'react'
import Image from 'next/image'
import { Container, Flex, Link, Spacer, Text } from '@chakra-ui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import NextLink from 'next/link'
import React from 'react'
import { Head, MetaProps } from './Head'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'FAQs', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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

            <Flex
              py={{ base: 4, md: 0 }}
              justifyContent={{ base: 'center', md: 'flex-end' }}
            >
              <NextLink href="/" passHref legacyBehavior>
                <Link fontSize="1.5rem" px="4" py="1">
                  Home
                </Link>
              </NextLink>

              <NextLink href="/dashboard" passHref legacyBehavior>
                <Link fontSize="1.5rem" px="4" py="1">
                  Dashboard
                </Link>
              </NextLink>

              <NextLink href="/" passHref legacyBehavior>
                <Link fontSize="1.5rem" px="4" py="1" pr="20">
                  FAQs
                </Link>
              </NextLink>

              <ConnectButton />
            </Flex>
          </Flex>
        </Container>

        {/* Modal */}
        <div
          className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
            {navItems.map((navItem) => (
              <a key={navItem.title} className="py-2" href={navItem.href}>
                {navItem.title}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  )
}
