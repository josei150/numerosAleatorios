
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

    if(cantidad > limite)
    {
        return resultado.innerHTML = `<p class="error">No puedes generar más de ${limite} números, cambia el rango y vuelve a intentarlo o reduce la cantidad de aleatorios a generar</p>`;
    }

    if(cantidad < 1)
    {
        return resultado.innerHTML = `<p class="error">Debes generar por lo menos un número aleatorio. Introduce un valor mayor a 0 y vuelve a intentarlo</p>`;
    }

    if(isNaN(cantidad))
    {
        return resultado.innerHTML = `<p class="error">Debes generar por lo menos un número aleatorio. Introduce un valor mayor a 0 y vuelve a intentarlo</p>`;
    }

    if(cantidad > 10000)
    {
        return resultado.innerHTML = `<p class="error">El valor no debe ser superior a los rangos establecidos. Introduce un valor menor a 10000 y vuelve a intentarlo</p>`;
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

    }).join(" - ");


    console.log(numerosFormato);
    
    resultado.innerHTML = `<p>Los números generados son: <br> ${numerosFormato}</p>`;

}


