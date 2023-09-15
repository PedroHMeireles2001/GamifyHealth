import React, { createContext, useContext, useState } from 'react'

export const MetricsContext = createContext()
MetricsContext.displayName = "Metrics"

export default function MetricsProvider({children}) {
    const [metrics,setMetrics] = useState(recuperarArray())
    return (
        <MetricsContext.Provider
            value={{ metrics, setMetrics }}>
            {children}
        </MetricsContext.Provider>
    )
}
function recuperarArray(){
    const array = localStorage.getItem("metrics") ? JSON.parse(localStorage.getItem("metrics")) : []
    array.forEach(element => {
        element.date = new Date(element.date)
    });
    return array;
}

export function useMetrics(){
    const { metrics, setMetrics } = useContext(MetricsContext);
    let ultimoId = localStorage.getItem("ultimoid") ? localStorage.getItem("ultimoid") : metrics.length


    function addMetric(event,weight){
        event.preventDefault()
        if(!weight || weight <= 0){
            alert("Peso inválido")
            return
        }
        const metric = {weight: weight, date: new Date(), id:ultimoId}
        const last = metrics[metrics.length - 1]
        if(last){
            if(Math.floor((metric.date - last.date) / (1000 * 60 * 60 * 24) < 1)){
                alert("Apenas uma medida por dia!")
                return;
            }
            const loss = last.weight - weight;
            metric.loss = loss
            console.log(loss)
        }
        setMetrics([...metrics, metric])
        localStorage.setItem("metrics",JSON.stringify([...metrics, metric]))
        ultimoId++
        localStorage.setItem("ultimoid", ultimoId)
    }
    function deleteMetric(id){
        
        let confirmation = window.confirm("Tem certeza que deseja excluir ?")
        if(confirmation){
            const newArray = metrics.filter((metric) => (metric.id !== id))
            if(newArray.length === 0){
                setMetrics([])
                localStorage.setItem("metrics",JSON.stringify([]))
                return
            }
            newArray[0].loss = 0
            for(let i = 1; i <= newArray.length-1; i++){
                const last = newArray[i-1]
                const item = newArray[i]
                item.loss = last.weight - item.weight
            }
            setMetrics(newArray)
            localStorage.setItem("metrics",JSON.stringify(newArray))
        }
    }

    function calcPoints(){
        let points = 0
        for(let i = 1; i <= metrics.length-1; i++){
            const last = metrics[i-1]
            const item = metrics[i]
            const point = (item.loss * 30) / Math.floor((item.date - last.date) / (1000 * 60 * 60 * 24));
            points += point
        }
        return points
    }


    return {
        metrics,
        addMetric,
        deleteMetric,
        calcPoints
    }
}
