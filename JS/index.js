
function aleatorios()
{
    let numeros = [];
    let numAleatorio;
    let contador = 0;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    const rango = document.getElementById("rango").value;
    const resultado = document.getElementById("resultado");
    let limite = 99;
    console.log(rango);
    console.log(cantidad);


    if(rango==="0-999")
    {
        limite = 1000;
    }

    if(rango==="0-9999")
    {
        limite = 10000;
    }

    while(contador < cantidad)
    {
        numAleatorio = parseInt((Math.random() * limite));

        if(!numeros.includes(numAleatorio))
        {
            numeros.push(numAleatorio);
            contador++;
        }

    }

    console.log(numeros);
    
    resultado.innerHTML = `Los números generados son: ${numeros}`;

}


