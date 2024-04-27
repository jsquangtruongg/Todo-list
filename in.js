document.addEventListener("DOMContentLoaded", function() {
    var name = localStorage.getItem("name");
    if(name) {
        var nameElement = document.getElementById("name");
        nameElement.textContent = name;
        localStorage.removeItem("name"); // Xóa tên khỏi Local Storage sau khi sử dụng
    }
});

/* 
var close = document.getElementsByClassName("fa-solid fa-xmark");
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
        var div = this.parentElement.parentElement;
        div.style.display = "none";
    });
}

var listNode = document.getElementsByClassName("mid");
for (var i = 0; i < listNode.length; i++) {
    listNode[i].addEventListener("click", function () {
        var centElement = this.querySelector(".cent");
        centElement.classList.toggle("checke")
    })
}


var link = document.getElementsByClassName("fa-solid fa-check");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (event) {
        var name = event.target.parentElement.parentElement.querySelector(".cent").textContent;
        localStorage.setItem("name", name);
        window.location.href = "http://127.0.0.1:5500/in.html";
    });
}

function newElement() {
    var inputValue = document.getElementById("txtInput").value.trim();
    if (inputValue === "") {
        alert("Vui lòng nhập gì đó");
    } else {
        var div = document.createElement("div");
        div.className = "mid";

        var p = document.createElement("p");
        p.className = "cent";
        p.textContent = inputValue;

        var iCheckIcon = document.createElement("i");
        iCheckIcon.className = "fa-solid fa-check";

        var iDeleteIcon = document.createElement("i")
        iDeleteIcon.className = " fa-solid fa-xmark";

        var addDiv = document.createElement("add");
        addDiv.className = "add";

        
        addDiv.appendChild(iCheckIcon);
        addDiv.appendChild(iDeleteIcon);

        div.appendChild(p);
        div.appendChild(addDiv);
    
        document.getElementById("myMain").appendChild(div);

        iDeleteIcon.addEventListener("click", function(){
            div.style.display = "none";
        });

        div.addEventListener("click",function(){
            p.classList.toggle("checke");
        });

        iCheckIcon.addEventListener("click",function(){
            var name = p.textContent;
            localStorage.setItem("name",name);
            window.location.href = "http://127.0.0.1:5500/in.html";
        });
    }

    document.getElementById("txtInput").value = "";
}
*/