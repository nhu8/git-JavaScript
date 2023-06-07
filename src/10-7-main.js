

function findFirstEven(numberList){
    if(!Array.isArray(numberList)) return undefined;

    let firstEvent ;//undefind

    for(let i =0; i<numberList.length; i++){
        const number = numberList[i];

        if(number %2===0){
            firstEvent = number;
            break;
        }
    }
    return firstEvent;

}

console.log(findFirstEven([1,2,3,5]));

