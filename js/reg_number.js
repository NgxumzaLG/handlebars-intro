// Reference all the elements
    var regTextbox = document.querySelector('.regText');
    var addRegButton = document.querySelector('.addRegBtn');
    var finalRegField = document.querySelector('.finalReg');
    var radioTown = document.querySelector('.radio-town');
    var showButton = document.querySelector('.showBtn');
    var showAllButton = document.querySelector('.showAllBtn');
    var errorsfield = document.querySelector('.errors')
    var resetButton = document.querySelector(".resetBtn")

// Add event listener to the buttons when is clicked
    addRegButton.addEventListener('click', regNumber);
    showButton.addEventListener('click', showTownReg);
    showAllButton.addEventListener('click', showAllTownReg);
    resetButton.addEventListener('click', resetPage)

// Additional Global Variables
    var strCheckedRadioTownBtn = "";
    let enteredRegNo;

    const regExp1 = /^((CA|CY|CJ|CL)\s([0-9]){6})$/;
    const regExp2 = /^((CA|CY|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
    const regExp3 = /^((CA|CY|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;

// localStorage 
    if (localStorage['registration numbers']) {
        enteredRegNo = JSON.parse(localStorage.getItem("registration numbers"));

    }

//  Instantiate the instance of the factory function
    let instRegistration = regNumberFactory(enteredRegNo);

// function to create and appendChild element

function disapendObject(myObject){
    var changed = Object.keys(myObject);
    for (var i=0; i < changed.length; i++) {
        let newRegNo = document.createElement('plates');

        newRegNo.textContent = changed[i];
        finalRegField.appendChild(newRegNo);

    }
}

function disapendArray(myArray){
    if (myArray.length != 0) {
        for (var i=0; i < myArray.length; i++) {
            let newRegNo = document.createElement('plates');
    
            newRegNo.textContent = myArray[i];
            finalRegField.appendChild(newRegNo);
    
        }
    } else {
        setTimeout(function() {
            finalRegField.innerHTML = "No registration number from this town";
            finalRegField.classList.add('error');
            finalRegField.classList.remove('proceed');

        }, 0);

        setTimeout(function() { 
            finalRegField.innerHTML = "";
            finalRegField.classList.remove('error');
            finalRegField.classList.remove('proceed');

        }, 3500);
    }
}

//  Show registration numbers that already in the localStorage
disapendObject(instRegistration.regNoAdded());

// function for Add registration button

    function regNumber() {
        finalRegField.innerHTML = "";
        document.getElementById('radio-town1').checked = false;
        document.getElementById('radio-town2').checked = false;
        document.getElementById('radio-town3').checked = false;
        document.getElementById('radio-town4').checked = false;
        strCheckedRadioTownBtn = "";

        // instRegistration.setReg(regTextbox.value);
        

        if (regTextbox.value !== "") {

            if (regTextbox.value.toUpperCase().match(regExp1) || regTextbox.value.toUpperCase().match(regExp2) || regTextbox.value.toUpperCase().match(regExp3)) {

                if (instRegistration.addRegNo(regTextbox.value)){

                    disapendObject(instRegistration.regNoAdded());
                    regTextbox.value = "";
                   
                    setTimeout(function() {
                        errorsfield.innerHTML = instRegistration.getMessage();
                        errorsfield.classList.add('proceed');
        
                    }, 0);
    
                    setTimeout(function() { 
                        errorsfield.innerHTML = "";
                        errorsfield.classList.remove('error');
                        errorsfield.classList.remove('proceed');
        
                    }, 3500);
    
                } else {
                    disapendObject(instRegistration.regNoAdded());
    
                    setTimeout(function() {
                        errorsfield.innerHTML = instRegistration.getMessage();
                        errorsfield.classList.add('error');
                        errorsfield.classList.remove('proceed');
        
                    }, 0);
    
                    setTimeout(function() { 
                        errorsfield.innerHTML = "";
                        errorsfield.classList.remove('error');
                        errorsfield.classList.remove('proceed');
        
                    }, 3500);
                }

            } else {
                disapendObject(instRegistration.regNoAdded());

                setTimeout(function() {
                    errorsfield.innerHTML = "Error! Invalid registration number format entered";
                    errorsfield.classList.add('error');
    
                }, 0);
    
                setTimeout(function() {
                    errorsfield.innerHTML = "Please enter the correct registration number format";
                    errorsfield.classList.remove('error');
                    errorsfield.classList.add('proceed')
    
                }, 3000);
    
                setTimeout(function() { 
                    errorsfield.innerHTML = "";
                    errorsfield.classList.remove('error');
                    errorsfield.classList.remove('proceed');
    
                }, 5500);
            }

        } else {
            disapendObject(instRegistration.regNoAdded());

            setTimeout(function() {
                errorsfield.innerHTML = "Error! Registration number not entered";
                errorsfield.classList.add('error');

            }, 0);

            setTimeout(function() {
                errorsfield.innerHTML = "Please enter the registration number";
                errorsfield.classList.remove('error');
                errorsfield.classList.add('proceed')

            }, 3000);

            setTimeout(function() { 
                errorsfield.innerHTML = "";
                errorsfield.classList.remove('error');
                errorsfield.classList.remove('proceed');

            }, 5500);
        }

        localStorage.setItem("registration numbers", JSON.stringify(instRegistration.regNoAdded()));

    }


// function for Show registration button

    function showTownReg() {
        finalRegField.innerHTML = "";

        var checkedRadioTownBtn = document.querySelector("input[name='towns']:checked");

        if(checkedRadioTownBtn) {
            strCheckedRadioTownBtn = checkedRadioTownBtn.value;

       }

       if (strCheckedRadioTownBtn !== "") {
            instRegistration.showRegNo(strCheckedRadioTownBtn);

            disapendArray(instRegistration.showTown());

       } else {
            setTimeout(function() {
                finalRegField.innerHTML = "Error! town not selected";
                finalRegField.classList.add('error');

            }, 0);

            setTimeout(function() {
                finalRegField.innerHTML = "Please select any town";
                finalRegField.classList.remove('error');
                finalRegField.classList.add('proceed')

            }, 3000);

            setTimeout(function() { 
                finalRegField.innerHTML = "";
                finalRegField.classList.remove('error');
                finalRegField.classList.remove('proceed');
                disapendObject(instRegistration.regNoAdded());

            }, 5500);

       }
        

    }

//  function for Show All registration button

    function showAllTownReg() {
        finalRegField.innerHTML = "";
        document.getElementById('radio-town1').checked = false;
        document.getElementById('radio-town2').checked = false;
        document.getElementById('radio-town3').checked = false;
        document.getElementById('radio-town4').checked = false;
        strCheckedRadioTownBtn = "";

        var objectTown = Object.keys(instRegistration.regNoAdded());
        if (objectTown.length != 0) {
            disapendObject(instRegistration.regNoAdded());

        } else {
            setTimeout(function() {
                finalRegField.innerHTML = "No Registration number(s) yet";
                finalRegField.classList.add('error');

            }, 0);

            setTimeout(function() { 
                finalRegField.innerHTML = "";
                finalRegField.classList.remove('error');
                finalRegField.classList.remove('proceed');

            }, 3500);
        }

    }

// function for Reset Button

    function resetPage() {
        localStorage.clear();

        setTimeout(function() { 
            finalRegField.innerHTML = "The page will be reset shortly";
            finalRegField.classList.remove('error');
            finalRegField.classList.add('proceed');
            regTextbox.value = "";
            document.getElementById('radio-town1').checked = false;
            document.getElementById('radio-town2').checked = false;
            document.getElementById('radio-town3').checked = false;
            document.getElementById('radio-town4').checked = false;

        }, 0);

        setTimeout(function() { 
            location.reload();

        }, 2500);

    }