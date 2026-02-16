export class Name{
    value: string;
    
    constructor(value: string){
        this.value = value;
        this.validate();
    }
    private validate(): void{
        if(this.value.trim() === ""){
            throw new Error("Name cannot be empty.");
        }   
    }       
}