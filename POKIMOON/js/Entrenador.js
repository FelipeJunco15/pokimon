


function GetDataUser(){
    let dataUser = localStorage.getItem("user")
    
    if(dataUser == null){
        alert('No has iniciado sesion')
        window.location.href = "../login.html"
    }
    
}

GetDataUser()