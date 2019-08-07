let table = [1,2,3,4,5,6];


function test(table)
{
    let suma = 0;
    let ilo = 1;
    table.forEach(function(element,i)
    {
        suma += element;
        ilo *= element;
        console.log(`suma: ${suma}, iteracja: ${i}`);
        console.log(`iloczyn: ${suma}, iteracja: ${i}`);

    });
    console.log(`koncowa suma to ${suma}`);
    console.log(`koncowy iloczyn to ${ilo}`);
}


test(table);

