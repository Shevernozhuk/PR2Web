let letter = prompt("Введіть літеру")

const firstRow = "Slow and steady wins the race";
const secondRow = "You can say that again";

function getRow(firstRow, secondRow) {
    let countFirst = 0;
    let countSecond = 0;

    for(let i = 0; i < firstRow.length; i++){
        if(firstRow[i] == letter){
            countFirst ++;
        }
    }
    for(let i = 0; i < secondRow.length; i++){
        if(secondRow[i] == letter){
            countSecond ++;
        }
    }

    if(countFirst > countSecond){
        return firstRow
    }
    else if(countFirst < countSecond){
        return secondRow
    }
    else{
        return "кількість літер однакова"
    }

}

console.log(getRow(firstRow, secondRow));

alert("Літер " + letter + " найбільше у рядку - " + getRow(firstRow, secondRow))