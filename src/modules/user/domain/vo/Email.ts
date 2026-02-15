export class Email{
    value: string;
    constructor(value: string){
        this.value = value;
        this.validate();
    }   
    private validate(): void{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;        
        if(!emailRegex.test(this.value)){
            throw new Error("Invalid email format.");
        }
    }
}