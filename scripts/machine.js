function getElemTxt(id) {
    return document.getElementById(id).innerText
}

function getElemVal(id) {
    const element = document.getElementById(id)
    return element.value
}

function addBala(amount) {
    return getBala() + amount
}

function setBala(amount) {
    document.getElementById("balance-money").innerText = amount
}

function getBala() {
    return document.getElementById("balance-money").innerText
}
function showonly(id) {

    document.getElementById("cashout-sect").classList.add("hidden")
    document.getElementById("addmoney-sect").classList.add("hidden")

    const getElement = document.getElementById(id)
    getElement.classList.remove("hidden")

}

function addhidden(id) {
    document.getElementById(id).classList.add("hidden")
}