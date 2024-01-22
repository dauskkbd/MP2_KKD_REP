async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let accessory_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    accessory_selection.image +
    '" alt="" class="img-fluid">';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#accessory_name").text(accessory_selection.product.name);
    $("#accessory_model").text(accessory_selection.product.model);
    $("#accessory_price_peso").text(accessory_selection.price.php);
    $("#warranty_year").text(accessory_selection.warranty.message[0]);
    $("#warranty_replacement").text(accessory_selection.warranty.message[1]);
  });
}

let accessory = sessionStorage.getItem("accessory_view_cart");
getData(
  "https://express-mp2-ff9t.onrender.com/api/accessory/viewCart/" + accessory
);
