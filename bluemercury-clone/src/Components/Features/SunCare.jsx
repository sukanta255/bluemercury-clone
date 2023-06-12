import { Flex, Box, Text } from '@chakra-ui/react';
import logo from '../../assets/features/shop8.avif';

export const SunCare = () => {

    return (
        <>
            <Flex direction='column' gap='2px' fontSize='15px' textAlign={{ base: 'center', md: "left" }} >
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY CATEGORY</Text>
                <Text color='#12284c' cursor='pointer'>Shop All</Text>
                <Text color='#12284c' cursor='pointer'>Body Sunscreen</Text>
                <Text color='#12284c' cursor='pointer'>Face Sunscreen</Text>
                <Text color='#12284c' cursor='pointer'>Lip Sunscreen</Text>
                <Text color='#12284c' cursor='pointer'>Self Tanning & Bronzing</Text>
            </Flex>
            <Flex direction='column' gap='2px' fontSize='15px' textAlign={{ base: 'center', md: "left" }} >
                <Text cursor='pointer' color='#12284c' letterSpacing='0.5px' fontWeight='500'>BY BRAND</Text>
                <Text color='#12284c' cursor='pointer'>EltaMD</Text>
                <Text color='#12284c' cursor='pointer'>Hampton Sun</Text>
                <Text color='#12284c' cursor='pointer'>La Roche-Posay</Text>
                <Text color='#12284c' cursor='pointer'>M-61</Text>
                <Text color='#12284c' cursor='pointer'>SkinCeuticals</Text>
                <Text color='#12284c' cursor='pointer'>St. Tropez</Text>
                <Text color='#12284c' cursor='pointer'>Supergoop!</Text>
                <Text color='#12284c' cursor='pointer'>Tan Luxe</Text>
                <Text color='#12284c' cursor='pointer'>TanTowel</Text>
            </Flex>
            <Box cursor='pointer'>
                <img src={logo} alt='Blue Mercury' />
                <Text color='#12284c' fontFamily='sans-serif' mt='5px'>New to Bluemercury: EltaMD</Text>
                <Text color='#122b4c' opacity='0.8' fontSize='14px'>Shop the cult-favourite sunscreen brand!</Text>
            </Box>
        </>)
}