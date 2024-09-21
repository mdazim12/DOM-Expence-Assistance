  
 document.getElementById('calculate').addEventListener('click',function(){
    
    const incomeValue = inputValue('income');
    const softwareValue = inputValue('software');
    const courseValue = inputValue('courses');
    const internetValue =inputValue('internet');

    const allExpense = softwareValue + courseValue + internetValue;
    const balance = incomeValue - allExpense;
    
    const totalExpense = textValue('total-expenses');
    document.getElementById('total-expenses').innerText = allExpense;
     document.getElementById('balance').innerText = balance;

        //Show results section
      const resultArea = document.getElementById('results');
       resultArea.classList.remove('hidden');

       

 })

 document.getElementById('calculate-savings').addEventListener('click',function(){

    const incomeValue = inputValue('income');
    const softwareValue = inputValue('software');
    const courseValue = inputValue('courses');
    const internetValue =inputValue('internet');

    const allExpense = softwareValue + courseValue + internetValue;
    const balance = incomeValue - allExpense;

    const saveValue = inputValue('savings');
    const saveAmount = (balance * saveValue) / 100;
    
    document.getElementById('savings-amount').innerText = saveAmount;
   
    const remainBalance = balance - saveAmount;
    // document.getElementById('remaining-balance');
    document.getElementById('remaining-balance').innerText = remainBalance;



 })

 //Assistance Tab

   const assistantTab = document.getElementById('assistant-tab');
   assistantTab.addEventListener('click',function(){
      const hsitoryTabItems = document.getElementById('history-tab');
      hsitoryTabItems.classList.remove('py-2', 'rounded-l-md',  'duration-200', 'text-white',  'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

      assistantTab.classList.add('py-2', 'rounded-l-md',  'duration-200', 'text-white',  'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

      document.getElementById('expense-form').classList.remove('hidden');
   })

 //History section

   const hsitoryTab = document.getElementById('history-tab');
   hsitoryTab.addEventListener('click',function(){
      
      hsitoryTab.classList.add('py-2', 'rounded-l-md', 'focus:outline-none', 'transition-colors', 'duration-200', 'text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
      
      const asstiance = document.getElementById('assistant-tab');
      asstiance.classList.remove('py-2', 'rounded-l-md',  'duration-200', 'text-white',  'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')

      document.getElementById('expense-form').classList.add('hidden');

      const div = document.createElement('div');
      div.innerText = `<p clas s= "text-base bg-red ">Transtion</p>`
      this.insertBefore('history-section',div)
   })





