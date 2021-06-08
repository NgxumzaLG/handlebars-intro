
function radioBill() {
    var radioCallCost = 0;
    var radioSmsCost = 0;
    
    function radioAddCost(checkedRadio) {
        if (checkedRadio === "call") {
            radioCallCost += 2.75;

        } else if (checkedRadio === "sms") {
            radioSmsCost += 0.75;

        }
    }

    function getRadioCallTotal() {
        return radioCallCost.toFixed(2);

    }

    function getRadioSmsTotal() {
        return radioSmsCost.toFixed(2);

    }

    function radioAddTotal() {
        return (radioSmsCost + radioCallCost).toFixed(2);

    }

    function totalRadioClassName(){
        if (radioAddTotal() >= 50){
            return 'danger';

        } else if (radioAddTotal() >= 30){
            return 'warning';

        }
    }

    return {
        getRadioCallTotal,
        getRadioSmsTotal,
        radioAddCost,
        radioAddTotal,
        totalRadioClassName

    }

}
