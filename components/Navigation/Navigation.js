import React from 'react';
import {Button, HStack} from "@chakra-ui/react";
import {FaMeetup} from "react-icons/fa";
import NavItem from "@/components/Navigation/NavItem";
import {useUser} from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const Navigation = () => {
    const { user} = useUser();

    let isAdmin = false;
    if(user) {
        const roles = user["app/roles"] ?? [];
        isAdmin = roles.includes("Admin");
    }

    const logged = user ?
        <NavItem href="/api/auth/logout">Logout</NavItem> :
        <NavItem href="/api/auth/login">Login</NavItem>;

    const adminPanel = <Button>
       <Link href={"/admin"}></Link>
    </Button>

    return (
        <HStack justify={"space-between"}>
            <Link href={"/dashboard"}>
                <FaMeetup size={70} color="green"/>
            </Link>

            <HStack>
                {logged}
                {isAdmin && <NavItem href={"/admin"}>Admin Panel</NavItem>}
            </HStack>
        </HStack>
    );
};

export default Navigation;