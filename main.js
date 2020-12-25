document.getElementById('show').onclick = function show() {
    var type = document.getElementById("password").getAttribute("type");

    if(type === "password"){
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").classList.remove("fa-eye-slash");
        document.getElementById("eye").classList.add("fa-eye");
    } else{
        document.getElementById('password').setAttribute("type", "password")
        document.getElementById("eye").classList.add("fa-eye-slash");
        document.getElementById("eye").classList.remove("fa-eye");
    }

}

document.getElementById('password').onkeyup = function length(){

    if (this.value.length < 4){
        document.getElementById('description').innerText = "Too weak!"
        document.getElementById('line').style.width= `${this.value.length}0%`
        document.getElementById('line').style.backgroundColor= `red`

    } else if(this.value.length > 4 && this.value.length < 8){
        document.getElementById('description').innerText = "Not Bad!"
        document.getElementById('line').style.width = `${this.value.length}0%`
        document.getElementById('line').style.backgroundColor= `yellow`

    }
    else if(this.value.length > 8){
        document.getElementById('description').innerText = "Strong!";
        document.getElementById('line').style.width= `100%`
        document.getElementById('line').style.backgroundColor= `green`
    }
}

console.log(typeof(NaN))
