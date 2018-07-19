const path = require('path');
const moment = require('moment');

const now = moment().format('LT');

exports.init = () => {

}

exports.info = message => {
    console.log(`${now} - ${path.basename(__filename)}: ${message}`);
}