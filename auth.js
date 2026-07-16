const fs = require("fs");

function login(username, password) {
  const admins = JSON.parse(fs.readFileSync("admins.json"));

  return admins.find(
    a =>
      a.username === username &&
      a.password === password
  );
}

module.exports = login;
