import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import flexImg from "../../../public/assets/flexImg.jpg"
import {CustomButton } from "@/app/components/CustomButton";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const posts = [
  {
    id: 1,
    topic: "ChargeLab announces support for Shell Recharge CPMS customers",
    date: "Decemeber 20, 2024",
    pic: flexImg,
  },
  {
    id: 2,
    topic: "ChargeLab announces support for Shell Recharge CPMS customers",
    date: "Decemeber 20, 2024",
    pic: flexImg,
  },
  {
    id: 3,
    topic: "ChargeLab announces support for Shell Recharge CPMS customers",
    date: "Decemeber 20, 2024",
    pic: flexImg,
  },
];

const Posts = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Latest Posts{" "}
      </Text>
      <Flex my={"50px"} align={"start"} gap={"50px"}>
        <Box>
          {posts.map((post) => (
            <Flex
              key={post?.id}
              align={"center"}
              mb="30px"
              p={"50px"}
              w={"fit-content"}
              cursor={"pointer"}
              borderRadius={"20px"}
              _hover={{boxShadow:"xl"}}
            >
              <Box maxW={"400px"}>
                <Text fontSize={"30px"} fontWeight={"bold"}>
                  {post?.topic}
                </Text>
                <Text fontWeight={"medium"} color={"#ccc"} py="20px">
                  {post?.date}
                </Text>
                <CustomButton
                  btnText={"Read more"}
                  px={"0px"}
                  bg={"none"}
                  color={"teal"}
                />
              </Box>
              <Box>
               
                 <Image src={post?.pic} alt="flexible image" style={{borderRadius: "20px"}} height={400} width={400} />
                
              </Box>
            </Flex>
          ))}
        </Box>
        <Box borderRadius={"10px"} bg={"#fff"} p="20px" boxShadow={"md"} h={"fit-content"} w={"300px"} >
            <Text fontSize={"30px"} fontWeight={"bold"}>Posts by Topic</Text>

            <Box mt="20px" fontWeight={"bold"}>
                <Flex align={"center"} justify={"space-between"}>
                    <Text>EV Industry Knowledge</Text>
                    <MdKeyboardDoubleArrowRight  />
                </Flex>
                <Flex align={"center"} justify={"space-between"} my={"20px"}>
                    <Text>Company News</Text>
                    <MdKeyboardDoubleArrowRight  />
                </Flex>
                <Flex align={"center"} justify={"space-between"}>
                    <Text>Most Popular</Text>
                    <MdKeyboardDoubleArrowRight  />
                </Flex>
                <Flex align={"center"} justify={"space-between"} my="20px">
                    <Text>New Feature Updates</Text>
                    <MdKeyboardDoubleArrowRight  />
                </Flex>

            </Box>

        </Box>
      </Flex>
    </Box>
  );
};

export default Posts;
