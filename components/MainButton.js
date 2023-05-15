import React from 'react';
import Link from "next/link";
import {Button} from "@chakra-ui/react";

const MainButton = ({href, children}) => {
    return (
        <Link href={href}>
            <Button colorScheme="green" size={"lg"}>
                {...children}
            </Button>
        </Link>
    );
};

export default MainButton;