// Oppgave 1
    function hideText() {
        let text = document.getElementById("remove");
        if(text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    }

    document.getElementById("remove-btn").addEventListener("click", hideText);

// Oppgave 2
    function changeText() {
        document.getElementById("change").innerHTML = "Hello Hello";
    }
    document.getElementById("change-btn").addEventListener("click", changeText);

// Oppgave 3
    const log = document.getElementById("input-text");
    const input = document.getElementById("input");

    input.addEventListener("input", updateText);

    function updateText(e) {

        log.textContent = e.target.value;
    }

// Oppgave 4
    const myList = ["item one", "item two", "item three"];

    function writeList(){
        let text = "";
        for (let i=0; i <= myList.length; i++){
            text += "<li>" + myList[i] + "</li>";
        }
        document.getElementById("ul").innerHTML = text;
    }

    document.getElementById("write-list").addEventListener("click", writeList);

// Oppgave 5
    const htmlPlaceholder = document.getElementById("placeholder");
    const select = document.getElementById("select");
    const text = document.getElementById("text");
    const createBtn = document.getElementById("create");

    function createElement() {
        const htmlEl = select.value;
        const Message = text.value;
        htmlPlaceholder.innerHTML = "<" + htmlEl + ">" + Message + "</" + htmlEl + ">";
    };

    createBtn.addEventListener("click", createElement);

// Oppgave 6
    const ForelderEl = document.getElementById("list");
    const FjernLiBtn = document.getElementById("remove-li");

    function FjernLi() {
        const lastElement = ForelderEl.lastElementChild;
        if (lastElement){
            ForelderEl.removeChild(lastElement);
        }
    }

    FjernLiBtn.addEventListener("click", FjernLi);

// Oppgave 7
    const txtBox = document.getElementById("name");
    const orderBtn = document.getElementById("order");

    function checkTxtBox() {
        const txt = txtBox.value;

        if (txt && txt.length > 4) {
            orderBtn.disabled = true;
            orderBtn.style = "border: 3px solid red";
        } else{
            orderBtn.disabled = false;
            orderBtn.style = "border : 1px solid violet";
        }
    }

    orderBtn.addEventListener("click", checkTxtBox);

// Oppgave 8
    const Parent = document.querySelector(".children");
    const children = Parent.querySelectorAll("li");
    const colorBtn = document.getElementById("color");

    function addColor(){
        Array.from(children).forEach((li, index) => {
            if ((index + 1) % 2 === 0){
                li.style = "border: 2px solid pink";
            } else{
                li.style = "border: 2px solid green";
            }
        });
    };
    colorBtn.addEventListener("click", addColor);