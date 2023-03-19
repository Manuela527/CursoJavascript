//fetch para llamar a una API.

const fetchApi = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json()
        data.results.forEach(personaje => {
            console.log('ID:',personaje.id, 'Name:', personaje.name, 'Gender:', personaje.gender )
            
        });
    }catch(error){
console.log(error);
    }
    
}
const gretings = () => {
    console.log('hello there')
}


module.exports = {
    fetchApi,
    gretings
};
