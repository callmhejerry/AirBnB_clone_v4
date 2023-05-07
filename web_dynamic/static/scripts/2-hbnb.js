$('document').ready(() => {
    const url = "http://localhost:5001/api/v1/status/";
    $.getJSON(url, (data, status, xhr) => {
        if (status == "success") {
            const { status } = data;
            console.log(data);
            if (status == "OK") {
                $("div#api_status").addClass("available");   
            }
        } else {
            $("div#api_status").removeClass('available');
        }
    });
})