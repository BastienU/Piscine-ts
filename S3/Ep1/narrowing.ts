function traiterValeur(strs: string | number)
{
    if(typeof strs === "string")
        console.log(strs.length);
    else
        console.log(strs * 2);
}

traiterValeur("Hello");
traiterValeur(5);