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
                    id: "component2"
                }]
            },
            {
                type: COLUMN,
                id: "column3",
                children: [{
                    type: COMPONENT,
                    id: "component3"
                }]
            },
            {
                type: COLUMN,
                id: "column3",
                children: [{
                    type: COMPONENT,
                    id: "component4"
                }]
            },
            {
                type: COLUMN,
                id: "column3",
                children: [{
                    type: COMPONENT,
                    id: "component5"
                }]
            },
            {
                type: COLUMN,
                id: "column4",
                children: [{
                    type: COMPONENT,
                    id: "component6"
                }]
            }
        ]
    }],
    components: {
        component0: { id: "component0", type: "I0.0", content: "opened_contact" },
        component1: { id: "component1", type: "I0.1", content: "opened_contact" },
        component2: { id: "component2", type: "I0.2", content: "closed_contact" },
        component3: { id: "component3", type: "I0.4", content: "opened_contact" },
        component4: { id: "component4", type: "I0.5", content: "opened_contact" },
        component5: { id: "component5", type: "I0.6", content: "opened_contact" },
        component6: { id: "component6", type: "O0.0", content: "coil" }
    }
};

export default initialData;