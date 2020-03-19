document.getElementById("but").addEventListener("click", showResult);


function collectDate() {
    return {
        sum: +document.getElementById("sum").value,
        add: + document.getElementById("add").value,
        addPeriod: +document.getElementById("periods").value,
        interest: + document.getElementById("interest").value,
        term: + document.getElementById("term").value,
        totalSum: this.sum,
        monthInterest: this.interest / 100 / 12,
        monthes : Math.floor(this.term / 30)
    }
}

function check(data) {
    if (data.sum <= 0 || isNaN(data.sum)) {
        document.getElementById("false-result").innerHTML = "Ошибка при вводе начального вклада: " +
            "сумма должна быть больше нуля и написана цифрами";
        return false;
    }
    else if (data.add < 0 || isNaN(data.add)) {
        document.getElementById("false-result").innerHTML = "Ошибка при вводе пополнений: " +
            "пополнения не могут быть меньше нуля и размер пополнений должен быть написан цифрами";
        return false;
    }
    else if (data.interest <= 0 || data.interest > 100 || isNaN(data.interest)) {
        document.getElementById("false-result").innerHTML = "Ошибка при вводе процентной ставки: " +
            "процентная ставка должна быть выше нуля и размер ставки должен быть написан цифрами";
        return false;
    }
    else if ((data.term <= 0 || data.term % 1 != 0) || isNaN(data.term)) {
        document.getElementById("false-result").innerHTML = "Ошибка при вводе срока: " +
            "срок должен быть выше нуля и срок должен быть написан цифрами";
        return false;
    } else {
        return true
    }
}

function showError() {
    document.getElementById("false-result").style.display = "block";
    document.getElementById("result").style.display = "none";
    console.error("Истина где-то рядом!");
}

function showTable(){
    document.getElementById("result").style.display = "block";
    document.getElementById("false-result").style.display = "none";
    console.clear();
}

function calculate(data) {
    if (check(data) === false) {
        showError();
    } else {
        switch (data.addPeriod) {
            case 2:
                drawQuaterlyTable(data);
                break;
            case 3:
                drawYearlyTable(data);
                break;
            default:
                drawMonthlyTable(data);
                break;
        }
        showTable();
    }
}

function drawMonthlyTable(data) {
    let table = document.getElementById("myTable");
    for (let i = 1; i <= data.monthes; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        if (i == 1) {

            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round(data.totalSum * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = 0;
            cell5.innerHTML = data.totalSum;
        } else {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round((data.totalSum + data.add) * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = data.add;
            cell5.innerHTML = data.totalSum;
        }
    }
}

function drawQuaterlyTable(data) {
    let table = document.getElementById("myTable");
    for (let i = 1; i <= data.monthes; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        if (i == 1) {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round(data.totalSum * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = 0;
            cell5.innerHTML = data.totalSum;
        } else if (i % 3 == 0) {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round((data.totalSum + data.add) * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = data.add;
            cell5.innerHTML = data.totalSum;
        } else {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round((data.totalSum) * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = 0;
            cell5.innerHTML = data.totalSum;
        }
    }
}

function drawYearlyTable(data) {
    let table = document.getElementById("myTable");
    for (let i = 1; i <= data.monthes; i++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        if (i == 1) {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round(data.totalSum * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = 0;
            cell5.innerHTML = data.totalSum;
        } else if (i % 12 == 0) {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round((data.totalSum + data.add) * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = data.add;
            cell5.innerHTML = data.totalSum;
        } else {
            cell2.innerHTML = data.totalSum;
            cell3.innerHTML = Math.round((data.totalSum * (1 + data.monthInterest) - data.totalSum) * 100) / 100;
            data.totalSum = Math.round((data.totalSum) * (1 + data.monthInterest) * 100) / 100;
            cell1.innerHTML = i;
            cell4.innerHTML = 0;
            cell5.innerHTML = data.totalSum;
        }
    }
}

function clearTable(table) {
    //Честно украл у Джавида, который честно украл из гугла :)
    let rows = table.rows;
    let i = rows.length;
    while (--i) {
        table.deleteRow(i);
    }
}

function showResult() {
    let data = new collectDate();
    clearTable(document.getElementById("myTable"));
    calculate(data);
}






