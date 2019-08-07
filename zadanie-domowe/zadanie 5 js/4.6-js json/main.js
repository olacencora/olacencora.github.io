let table = [0,1,2,3,4,5];


function test(table)
{
    let kwadrat = 0;
    let suma = 0;
    table.forEach(function(element,i)
    {
        kwadrat = element * element;
        suma = kwadrat + suma;
        console.log(`kwadrat: ${kwadrat}, iteracja: ${i}`);
        console.log(`suma: ${suma}, iteracja: ${i}`);

    });
    console.log(`koncowa suma to ${suma}`);
}


test(table);

