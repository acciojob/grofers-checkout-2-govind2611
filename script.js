const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const newRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.setAttribute('id', 'ans')

newRow.appendChild(totalCell);


// Add the new row to the table
const table = document.querySelector('table');
table.appendChild(newRow);
let total = 0;
const getSum = () => {
//Add your code here
    let price = document.querySelectorAll(".price");
    // let total = 0;
    for (let i = 0; i < price.length; i++) {
        total += parseFloat(price[i].innerHTML);
       
    }   
    // console.log(total)
    // return total;
    return totalCell.innerHTML = total;
    
};

    
getSumBtn.addEventListener("click", getSum);