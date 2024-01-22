async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let accessory_selection = JSON.parse(my_text);

  let image =
    '<img src="images/' +
    accessory_selection.image +
    '" alt="" class="img-fluid"><button type="button" id="buy_now" class="btn btn-success me-1 mb-1">Buy Now</button><button type="button" class="btn btn-warning mb-1" id="add_to_cart" data-bs-toggle="modal" data-bs-target="#my_modal">Add to cart</button>';
  $("#image_area").append(image);

  $(document).ready(function () {
    $("#accessory_name").text(accessory_selection.product.name);
    $("#accessory_model").text(accessory_selection.product.model);
    $("#accessory_support_platform").text(
      accessory_selection.supportPlatform[0]
    );
    $("#accessory_driver_material").text(accessory_selection.driver.material);
    $("#accessory_driver_size").text(accessory_selection.driver.size);
    $("#accessory_pickup").text(accessory_selection.pickupPattern);
    $("#accessory_sensitivity").text(accessory_selection.sensitivity);
    $("#accessory_impedance").text(accessory_selection.headphoneImpedance);
    $("#accessory_fr_headphone").text(
      accessory_selection.frequencyResponse.headphone
    );
    $("#accessory_fr_microphone").text(
      accessory_selection.frequencyResponse.microphone
    );
    $("#headphone_description").text(accessory_selection.description);
  });
  $("#view_cart").click(function () {
    let accessory = accessory_selection.id;
    sessionStorage.setItem("accessory_view_cart", accessory);
    window.location.href = "display_cart_accessory.html";
  });
  $("#buy_now").click(function () {
    let accessory = accessory_selection.id;
    sessionStorage.setItem("accessory_view_cart", accessory);
    window.location.href = "display_cart_accessory.html";
  });
}
let accessory = sessionStorage.getItem("accessory_selected");
getData("http://localhost:4000/api/accessory/" + accessory);
