async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let laptops_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    laptops_selection.image +
    '" alt="" class="img-fluid"><button type="button" id="buy_now" class="btn btn-success me-2">Buy Now</button><button type="button" class="btn btn-warning" id="add_to_cart" data-bs-toggle="modal" data-bs-target="#my_modal">Add to cart</button></div>';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#laptop_name").text(laptops_selection.product.name);
    $("#laptop_model").text(laptops_selection.product.model);
    $("#laptop_gpu").text(laptops_selection.graphicsCard.name);
    $("#laptop_diagonal_display").text(laptops_selection.display.diagonalInch);
    $("#laptop_aspect_ratio").text(laptops_selection.display.aspectRatio);
    $("#laptop_resolution").text(laptops_selection.display.resolution);
    $("#laptop_hd_type").text(laptops_selection.display.hdType);
    $("#laptop_processor").text(laptops_selection.processor.name);
    $("#laptop_processor_frequency").text(
      laptops_selection.processor.frequency
    );
    $("#laptop_processor_boost").text(
      laptops_selection.processor.boostFrequency
    );
    $("#laptop_ram_type").text(laptops_selection.ram.type);
    $("#laptop_ram_capacity").text(laptops_selection.ram.maxCapacity);
    $("#laptop_price_dollar").text(laptops_selection.price.usd);
    $("#laptop_price_peso").text(laptops_selection.price.php);
    $("#laptop_gpu_description").text(
      laptops_selection.graphicsCard.description
    );
    $("#laptop_ram_description").text(laptops_selection.ram.description);
    $("#laptop_airflow_description").text(
      laptops_selection.airflow.description
    );
    $("#laptop_display_description").text(
      laptops_selection.display.description
    );
    $("#view_cart").click(function () {
      let laptop = laptops_selection.id;
      sessionStorage.setItem("laptop_view_cart", laptop);
      window.location.href = "display_cart_laptop.html";
    });
    $("#buy_now").click(function () {
      let laptop = laptops_selection.id;
      sessionStorage.setItem("laptop_view_cart", laptop);
      window.location.href = "display_cart_laptop.html";
    });
  });
}

let laptop = sessionStorage.getItem("laptop_selected");
getData("http://localhost:4000/api/laptops/" + laptop);
