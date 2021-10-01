/*JSON Handle*/
export const createJSON = (obj) => {
    return JSON.stringify(obj);
};

export const parseJSON = (json) => {
    return JSON.parse(json);
};

export const generateLayoutFromJSON = (json) => {

}

export const setStorage = (json, itemName) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(itemName, json);
        console.log(localStorage);
    }
}

export const getStorage = (itemName) => {
    if (typeof(Storage) !== "undefined") {
        return localStorage.getItem(itemName)
    }

}

export const getLocalStorage = () => {
    if (typeof(Storage) !== "undefined") {
        return localStorage;
    }
    return [-1];
};

export const getAllLocalStorage = () => {
    return Object.keys(localStorage)
        .reduce((obj, k) => {
            return {...obj, [k]: localStorage.getItem(k) }
        }, {});
}