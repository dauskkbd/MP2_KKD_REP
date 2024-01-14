async function getData(data) {
  let my_obj = await fetch(data);
  let my_text = await my_obj.text();
  let laptops = JSON.parse(my_text);

  for (let i = 0; i < laptops.length; i++) {
    let card =
      '<div class="col-lg-3 col-md-6 col-6 mb-3"><div class="card"><img class="card-img-top" src="images/crash_bandicoot.webp" alt="none" class="img-fluid" /><div class="card-body"><h5 class="card-title" id="card_title">Label here</h5><p class="card-text" id="card_text">Some example text.</p><a href="#" class="btn btn-primary" id="card_view_more">View more</a></div></div></div>';
    $("#laptop_cards").append(card);
  }
}

getData("http://localhost:4000/api/laptops");
