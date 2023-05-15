import React from 'react';
import {Text} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Admin() {
    const { user } = useUser();

    return (
        <div>
            <Text>If you are not and admin then pizdec.</Text>
        </div>
    );
};
