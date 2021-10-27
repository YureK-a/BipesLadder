import shortid from "shortid";
import React from "react";

export const SIDEBAR_ITEM = "sidebarItem";
export const ITEM_CHANGED = "itemChanged";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const STANDARD_COMPONENT = { row: -1, args: { address: "", path: "", type: "" } }


export const SIDEBAR_ITEMS = [{
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            id: shortid.generate(),
            type: "contact",
            content: "opened_contact",
            svg: {  id: "opened_contact", 
                    style: "", 
                    path:['M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L120 30']    },
            color: "black",
            column: "",
            row: ""


        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            id: shortid.generate(),
            type: "contact",
            content: "closed_contact",
            svg: {  id: "closed_contact", 
                    style: "", 
                    path:['M0 30 L40 30 L40 -100 L40 100', 'M0 -100 L90 100', 'M80 30 L80 -100 L80 100 L80 30 L120 30']    },
            color: "black",
            column: "",
            row: ""
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            id: shortid.generate(),
            type: "output",
            content: "timer",
            svg: {  id: "timer", 
                    style: "", 
                    path: ['M0 30 L30 30 L30 60 L90 60 L90 0 L30 0 L30 30 M90 30 L120 30'],
                    icon:<svg xmlns="http://www.w3.org/2000/svg" stroke-width="0.1" x='44' y='14' width="30" height="30" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>  },
            color: "black",
            column: "",
            row: ""
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            id: shortid.generate(),
            type: "output",
            content: "counter",
            svg: {  id:"", 
                    style:"", 
                    path:['M0 30 L30 30 L30 60 L90 60 L90 0 L30 0 L30 30 M90 30 L120 30 '],
                    icon:<svg xmlns="http://www.w3.org/2000/svg" stroke-width="0.1" x='44' y='15' width="30" height="30" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                            <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
                        </svg>},
            color: "black",
            column: "",
            row: ""
        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            id: shortid.generate(),
            type: "output",
            content: "coil",
            svg: {  id:"", 
                    style:"", 
                    path:['M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L120 30'] },            
            color: "black",
            column: "",
            row: ""
        }
    },

];

export const SIDEBAR_ITEMS_OTHER = [{
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
        id: shortid.generate(),
        type: "",
        content: "line",
        svg: {  id:"", 
                style:"", 
                path:['M0 48 L120 48']},
        color: "red"

    }
}];

export const ITEMS_CHANGED = [{
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact_parallel_bottom",
            svg: {  id:"", 
                    style:"", 
                    path:['M2 0 L2 30 M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 0']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "opened_contact_parallel_top",
            svg: {  id:"", 
                    style:"", 
                    path:['M2 100 L2 30 M0 30 L40 30 L40 -100 L40 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 100']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact_parallel_bottom",
            svg: {  id:"", 
                    style:"", path:
                    ['M2 0 L2 30 M0 30 L40 30 L40 -100 L40 100', ' M20 -100 L80 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 0']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "closed_contact_parallel_top",
            svg: {  id:"", 
                    style:"", path:['M2 100 L2 30 M0 30 L40 30 L40 -100 L40 100', ' M20 -100 L80 100', 'M80 30 L80 -100 L80 100 L80 30 L118 30 L118 100']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "coil_contact_parallel_bottom",
            svg: {  id:"", 
                    style:"", 
                    path:['M2 0 L2 30 M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L118 30 L118 0']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "contact",
            content: "coil_contact_parallel_top",
            svg: {  id:"", 
                    style:"", 
                    path:['M2 100 L2 30 M0 30 L40 30 L40 50 L80 50 L80 10 L40 10 L40 30 M80 30 L118 30 L118 100']},
            color: "black"

        }
    },
    {
        id: shortid.generate(),
        type: SIDEBAR_ITEM,
        component: {
            type: "line",
            content: "vertical_line",
            svg: {  id:"", 
                    style:"", 
                    path:['M60 0 L60 100']},
            color: "black"

        }
    }
];
