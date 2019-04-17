const lib = require('./index');

const giveString = lib.buildGiveStringOrNumber(true);
const giveNumber = lib.buildGiveStringOrNumber(false);

const wantsNumber = lib.buildWantsStringOrNumber(false);
const wantsString = lib.buildWantsStringOrNumber(true);


// correct
wantsNumber(giveNumber());
wantsString(giveString());

// so wrong
wantsNumber(giveString());
wantsString(giveNumber());