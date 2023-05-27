import {
   buildings,
    promisifyMockObject,
    reservations,
    roomsForDashboard,
    roomsFull
} from "@/connectors/mocks";


export const defaultFetcher = (...args) => fetch(...args).then(res => res.json());
export const useApi = (url) => `/api/data/v1${url}`

const buildGetFetcher = (obj, url) => {
    return async () => {
       return promisifyMockObject(obj);
    };
}

/**
 * Array of concise room info for the dashboard.
 * @returns {Promise<[RoomForDashBoard]>}
 */
export const dashboardFetcher = buildGetFetcher(roomsForDashboard);

/**
 * Specific info for a concrete rooms.
 * @param roomId
 * @returns {Promise<RoomFull>}
 */
export const roomByIdInfoFetcher = async (roomId) => {
    return promisifyMockObject(roomsFull[roomId] ?? null);
};

/**
 *
 * @param userId
 * @returns {Promise<[UserReservation]>}
 */
export const reservationsByUserFetcher = async(userId) => {
   return promisifyMockObject(reservations);
}


/**
 * Get all available buildings.
 * @type {function(): Promise<[Building]>}
 */
export const buildingsFetcher = buildGetFetcher(buildings);

/**
 * Get all rooms in the building.
 * @param buildingID
 * @returns {Promise<[RoomFull]>}
 */
export const roomsByIdFetcher = async (buildingID) => {
    return promisifyMockObject(roomsFull);
};

/**
 * Send new state of features to the server.
 * @param buildingId
 * @param roomId
 * @param features
 * @returns {Promise<RoomFeatures>}
 */
export const roomEquipmentSendRefresh = async (buildingId, roomId, features) => {
    const resp = await fetch(useApi("/room/equipment"), {
        method: "POST",
        body: JSON.stringify({buildingId, roomId, features})
    });
    const body = await resp.json();
    console.log("Request from body");
    console.log(body);
    return body.features;
};

