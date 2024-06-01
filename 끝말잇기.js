const number = Number(prompt('몇 명이 참가하나요?'));
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word;
let newWord;

const onClickButton = () => {
    if (!word || word[word.length-1] === newWord[0]) {
        word = newWord;
        $word.textContent = word;
        const order = Number($order.textContent);
        if (order +1 > number) {
            $order.textcontent =1;
        } else {
            $order.textContent = order + 1;
        }
    } else {
        alert("올바르지 않은 단어입니다")
    }
        $input.value = '';
        $input.focus();
};
    /*
    } else {
    if (word[word.length =1] === newWord[0]) {
        word=newWord;
        $word.textcontent=word;
        const order = Number($order.textcontent);
        if (order +1 > number) {
            $order.textContent = 1;
        } else {
            order.textContent = order+1;
        }
        $input.value='';
        $input.focus();
    } else {
        alert("올바르지 않은 단어입니다")
        $input.value= '';
        $input.focus();
    }
}
};*/
const onInput = (event) => {
    console.log('글자입력',event.target.value);
    newWord = event.target.value
};

$button.addEventListener('click', onClickButton);
$input.addEventListener('input',onInput);