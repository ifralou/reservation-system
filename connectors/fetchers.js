import {buildings, promisifyMockObject, reservations, roomsForDashboard, roomsFull} from "@/connectors/mocks";

const buildGetFetcher = (obj) => {
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
    console.log("Push to the BE. " + features);
    return promisifyMockObject(features);
};

export const cancelReservationSend = async (reservationId) => {
    console.log("Push to the BE. " + reservationId);
    // return Promise.reject("POSHEL NAHUY")
    return promisifyMockObject(reservationId);
}

const callBackend = async (url, callback, options) => {
   fetch(url, {
       ...options,
       headers: {
          "X-API-KEY" : process.env.BE_API_KEY
       }
   })
}
