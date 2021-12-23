const buttons = document.querySelectorAll('button');
const arraybuttons = [...buttons];
const hours = document.querySelectorAll('.hours');
const arrayhours = [...hours];
const last = document.querySelectorAll('.lastweek');
const arraylast = [...last];



arraybuttons.forEach( (ide) => {
    ide.addEventListener('click', selector);
    function selector(){
        switch (ide.id) {
            case 'Daily':
                time('daily')
                break;
            case 'Weekly':
                time('weekly')
                break;
            case 'Monthly':
                time('monthly')
                break;
            default:
                console.log('error')
                break;
        }
    }
})
let moment = (get)=> {
const API = './src/data.json';
const answer = [0,1,2,3,4,5];

answer.forEach((item)=> {
    async function getData(position, date){
        const response = await fetch(API);
        const result = await response.json();
        let give = result.profile[position].timeframes
       switch (date) {
           case 'daily':
               let hora = arrayhours[position].innerHTML = give.daily.current+`hrs`;
               let last = arraylast[position].innerHTML = 'Yesterday-' + give.daily.previous+`hrs`;
               return hora, last;
               break;
            case 'weekly':
                let hora1 = arrayhours[position].innerHTML = give.weekly.current+`hrs`;
                let last1 = arraylast[position].innerHTML = 'Last Week -' + give.weekly.previous+`hrs`;
                return hora1, last1;
                break;
            case 'monthly':
                let hora2 = arrayhours[position].innerHTML = give.monthly.current+`hrs`;
                let last2 = arraylast[position].innerHTML = 'Last Month -' + give.monthly.previous+`hrs`;
                return hora2, last2;
                break;
           default:
               console.log('eeor')
               break;
       }
    }
    getData(item, get)
        .then((resp)=> console.log('Éxito'))
        .catch((err) => console.log(err))
})}

function time(date){
    moment(date)
}
