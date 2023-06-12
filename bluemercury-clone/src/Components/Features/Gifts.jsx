import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop10.avif';

export const Gifts = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px' textAlign={{ base: 'center', md: "left" }} >
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>FEATURED</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Gifts By Category</Text>
                <Text color='#12284c' cursor='pointer'>Gifts By Recipient</Text>
                <Text color='#12284c' cursor='pointer'>Gift Cards</Text>
                <Text color='#12284c' cursor='pointer'>Gift Sets</Text>
                <Text color='#12284c' cursor='pointer'>Luxury Gifts</Text>
                <Text color='#12284c' cursor='pointer'>Wellness Gifts</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px' textAlign={{ base: 'center', md: "left" }} >
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY PRICE</Text>
                <Text color='#12284c' cursor='pointer'>Under $25</Text>
                <Text color='#12284c' cursor='pointer'>Under $50</Text>
                <Text color='#12284c' cursor='pointer'>Under $75</Text>
                <Text color='#12284c' cursor='pointer'>Under $100</Text>
                <Text color='#12284c' cursor='pointer'>$100 and Over</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>Wedding Party Gifts</Text>
            </Box>
        </>)
}