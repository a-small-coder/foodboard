import { Flex, Heading } from "@chakra-ui/react"
import React from "react"

function Header(): JSX.Element {

    return (
        <Flex minH='60px' p="10px 20px" bg='#EB5252'>
            <Heading color='white' fontSize='28px' fontWeight='700'>
                Главная
            </Heading>
        </Flex>
    )
}
export default Header