export function factorial(a)
{
    let fact=1
    for (let i=1; i<=a; i++)
    {
        fact = fact * i;
    }
    return fact
}