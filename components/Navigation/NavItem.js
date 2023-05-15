import React from 'react';
import Link from "next/link";
import {Button} from "@chakra-ui/react";

const NavItem = ({href, children}) => {
    return (
        <Link href={href}>
            <Button colorScheme="green" size={"sm"}>
                {...children}
            </Button>
        </Link>
    );
};

export default NavItem;