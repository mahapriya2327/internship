// Order Form Validation

const form = document.getElementById("orderForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();

let phone = document.getElementById("phone").value.trim();

let guests = document.getElementById("guests").value.trim();

let date = document.getElementById("date").value;

let address = document.getElementById("address").value.trim();

let checkedFoods = document.querySelectorAll("input[type='checkbox']:checked");

if(name==="" || phone==="" || guests==="" || date==="" || address===""){

alert("Please fill all the fields.");

return;

}

if(phone.length!=10 || isNaN(phone)){

alert("Please enter a valid 10-digit phone number.");

return;

}

if(checkedFoods.length===0){

alert("Please select at least one food item.");

return;

}

let foods=[];

checkedFoods.forEach(function(food){

foods.push(food.value);

});

alert(
"🎉 Order Placed Successfully!\n\n"+
"Customer : "+name+
"\nPhone : "+phone+
"\nGuests : "+guests+
"\nSelected Foods : "+foods.join(", ")
);

form.reset();

});

}// Menu Search

function searchMenu(){

    let input = document.getElementById("searchInput");

    if(!input) return;

    let filter = input.value.toUpperCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toUpperCase();

        if(text.indexOf(filter) > -1){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}function filterMenu(category){

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

if(category==="all"){

card.style.display="block";

}

else if(card.classList.contains(category)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}// Live Order Summary

const nameInput = document.getElementById("name");
const functionInput = document.getElementById("function");
const guestsInput = document.getElementById("guests");
const foodCheckboxes = document.querySelectorAll("input[type='checkbox']");

function updateSummary(){

    if(!nameInput) return;

    document.getElementById("summaryName").textContent =
        nameInput.value || "-";

    document.getElementById("summaryFunction").textContent =
        functionInput.value || "-";

    document.getElementById("summaryGuests").textContent =
        guestsInput.value || "-";

    let selectedFoods = [];

    foodCheckboxes.forEach(function(food){
        if(food.checked){
            selectedFoods.push(food.value);
        }
    });

    let list = document.getElementById("summaryFoods");

    list.innerHTML = "";

    if(selectedFoods.length === 0){
        list.innerHTML = "<li>No items selected</li>";
    }else{
        selectedFoods.forEach(function(item){
            list.innerHTML += "<li>" + item + "</li>";
        });
    }
}

if(nameInput){

    nameInput.addEventListener("input", updateSummary);
    functionInput.addEventListener("change", updateSummary);
    guestsInput.addEventListener("input", updateSummary);

    foodCheckboxes.forEach(function(food){
        food.addEventListener("change", updateSummary);
    });

}