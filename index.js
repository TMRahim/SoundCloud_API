$(document).ready(function(){
  $("#text").click(function(event){
    console.log()
    
    SC.get('/tracks', { q: $( "#info" ).val(), license: 'cc-by-sa' }, function(tracks) {
      for (var i=0; i<10; i++){
        var title = tracks[i].title;
        var url = tracks[i].permalink_url;
        var genre = tracks[i].genre;
        $("#middle").append(title + ", " + url + ", " + genre);
        $("#middle").append("<br>");
      }
  });
  
  });
  SC.initialize({
  client_id: '5f3cfea1b1b2cb888459afe8b3c070d2'
  });
  
  $("#clear").click(function(){
    $("#middle").empty();
  });
  
  
// find all sounds of buskers licensed under 'creative commons share alike'


});// JavaScript File