export default class User 
{
    constructor (name, age)
    {
        this.name = name;
        this.age = age
        alert(yey);
    }
}

export function printName(user)
{
    console.log(`The user is ${user.name}`);
}

export function printAge(user)
{
    console.log(`The ${user.name} is ${user.age}`);
}