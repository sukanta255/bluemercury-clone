import { useEffect, useRef, useState } from "react";
import { Box, Flex, Skeleton } from '@chakra-ui/react';
import { SlideOne } from "./SlideOne";
import { SlideTwo } from "./SlideTwo";
import { SlideThree } from "./SlideThree";

export const MainCarousel = () => {
    const [slide, setSlide] = useState(1);
    const [loading, setLoading] = useState(true);
    const slideRef = useRef(null);
    const clickSlide = () => {
        clearInterval(slideRef.current);
        slideRef.current = setInterval(() => {
            setSlide(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)
        }, 5000)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, []);

    useEffect(() => {
        slideRef.current = setInterval(() => {
            setSlide(prev => prev === 1 ? 2 : prev === 2 ? 3 : 1)
        }, 5000)
        return () => {
            clearInterval(slideRef.current);
        }
    }, [])
    return (
        <Skeleton minH={{ base: "80vw", md: "250px",lg:"300px" }} isLoaded={!loading}>
            <Box className='carousel' >
                <SlideOne slide={slide} />
                <SlideTwo slide={slide} />
                <SlideThree slide={slide} />
                <Flex gap='10px' justify='center' p='15px'>
                    {new Array(3).fill(1).map((ele, i) => (
                        <Box key={i + 1} border='1px solid black' borderRadius={'50%'}
                            bg={slide === (i + 1) ? "black" : "white"} h='12px' w='12px' cursor='pointer'
                            onClick={() => { setSlide((i + 1)), clickSlide() }}>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Skeleton>
    )

}


