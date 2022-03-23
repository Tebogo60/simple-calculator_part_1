function add() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

function multiply() {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
}

module.exports = {
  add,
  multiply,
};
