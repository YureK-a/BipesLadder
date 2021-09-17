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
                        id: "component0",

                    }]
                },
                {
                    type: COLUMN,
                    id: "column1",
                    children: [{
                        type: COMPONENT,
                        id: "component1"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column2",
                    children: [{
                        type: COMPONENT,
                        id: "component1"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "component1"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "component1"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column3",
                    children: [{
                        type: COMPONENT,
                        id: "component1"
                    }]
                },
                {
                    type: COLUMN,
                    id: "column7",
                    children: [{
                        type: COMPONENT,
                        id: "component2"
                    }]
                }
            ]
        },


    ],
    components: {
        component0: { id: "component0", type: "I0.0", content: "opened_contact" },
        component1: { id: "component1", type: "", content: "line" },
        component2: { id: "component2", type: "O0.0", content: "coil" }
    }
};

export default initialData;