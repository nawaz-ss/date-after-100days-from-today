const addDays = require("date-fns/addDays");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let toady = new Date();
  let dateAfter100Days = addDays(
    new Date(today.fetFullYear(), today.getMonth(), today.getDate()),
    100
  );
  response.send(
    `${dateAfter100Days.getDate()}/${
      dateAfter100Days.getMonth() + 1
    }/${dateAfter100Days.getFullYear()}`
  );
});

app.listen(3000);

module.exports = add;
