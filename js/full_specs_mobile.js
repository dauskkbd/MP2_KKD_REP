async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let mobile_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    mobile_selection.image +
    '" alt="" class="img-fluid mb-2"><button type="button" id="buy_now" class="btn btn-success me-1 mb-3">Buy Now</button><button type="button" class="btn btn-warning mb-3" data-bs-toggle="modal" data-bs-target="#my_modal">Add to cart</button></div>';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#mobile_name").text(mobile_selection.product.name);
    $("#mobile_processor_name").text(mobile_selection.processor.name);
    $("#mobile_processor_gpu").text(mobile_selection.processor.gpu);
    $("#mobile_diagonal_display").text(mobile_selection.display.diagonalInch);
    $("#mobile_aspect_ratio").text(mobile_selection.display.aspectRatio);
    $("#mobile_resolution").text(mobile_selection.display.resolution);
    $("#mobile_refresh_rate").text(mobile_selection.display.refreshRate);
    $("#mobile_screen").text(mobile_selection.display.screenSpecs);

    $("#mobile_processor_frequency").text(mobile_selection.processor.frequency);
    $("#mobile_processor_boost").text(
      mobile_selection.processor.boostFrequency
    );
    $("#mobile_ram").text(mobile_selection.memory.ram);
    $("#mobile_internal").text(mobile_selection.memory.internal);
    $("#mobile_price_dollar").text(mobile_selection.price.dollar);
    $("#mobile_price_peso").text(mobile_selection.price.peso);
    $("#mobile_gpu_description").text(mobile_selection.processor.description);
    $("#mobile_ram_description").text(mobile_selection.processor.description);
    $("#mobile_airflow_description").text(mobile_selection.airflow.description);
    $("#mobile_display_description").text(mobile_selection.display.description);
    $("#view_cart").click(function () {
      let mobile = mobile_selection.id;
      sessionStorage.setItem("mobile_view_cart", mobile);
      window.location.href = "display_cart_mobile.html";
    });
    $("#buy_now").click(function () {
      let mobile = mobile_selection.id;
      sessionStorage.setItem("mobile_view_cart", mobile);
      window.location.href = "display_cart_mobile.html";
    });
  });
}
let mobile = sessionStorage.getItem("mobile_selected");
getData("http://localhost:4000/api/mobile/" + mobile);
