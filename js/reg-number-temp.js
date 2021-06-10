// Reference all the elements
var tempRegTextbox = document.querySelector('.tempRegText');
var tempAddRegButton = document.querySelector('.tempAddRegBtn');
var tempFinalRegField = document.querySelector('.tempFinalReg');
var tempRadioTown = document.querySelector('.tempRadio-town');
var tempShowButton = document.querySelector('.tempShowBtn');
var tempShowAllButton = document.querySelector('.tempShowAllBtn');
var tempErrorsfield = document.querySelector('.tempErrors')
var tempResetButton = document.querySelector('.tempResetBtn')

// Add event listener to the buttons when is clicked
tempAddRegButton.addEventListener('click', tempRegNumber);
tempShowButton.addEventListener('click', tempShowTownReg);
tempShowAllButton.addEventListener('click', tempShowAllTownReg);
tempResetButton.addEventListener('click', tempResetPage)

// Additional Global Variables
var tempCheckedRadioTownBtn = "";
let tempEnteredRegNo;

const tempRegExp1 = /^((CA|CY|CJ|CL)\s([0-9]){6})$/;
const tempRegExp2 = /^((CA|CY|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
const tempRegExp3 = /^((CA|CY|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;

// localStorage 
if (localStorage['registration no.']) {
    tempEnteredRegNo = JSON.parse(localStorage.getItem("registration no."));

}

//  Instantiate the instance of the factory function
let tempRegistration = regNumberFactory(tempEnteredRegNo);

// function to create and appendChild element

function disapendMyObject(tempObject) {
    var change = Object.keys(tempObject);
    
    for (var i = 0; i < change.length; i++) {
        let newTempRegNo = document.createElement('plates');

        newTempRegNo.textContent = change[i];
        tempFinalRegField.appendChild(newTempRegNo);

    }
}

function disapendMyArray(tempArray) {
    if (tempArray.length != 0) {
        for (var i = 0; i < tempArray.length; i++) {
            let newTempRegNo = document.createElement('plates');

            newTempRegNo.textContent = tempArray[i];
            tempFinalRegField.appendChild(newTempRegNo);

        }
    } else {
        setTimeout(function () {
            tempFinalRegField.innerHTML = "No registration number from this town";
            tempFinalRegField.classList.add('error');
            tempFinalRegField.classList.remove('proceed');

        }, 0);

        setTimeout(function () {
            tempFinalRegField.innerHTML = "";
            tempFinalRegField.classList.remove('error');
            tempFinalRegField.classList.remove('proceed');

        }, 3500);
    }
}

//  Show registration numbers that already in the localStorage
disapendMyObject(tempRegistration.regNoAdded());

// function for Add registration button

function tempRegNumber() {
    tempFinalRegField.innerHTML = "";
    document.getElementById('tempRadio-town1').checked = false;
    document.getElementById('tempRadio-town2').checked = false;
    document.getElementById('tempRadio-town3').checked = false;
    document.getElementById('tempRadio-town4').checked = false;
    tempCheckedRadioTownBtn = "";

    // instRegistration.setReg(regTextbox.value);


    if (tempRegTextbox.value !== "") {

        if (tempRegTextbox.value.toUpperCase().match(tempRegExp1) || tempRegTextbox.value.toUpperCase().match(tempRegExp2) || tempRegTextbox.value.toUpperCase().match(tempRegExp3)) {

            if (tempRegistration.addRegNo(tempRegTextbox.value)) {

                disapendMyObject(tempRegistration.regNoAdded());
                tempRegTextbox.value = "";

                setTimeout(function () {
                    tempErrorsfield.innerHTML = tempRegistration.getMessage();
                    tempErrorsfield.classList.add('proceed');

                }, 0);

                setTimeout(function () {
                    tempErrorsfield.innerHTML = "";
                    tempErrorsfield.classList.remove('error');
                    tempErrorsfield.classList.remove('proceed');

                }, 3500);

            } else {
                disapendMyObject(tempRegistration.regNoAdded());

                setTimeout(function () {
                    tempErrorsfield.innerHTML = tempRegistration.getMessage();
                    tempErrorsfield.classList.add('error');
                    tempErrorsfield.classList.remove('proceed');

                }, 0);

                setTimeout(function () {
                    tempErrorsfield.innerHTML = "";
                    tempErrorsfield.classList.remove('error');
                    tempErrorsfield.classList.remove('proceed');

                }, 3500);
            }

        } else {
            disapendMyObject(tempRegistration.regNoAdded());

            setTimeout(function () {
                tempErrorsfield.innerHTML = "Error! Invalid registration number format entered";
                tempErrorsfield.classList.add('error');

            }, 0);

            setTimeout(function () {
                tempErrorsfield.innerHTML = "Please enter the correct registration number format";
                tempErrorsfield.classList.remove('error');
                tempErrorsfield.classList.add('proceed')

            }, 3000);

            setTimeout(function () {
                tempErrorsfield.innerHTML = "";
                tempErrorsfield.classList.remove('error');
                tempErrorsfield.classList.remove('proceed');

            }, 5500);
        }

    } else {
        disapendMyObject(tempRegistration.regNoAdded());

        setTimeout(function () {
            tempErrorsfield.innerHTML = "Error! Registration number not entered";
            tempErrorsfield.classList.add('error');

        }, 0);

        setTimeout(function () {
            tempErrorsfield.innerHTML = "Please enter the registration number";
            tempErrorsfield.classList.remove('error');
            tempErrorsfield.classList.add('proceed')

        }, 3000);

        setTimeout(function () {
            tempErrorsfield.innerHTML = "";
            tempErrorsfield.classList.remove('error');
            tempErrorsfield.classList.remove('proceed');

        }, 5500);
    }

    localStorage.setItem("registration no.", JSON.stringify(tempRegistration.regNoAdded()));

}


// function for Show registration button

function tempShowTownReg() {
    tempFinalRegField.innerHTML = "";

    var tempCheckedRadioTownBtn = document.querySelector("input[name='tempTowns']:checked");

    if (tempCheckedRadioTownBtn) {
        tempCheckedRadioTownBtn = tempCheckedRadioTownBtn.value;

    }

    if (tempCheckedRadioTownBtn !== "") {
        tempRegistration.showRegNo(tempCheckedRadioTownBtn);

        disapendMyArray(tempRegistration.showTown());

    } else {
        setTimeout(function () {
            tempFinalRegField.innerHTML = "Error! town not selected";
            tempFinalRegField.classList.add('error');

        }, 0);

        setTimeout(function () {
            tempFinalRegField.innerHTML = "Please select any town";
            tempFinalRegField.classList.remove('error');
            tempFinalRegField.classList.add('proceed')

        }, 3000);

        setTimeout(function () {
            tempFinalRegField.innerHTML = "";
            tempFinalRegField.classList.remove('error');
            tempFinalRegField.classList.remove('proceed');
            disapendObject(instRegistration.regNoAdded());

        }, 5500);

    }


}

//  function for Show All registration button

function tempShowAllTownReg() {
    tempFinalRegField.innerHTML = "";
    document.getElementById('tempRadio-town1').checked = false;
    document.getElementById('tempRadio-town2').checked = false;
    document.getElementById('tempRadio-town3').checked = false;
    document.getElementById('tempRadio-town4').checked = false;
    tempCheckedRadioTownBtn = "";

    var objectTown1 = Object.keys(tempEnteredRegNo);
    if (objectTown1.length != 0) {
        disapendMyObject(tempEnteredRegNo);

    } else {
        setTimeout(function () {
            tempFinalRegField.innerHTML = "No Registration number(s) yet";
            tempFinalRegField.classList.add('error');

        }, 0);

        setTimeout(function () {
            tempFinalRegField.innerHTML = "";
            tempFinalRegField.classList.remove('error');
            tempFinalRegField.classList.remove('proceed');

        }, 3500);
    }

}

// function for Reset Button

function tempResetPage() {
    localStorage.clear();

    setTimeout(function () {
        tempFinalRegField.innerHTML = "The page has been successfully reset!";
        tempFinalRegField.classList.remove('error');
        tempFinalRegField.classList.add('proceed');
        tempRegTextbox.value = "";
        tempCheckedRadioTownBtn = "";
        document.getElementById('tempRadio-town1').checked = false;
        document.getElementById('tempRadio-town2').checked = false;
        document.getElementById('tempRadio-town3').checked = false;
        document.getElementById('tempRadio-town4').checked = false;

    }, 0);

    setTimeout(function () {
        tempFinalRegField.innerHTML = "";

    }, 2500);

}