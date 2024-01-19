const exp = require("express");
const laptop_cards = require("./laptop_lists");
const mobile_cards = require("./mobile_phone_lists");
const accessory_cards = require("./accessory_lists");
const cors = require("cors");
const app = exp();

app.use(cors());
app.use(exp.json());

const lptp = laptop_cards.laptops;
const mblphn = mobile_cards.mobilePhone;
const accssry = accessory_cards.accessories;

//API
//for accessories
app.get("/api/accessory/", (req, res) => {
  res.send(accssry);
});

app.get("/api/accessory/:id", (req, res) => {
  let accessory = false;
  for (let i = 0; i < accssry.length; i++) {
    if (accssry[i].id == Number(req.params.id)) {
      accessory = accssry[i];
      break;
    }
  }
  if (accessory) {
    res.send(accessory);
  }
});

//for mobile phones
app.get("/api/mobile/", (req, res) => {
  res.send(mblphn);
});

app.get("/api/mobile/:id", (req, res) => {
  let mobile = false;
  for (let i = 0; i < mblphn.length; i++) {
    if (mblphn[i].id == Number(req.params.id)) {
      mobile = mblphn[i];
      break;
    }
  }
  if (mobile) {
    res.send(mobile);
  }
});

app.get("/api/mobile/product/:manufacturer", (req, res) => {
  let mobile = [];
  for (let i = 0; i < mblphn.length; i++) {
    if (mblphn[i].product.manufacturer == req.params.manufacturer) {
      mobile.push(mblphn[i]);
    }
  }
  if (mobile) {
    res.send(mobile);
  }
});

//for laptops
app.get("/api/laptops/", (req, res) => {
  res.send(lptp);
});

app.get("/api/laptops/:id", (req, res) => {
  let laptop = false;
  for (let i = 0; i < lptp.length; i++) {
    if (lptp[i].id == Number(req.params.id)) {
      laptop = lptp[i];
      break;
    }
  }
  if (laptop) {
    res.send(laptop);
  }
});

app.get("/api/laptops/gpu/:term", (req, res) => {
  let laptop = [];
  for (let i = 0; i < lptp.length; i++) {
    if (lptp[i].graphicsCard.code == req.params.term) {
      laptop.push(lptp[i]);
    }
  }
  if (laptop) {
    res.send(laptop);
  }
});

const port = 4000;
console.log("Working... Your port for this session is " + port);
app.listen(port);
