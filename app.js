var bill = document.getElementById('bill')
var cash = document.getElementById('cash')
var submit = document.getElementById('btn')

const val = {
    "1": 0,
    "2": 0,
    "5": 0,
    "10": 0,
    "20": 0,
    "50": 0,
    "100": 0,
    "200": 0,
    "500": 0,
    "2000": 0
};

const arr = Object.keys(val)


submit.addEventListener("click", showLoader);


function showLoader() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('#counter').style.display = 'none';
    if (cash.value === "" || bill.value === "") {
        document.querySelector('.loading').style.display = 'none';
        alert("Enter the details")
    } else {
        setTimeout(showTable, 2000);
    }
}

function showTable() {
    let output = ""
    var change = cash.value - bill.value

    document.getElementById("change").innerHTML = `Change: ₹${change}`
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#counter').style.display = 'block';
    document.querySelector('#count').style.display = 'block';

    if (change > 0) {
        for (let i = arr.length - 1; i > -1; i--) {
            var rem = parseInt(change / parseInt(arr[i]))
            val[arr[i]] = rem
            if (rem > 0) {
                change = change - parseInt(arr[i]) * rem
            }
            output += `<tr>
           <td>${arr[i]}</th>
           <td>${val[arr[i]]}</th>
         </tr>`
        }

        document.getElementById("output").innerHTML = output


    } else {
        document.querySelector('#counter').style.display = 'none';
        alert("No Change Required / Enter Correct Details")
    }

    cash.value = ""
    bill.value = ""
}