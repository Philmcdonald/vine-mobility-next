"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Navigation from "@/app/components/Nav";
import { CustomButton } from "@/app/components/CustomButton";
import flexImg from "../../../public/assets/flexImg.jpg";
import { useRouter } from "next/navigation"; 

const Hero = () => {
  const router = useRouter();
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Navigation />
      <Box mt={["30px", "30px", "30px", "50px"]} >
        <Flex justify={"space-between"} flexDir={["column","column","column","row"]} align={"center"} gap={["20px","20px","20px","0px"]}>
          <Text fontWeight={" bold"} fontSize={"20px"}>
            Featured Blog Posts
          </Text>
          <Flex align={"center"} gap={["10px","10px","10px","30px"]} flexDir={["column", "column", "column", "row"]}>
            <CustomButton
              btnText={"VineMobility on Twitter"}
              color={"teal"}
              bg={"none"}
              px="0px"
            />
            <CustomButton
              btnText={"VineMobility on LinkedIn"}
              color={"teal"}
              bg={"none"}
              px={"0px"}
            />
          </Flex>
        </Flex>
        <Flex
          //   h={"400px"}
          bg={"#fff"}
          borderRadius={"20px"}
          p={["20px","20px","20px","50px"]}
          align={"center"}
          justify={"space-between"}
          flexDir={["column", "column", "column", "row"]}
          my="50px"
        >
          <Box maxW={["fit-content","fit-content","fit-content","550px"]}>
            <Text fontWeight={"bold"} fontSize={["25px","25px","25px","40px"]}>
              How to build a profitable EV charger business: the first 100 days
            </Text>
            <Text py={["10px","10px","10px","20px" ]}fontWeight={"medium"} color={"#ccc"}>
              June, 16 2025
            </Text>
            <Text fontWeight={"medium"} pb="10px">
              Everyone's talking about electric vehicles (EVs) in Nigeria. From
              government pilot projects to tech entrepreneurs launching electric
              fleets, it feels like we're on the edge of a transportation
              revolution. If you've been watching this shift unfold, you've
              probably thought: "Maybe I should get into EV charging..."
            </Text>
            <CustomButton
              btnText={"Read more"}
              onClick={() => router.push('/blog/blog1')}
              bg={"none"}
              color={"teal"}
              px="0px"
            />
          </Box>
          <Box>
            <Image
              src={flexImg}
              height={600}
              width={600}
              alt="flexible image"
              style={{ borderRadius: "20px" }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
