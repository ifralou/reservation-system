import React from 'react';
import Link from "next/link";
import {Button} from "@chakra-ui/react";

const MainButton = ({isActive, href, children, variant }) => {
    return (
        <Link href={href}>
            <Button isActive={isActive} colorScheme="green" size={"lg"} variant={variant}>
                {...children}
            </Button>
        </Link>
    );
};

export default MainButton;