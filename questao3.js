
let results = {
    min : {
        day : 0,
        value : 0
    },
    max : {
        day : 0,
        value : 0
    },
    utilDays : {
        quantDays : 0,
        totalValue : 0
    },
    diaAcimaDaMedia : []
}



let json = require('./dados.json')

var size = Object.keys(json).length;

for(let i=0; i<size; i++){

    if(json[i].valor > 0){
        results.utilDays.quantDays++
        results.utilDays.totalValue += json[i].valor
    }

}
results.media = results.utilDays.totalValue/results.utilDays.quantDays


for(let i=0; i<size; i++){
    if(json[i].valor > results.max.value){
        results.max.value = json[i].valor                   //checar maximo
        results.max.day = json[i].dia
    }

    if(results.min.value == 0 && json[i].valor > 0 ){              //checar min
        results.min.value = json[i].valor
        results.min.day = json[i].dia
    }else if(json[i].valor != 0 && json[i].valor < results.min.value){
        results.min.value = json[i].valor
        results.min.day = json[i].dia
    }

    if(json[i].valor > results.media){
        results.diaAcimaDaMedia.push(json[i]) 
        
    }

}



console.log(results)