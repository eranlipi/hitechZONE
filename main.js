function getJson(){


  console.log(events_data.items);
  let divLoop =  $('.jsonResult');

  for(var i = 0 ; i < events_data.items.length ; i++){
    // console.log(events_data.items[i]);
    divLoop.append($("<div></div>",{class:"item-container"})).append(
      $("<img></img>",{src:events_data.items[i].image}),
      $("<h1></h1>",{text:events_data.items[i].title}),
    )
  }



}