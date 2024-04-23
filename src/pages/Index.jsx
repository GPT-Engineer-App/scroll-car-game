import React, { useState, useEffect } from "react";
import { Box, VStack, IconButton, useBreakpointValue, Text } from "@chakra-ui/react";
import { FaCar, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carSize = useBreakpointValue({ base: "24px", md: "48px", lg: "72px" });

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <VStack w="100%" minH="200vh" align="center" justify="center">
      <IconButton icon={<FaArrowUp />} isRound size="lg" alignSelf="flex-end" m={4} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      <Box position="fixed" top={`${50 + ((scrollPosition / 10) % 50)}%`} left="50%" transform="translate(-50%, -50%)">
        <FaCar size={carSize} />
      </Box>
      <Text fontSize="2xl" p={10}>
        Scroll down to move the car
      </Text>
      <Box h="100vh" />
      <Text fontSize="2xl" p={10}>
        Keep scrolling...
      </Text>
      <Box h="100vh" />
      <Text fontSize="2xl" p={10}>
        Almost there...
      </Text>
      <Box h="100vh" />
      <IconButton icon={<FaArrowDown />} isRound size="lg" alignSelf="flex-end" m={4} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} />
    </VStack>
  );
};

export default Index;
