import React, {useState} from 'react';
import {Accordion, Input, Select, TabPanel, Text, VStack} from "@chakra-ui/react";
import RoomAccordionItem from "@/components/RoomManagment/RoomAccordionItem";


const buildings = [
    {name: "CVUT", id: 0},
    {name: "YOUR MOM", id: 1},
    {name: "TOILET", id: 2}
]

const RoomManagementTab = () => {

    const [rooms, setRooms] = useState([]);
    const [roomNameSearch, setRoomNameSearch] = useState("");

    const fetchRooms = () => {
        setRooms([
            {id: 0, name: "Room number one"},
            {id: 1, name: "Room number two"}
        ]);
    };

    const handleSelect = (e) => {
        const buildingId = e.target.value;
        if (buildingId !== "") {
            fetchRooms();
        } else {
            setRooms([]);
        }
    }

    const handleNameChange = (e) => {
        const nameSearch = e.target.value;
        setRoomNameSearch(nameSearch);
    };

    return (
        <TabPanel>

            <VStack spacing={3}>

                <Input
                    onChange={handleNameChange}
                    value={roomNameSearch}
                    placeholder="Search for room name here"
                />

                <Select placeholder={"Choose building"} onChange={handleSelect}>
                    {
                        buildings.map(({name, id}) => (<option value={id} key={id}>{name}</option>))
                    }
                </Select>

                <Accordion w="100%">
                    {
                        rooms.length === 0 ?
                            <Text>No rooms here.</Text> :
                            rooms
                                .filter(({id, name}) => name.includes(roomNameSearch))
                                .map(({id, name}) => <RoomAccordionItem key={id} name={name}/>)
                    }
                </Accordion>

            </VStack>
        </TabPanel>
    );
};

export default RoomManagementTab;