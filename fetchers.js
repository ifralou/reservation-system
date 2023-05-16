// (context) => {}

/**
 * Concise room information for the dashboard.
 * @param content
 * @returns {Promise<[{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number},{img: string, name: string, description: string, id: number, occupied: boolean, capacity: number}]>}
 */
export const dashboardFetcher = async () => {
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


const roomsDetailed = [
    {
        "id": 0,
        "name": "Main room",
        "description": "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
        "img": "",
        "capacity": 20,
        "occupied": false,
        "layout": "U-shaped",
        "noiseLevel": "low",
        "airConditioned": true,
        "hasProjector": true,
        "hasWhiteboard": true,
        "hasPrinter": false,
        "hasSoundSystem": true,
        "wifiAccess": true,
        "hasPhone": false,
        "wheelchairAccessible": true,
        "hasRefreshments": false
    },
    {
        "id": 1,
        "name": "War room",
        "description": "A stylish and modern room suitable for executive meetings and strategic discussions, equipped with high-end technology.",
        "img": "",
        "capacity": 10,
        "occupied": false,
        "layout": "Boardroom",
        "noiseLevel": "low",
        "airConditioned": true,
        "hasProjector": true,
        "hasWhiteboard": true,
        "hasPrinter": true,
        "hasSoundSystem": true,
        "wifiAccess": true,
        "hasPhone": true,
        "wheelchairAccessible": true,
        "hasRefreshments": true
    },
    {
        "id": 2,
        "name": "Occupied room",
        "description": "A flexible space currently in use, perfect for workshops and training sessions, equipped with modern AV technology.",
        "img": "",
        "capacity": 30,
        "occupied": true,
        "layout": "Classroom",
        "noiseLevel": "medium",
        "airConditioned": true,
        "hasProjector": true,
        "hasWhiteboard": true,
        "hasPrinter": false,
        "hasSoundSystem": true,
        "wifiAccess": true,
        "hasPhone": false,
        "wheelchairAccessible": false,
        "hasRefreshments": true
    },
    {
        "id": 3,
        "name": "Toilet",
        "description": "A small, clean and well-maintained facility for personal hygiene.",
        "img": "",
        "capacity": 1,
        "occupied": false,
        "layout": "Single",
        "noiseLevel": "low",
        "airConditioned": false,
        "hasProjector": false,
        "hasWhiteboard": false,
        "hasPrinter": false,
        "hasSoundSystem": false,
        "wifiAccess": false,
        "hasPhone": false,
        "wheelchairAccessible": true,
        "hasRefreshments": false
    }
];

// http://localhost:3000/rooms/:id
// Full info about a room.
export const roomFetcher = async (id) => {
    return roomsDetailed[id] ?? null;
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
