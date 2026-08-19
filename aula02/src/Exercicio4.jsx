export default function Exercicio4( {tipo, base, altura} ) {

    let area =0;
    if(tipo === "triangulo"){
        area = (Number(base) * Number(altura)) / 2;
    }else if(tipo === "retangulo"){ 
        area = Number(base) * Number(altura);
    

}
    return(
        <div>
            <p>O poligano {tipo}, de base {base} e altura {altura} possui área igual a {area} </p>
        </div>
    )
    
}
