function getPostTitle(id) { 
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(item => item.json())
            .then(post => resolve(post))  
            .catch(errore => reject(errore));   
    });
}

getPostTitle(1)
    .then(post => {
        console.log(post.title)
        console.log(post.body)
        post.tags.forEach(element => {
            console.log(element)
        })
        console.log(post.views)
    })
    .catch(errore => console.log(errore))


function lanciaDado(scelta) {
    return new Promise((vittoria,sconfitta) => {
        let result = Math.random()

        if(result < 0.4){
            result = 'Testa'
        }else if(result>0.4 && result<0.8){
            result = 'Croce'
        }else{
            result = 'Non valido'
        }
        console.log(result)
        setTimeout(() => {
            if (result === 'Non valido') {
                sconfitta('La moneta è rimasta incastrata il tiro non è valido');
            } else if (scelta.toLowerCase() === result.toLowerCase()) {
                vittoria(`Hai vinto è uscita ${result}`);
            } else {
                sconfitta(`Hai perso è uscita ${result}`);
            }
        }, 3000);
    })
}

lanciaDado('Testa')
    .then(esito => {
        console.log(`${esito}`)
    })
    .catch(error => {
        console.log(`${error}`)
    })