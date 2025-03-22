 let div = document.querySelector("#output")
        let inputBox = document.querySelector("#ip")        

        function handleStart(){
            let val = inputBox.value; 
            new Promise(function(res,rej){
                setTimeout(()=>{
                    div.innerText = `Result:${val}`
                    res(val*2)
                },2000)
            })
            .then((val)=>{
                return new Promise(function(res,rej){
                    setTimeout(()=>{
                        div.innerText = `Result:${val}`
                        res(val-3)
                    },3000)
                })
            })
            .then((val)=>{
                return new Promise(function(res,rej){
                    setTimeout(()=>{
                        div.innerText = `Result:${val}`
                        res(val/2)
                    },4000)
                })
            })
            .then((val)=>{
                return new Promise(function(res,rej){
                    setTimeout(()=>{
                        div.innerText = `Result:${val}`
                        res(val+10)
                    },5000)
                })
            })
            .then((val)=>{
                setTimeout(()=>{
                    div.innerText = `Final Result:${val}`
                },6000)
            })
        }