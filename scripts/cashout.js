document.getElementById("cashout-btn").addEventListener("click", function () {
    const AgentNumber = getElemVal('agent-number')
    if (AgentNumber.length !== 11) {
        alert("Invalid Agent number")
        return
    }
    let newBalance = (Number(getBala()) - Number(document.getElementById("amount").value)).toString()
    if (Number(newBalance) < 0 || getElemVal("amount") === '0') {
        alert("Invalid Ammount")
        return
    }
    const pin = Number(getElemVal("cashout-pin"))
    if (pin !== 4619) {
        alert("Invalid Pin")
        return
    }
    else {
        alert("Cashout Successful")
        setBala(newBalance)
    }
})