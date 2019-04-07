export class UserModel 
{
    public name:string;
    public age:number;


    setName(name?:string):string
    {
        return this.name;
    }
    
    alertName():void{
        alert(this.name);
      }
    
}


export interface MyInterface
{
     product:string;
     price:number;
}