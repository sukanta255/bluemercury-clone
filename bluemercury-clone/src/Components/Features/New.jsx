import {
  Popover,
  PopoverTrigger,
  Text,
  PopoverContent,
  PopoverBody,
  Flex,
  Box,
} from "@chakra-ui/react";
import { newCategories } from "../../data/featuresData";
import logo1 from "../../image/image3.avif";
import logo2 from "../../image/image33.avif";

export const New = () => {
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
          NEW!
        </Text>
      </PopoverTrigger>
      <PopoverContent w="100vw" mt="-5px">
        <PopoverBody>
          <Flex my="15px" justifyContent="center" gap="4%">
            <Flex direction="column" gap="3px" fontSize="16.5px">
              <Text
                cursor="pointer"
                color="#12284c"
                letterSpacing="0.5px"
                fontWeight="500"
                textAlign={{ base: "center", md: "left" }}
              >
                BY CATEGORY
              </Text>
              {newCategories.map((ele, i) => (
                <Text
                  color="#12284c"
                  cursor="pointer"
                  textAlign={{ base: "center", md: "left" }}
                  key={i + 1}
                >
                  {ele}
                </Text>
              ))}
            </Flex>
            <Box cursor="pointer" textAlign={{ base: "center", md: "left" }}>
              <img src={logo1} alt="Blue Mercury" />
              <Text color="#12284c" fontFamily="sans-serif" mt="5px">
                New Brand Alert: ZitSticka
              </Text>
              <Text color="#122b4c" opacity="0.8" fontSize="14px">
                Treat and prevent all kinds of breakouts
              </Text>
            </Box>
            <Box cursor="pointer" textAlign={{ base: "center", md: "left" }} >
              <img src={logo2} alt="Blue Mercury" />
              <Text color="#12284c" fontFamily="sans-serif" mt="5px">
                The Summer Beauty Spectacular
              </Text>
              <Text color="#122b4c" opacity="0.8" fontSize="14px">
                $780+ worth of must-haves for less than $400!
              </Text>
            </Box>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
