const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
});

function extractList() {
    const list = document.getElementById("CALCULATE-LIST").value;
    const readyData = [];
    const listNumbers = [];

     readyData[length] = list.split(",")

    for (let i = 0; i <  readyData[0].length; i++) {
        if(isNaN(readyData[0][i]) || readyData[0][i] == ""){
            return 0;
        }
            else if(readyData[0][i] >= 0){
               listNumbers[i] = parseInt(readyData[0][i]);
            }
                else{
                    return 0;
                }
    };

    return listNumbers;

}

function calculateAverage() {

    const list = extractList();

    if (list === 0) {
         const resultM = document.getElementById("ResultM");
        resultM.innerText = ('You entered a data wrong', 'Try again :(', 'Enter numbers');
    }
    else{
        const addList = list.reduce(
            function (accumulatedValue = 0,  newItem){
                return accumulatedValue + newItem;
            }
        );
        let average = addList /list.length;
        let average2 = average.toFixed(2)

         const resultM = document.getElementById("ResultM");
        resultM.innerText = "The mean is: " + average2;
    }

}



function calculateMedian(){

    const list = extractList();


    if(list === 0){
           const resultM = document.getElementById("ResultM");
        resultM.innerText = ('You entered a data wrong', 'Try again :(', 'Enter numbers');
    }
    else{

        const orderedList = list.sort( function (a, b) {
            return a - b;
        });

        let middle = parseInt(orderedList.length / 2);

        if ((orderedList.length % 2) === 0) {
            let middle2 = middle - 1;
            let median = (orderedList[middle] + orderedList[middle2]) / 2;

              const resultM = document.getElementById("ResultM");
             resultM.innerText = "The median is: "+ median;
        }
        else{
              const resultM = document.getElementById("ResultM");
              resultM.innerText = "The median is: "  + orderedList[middle];
        }
    }
}


function calculateMode() {

      const list = extractList();

    if(list === 0){
         const resultM = document.getElementById("ResultM");
        resultM.innerText = ('You entered a data wrong', 'Try again :(', 'Enter numbers');
    }
    else{

        const counterList = {};
        list.map(
            function(element) {
                if (counterList[element]) counterList[element] += 1;
                else counterList[element] = 1;
            }
        );
        const listArray = Object.entries(counterList).sort( function (a, b) {
            return a[1] - b[1];
        });
        const mode = parseInt(listArray[listArray.length - 1]);

          const resultM = document.getElementById("ResultM");
          resultM.innerText = "The mode is: "  + mode;

    }
}




