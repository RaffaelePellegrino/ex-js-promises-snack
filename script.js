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
        const result = Math.random() < 0.5 ? 'Testa' : 'croce';
        setTimeout(() => {
            if (scelta.toLowerCase() === result.toLocaleLowerCase()) {
                vittoria(`Hai vinto è uscita ${result}`)
            }else{
                sconfitta(`Hai perso è uscita ${result}`)
            }
        }, 5000);
    })
}

lanciaDado('Testa')
    .then(esito => {
        console.log(`${esito}`)
    })
    .catch(error => {
        console.log(`${error}`)
    })