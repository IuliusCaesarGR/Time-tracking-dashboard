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
                        let hour = arrayhours[i].innerHTML = give.daily.current+`hrs`;
                        let last = arraylast[i].innerHTML = 'Yesterday-' + give.daily.previous+`hrs`;
                        return hour, last;
                        break;
                     case 'weekly':
                         let hour1 = arrayhours[i].innerHTML = give.weekly.current+`hrs`;
                         let last1 = arraylast[i].innerHTML = 'Last Week -' + give.weekly.previous+`hrs`;
                         return hour1, last1;
                         break;
                     case 'monthly':
                         let hour2 = arrayhours[i].innerHTML = give.monthly.current+`hrs`;
                         let last2 = arraylast[i].innerHTML = 'Last Month -' + give.monthly.previous+`hrs`;
                         return hour2, last2;
                         break;
                    default:
                        console.error(`this option isn't correct`)
                        break;
                }
            })
            .catch((err) => console.error(err))
    }};

    