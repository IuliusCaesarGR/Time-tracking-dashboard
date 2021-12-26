//Get Elements
const buttons = document.querySelectorAll('button');
const arraybuttons = [...buttons];
const hours = document.querySelectorAll('.hours');
const arrayhours = [...hours];
const last = document.querySelectorAll('.lastweek');
const arraylast = [...last];

//Change color of the option
function changeColor(option, remove1, remove2){
    option.style.color = 'white';
    remove1.style.color = 'hsl(235, 45%, 61%)';
    remove2.style.color = 'hsl(235, 45%, 61%)';
}
//listen which option was pressed
arraybuttons.forEach( (id) => {
    id.addEventListener('click', selector);
    function selector(){
        switch (id.id) {
            case 'Daily':
                time('daily')
                changeColor(id, arraybuttons[1], arraybuttons[2])
                break;
            case 'Weekly':
                time('weekly')
                changeColor(id, arraybuttons[0], arraybuttons[2])
                break;
            case 'Monthly':
                time('monthly')
                changeColor(id, arraybuttons[0], arraybuttons[1])
                break;
            default:
                console.log('error')
                break;
        }
    }
})
//Call a API and manipulation of the DOM
let time = (date)=> {
    const API = './src/data.json';
    for(let i = 0; i <= 5; i++){
        async function getData(){
            const response = await fetch(API);
            const result = await response.json();
            return result.profile[i].timeframes;
        }
        getData()
            .then((give)=> {
                switch (date) {
                    case 'daily':
                        changeText(give.daily, i);
                        break;
                     case 'weekly':
                        changeText(give.weekly, i);
                         break;
                     case 'monthly':
                        changeText(give.monthly, i);
                         break;
                    default:
                        console.error(`this option isn't correct`)
                        break;
                }
            })
            .catch((err) => console.error(err))
    }};
//change text 
function changeText(time, p){
    arrayhours[p].textContent = time.current+`hrs`;
    arraylast[p].textContent = 'Yesterday-' + time.previous+`hrs`;
}