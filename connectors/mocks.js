export const promisifyMockObject = (obj) => new Promise(resolve => {
  setTimeout(() => resolve(obj), 1000)
});

export const roomsForDashboard= [
    {
        id: 0,
        buildingId: 0,
        name: "Main room",
        description: "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
        img: "",
        occupiedNow: false
    }, {
        id: 1,
        buildingId: 0,
        name: "War room",
        description: "An intimate setting for brainstorming and strategy sessions, complete with a whiteboard, round table, and cozy chairs.",
        img: "",
        occupiedNow: false
    }, {
        id: 2,
        buildingId: 0,
        name: "Occupied room",
        description: "A versatile, multipurpose space for small meetings and private work sessions, offering a flexible layout and office supplies.",
        img: "",
        occupiedNow: true
    },
    {
        id: 3,
        buildingId: 0,
        name: "Toilet",
        description: "A clean, hygienic facility for personal needs, providing essential amenities like soap, paper towels, and air fresheners.",
        img: "",
        occupiedNow: false
    }
];


export const roomsFull = [
    {
        "id": 0,
        "buildingId": 0,
        "name": "Main room",
        "description": "A large, well-equipped space for presentations and conferences, featuring comfortable seating and audio-visual equipment.",
        "img": "",
        "occupiedNow": false,
        "capacity": 20,
        "layout": "U-shaped",
        "noiseLevel": "Low",
        "roomFeatures": ["conditioning", "projector", "whiteboard", "sound", "wifi", "accessibility"]
    },
    {
        "id": 1,
        "buildingId": 0,
        "name": "War room",
        "description": "A stylish and modern room suitable for executive meetings and strategic discussions, equipped with high-end technology.",
        "img": "",
        "occupiedNow": false,
        "capacity": 10,
        "layout": "Boardroom",
        "noiseLevel": "Low",
        "roomFeatures": ["conditioning", "projector", "whiteboard", "printer", "sound", "wifi", "phone", "accessibility", "refreshment"]
    },
    {
        "id": 2,
        "buildingId": 0,
        "name": "Occupied room",
        "description": "A flexible space currently in use, perfect for workshops and training sessions, equipped with modern AV technology.",
        "img": "",
        "occupiedNow": true,
        "capacity": 30,
        "layout": "Classroom",
        "noiseLevel": "Medium",
        "roomFeatures": ["conditioning", "projector", "whiteboard", "sound", "wifi", "refreshment"]
    },
    {
        "id": 3,
        "buildingId": 0,
        "name": "Toilet",
        "description": "A small, clean and well-maintained facility for personal hygiene.",
        "img": "",
        "occupiedNow": false,
        "capacity": 1,
        "layout": "Single",
        "noiseLevel": "Low",
        "roomFeatures": ["accessibility"]
    }
]


export const buildings = [
    {id: 0, name: "CVUT"},
    {id: 1, name: "Your moma"},
    {id: 2, name: "Fuck you"},
    {id: 3, name: "Fuck you blya"},
];

export const reservations = [
    {
        "id": 1,
        "roomName": "Main room",
        "from": "2023-05-20T14:00:00.000Z",
        "to": "2023-05-20T15:00:00.000Z"
    },
    {
        "id": 2,
        "roomName": "War room",
        "from": "2023-05-21T10:00:00.000Z",
        "to": "2023-05-21T12:00:00.000Z"
    },
    {
        "id": 3,
        "roomName": "Occupied room",
        "from": "2023-05-22T08:00:00.000Z",
        "to": "2023-05-22T09:00:00.000Z"
    },
    {
        "id": 4,
        "roomName": "Toilet",
        "from": "2023-05-23T11:00:00.000Z",
        "to": "2023-05-23T12:00:00.000Z"
    }
];


