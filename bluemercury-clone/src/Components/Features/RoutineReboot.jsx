import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import logo1 from "../../image/image30.avif";
import logo2 from "../../image/image32.avif";

export const RoutineReboot = () => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text
          _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }}
          borderRadius="0px"
          variant="ghost"
          color="#51617c"
          fontSize="16px"
          fontWeight="400"
          borderBottom="2px solid white"
        >
          THE CACHE
        </Text>
      </PopoverTrigger>
      <PopoverContent w="100vw" mt="-5px">
        <PopoverBody>
          <Flex justifyContent="center" my="15px">
            <Box pr="35px" cursor="pointer" textAlign={{ base: 'center', md: "left" }}>
              <img src={logo1} alt="Routine Reboot" />
              <Text color="#12284c" fontFamily="sans-serif" mt="5px">
                Explorer The Cache
              </Text>
            </Box>
            <Box cursor="pointer" textAlign={{ base: 'center', md: "left" }}>
              <img src={logo2} alt="Routine Reboot" />
              <Text color="#12284c" fontFamily="sans-serif" mt="5px">
                New Bluemercury: Tronque{" "}
              </Text>
              <Text color="#122b4c" opacity="0.8" fontSize="14px">
                High performance skincare for the neck down
              </Text>
            </Box>
            <Flex
              direction="column"
              gap="5px"
              fontSize="17px"
              textAlign={{ base: "center", md: "left" }}
              marginLeft="35px"
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
                Shop All
              </Text>
              <Text color="#12284c" cursor="pointer">
                Humanrace
              </Text>
              <Text color="#12284c" cursor="pointer">
                Le Domaine
              </Text>
              <Text color="#12284c" cursor="pointer">
                Tronque
              </Text>
              <Text color="#12284c" cursor="pointer">
                Wellbell
              </Text>
            </Flex>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
