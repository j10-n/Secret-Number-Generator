'use strict';
module.exports = () => {
    const randomNum = Math.random(Math.random() * 1000000) + 1;
    return () => randomNum
};
