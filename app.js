let cash = document.getElementById('cash')
let bill = document.getElementById('bill')
let submit = document.getElementById('btn')

submit.addEventListener("click", showLoader);


function showLoader() {
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('#count').style.display = 'none';

    setTimeout(showTable, 2000);
}

function showTable() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('#count').style.display = 'block';

}