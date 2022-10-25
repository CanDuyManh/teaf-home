

const isNull = (pops) => {
    return !!pops;
}

const isUndefined = (pops) => {
    return ! (typeof(pops) == "undefined");
}

const isObjectUndefined = (pops) => {
    return !! (Object.keys(pops).length);
}

const isArrayNull = (pops) => {
    return !!(pops.length);
}

const isPhone = (pops) => {
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return vnf_regex.test(pops);
}



module.exports = {
    isNull,
    isUndefined,
    isObjectUndefined,
    isArrayNull,
    isPhone,
};
