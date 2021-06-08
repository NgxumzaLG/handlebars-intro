
function calculateBill() {

    function calculateAddCost(sentBill){
        var billTotal = 0
        var billItems = sentBill.split(',');  
        for (var i = 0; i<billItems.length;i++){
            var billItem = billItems[i].trim();

            if (billItem === "call"){
                billTotal += 2.75;

            }
            else if (billItem === "sms"){
                billTotal += 0.75;

            }
        }
        return billTotal.toFixed(2);
    }


     function totalCalClassName(sentBill){
        if (calculateAddCost(sentBill) >= 30){
            return 'danger';

        } else if (calculateAddCost(sentBill) >= 20){
            return 'warning';

        }
    }

    return {
        calculateAddCost,
        totalCalClassName
    }
}