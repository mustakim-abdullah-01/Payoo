document.getElementById("add-money-btn").addEventListener("click", function () {
    const bank = getElemVal("add-money-bank")
    if (bank === "Select Bank") {
        return alert("Please Select a Bank")
    }
    const addMoneyNum = getElemVal("add-money-number")
    console.log(addMoneyNum.length)
    if (addMoneyNum.length !== 11) {
        return alert("Invalid Number")
    }
    const addMoneyAmount = Number(getElemVal("add-money-amount"))
    const newBalance = Number(addMoneyAmount) + Number(getBala())
    if (addMoneyAmount === 0 || addMoneyAmount < 0) {
        return alert("Invalid Amount")
    }
    const pin = Number(getElemVal("add-money-pin"))
    if (pin !== 4619) {
        return alert("Invalid Pin")
    }
    setBala(newBalance)
    alert("Transaction Succesful")
})