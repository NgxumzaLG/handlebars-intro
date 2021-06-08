
function BillWithSethings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    function setCallCost(callCost) {
        theCallCost = callCost;
    }
    function getCallCost() {
        return theCallCost;
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;
    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }
    function makeCall(){
        return callCostTotal +=theCallCost;
        
    }
    function getTotalCost(){
        return (callCostTotal + smsCostTotal).toFixed(2);
        
    }

    function SetTotals (checkedRadioBtn){
        
            if (checkedRadioBtn === "call") {
                if(!hasReachedCriticalLevel()){
                    return makeCall();

                }

            } else if (checkedRadioBtn === "sms") {
                if(!hasReachedCriticalLevel()){
                    return sendSms();

            }
        }
    }
    function sendSms(){
        return smsCostTotal += theSmsCost;

    }
    function getTotalCallCost(){
        return callCostTotal.toFixed(2); 
    }
    function getTotalSmsCost(){
        return smsCostTotal.toFixed(2);
    }
    function totalClassName(){
        if (hasReachedCriticalLevel()){
            return 'danger';
        }
        else if (getTotalCost() >= getWarningLevel()){
            return 'warning';
        }
    }
   
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        SetTotals
    }
}