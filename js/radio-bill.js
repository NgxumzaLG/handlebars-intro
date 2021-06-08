// get a reference to the sms or call radio buttons
    var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
    var callTotalTwoElement = document.querySelector(".callTotalTwo");
    var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
    var totalTwoElement = document.querySelector(".totalTwo");

//get a reference to the add button
    var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed
  radioBillAddBtnElement.addEventListener('click', radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

   
// billItemType will be 'call' or 'sms'
    let radioBillFactory = radioBill();
    

    function radioBillTotal (){

        var radioTemplateSource = document.querySelector(".radioTemplate").innerHTML;
        var userRadioTemplate = Handlebars.compile(radioTemplateSource);

        var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        radioBillFactory.radioAddCost(checkedRadioBtn.value)

        callTotalTwoElement.innerHTML = userRadioTemplate({callTotalTwo:radioBillFactory.getRadioCallTotal()});
        smsTotalTwoElement.innerHTML = userRadioTemplate({smsTotalTwo:radioBillFactory.getRadioSmsTotal()});
        totalTwoElement.innerHTML = userRadioTemplate({totalTwo:radioBillFactory.radioAddTotal()}) ;

        totalTwoElement.classList.remove('warning')
        totalTwoElement.classList.remove('danger')

        totalTwoElement.classList.add(radioBillFactory.totalRadioClassName())


    }

   

