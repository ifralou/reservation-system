import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Heading, Text} from "@chakra-ui/react";
import SiteWrapper from "@/components/SiteWrapper";
import {useRouter} from "next/router";

export default function RoomOverview() {
    const router = useRouter();
    const room = { id: router.query.id }

    return (
        <SiteWrapper>
            <Card w="100%">
                <CardHeader>
                    <Heading>
                        Room N{room.id}
                    </Heading>
                </CardHeader>

                <CardBody>
                   <Text>
                       This is a room
                   </Text>
                </CardBody>

                <CardFooter>
                    Pokic
                </CardFooter>

            </Card>
        </SiteWrapper>
    );
}