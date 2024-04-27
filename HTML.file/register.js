
/**
 * delete Element 
 */
 var checkList = document.getElementsByClassName("fa-solid fa-xmark");
for(var i=0;i<checkList.length;i++){
    checkList[i].addEventListener("click",function() {
        var node = this.parentElement.parentElement;
        node.remove();
    })
}
/**
 * sữ dụng  document.getElementsByClassName để lưu tất cả các class có tên là fa-solid fa-xmark
 * sau đó lưu tất cả lại và gán cho biến listNode,
 * ta tạo một vòng lặp for và duyệt qua cái phần tử có trong listNode
 * tiếp tục ta lấy tất cả phần tử có trong mảng i chính là listNode[i]
 * để lắng nghe sự kiện click của hàm addEventListener và truyền vào một function
 * chúng ta sử dụng this.parentElement.parentElement có nghĩa this là nơi mà chính ta 
 * click vào cũng chính là thẻ i và parentElement.parentElement là thẻ cha của i là add và
 * cha của add là mid sau đó gán ngược vào biến node
 * và sau đó mid được đại diện là node và lấy node chấm tới style.display ="none" để ẩn
 * đi class có tên là mid mỗi khi nhấn vào   <i class="fa-solid fa-xmark"></i>
 */

var checkLine = document.getElementsByClassName("mid");
for(var i=0;i<checkLine.length;i++){
    checkLine[i].addEventListener("click",function(){
        var line = this.querySelector(".cent");
        line.classList.toggle("checke");
    })
}
/**
 * sử dụng document.getElementsByClassName đẻ lưu tất cả các class có tên là mid và sau đó
 * gán ngược lại cho biến click tiếp tục ta tạo một vòng for để duyệt qua cái phần tử có trong
 * click tiếp đến các phần tử trong mảng i được đưa vào biến click ,click[i],để lắng nghe
 * sự kiện click và truyền nó vào một function
 * tiếp đến ta dùng this.querySelector để tìm ra phần tử con chính là cent  và this ở đây
 * chính là mid khi được click vào sau đó gán ngược lại cho centElement 
 * sau đó ta lấy biến centElement tạo cho nó một class mới bằng cách dùng classList 
 * và toggle để kiểm tra xem đã tồn tại hay chưa nếu chưa thì thêm vào nếu rồi thì xóa đi
 */

var locoName = document.getElementsByClassName("fa-solid fa-check");
for(var i=0;i<locoName.length;i++){
    locoName[i].addEventListener("click",function(event){
        var name = event.target.parentElement.parentElement.querySelector(".cent").textContent;
        localStorage.setItem('name',name);
        window.location.href ="http://127.0.0.1:5500/FORM_SUBMIT/in.html";
    })
}

/**
 * sử dụng document.getElementsByClassName đẻ lưu tất cả các class có tên là fa-solid fa-check và sau đó
 * gán ngược lại cho biến link tiếp tục ta tạo một vòng for để duyệt qua cái phần tử có trong
 *link tiếp đến các phần tử trong mảng i được đưa vào biến link ,link[i],để lắng nghe
 * sự kiện link và truyền nó vào một function trong hàm function truyền vào một đối số
 * là event event.target.parentElement.parentElement.querySelector(".cent").textContent
 * dòng này được hiểu là lấy phần tử cha của phần tử <i> và i ở đây chính là target 
 * và parentElement.parentElement là lấy phần tử cha chủa target là add và phần tử cha
 * của add là mid và khi truy cập vào được class mid thì sao đó chúng ta tìm phần tử
 * có class là cent để lấy nội dung của phần tử đó và gán ngược lại cho name
 *  localStorage.setItem("name",name); dòng này là lưu nội dung của text được lấy từ
 * class cent vào localStorage có key là name;
 * tiếp tục ta sử dụng  window.location.href để chuyển hướng nội dung qua một trang
 * mới
*/

function newElement() {
    var newInput = document.getElementById("txtInput").value.trim();
    if (newInput === "") {
        alert("vui lòng nhập gì đó");
    } else {
        var addDiv = document.createElement("mid");
        addDiv.className = "mid";

        var text = document.createElement("p");
        text.className = "cent";
        text.textContent = newInput;

        var checkIcon = document.createElement("i");
        checkIcon.className = "fa-solid fa-check";

        var deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-xmark";

        var adds = document.createElement("div");
        adds.className = "add";

        adds.appendChild(checkIcon);
        adds.appendChild(deleteIcon);

        addDiv.appendChild(text);
        addDiv.appendChild(adds);

        deleteIcon.addEventListener("click", function () {
            var node = this.parentElement.parentElement;
            node.remove();
        })

        addDiv.addEventListener("click", function () {
            var p = this.querySelector(".cent");
            p.classList.toggle("checke");
        })


        checkIcon.addEventListener("click",function(){  
            var name = text.textContent;
            localStorage.setItem("name",name);
            window.location.href = "http://127.0.0.1:5500/FORM_SUBMIT/in.html";
        })
        document.getElementById("myMain").appendChild(addDiv);
    }
    document.getElementById("txtInput").value = "";
}