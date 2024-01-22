async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let laptops_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    laptops_selection.image +
    '" alt="" class="img-fluid">';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#laptop_name").text(laptops_selection.product.name);
    $("#laptop_model").text(laptops_selection.product.model);
    $("#laptop_price_peso").text(laptops_selection.price.php);
    $("#warranty_year").text(laptops_selection.warranty.message[0]);
    $("#warranty_replacement").text(laptops_selection.warranty.message[1]);
  });
}

let laptop = sessionStorage.getItem("laptop_view_cart");
getData(
  "https://express-demo-g3ms.onrender.com/api/laptops/viewCart/" + laptop
);
