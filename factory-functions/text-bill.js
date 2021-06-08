
function textBill() {
    var textCallCost = 0;
    var textSmsCost = 0;

    function textAddCost(billType) {
        var billTypeEntered = billType.trim();

        if (billTypeEntered === "call"){
            textCallCost += 2.75;

        } else if (billTypeEntered === "sms"){
            textSmsCost += 0.75;

        }
    }

    function getTextCallTotal() {
        return textCallCost.toFixed(2);

    }

    function getTextSmsTotal() {
        return textSmsCost.toFixed(2);

    }

    function textAddTotal() {
        return (textCallCost + textSmsCost).toFixed(2);

    }

    function totalTextClassName(){
        if (textAddTotal() >= 50){
            return 'danger';

        } else if (textAddTotal() >= 30){
            return 'warning';

        }
    }

    return {
        textAddCost,
        getTextCallTotal,
        getTextSmsTotal,
        textAddTotal,
        totalTextClassName

    }

}