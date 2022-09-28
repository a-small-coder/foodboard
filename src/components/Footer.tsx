import { HStack } from "@chakra-ui/react";
import React from "react";
import user from "../assets/icons/UserIcon.png";
import RecipeBook from '../assets/icons/RecipeBook.svg'
import FooterMenuItem, { FootMenuItemProps } from "./FooterMenu/FooterMenuItem";
function Footer(): JSX.Element {

  const menuData: FootMenuItemProps[] = [
    {
      icon: user,
      title: "profile",
    },
    {
      icon: RecipeBook,
      title: "recipes",
    },
    {
      icon: user,
      title: "profile",
    },
    {
      icon: user,
      title: "profile",
    }
  ]

  const menuItems = menuData.map(mi => (
    <FooterMenuItem key={`id-${mi.title}`} title={mi.title} icon={mi.icon}/>
  ))

  return (
    <HStack minH='60px' p="10px 20px" bg='#EB5252' justifyContent='space-around' alignItems='center'>
      
      {menuItems}
    </HStack>
  );
}

export default Footer