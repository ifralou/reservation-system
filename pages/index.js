import {Heading, Stack, Text} from "@chakra-ui/react";
import SiteWrapper from "@/components/SiteWrapper/SiteWrapper";
import MainButton from "@/components/MainButton";
import {useUser} from "@auth0/nextjs-auth0/client";

export default function Home() {
    const { user } = useUser();
    return (
        <SiteWrapper>
            <Stack as="section" maxW="90%" spacing={6} p={12}>
                <Heading py={5} align="left" size="3xl">Streamlined Meeting Room Booking: The Reservation System
                    Simplified</Heading>
                <Text align="left" py={8} fontSize="lg">
                    The Meeting Room Reservation System is a user-friendly and efficient web application designed to
                    streamline the process of booking and managing meeting rooms in offices. With an intuitive
                    interface, the system allows employees to quickly reserve meeting rooms based on their needs and
                    preferences. Admins have the ability to set priorities for both rooms and employees, ensuring that
                    resources are allocated effectively. The system also displays room attributes such as maximum
                    capacity and available equipment, making it easy for users to choose the most suitable room for
                    their meetings. By automating recurring meeting reservations and integrating with popular calendar
                    applications, the Meeting Room Reservation System greatly simplifies office logistics, ensuring a
                    more organized and productive work environment.
                </Text>
                <MainButton href="/dashboard">
                    { user ? "Dashboard" : "Take a look at what we have, mate."}
                </MainButton>
            </Stack>
        </SiteWrapper>
    )
}
