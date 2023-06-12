import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import logo from "../image/image27.webp";

export const NewBrand = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      px={{ md: "3%" }}
      mt={{ base: "-15px", md: "30px" }}
      alignItems="center"
      flexDir={{ base: "column", md: "row" }}
      gap={{ base: "30px", md: "0px" }}
    >
      <Box width={{ base: "100%", md: "48%" }} cursor="pointer">
        <Image
          width="100%"
          height={{ md: "37vw" }}
          objectFit={"cover"}
          src={logo}
          alt=""
        />
      </Box>
      <Box
        width={{ base: "100%", md: "48%" }}
        height="100%"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text
          cursor="pointer"
          width="fit-content"
          letterSpacing="2px"
          color="#12284C"
          fontWeight="500"
          fontSize="16px"
          mx={{ base: "auto", md: "0px" }}
        >
          R+CO
        </Text>
        <Heading
          cursor="pointer"
          fontSize="25px"
          color="#12284C"
          fontWeight={450}
          letterSpacing="2px"
          fontFamily="Montserrat Light,sans-serif"
          mt="12px"
        >
          Dallas Thickening Treatment
        </Heading>
        <Text
          cursor="pointer"
          color="#12284C"
          fontSize={{ base: "17px", md: "18px" }}
          mt="15px"
          fontWeight="300"
          pr={{ base: "0px", md: "25%" }}
          px={{ base: "15%", md: "0px" }}
        >
          A mega-thickening treatment to help build texture for a long-lasting,
          voluminous effect
        </Text>
        <Text
          cursor="pointer"
          width="fit-content"
          mt="15px"
          letterSpacing="2px"
          color="#12284C"
          fontWeight="500"
          fontSize="15px"
          borderBottom="2px solid #12284C"
          mx={{ base: "auto", md: "0px" }}
        >
          SHOP NOW
        </Text>
      </Box>
    </Flex>
  );
};
