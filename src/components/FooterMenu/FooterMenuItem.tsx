import { Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

export interface FootMenuItemProps {
   icon: string;
   title: string;
}

function FooterMenuItem({ icon, title }: FootMenuItemProps): JSX.Element {
   return (
      <Flex direction='column' alignItems='center' justifyContent='center'>
         <Img src={icon} />
         <Text color="#FFE8BB" fontSize="16px" fontWeight="500">
            {title}
         </Text>
      </Flex>
   );
}

export default FooterMenuItem;
