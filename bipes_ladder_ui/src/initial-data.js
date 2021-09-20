import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
    layout: [{
            type: ROW,
            id: "row0",
            children: [{
                    type: COLUMN,
                    id: "component0",
                    children: [{
                        type: COMPONENT,
                        id: "openedContactComponent",

                    }]
                },
                {
                    type: COLUMN,
                    id: "column1",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column2",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column1",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column2",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "lineComponent"
                    }]
                },


                {
                    type: COLUMN,
                    id: "column7",
                    children: [{
                        type: COMPONENT,
                        id: "coilComponent"
                    }]
                }
            ]
        },


    ],
    components: {
        openedContactComponent: { id: "openedContactComponent", type: "I0.0", content: "opened_contact", svg: ['M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L120 30'], color: "black" },
        closedContactComponent: { id: "closedContactComponent", type: "I0.0", content: "closed_contact", svg: ['M0 30 L30 30 L30 -100 L30 100', ' M20 -100 L50 100', 'M50 30 L50 -100 L50 100 L50 30 L80 30'], color: "black" },
        lineComponent: { id: "lineComponent", type: "", content: "line", svg: ['M0 48 L120 48'], color: "red" },
        coilComponent: { id: "coilComponent", type: "O0.0", content: "coil", svg: ['M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L120 30'], color: "black" }
    }
};

export default initialData;