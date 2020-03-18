document.getElementById("but").addEventListener("click", showResult);

function showResult() {
    let sum = +document.getElementById("sum").value;
    let add = + document.getElementById("add").value;
    let addPeriod = +document.getElementById("periods").value;
    let interest = + document.getElementById("interest").value;
    let term = + document.getElementById("term").value;
    let totalSum = sum;
    let monthInterest = interest / 100 / 12;
    let monthes = Math.floor(term / 30);
    let table = document.getElementById("myTable");
    clearTable(table);
    

    if (check(sum, add, interest, term) === false) {
        document.getElementById("false-result").style.display = "block";
        console.error("Истина где-то рядом!")
    } else {
        if (addPeriod == 2) {
            for (let i = 1; i <= monthes; i++) {
                if (i == 1) {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round(totalSum * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = 0;
                    cell5.innerHTML = totalSum;
                } else if (i % 4 == 0) {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round((totalSum + add) * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = add;
                    cell5.innerHTML = totalSum;
                } else {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round((totalSum) * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = 0;
                    cell5.innerHTML = totalSum;
                }
            }

        } else if (addPeriod == 3) {
            for (let i = 1; i <= monthes; i++) {
                if (i == 1) {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round(totalSum * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = 0;
                    cell5.innerHTML = totalSum;
                } else if (i % 12 == 0) {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round((totalSum + add) * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = add;
                    cell5.innerHTML = totalSum;
                } else {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round((totalSum) * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = 0;
                    cell5.innerHTML = totalSum;
                }
            }

        } else {
            for (let i = 1; i <= monthes; i++) {
                if (i == 1) {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round(totalSum * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = 0;
                    cell5.innerHTML = totalSum;
                } else {
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    cell2.innerHTML = totalSum;
                    cell3.innerHTML = Math.round((totalSum * (1 + monthInterest) - totalSum) * 100) / 100;
                    totalSum = Math.round((totalSum + add) * (1 + monthInterest) * 100) / 100;
                    cell1.innerHTML = i;
                    cell4.innerHTML = add;
                    cell5.innerHTML = totalSum;
                }
            }
        }
        document.getElementById("result").style.display = "block";
        document.getElementById("false-result").style.display = "none";
        console.clear();
    }
}

function check(sum, add, interest, term) {
    if (sum <= 0 ||
        isNaN(sum) ||
        add < 0 ||
        isNaN(add) ||
        interest <= 0 ||
        interest > 100 ||
        isNaN(interest) ||
        (term < 0 && term % 1 != 0) ||
        isNaN(term) == true) {
        return false;
    }
}

function clearTable(in_table) {
    //Честно украл у Джавида, который честно украл из гугла :)
    let rows = in_table.rows;
    let i = rows.length;
    while (--i) {
        in_table.deleteRow(i);
    }
}

