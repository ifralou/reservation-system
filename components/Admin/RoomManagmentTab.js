import React, {useEffect, useState} from 'react';
import {Accordion, Input, Select, TabPanel, Text, VStack} from "@chakra-ui/react";
import RoomAccordionItem from "@/components/RoomManagment/RoomAccordionItem";
import {buildingsFetcher, roomsByIdFetcher} from "@/connectors/fetchers";

const RoomManagementTab = () => {

    const [rooms, setRooms] = useState([]);
    const [roomNameSearch, setRoomNameSearch] = useState("");
    const [buildingsSelectRange, setBuildingsSelectRange] = useState([]);

    //Fetch data before component load;
    useEffect(() => {
        buildingsFetcher().then((res) => setBuildingsSelectRange(res) );
    }, []);


    const handleSelect = (e) => {
        const buildingId = e.target.value;
        if (buildingId !== "") {
            roomsByIdFetcher()
                .then(res => setRooms(res));
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
                        buildingsSelectRange.map(
                            ({name, id}) => (<option value={id} key={id}>{name}</option>)
                        )
                    }
                </Select>

                <Accordion w="100%">
                    {
                        rooms.length === 0 ?
                            <Text>No rooms here.</Text> :
                            rooms
                                .filter(({id, name}) => name.includes(roomNameSearch))
                                .map((room) => <RoomAccordionItem key={room.id} room={room}/>)
                    }
                </Accordion>

            </VStack>
        </TabPanel>
    );
};

export default RoomManagementTab;