const exp = require("express");
const laptop_cards = require("./laptop_lists");
const cors = require("cors");
const app = exp();

app.use(cors());
app.use(exp.json());

const lptp = laptop_cards.laptops;

//API

app.get("/api/laptops/", (req, res) => {
  res.send(lptp);
});

const port = 4000;
console.log("Working... Your port for this session is " + port);
app.listen(port);
