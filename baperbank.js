function allInputs(input){
    const dipositTnput = document.getElementById(input);
        const dipositvalue = dipositTnput.value;
        const valueNumber = parseFloat(dipositvalue);
        dipositTnput.value = '';
        return valueNumber;
}
function  setText (valueNumber, inpust){
    const dipositText = document.getElementById(inpust);
    const dipoTextValue = dipositText.innerText;
    const textValueNumber = parseFloat( dipoTextValue);
    const addValue = valueNumber + textValueNumber;
    dipositText.innerText = addValue;
}
function addBallenced(valueNumber ,inodd ){
    const balanced = document.getElementById('balanced');
    const balancedText = balanced.innerText;
    const balancedTextNumber = parseFloat(balancedText);
    if(inodd == true){
        const balencedresult = valueNumber + balancedTextNumber;
        balanced.innerText = balencedresult;
    }
    if(inodd == false){
        const balencedresult = balancedTextNumber - valueNumber  ;
        balanced.innerText = balencedresult;
    }
}
document.getElementById('diposit-button').addEventListener('click',function(){
    const valueNumber = allInputs('diposit-input');
    if(valueNumber > 0){
        setText (valueNumber,'diposit-text');
        addBallenced(valueNumber,true) 
    }else{
        alert('Not Allow')
    }
})
document.getElementById('Withdraw-button').addEventListener('click',function(){
    const inputValueNumber = allInputs('Withdraw-input');
    const balanced = document.getElementById('balanced');
    const balancedText = balanced.innerText;
    const balancedTextNumber = parseFloat(balancedText);
    if(inputValueNumber > 0 && balancedTextNumber > inputValueNumber ){
    setText (inputValueNumber,'withdraw-text');
    addBallenced(inputValueNumber,false)
    }else{
        alert('Not Allow')
    }
})