
jQuery( document ).ready(function( $ ) {

    var request;

    $("#myForm").submit(function(event){

        if (request) {
            request.abort();
        }

        var $form = $(this);

        var $inputs = $form.find("input, select, button, textarea");

        var serializedData = $form.serialize();

        $inputs.prop("disabled", true);
       $('h1').fadeOut(),$('h3').fadeOut(),$('form').fadeOut();

        $('#result').text('Loading...');

        request = $.ajax({
      url: "https://script.google.com/macros/s/AKfycbz2MYGP3AWY8ms7qOzofR07Eh47phtS3ZONm06cbNwyhstPvuSe/exec",  // clone
            type: "post",
            data: serializedData
        });

        request.done(function (response, textStatus, jqXHR){



           $('#result').html('Thank you for your interest. We will send you an invite as soon as we can.<br><br><br>PPT works best with friends. <a href="http://twitter.com/home?status=Check%20out%20@pptapp%20http://pptapp.io/">Let them know.</a>');


        });

        request.fail(function (jqXHR, textStatus, errorThrown){

            console.error(
                "The following error occured: "+
                textStatus, errorThrown
            );
        });

        request.always(function () {

            $inputs.prop("disabled", false);
        });

        event.preventDefault();
    });
});
