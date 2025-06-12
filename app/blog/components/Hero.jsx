import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Navigation from "@/app/components/Nav";
import { CustomButton } from "@/app/components/CustomButton";
import flexImg from "../../../public/assets/flexImg.jpg"



const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Navigation />
      <Box mt="100px">
        <Flex justify={"space-between"} align={"center"}>
          <Text fontWeight={" bold"} fontSize={"20px"}>
            Featured Blog Posts
          </Text>
          <Flex align={"center"} gap={"30px"}>
            <CustomButton
              btnText={"ChargeLab on Twitter"}
              color={"teal"}
              bg={"none"}
              px="0px"
            />
            <CustomButton
              btnText={"ChargeLab on LinkedIn"}
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
          p={"50px"}
          align={"center"}
          justify={"space-between"}
          my="50px"
        >
          <Box maxW={"550px"}>
            <Text fontWeight={"bold"} fontSize={"40px"}>
              Migration update: How ChargeLab rescued 1,400+ Enel X Way
              commercial chargers
            </Text>
            <Text py="30px" fontWeight={"medium"} color={"#ccc"}>November 26, 2024</Text>
            <Text  fontWeight={"medium"} pb="20px">
              At the beginning of October, ChargeLab announced our intent to
              support orphaned Enel X Way commercial chargers. The following...
            </Text>
            <CustomButton btnText={"Read more"} bg={"none"} color={"teal"} px="0px"/>
          </Box>
          <Box>
            <Image src={flexImg} height={400} width={400} alt="flexible image" style={{borderRadius: "20px"}} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
