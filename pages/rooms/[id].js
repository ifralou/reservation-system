import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Heading, Text} from "@chakra-ui/react";
import SiteWrapper from "@/components/SiteWrapper";

export default function RoomOverview({room}) {

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


export async function getServerSideProps(context) {
    const roomId = context.query.id;

    return {
        props: {
            //TODO: user fetcher here
            room: {
                id: roomId
            }
        }
    }
}
