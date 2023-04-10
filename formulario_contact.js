const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status ===200){
            alert("mensaje enviadoooooooo");
            form.reset();
        }else {
            alert("no se mando nada che")
        }
    };
    xhr.send(data);
});




