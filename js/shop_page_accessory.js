async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let accessory_selection = JSON.parse(my_text);
  console.log(accessory_selection);

  for (let i = 0; i < accessory_selection.length; i++) {
    let card =
      '<div class="col-lg-3 col-md-6 col-6 mb-3"><a class="accessory" id="' +
      accessory_selection[i].id +
      '"><div class="card"><img src="images/' +
      accessory_selection[i].image +
      '" alt="none" class="card-img-top img-fluid mt-3" /><div class="card-body"><h5 class="card-title" id="card_title">' +
      accessory_selection[i].product.name +
      '</h5><p class="card-text" id="card_text"></p><ul><li>Headphone ANC: ' +
      accessory_selection[i].anc.headphone +
      "</li><li>Microphone ANC: " +
      accessory_selection[i].anc.mic +
      "</li><li>Usage Scenario: " +
      accessory_selection[i].usageScenario +
      "</li><li>Connector: " +
      accessory_selection[i].connector +
      "</li></ul></div></div></a></div>";
    $("#accessory_cards").append(card);
    $(".accessory").click(function () {
      let accessory = Number($(this).prop("id"));
      sessionStorage.setItem("accessory_selected", accessory);
      window.location.href = "full_specs_accessory.html";
    });
  }
}

getData("http://localhost:4000/api/accessory/");
