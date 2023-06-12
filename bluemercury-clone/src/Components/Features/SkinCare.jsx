import { Flex, Box, Text } from "@chakra-ui/react";
import logo from "../../image/image28.avif";

export const SkinCare = () => {
  return (
    <>
      <Flex
        direction="column"
        gap="2px"
        fontSize="15px"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text
          cursor="pointer"
          color="#12284c"
          letterSpacing="0.5px"
          fontWeight="500"
        >
          BY CATEGORY
        </Text>
        <Text color="#12284c" cursor="pointer">
          Shop All
        </Text>
        <Text color="#12284c" cursor="pointer">
          Cleansers
        </Text>
        <Text color="#12284c" cursor="pointer">
          Exfoliators & Peels
        </Text>
        <Text color="#12284c" cursor="pointer">
          Eye Care
        </Text>
        <Text color="#12284c" cursor="pointer">
          Lip Care
        </Text>
        <Text color="#12284c" cursor="pointer">
          Masks
        </Text>
        <Text color="#12284c" cursor="pointer">
          Moisturizers
        </Text>
        <Text color="#12284c" cursor="pointer">
          Sun Care
        </Text>
        <Text color="#12284c" cursor="pointer">
          Tools & Devices
        </Text>
        <Text color="#12284c" cursor="pointer">
          Treatment & Serums
        </Text>
        <Text color="#12284c" cursor="pointer">
          Vitamins & Supplements
        </Text>
        <Text color="#12284c" cursor="pointer">
          Value & Gift Sets
        </Text>
      </Flex>
      <Flex
        direction="column"
        gap="2px"
        fontSize="15px"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text
          cursor="pointer"
          color="#12284c"
          letterSpacing="0.5px"
          fontWeight="500"
        >
          BY BRAND
        </Text>
        <Text color="#12284c" cursor="pointer">
          111Skin
        </Text>
        <Text color="#12284c" cursor="pointer">
          Augustinus Bader
        </Text>
        <Text color="#12284c" cursor="pointer">
          BalmLabs
        </Text>
        <Text color="#12284c" cursor="pointer">
          Dr. Barbara Sturm
        </Text>
        <Text color="#12284c" cursor="pointer">
          EltaMD
        </Text>
        <Text color="#12284c" cursor="pointer">
          IS Clinical
        </Text>
        <Text color="#12284c" cursor="pointer">
          Kiehl's
        </Text>
        <Text color="#12284c" cursor="pointer">
          La Mer
        </Text>
        <Text color="#12284c" cursor="pointer">
          M-61
        </Text>
        <Text color="#12284c" cursor="pointer">
          OSEA
        </Text>
        <Text color="#12284c" cursor="pointer">
          Révive
        </Text>
        <Text color="#12284c" cursor="pointer">
          SkinCeuticals
        </Text>
        <Text color="#12284c" cursor="pointer">
          Tata Harper
        </Text>
        <Text color="#12284c" cursor="pointer">
          ZitSticka
        </Text>
      </Flex>
      <Box cursor="pointer" textAlign={{ base: "center", md: "left" }}>
        <img src={logo} alt="Blue Mercury" />
        <Text color="#12284c" fontFamily="sans-serif" mt="5px">
          Derm-Recommended Skincare
        </Text>
        <Text color="#122b4c" opacity="0.8" fontSize="14px">
          SkinCeuticals' mission is to improve skin health
        </Text>
      </Box>
    </>
  );
};
