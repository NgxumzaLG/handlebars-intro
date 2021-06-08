//get a reference to the calculate button
    var calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
    var billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
    var billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
    let calculateBillFactory = calculateBill();

    function calculateBtnClicked(){
        // calculateBillFactory.calculateAddCost(billStringElement.value)

        billTotalElement.innerHTML = calculateBillFactory.calculateAddCost(billStringElement.value);

        billTotalElement.classList.remove('warning');
        billTotalElement.classList.remove('danger');

        billTotalElement.classList.add(calculateBillFactory.totalCalClassName(billStringElement.value));
        
//  * this function should read the string value entered - split it on a comma.
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

    }
// link the function to a click event on the calculate button
    calculateBtnElement.addEventListener('click', calculateBtnClicked);
