import React from 'react';
import {Button, Card, CardBody, CardFooter, Text, Heading, Stack, Image} from "@chakra-ui/react";
import Link from "next/link";

/**
 *         name: "Toilet",
 *         description: "A clean, hygienic facility for personal needs, providing essential amenities like soap, paper towels, and air fresheners.",
 *         img: "",
 *         capacity: 20,
 *         occupied: false
 */
const RoomCard = ({room}) => {
    const {id, name, description, img, capacity, occupied} = room;

    return (
        <Link href={`/rooms/${id}`}>
            <Card
                direction={{base: "column", sm: "row"}}
                overflow="hidden"
                variand="outline"
            >
                <Image
                    objectFit="cover"
                    maxW={{base: "100%", sm: "200px"}}
                    src={img}
                />

                <Stack>
                    <CardBody>
                        <Heading size="md">{name}</Heading>
                        <Text py={1}>{description}</Text>
                    </CardBody>
                </Stack>
            </Card>
        </Link>
    );
};

export default RoomCard;