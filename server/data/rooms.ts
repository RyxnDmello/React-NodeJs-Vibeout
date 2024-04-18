import { IRoom } from "../interfaces/Manager";

export const rooms: IRoom[] = [
  {
    room: "10",
    projects: [
      {
        pid: "1",
        name: "Vibeout",
        about: "Chat & Collaboration",
        priority: "high",
        objectives: [
          {
            oid: "1",
            name: "Develop Client",
            description: "Use React & TypeScript to develop the client.",
            completed: false,
            priority: "high",
          },
          {
            oid: "2",
            name: "Develop Server",
            description: "Use Node.js & Express.js to develop the server.",
            completed: false,
            priority: "medium",
          },
          {
            oid: "3",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: true,
            priority: "low",
          },
          {
            oid: "4",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: false,
            priority: "medium",
          },
        ],
      },
      {
        pid: "2",
        name: "Portfolio",
        about: "Personal Projects Catalogue",
        priority: "medium",
        objectives: [
          {
            oid: "1",
            name: "Develop UI",
            description: "Use React & TypeScript to develop the client.",
            completed: false,
            priority: "high",
          },
          {
            oid: "2",
            name: "Develop Catalogue",
            description: "Add more projects to the project section.",
            completed: false,
            priority: "medium",
          },
          {
            oid: "3",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: false,
            priority: "high",
          },
          {
            oid: "4",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: false,
            priority: "low",
          },
        ],
      },
    ],
  },
  {
    room: "20",
    projects: [
      {
        pid: "3",
        name: "CyberVerse",
        about: "E-Commerce Application",
        priority: "low",
        objectives: [
          {
            oid: "1",
            name: "Develop UI",
            description: "Use React & TypeScript to develop the client.",
            completed: false,
            priority: "medium",
          },
          {
            oid: "2",
            name: "Develop Catalogue",
            description: "Add more projects to the project section.",
            completed: false,
            priority: "low",
          },
          {
            oid: "3",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: false,
            priority: "medium",
          },
          {
            oid: "4",
            name: "Fix Bugs",
            description: "Remove the bugs at the sockets.",
            completed: false,
            priority: "medium",
          },
        ],
      },
      {
        pid: "4",
        name: "TaskTonic",
        about: "Task Management",
        priority: "high",
        objectives: [],
      },
    ],
  },
  {
    room: "30",
    projects: [
      {
        pid: "5",
        name: "Sentimental",
        about: "Emotions Analysis",
        priority: "medium",
        objectives: [],
      },
      {
        pid: "6",
        name: "HeartsDelight",
        about: "Christ University Food Service",
        priority: "high",
        objectives: [],
      },
    ],
  },
];
