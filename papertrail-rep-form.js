$('form.ajax').on('submit', function() {

    var that = $(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};
    that.find('[name]').each(function(index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
    });

    $.ajax({

        url: url,
        headers: {
            "Authorization": "Basic YXBpOnBhcGVydHJhaWw=",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        type: type,
        data: data,


        success: function(response) {

            let message = JSON.stringify(response);
            console.log(JSON.parse(message))

            $(".text").html(
                '<div class="alert alert-success"><a href=" ' + response.sign_link + ' ">The first phase of account creation form is successfully submitted. Please click here to complete the form.</a></div>'
            );

        }

    });

    return false;
});