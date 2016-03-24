$(function() {

  $("#height").keydown(function() {
    console.log("keydown");
    setTimeout(function() {
      run();
    }, 100);
  });

  $("#agree, #disagree").change(function() {
    run();
  });

  function run() {
    var height = parseInt($("#height").val());
    console.log(height);
    if ((height > 48) && $("#agree").is(':checked')) {
      $(".rides div").show();
    } else if ((height < 48) && $("#agree").is(':checked')) {
        $(".rides div").hide();
        $(".ride1").show();
      }
    else {
      $(".rides div").hide();
    }
  }
});
