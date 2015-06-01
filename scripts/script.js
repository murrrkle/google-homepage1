$( "#searcharea" ).focus(function() {
  $(".searchcontainer").css("border", "1px solid #4d90fe");
});

$( "#searcharea" ).blur(function() {
  $(".searchcontainer").css({"border": "1px solid #d9d9d9", "border-top-color": "#c0c0c0"});
});