< style >
    .text {
        color: black;
        padding - top: 50 px;
        float: center;
    } <
    /style>

<
form id = "form"
action = "https://wurth.papertrail.co.za/wurth/create/application"
method = "POST"
class = "ajax" >
    <
    div class = "input-group" > Rep Name < /div> <
div class = "form-group" >
    <
    input type = "text"
name = "rep_name"
class = "form-control" / >
    <
    /div> <
div class = "input-group" > Rep Email < /div> <
div class = "form-group" >
    <
    input type = "email"
name = "rep_email"
class = "form-control"
required / >
    <
    /div> <
div class = "input-group" > Rep No < /div> <
div class = "form-group" >
    <
    input type = "text"
name = "rep_no"
class = "form-control"
required / >
    <
    /div> <
div style = "float:left" >
    <
    button type = "submit"
class = "btn btn-primary"
value = "Send" > Submit < /button> < /
div >

    <
    div class = "text" > < /div>


<
/form>  <
div class = "text" > < /div>



<
script >
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


<
/script>