
function aleatorios()
{
    let numeros = [];
    let numAleatorio;
    let contador = 0;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    const rango = document.getElementById("rango").value;
    const resultado = document.getElementById("resultado");
    let limite = 100;
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

    const numerosFormato = numeros.map((elemento) => {

        if(elemento/10 < 1)
        {
            return elemento = "000" + elemento;
        }else
        {
            if(elemento/100 < 1)
            {
                return elemento = "00" + elemento;
            }
            else{
                if(elemento/1000 < 1)
                {
                    return elemento = "0" + elemento;
                }
                else
                {
                    if(elemento/1000 > 1)
                    {
                        return elemento = "" + elemento;
                    }
                }
            }
        }

    });


    console.log(numerosFormato);
    
    resultado.innerHTML = `Los números generados son: ${numerosFormato}`;

}


