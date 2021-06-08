// get a reference to the sms or call radio buttons
    var billItemTypeWithSettingsElement = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
    var callCostSettingsElement = document.querySelector(".callCostSetting");
    var smsCostSettingsElement = document.querySelector(".smsCostSetting");
    var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
    var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
    var callTotalSettingsElement = document.querySelector(".callTotalSettings");
    var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
    var totalSettingsElement = document.querySelector(".totalSettings");


//get a reference to the add button
    var addTotalSettingsElement = document.querySelector(".addTotalSettings");

//get a reference to the 'Update settings' button
    var updateSettingsElement = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.



//add an event listener for when the 'Update settings' button is pressed
    updateSettingsElement.addEventListener('click', updateSettingsData);

//add an event listener for when the add button is pressed
    addTotalSettingsElement.addEventListener('click', settingsBill);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

    let settingsBillFactory = BillWithSethings();

    function updateSettingsData() {

        settingsBillFactory.setCallCost(Number(callCostSettingsElement.value));
        settingsBillFactory.setSmsCost(Number(smsCostSettingsElement.value));
        settingsBillFactory.setWarningLevel(Number(warningLevelSettingElement.value));
        settingsBillFactory.setCriticalLevel(Number(criticalLevelSettingElement.value));
        
        totalSettingsElement.classList.remove('warning');
        totalSettingsElement.classList.remove('danger');

        totalSettingsElement.classList.add(settingsBillFactory.totalClassName())

    }

    function settingsBill() {

        var checkedRadioBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        settingsBillFactory.SetTotals(checkedRadioBtnSettings.value);

        callTotalSettingsElement.innerHTML = settingsBillFactory.getTotalCallCost();
        smsTotalSettingsElement.innerHTML = settingsBillFactory.getTotalSmsCost();
        totalSettingsElement.innerHTML = settingsBillFactory.getTotalCost();

        totalSettingsElement.classList.remove('warning');
        totalSettingsElement.classList.remove('danger');

        totalSettingsElement.classList.add(settingsBillFactory.totalClassName())


    }