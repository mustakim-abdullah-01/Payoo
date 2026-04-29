document.getElementById("login-btn").addEventListener("click", function () {
    const inputNumber = document.getElementById("input-number")
    const inputNumberValue = inputNumber.value
    const inputPin = document.getElementById("input-pin")
    const pinValue = inputPin.value
    // console.log(inputNumberValue)
    if (inputNumberValue === "01511220867" && pinValue === "4619") {
        alert("Login Succesful")
        window.location.assign("/home.html")
    } else {
        alert("Login Failed !")

    }
})