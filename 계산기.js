let num0ne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
    if (!operator) {
        num0ne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    if (!numTwo) {
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
}
document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);
const onClickOperator = (op) => () => {
    if (num0ne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 입력하세요');
    }
};
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
    if (numTwo) {
        switch (operator) {
            case '+':
                $result.value = parseInt(num0ne) + parseInt(numTwo);
                break;
            case '-':
                $result.value = num0ne - numTwo;
                break;
            case '*':
                $result.value = num0ne * numTwo;
                break;
            case '/':
                $result.value = num0ne / numTwo;
                break
            default:
                break;
        }
        $operator.value ='';
        numOne = $result.value;
        operator ='';
        numTwo= '';
    } else {
        alert('숫자를 입력하세요')
    }
});
document.querySelector('#clear').addEventListener('click', () => {
    num0ne = '';
    operator = '';
    numTwo ='';
    $operator.value ='';
    $result.value='';
});
