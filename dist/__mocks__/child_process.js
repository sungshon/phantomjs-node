"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let mockedSpawn;
function setMockedSpawn(mock) {
  mockedSpawn = mock;
}

const spawn = (...args) => mockedSpawn(...args);

exports.spawn = spawn;
exports.setMockedSpawn = setMockedSpawn;
