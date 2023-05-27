type RoomLayout = "U-shaped" | "Boardroom" | "Classroom" | "Single";

type NoiseLevel = "low" | "standard" | "high";

type RoomFeatures =
    "conditioning" | "projector" | "whiteboard" | "printer" | "sound" | "wifi" | "phone" | "accessibility" | "refreshment"

type Recurrent =
    "day" | "week" | "month" | "year"

type RoomSlot = {
    from: Date,
    to: Date
}

type RoomFull = {
    id: number,
    "buildingId": number,
    "name": string,
    "description": string,
    img: string,
    occupiedNow: boolean,
    capacity: number,
    reservedSlots: [RoomSlot],
    roomFeatures: [RoomFeatures],
    layout: RoomLayout,
    noiseLevel: NoiseLevel
};

type RoomForDashBoard = {
    id: number,
    "buildingId": number,
    "name": string,
    "description": string,
    img: string,
    occupiedNow: boolean,
}

type getRoomsForDashBoardResponse = {
    rooms: [RoomForDashBoard],
    currentPageNumber: number
    totalPages: number
};


// Ready
interface RoomManagmentInterface {
    getAllRoomsForDashboard(currentPageNumber: number): getRoomsForDashBoardResponse;
    getAllRoomsForTheBuilding(buildingId: number): [RoomFull]
    getRoomFull(buildingId: number, roomId: number): RoomFull;
}

type UserReservation = {
    reservationId: number,
    roomName: string,
    from: Date,
    to: Date
}

//TODO
interface ReservationManagmentInterface {
    reserveRoom(
        buildingId: number,
        roomId: number,
        userId: string,
        from: number, to: number,
        recurrent: Recurrent
    ): Boolean
    getReservedRoomsByUserId(userId: string): [UserReservation]
    deleteRoomReservation(reservationId: number): boolean
}

type Building = {
    id: number,
    name: string
}

interface AdminRoomManagment {
    getAllBuildings(): [ Building ]
    newEquipmentStateForTheRoom(buildingId: number, roomId: number, newRoomFeatures: [RoomFeatures]): [RoomFeatures]
}