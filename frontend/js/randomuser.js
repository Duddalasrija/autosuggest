function randomuser(){
    fetch('https://randomuser.me/api/')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data.results[0];
        var fullname = user.name.title+' '+user.name.first+' '+user.name.last;
        var gender = user.gender;
        var image = user.picture.large;
        document.getElementById("user-image").src=image;
        document.getElementById("user-name").textContent=fullname;
        document.getElementById("user-gender").textContent=gender;
    });
}