$("#updateBtn1").click(function(e){
  e.preventDefault();
  getJson("freecodecamp",0);
                                  
});//end document ready
$("#updateBtn2").click(function(e){
  e.preventDefault();
  getJson("noobs2ninjas", 1);
});
$("#updateBtn3").click(function(e){
  e.preventDefault();
  getJson("skyrimtogetherofficial",2);
});

function getJson(name, index){
  console.log("getttingJson" +name);
  var myurl = "https://wind-bow.glitch.me/twitch-api/channels/" + name;
  
  $.ajax({
    url:myurl, dataType:"json",
      success:function(parsed_json){
        console.log(parsed_json);
        
        var icon = parsed_json.logo;
        console.log(icon);
       
        var name = parsed_json.display_name;
        console.log(name);
        
        var status = parsed_json.mature;
        console.log(status);  
        
        var link = parsed_json.url;
        console.log(link);
        setHTML(icon, name, status, link, index);
       
      }
  });//end ajax
}//end getStreams

function setHTML(icon, name, status, link, index){
  console.log("setting HTML");
  var pic = "#pic" + index;
  var stat = "#status" + index;
  var title = "#title" + index;
  var row = ".row"+index;
  var a = "#a" + index;
  $(pic).attr("src", icon);
  $(a).attr("href", link);
  // $(title).text(name);
  $(stat).text(status.toString());
  console.log(row);
  if(!status){
    $(row).css('background-color', '#b65f5f');
  }
}
