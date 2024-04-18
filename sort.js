// get content in httml 
// const numbersSpan = document.getElementById("myaction").innerHTML;
// const actionButton = document.getElementById("action").innerHTML;

// set id in <span>
// reference to html element
const numbersSpan = document.getElementById("myaction");
const actionButton = document.getElementById("action");
let arr = [4, 3, 0, 1, 2];
let unsorted = arr.concat();
let isSorted = false;
let first = 0;
let sorted = [];
const unsortedStr = 'Unsorted: ';
const sortedStr = 'Sorted: ';

// const oldA = a; // ref, a changed then oldA changed, point to same memory

numbersSpan.textContent = unsortedStr + arr.join(", ");

function insertSort()
{
    for (let i = 1; i < arr.length; i++) 
    {
        let key, j;
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    first = 1;
    sorted = arr.concat();
}

function actionDisplay()
{
    if (first == 0)
    {
        insertSort();
        //alert("insert sort");
    }

    if (!isSorted)
    {
        numbersSpan.textContent = sortedStr + sorted.join(", ");
        isSorted = true;
    }
    else
    {
        numbersSpan.textContent = unsortedStr + unsorted.join(", ");
        isSorted = false;
    }
}

actionButton.addEventListener("click", actionDisplay); // (type button, function handle)