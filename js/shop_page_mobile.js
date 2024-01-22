async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let mobile_selection = JSON.parse(my_text);
  console.log(mobile_selection);

  for (let i = 0; i < mobile_selection.length; i++) {
    let card =
      '<div class="col-lg-3 col-md-6 col-6 mb-3"><a class="mobile" id="' +
      mobile_selection[i].id +
      '"><div class="card"><img src="images/' +
      mobile_selection[i].image +
      '" alt="none" class="card-img-top img-fluid mt-3" /><div class="card-body"><h5 class="card-title" id="card_title">' +
      mobile_selection[i].product.name +
      '</h5><p class="card-text" id="card_text"></p><ul><li>' +
      mobile_selection[i].os +
      "</li><li>" +
      mobile_selection[i].processor.name +
      "</li><li>" +
      mobile_selection[i].memory.ram +
      "</li><li>" +
      mobile_selection[i].camera.rear +
      "</li><li>" +
      mobile_selection[i].camera.front +
      "</li></ul></div></div></a></div>";
    $("#mobile_cards").append(card);
    $(".mobile").click(function () {
      let mobile = Number($(this).prop("id"));
      sessionStorage.setItem("mobile_selected", mobile);
      window.location.href = "full_specs_mobile.html";
    });
  }
}

$(document).ready(function () {
  $(".manufacturer_filter").click(function () {
    let manufacturer = $(this).val();
    $("#mobile_cards").text("");

    getData(
      "https://express-demo-g3ms.onrender.com/api/mobile/product/" +
        manufacturer
    );
  });
});
$(document).ready(function () {
  $(".filter_all").click(function () {
    $("#mobile_cards").text("");
    getData("https://express-demo-g3ms.onrender.com/api/mobile/");
  });
});

getData("https://express-demo-g3ms.onrender.com/api/mobile/");
