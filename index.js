let textinput; 
let numberinput; 
let balance = 0;
let income = 0;
let expense = 0;






document.getElementById("addtrans").addEventListener("click", function (){
    

    textinput = document.getElementById("textinput").value;
    numberinput = document.getElementById("numberinput").value;
   let finalnumber = Number(numberinput);
  

    balance = balance + finalnumber;
    
   
    
    if (textinput != "" && numberinput != "")
    {
        
        addTransactiontoHistory ();
        changeBalance (); 
        changeIncomeExpenseTracker ();
       
    }


});



function addTransactiontoHistory ()  {


    let newdiv = document.createElement("div");

    newdiv.className = "historybox";

    let text = document.createElement("p");

    text.innerHTML = textinput;

    let amount = document.createElement("p");

    amount.innerHTML = numberinput;

    let buttondel = document.createElement("button");
    buttondel.innerHTML = "x";
    buttondel.className = "dltbutton";

    newdiv.appendChild(buttondel);

    newdiv.appendChild (text);
    newdiv.appendChild(amount);

    if (numberinput < 0){

        newdiv.classList.add ("red");
    }

    if (numberinput > 0){

        newdiv.classList.add ("green");
    }

    document.querySelector(".outerbox").appendChild(newdiv);

    //delete transaction

    buttondel.addEventListener("click", function (){
        
        //change balance
        let place = Number (buttondel.parentElement.lastChild.innerHTML);
        balance = balance - place;
//change income
if (place > 0){
        income = income - place;
        document.querySelector(".incomeA").innerHTML = income;
}

if (place < 0 ){

    expense = expense - place;
    document.querySelector(".expenseA").innerHTML = expense;
}
        document.querySelector(".balanceAmount").innerHTML = balance;
        console.log (balance);
        
        (buttondel.parentElement.remove());
        }); 

}


    function changeBalance (){


        document.querySelector(".balanceAmount").innerHTML = balance;

    };



function changeIncomeExpenseTracker (){

    if (numberinput > 0){
        let incomep = Number (numberinput);
       
        income = income +incomep;

        document.querySelector(".incomeA").innerHTML = income;
    }


    if (numberinput < 0){

        let expensep = Number (numberinput);
        expense = expense + expensep;
        document.querySelector(".expenseA").innerHTML = expense;
    }



    

};













