function regNumberFactory(regNoData) {
    var storeRegNo = regNoData || {};
    var checkedTown = [];
    var message = "";
    const regExp1 = /^((CA|CY|CJ|CL)\s([0-9]){6})$/;
    const regExp2 = /^((CA|CY|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
    const regExp3 = /^((CA|CY|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;

    function addRegNo(regNo) {
        var regNumber = regNo.toUpperCase();
        if (regNumber !== "") {      
            if (regNumber.match(regExp1) || regNumber.match(regExp2) || regNumber.match(regExp3)) {
                if (!storeRegNo[regNumber]) {
                    storeRegNo[regNumber] = 1;
                    message = "Registration number has been succcesfully added"
                    return true
    
                } else {
                    storeRegNo[regNumber]++;
                    message = "Registration number already exists"
                    return false
    
                }
            }  
        }
    }

    function regNoAdded() {
        return storeRegNo;

    }

    function getMessage(){
        return message
    }

    function showRegNo(regTown) {
        checkedTown = [];
        if (regTown === "capetown") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CA")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "bellville") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CY")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "paarl") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CJ")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        } else if (regTown === "stellenbosch") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CL")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }
        }
    }

    function showTown() {
        return checkedTown;
    }

    return {
        addRegNo,
        regNoAdded,
        showRegNo,
        showTown,
        getMessage
        
    }
}