let select1 = document.getElementById("currency");
let select2 = document.getElementById("convert");
let inp = document.getElementById("price");
let btn = document.getElementById("convertprice");
let div = document.getElementById("result");
let btnswitch = document.getElementById("switch");

const api_key = "687cad9dc82dcede31ddbca8"
async function loadCurrencies() {
    try {

        const data = await fetch(`https://v6.exchangerate-api.com/v6/${api_key}/codes`);
        const dataUrl = await data.json();
        console.log(dataUrl);
        const codes = dataUrl.supported_codes;
        codes.forEach(([code, name]) => {
            let option = document.createElement("option");
            option.value = code;
            option.textContent = `${code} - ${name} `;
            select1.appendChild(option);
            let option2 = document.createElement("option");
            option2.value = code;
            option2.textContent = `${code} - ${name} `;
            select2.appendChild(option2);
        })
    } catch (error) {
        console.log(error);
    }
}
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let currency1 = select1.value;
    let currency2 = select2.value;
    let amount = inp.value;
    try {
        fetch(`https://v6.exchangerate-api.com/v6/${api_key}/pair/${currency1}/${currency2}/${amount}`)
            .then(response => response.json())
            .then(data => {
                if (data.result !== "success") {

                    div.textContent = "Please enter a valid number";
                    return;
                }
                let result = data.conversion_result;
                div.textContent = `${amount} ${currency1} = ${result} ${currency2}`;

            })
    } catch (error) {
        console.log(error);
    }
})

btnswitch.addEventListener("click", function (event) {
    event.preventDefault();
    let swt = select1.value;
    select1.value = select2.value;
    select2.value = swt;
})
loadCurrencies()
