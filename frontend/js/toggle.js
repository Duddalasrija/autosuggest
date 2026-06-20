var users = [
    { name: "John", gender: "Male" , image: "/images/john.png" },
    { name: "Jane", gender: "Female" , image: "/images/jane.png" }
]
var curId= 0;
function toggle(){
    curId = (curId+1)%2;;
    var user = users[curId]
    document.getElementById("user-image").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
}