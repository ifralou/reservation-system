// (context) => {}

/**
 * Concise room information for the dashboard.
 * @param content
 * @returns {Promise<[{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number}]>}
 */
export const dashboardFetcher = async (content) => {
    return [
        {
            id: 0,
            name: "Main room",
            description: "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
            img: "",
            capacity: 20,
            occupied: false
        }, {
            id: 1,
            name: "War room",
            description: "An intimate setting for brainstorming and strategy sessions, complete with a whiteboard, round table, and cozy chairs.",
            img: "",
            capacity: 10,
            occupied: false
        }, {
            id: 2,
            name: "Occupied room",
            description: "A versatile, multipurpose space for small meetings and private work sessions, offering a flexible layout and office supplies.",
            img: "",
            capacity: 20,
            occupied: true
        },
        {
            id: 3,
            name: "Toilet",
            description: "A clean, hygienic facility for personal needs, providing essential amenities like soap, paper towels, and air fresheners.",
            img: "",
            capacity: 20,
            occupied: false
        }
    ];
};


// http://localhost:3000/rooms/:id
// Full info about a room.
export const roomFetcher = async (context) => {
    return {
        id: 0,
        name: "Main room",
        description: "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
        img: "",
        capacity: 20,
        occupied: false,
        layout: "U-shaped",
        noise_level: "low",
        air_conditioned: true,
        has_projector: true,
        has_whiteboard: true,
        has_printer: false,
        has_sound_system: true,
        wifi_access: true,
        has_phone: false,
        wheelchair_accessible: true,
        has_refreshments: false
    }
};

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
