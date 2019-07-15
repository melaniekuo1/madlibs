var season = $(`.season`)
var verbone = $(`.verbone`)
var friendsname = $(`.friendsnameone`)
var celebrityone = $(`.celebrityone`)
var celebritytwo = $(`.celebritytwo`)
var typeofbuilding = $(`.buildingtype`)
var location = $(`.location`)
var friendsnametwo = $(`.friendsnametwo`)
var verbtwo = $(`.verbtwo`)
var itemone = $(`.itemone`)
var vowelitem = $(`.vowelitem`)
var food = $(`.food`)

var button = $(`button`)

button.on('click', insertWords);

function insertWords () {
  event.preventDefault();
  var story = $(`.story`)
  var therealstory = `im ${verbone.val()}`` ${nameone.val()}`
  //accesing story in html//
  story.append (`<p> ${therealstory} </p>`)
}
