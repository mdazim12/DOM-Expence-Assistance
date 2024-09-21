
    let incomeValue = inputValue('income');
    let softwareValue = inputValue('software');
    let courseValue = inputValue('courses');
    let internetValue =inputValue('internet');

   
 document.getElementById('calculate').addEventListener('click',function(){
    

    const allExpense = softwareValue + courseValue + internetValue;
    const balance = incomeValue - allExpense;
    
    const totalExpense = textValue('total-expenses');
     document.getElementById('total-expenses').innerText = allExpense;
     document.getElementById('balance').innerText = balance;

    

 })