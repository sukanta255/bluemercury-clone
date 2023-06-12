import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
// import logo1 from '../../assets/s31.webp';
import logo1 from '../../image/image3333.webp';
import logo2 from '../../image/image1.webp';

const imgs = [logo1, logo2]

export const SlideThree = ({ slide }) => {
    return (
        <>
            <Flex position='relative' display={slide === 3 ? "flex" : "none"}>
                <Image src={imgs[1]} w='100%' display={{ base: "none", md: "block" }} />
                <Image src={imgs[0]} w='100%' display={{ base: "block", md: "none" }} />
                <Box position='absolute' textAlign={{ base: 'center'}}
                    w={{ md: "35%" }} top={{ md: "10%" }}
                    left={{ md: "10px" }} bottom={{ base: "7vw", sm: "12vw", md: "0px" }} >
                    <Text style={{ color: "white", letterSpacing: "1px", fontWeight: "500" }}
                        fontSize={{ base: "18px", sm: "30px", md: "3vw" }}>
                        STAR SERUM
                    </Text>
                    <Text style={{ color: "white" , fontWeight:"100" }} fontSize={{ base: "14.3px", sm: "19px", md: "1.9vw" }} w={{ base: "85%", sm: "55%", md: "100%" }} mx='auto'>
                        Serum deliver high concentrations of active ingredients, to elevate your skincare game!
                    </Text>
                    <Text style={{ marginTop: "2%", color: "white", letterSpacing: "1px", textDecoration: 'underline', textDecorationColor: "white" }} fontWeight={700}
                        fontSize={{ base: "14px", sm: "18px", md: "1.4vw" }} cursor='pointer'>
                        SHOP NOW
                    </Text>
                </Box>
            </Flex>
        </>
    )
}
