// get a reference to the textbox where the bill type is to be entered
    var billTypeTextElement = document.querySelector(".billTypeText");
    var callTotalOneElement = document.querySelector(".callTotalOne");
    var smsTotalOneElement = document.querySelector(".smsTotalOne");
    var totalOneElement = document.querySelector(".totalOne");

//get a reference to the add button
    var addBillBtnElement = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
   

//add an event listener for when the add button is pressed
    addBillBtnElement.addEventListener('click', textBillTotal);


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

    let textBillFactory = textBill();

    function textBillTotal(){

        var textTemplateSource = document.querySelector(".textTemplate").innerHTML;
        var userTextTemplate = Handlebars.compile(textTemplateSource);

        textBillFactory.textAddCost(billTypeTextElement.value)

        callTotalOneElement.innerHTML = userTextTemplate({callTotalOne:textBillFactory.getTextCallTotal()});
        smsTotalOneElement.innerHTML = userTextTemplate({smsTotalOne:textBillFactory.getTextSmsTotal()});
        totalOneElement.innerHTML = userTextTemplate({totalOne:textBillFactory.textAddTotal()});

        // get the value entered in the billType textfield
        
        // //update the totals that is displayed on the screen.

        // //color the total based on the criteria

        totalOneElement.classList.remove('warning');
        totalOneElement.classList.remove('danger');

        totalOneElement.classList.add(textBillFactory.totalTextClassName());
    
    }