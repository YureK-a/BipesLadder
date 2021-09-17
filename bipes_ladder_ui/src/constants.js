import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [{
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact"
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "output",
            content: "coil"
        }
    }
];

export const SIDEBAR_ITEMS_OTHER = [{
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
        type: "",
        content: "line"
    }
}];