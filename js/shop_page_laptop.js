async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let laptops_selection = JSON.parse(my_text);

  for (let i = 0; i < laptops_selection.length; i++) {
    let card =
      '<div class="col-lg-3 col-md-6 col-6"><a class="laptop" id="' +
      laptops_selection[i].id +
      '"><div class="card"><img src="images/' +
      laptops_selection[i].image +
      '" alt="none" class="card-img-top img-fluid" /><div class="card-body"><h5 class="card-title" id="card_title">' +
      laptops_selection[i].product.name +
      '</h5><p class="card-text" id="card_text">Model: ' +
      laptops_selection[i].product.model +
      "</p><ul>" +
      "<li>" +
      laptops_selection[i].os +
      "</li><li>" +
      laptops_selection[i].graphicsCard.name +
      "</li><li>" +
      laptops_selection[i].processor.name +
      "</li><li>" +
      laptops_selection[i].ram.type +
      " || " +
      laptops_selection[i].ram.maxCapacity +
      "</li><li>" +
      laptops_selection[i].storage.capacity +
      "</li></ul>" +
      "</div></div></a></div>";
    $("#laptop_cards").append(card);
    $(".laptop").click(function () {
      let laptop = Number($(this).prop("id"));
      sessionStorage.setItem("laptop_selected", laptop);
      window.location.href = "full_specs_laptop.html";
    });
  }
}

$(document).ready(function () {
  $(".gpu_filter").click(function () {
    let gpu = $(this).val();
    $("#laptop_cards").text("");

    getData("http://localhost:4000/api/laptops/gpu/" + gpu);
  });
});

$(document).ready(function () {
  $(".filter_all").click(function () {
    $("#laptop_cards").text("");
    getData("http://localhost:4000/api/laptops");
  });
});
getData("http://localhost:4000/api/laptops");
