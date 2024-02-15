
    fetch("http://localhost:3000/").then((res)=>{
        res.json().then((data)=>{
            
            const texto = document.querySelector('#texto').value
            const card = document.querySelector("#resultados");
        
            card.innerHTML = ''

            data.map((item)=>{
                const li = document.createElement('article')
                li.innerText = item
                card.append(li)
               
            })

        })
    })



document.querySelector("#botao").addEventListener("click", ()=>{
 
    const texto = document.querySelector('#texto').value
    const card = document.querySelector("#resultados");

    card.innerHTML = ''

    if(texto == '' || texto == null){
       
        fetch(`http://localhost:3000/${texto}`).then((resposta)=>{
            resposta.json().then((data)=>{
                
                
                data.map((item)=>{
                    const li = document.createElement('article')
                    li.innerText = item
                    card.append(li)
                   
                })
            })
        })
    }
    else{
       
        fetch(`http://localhost:3000/${texto}`).then((resposta)=>{
            resposta.json().then((data)=>{
               
                const card = document.querySelector("#resultados")
                    const li = document.createElement('article')
                    li.innerText = data
                    card.append(li)
                    
            })
        })
        
    }
  
})


