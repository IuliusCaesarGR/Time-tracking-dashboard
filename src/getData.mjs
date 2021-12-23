const API = './src/data.json';

const getData = async (exe)=>{
    try{
        const answer = await fetch(API);
        const result = await answer.json();
        let datas = result.profile[exe];
        return datas
    } catch(error) {
        console.log(error);
    } 
}

export default getData;