import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ITEM_CHANGED = "itemChanged";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [{
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact",
            svg: ['M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L120 30'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact",
            svg: ['M0 30 L40 30 L40 -100 L40 100', ' M20 -100 L80 100', 'M80 30 L80 -100 L80 100 L80 30 L120 30'],
            color: "black"
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "output",
            content: "coil",
            svg: ['M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L120 30 '],
            color: "black"
        }
    },

];

export const SIDEBAR_ITEMS_OTHER = [{
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
        type: "",
        content: "line",
        svg: ['M0 48 L120 48'],
        color: "red"
    }
}];

export const ITEMS_CHANGED = [{
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact_parallel_bottom",
            svg: ['M2 0 L2 30 M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 0'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact_parallel_top",
            svg: ['M2 100 L2 30 M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 100'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact_parallel_bottom",
            svg: ['M2 0 L2 30 M0 30 L40 30 L40 -100 L40 100', ' M20 -100 L80 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 0'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact_parallel_top",
            svg: ['M2 100 L2 30 M0 30 L40 30 L40 -100 L40 100', ' M20 -100 L80 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 100'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "coil_contact_parallel_bottom",
            svg: ['M2 0 L2 30 M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L118 30 L118 0'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "coil_contact_parallel_top",
            svg: ['M2 100 L2 30 M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L118 30 L118 100'],
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "line",
            content: "vertical_line",
            svg: ['M60 0 L60 100'],
            color: "black"

        }
    }
];