export const addHexColor = (c1, c2) => {
    var c1NoHash = c1.replace("#", "");
    var c2NoHash = c2.replace("#", "");
    var hexStr = (parseInt(c1NoHash, 16) + parseInt(c2NoHash, 16)).toString(16);
    while (hexStr.length < 6) {
        hexStr = "0" + hexStr;
    } // Zero pad.
    hexStr = "#" + hexStr;
    return hexStr;
}