import { Popover, PopoverTrigger, PopoverContent, PopoverBody, Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../image/image2.avif';

export const BlueRewards = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >BLUEREWARDS</Text>
            </PopoverTrigger>
            <PopoverContent w='100vw' mt='-5px'>
                <PopoverBody>
                    <Flex my='15px' justifyContent='center' gap={20}>
                        <Flex direction='column' gap='5px' fontSize='18px' textAlign={{ base: 'center', md: "left" }} >
                            <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>MY ACCOUNT</Text>
                            <Text color='#12284c' cursor='pointer'>Account Overview</Text>
                            <Text color='#12284c' cursor='pointer'>My Purchases</Text>
                            <Text color='#12284c' cursor='pointer'>My BlueRewards</Text>
                            <Text color='#12284c' cursor='pointer'>My Wishlist</Text>
                            <Text color='#12284c' cursor='pointer'>Details + Preferences</Text>
                        </Flex>
                        <Box cursor='pointer' textAlign={{ base: "center", md: "left" }} >
                            <img src={logo} alt='Blue Rewards' />
                            <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Earn $10 for every $250</Text>
                            <Text color='#122b4c' opacity='0.8' fontSize='14px'>Free to Join! Learn More &gt; </Text>
                        </Box>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}