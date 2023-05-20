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


export const roomsByIdFetcher = async (buildingID) => {
    return promisifyMockObject(roomsFull);
};

export const getAllBuildings = async () => {
   return buildings;
}

//http://localhost:3000/admin
// Info for admin dashboard
export const adminFetcher = async (context) => {
    return {

    }
}

// For purposes of user management
export const userAdminFetcher = async (context) => {
    return {

    }
}

export const callBackend = async (url, callback, options) => {
   fetch(url, {
       ...options,
       headers: {
          "X-API-KEY" : process.env.BE_API_KEY
       }
   })
}
