 // let div = document.querySelector("#output")
 //        let inputBox = document.querySelector("#ip")        
	
 //        function handleStart(){
 //            let val = inputBox.value;
	// 		if(val === 1){
	// 			val = 5;
	// 		} 

	// 		if(val === 2){
	// 			val = 10
	// 		}
 //            new Promise(function(res,rej){
 //                setTimeout(()=>{
 //                    div.innerText = `Result:${val}`
 //                    res(val*2)
 //                },2000)
 //            })
 //            .then((val)=>{
 //                return new Promise(function(res,rej){
 //                    setTimeout(()=>{
 //                        div.innerText = `Result:${val}`
 //                        res(val-3)
 //                    },3000)
 //                })
 //            })
 //            .then((val)=>{
 //                return new Promise(function(res,rej){
 //                    setTimeout(()=>{
 //                        div.innerText = `Result:${val}`
 //                        res(val/2)
 //                    },4000)
 //                })
 //            })
 //            .then((val)=>{
 //                return new Promise(function(res,rej){
 //                    setTimeout(()=>{
 //                        div.innerText = `Result:${val}`
 //                        res(val+10)
 //                    },5000)
 //                })
 //            })
 //            .then((val)=>{
 //                setTimeout(()=>{
 //                    div.innerText = `Final Result:${val}`
 //                },6000)
 //            })
// }







const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

button.onclick = function () {
    const input = parseFloat(document.getElementById("ip").value);

    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${input}`;
            resolve(input);
        }, 2000);
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 2000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result + 10;
                outputDiv.innerHTML = `Final Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })
    .catch((error) => {
        outputDiv.innerHTML = `Error: ${error}`;
    });
};
