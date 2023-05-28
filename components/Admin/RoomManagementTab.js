import React, {useEffect, useState} from 'react';
import {Accordion, Input, Select, TabPanel, Text, VStack} from "@chakra-ui/react";
import RoomAccordionItem from "@/components/RoomManagment/RoomAccordionItem";
import useBuildingData from "@/connectors/data-hooks/useBuildingData";
import useRoomsData from "@/connectors/data-hooks/useRoomsData";

const RoomManagementTab = () => {

    const [roomNameSearch, setRoomNameSearch] = useState("");

    const { buildingsSelectRange, buildingsSelectRangeStatus} = useBuildingData();

    const [ currentBuildingId, setCurrentBuildingId ] = useState(0);

    const { rooms, roomsStatus } = useRoomsData(currentBuildingId);

    const handleSelect = (e) => {
        const buildingId = e.target.value;
        console.log("Id : " + buildingId)
        setCurrentBuildingId(+buildingId);
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
                        !buildingsSelectRangeStatus.isLoading && buildingsSelectRange.map(
                            ({name, id}) => (<option value={id} key={id}>{name}</option>)
                        )
                    }
                </Select>

                <Accordion w="100%">
                    {

                        roomsStatus.isLoading ?
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