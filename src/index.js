//Get Elements
const arraybuttons = [...document.querySelectorAll('time-button')];
const arrayhours = [...document.querySelectorAll('#hour')];
const arraylast = [...document.querySelectorAll('#last')];

/* //Change color of the option
function changeColor(option, remove1, remove2){
    option.styles.style.color = 'white';
    remove1.style.color = 'hsl(235, 45%, 61%)';
    remove2.style.color = 'hsl(235, 45%, 61%)';
} */
//listen which option was pressed
arraybuttons.forEach( (id) => {
    id.addEventListener('click', selector);
    function selector(){
        switch (id.time) {
            case 'Daily':
                time('daily')
                /* changeColor(id, arraybuttons[1], arraybuttons[2]) */
                break;
            case 'Weekly':
                time('weekly')
                /* changeColor(id, arraybuttons[0], arraybuttons[2]) */
                break;
            case 'Monthly':
                time('monthly')
                /* changeColor(id, arraybuttons[0], arraybuttons[1]) */
                break;
            default:
                console.log('error')
                break;
        }
    }
})
//Call an API and manipulation of the DOM
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
function changeText(time, position){
    arrayhours[position].textContent = time.current+`hrs`;
    arraylast[position].textContent = 'Yesterday-' + time.previous+`hrs`;
}