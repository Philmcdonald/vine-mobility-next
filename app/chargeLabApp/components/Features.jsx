import { Box, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { features } from "../data";
import CustomText from "@/app/components/CustomText";
import InfoHeading from "@/app/components/InfoHeading";
import Wrapper from "@/app/components/Wrapper";
import SubHeading from "@/app/components/SubHeading";

const Features = () => {
  return (
    <Box bg={"#000"} justifyContent={"center"} h={"fit-content"}>
      <Wrapper>
        <Box maxW={"1000px"}>
          <InfoHeading>Features</InfoHeading>
          <SubHeading color={"#fff"} py={{ base: "15px", xl: "20px" }}>
            Enjoy Hassle Free EV Charging Experience
          </SubHeading>
          <CustomText color={"#fff"}>
            VineVolt&apos;s app is built by EV drivers, for EV drivers.
          </CustomText>
        </Box>

        <Grid
          templateColumns={{ base: "1fr", xl: "repeat(4, 1fr)" }}
          gap={10}
          mt={{ base: "20px", xl: "40px" }}
        >
          {features.map(({ title, content, img }) => {
            return (
              <Box color={"#fff"} key={title}>
                <Box
                  mb={{ base: "10px", md: "0" }}
                  height={{ base: "35px", md: "40px" }}
                  position="relative"
                  width="auto"
                >
                  <Image
                    src={img}
                    alt=""
                    height={40}
                    
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Text
                  py="10px"
                  fontSize={{ base: "16px", md: "15px" }}
                  fontWeight={"bold"}
                >
                  {title}
                </Text>
                <Text fontSize={{ base: "14px", md: "14px" }}>{content}</Text>
              </Box>
            );
          })}
        </Grid>
      </Wrapper>
    </Box>
  );
};

export default Features;
