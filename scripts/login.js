document.getElementById("login-btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("input-number")
    const inputNumberValue = inputNumber.value
    const inputPin = document.getElementById("input-pin")
    const pinValue = inputPin.value
    // console.log(inputNumberValue)
    if (inputNumberValue === "1234" && pinValue === "1234") {
        alert("Login Succesful")
        window.location.assign("./home.html")
    } else {
        alert("Login Failed !")

    }
})
