import { Popover, PopoverTrigger, Text, PopoverContent, PopoverBody, Flex, Box } from '@chakra-ui/react';

export const Events = () => {
    return (
        <Popover trigger='hover'>
            <PopoverTrigger>
                <Text _hover={{ borderColor: "black", color: "#12284c", fontWeight: "400" }} borderRadius='0px' variant='ghost' color='#51617c' fontSize='16px' fontWeight='400'
                    borderBottom='2px solid white'  >EVENTS</Text>
            </PopoverTrigger>
        </Popover>
    )
}