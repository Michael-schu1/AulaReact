export default function Exercicio1({ fahrenheit }) {

    let celcius = (Number(fahrenheit) - 32) * 5 / 9;

    return(
        <div>
            <p>A temperatura fahrenheit de {fahrenheit}°F equivale a {celcius.toFixed(2)}°C</p>
        </div>
    );    
}