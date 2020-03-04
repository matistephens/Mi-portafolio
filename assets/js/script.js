

  $(function () {

    $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var ident = this.hash;

      $("html, body").animate({
        scrollTop: $(ident).offset().top
      }, 800, function(){
        window.location.hash = ident;
      });
    }
  });

    $('[data-toggle="popover"]').popover()

    $("a").attr('target','_blank');


  });
