


const contents = $('#contents');
var contentsParent = contents.parent();
contents.remove();
contentsParent.prepend('<div class = "container" ><h1>GET BACK TO WORKING ON YOUR SOFTWARE ENGINEERING DREAMS!</h1></div>');
$("h1").addClass("beautText");
function getRandomArbitrary(min, max){
  return Math.floor(Math.random()*(max-min)+min);
}
let id = getRandomArbitrary(0,993);

  $.ajax({
    method: 'GET',
    url: 'https://unsplash.it/list',
    success: function(result) {
        contentsParent.append('<p></br><img class="randomImg" src="https://unsplash.it/1200/800?image=" + result.id/></p>');

     // result is whatever the URL sends back from the request
    },
    error: function(err) {
     // if any errors occur during the process you can check out the
     // the error by logging the 'err' argument
  }});

