$(function() {
    var url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    var key = '31b5dae9202061cdf855e75070a95f01';
    var coords = {
        valpo: '-33.045846,-71.619675',
        ptoW: '-54.9341336,-67.6108964',
        arica: '-18.478518,-70.3210596',
    }

    $('#select').on('change', function(){

        $.ajax({
            url: url + key + '/' + coords[$(this).val()],
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });





    })
    });
