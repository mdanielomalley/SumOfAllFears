//Given alist of numbers and a number x, return whether any two numbers from the list add up to x. For example, 
//given [10, 15, 3, 7] and x of 17, return true since 10 + 7 is equal to 17.

//The Two Loop Method
function findSumA(numbers, answer){
    //Loop through the array and add the adjacent number and check for the answer
    let checkValue = 0;
    let found = false;

    //[] startindex = 0,
    for (let i = 0; i <= numbers.length -2; i++) {
        //Loop Over the array in the adjacent after the current value
        for(let y = (i + 1); y <= numbers.length - 1; y++){
            if(answer == numbers[i] + numbers[y]){
                found = true;
                return found;
            }
        }  
    }
    return found;
}

//Reordered Array Method
function findSumB(numbers, answer){
    let found = false;
    let checkValue = 0;
    //sort the array
    numbers.sort(function(a,b){
        return a-b
    });
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    do{
        checkValue = numbers[startIndex] + numbers[endIndex]
        if(answer == checkValue){
            found = true;
            break;
        }
        else if(answer > checkValue){
            startIndex++;
        }
        else if(answer < checkValue){
            endIndex --;
        }

    } while(found == false && startIndex < endIndex);

    return found;

}

//Efficient Solution
function findSumC(numbers, answer){
    let checkValue = 0;
    let found= false;
    for(let i = 0; i <= numbers.length - 1; i++){
        checkValue = answer - numbers[i];
        if(numbers.includes(checkValue, i + 1)){
            found= true;
            break;
        }
    }
    return found;
}

//Return All Combinations Method
function findSumD(numbers, answer){
    let checkValue = 0;
    let checkIndex = -1;
    let ansArray = [];

    for(let i = 0; i<numbers.length - 1; i++){
        checkValue = answer - numbers[i];
        checkIndex = numbers.indexOf(checkValue);

        if(checkIndex !=-1 && checkIndex !=i){
            //add the 2 numbers to the array
            ansArray.push(numbers[i] + " + " + checkValue);
            //remove the duplicates
            numbers.splice(checkIndex, 1);
        }
    }
    return ansArray;
}

function displaySum(){
    let answer = document.getElementById("sumValue").value;
    // let numArray = [10,15,3,7];

    let numArray = generateNumbers(20);

    //show the array on the screen

    document.getElementById("numList").innerHTML = numArray.toString();
    let found = findSumC(numArray, answer);
    document.getElementById("results").innerHTML = found.toString();
}

function displayAllSums(){
    let answer = document.getElementById("sumValue").value;
    let numArray = generateNumbers(20);
    
    // let numArray =[10,7,15,3,16];

    //show the array on the screen

    document.getElementById("numList").innerHTML = numArray.toString();
    let found = findSumD(numArray, answer).join("<br>");
    document.getElementById("results").innerHTML = found.toString();
}

//Generate Random Array of Numbers
function generateNumbers(max){
    var arr = [];
    while (arr.length < max){
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) == -1){
            arr.push(r);
        }
    }
    return arr;
}