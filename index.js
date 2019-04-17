
function letStringOrNumber(wantString) {
  return wantString ? "jenny" : 8675309;
}

function buildGiveStringOrNumber(wantString) {
  return () => letStringOrNumber(wantString);
}

function buildWantsStringOrNumber(wantString) {
  return (input) => {
    const expected = wantString ? 'string' : 'number';
    const inputType = typeof input;
    if (inputType !== expected) {
      throw new Error(`We were expecting a ${expected} but got a ${inputType}`);
    }
  };
}

/** @type {import('./types/index')} */
module.exports = {
  letStringOrNumber,
  buildGiveStringOrNumber,
  buildWantsStringOrNumber
};
