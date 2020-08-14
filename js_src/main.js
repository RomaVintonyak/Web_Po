jQuery(document).ready(function(){
  var tButton = $(".title");
  tButton.on("click", show__messag);
  function show__messag(){
    confirm("its wery nice, click ok!");
    for(var i = 0; i < 10; i++){
      document.write("hello  world <br/>");
    }
  }
});