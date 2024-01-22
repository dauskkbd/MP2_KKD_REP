async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let mobile_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    mobile_selection.image +
    '" alt="" class="img-fluid">';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#mobile_name").text(mobile_selection.product.name);
    $("#mobile_model").text(mobile_selection.product.model);
    $("#mobile_price_peso").text(mobile_selection.price.php);
    $("#warranty_year").text(mobile_selection.warranty.message[0]);
    $("#warranty_replacement").text(mobile_selection.warranty.message[1]);
  });
}

let mobile = sessionStorage.getItem("mobile_view_cart");
getData("http://localhost:4000/api/mobile/viewCart/" + mobile);
