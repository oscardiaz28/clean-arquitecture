export class UserId{
    value: number;

    constructor(value: number){     
        this.value = value;
        this.validate();
    }

    private validate(): void{
        if(this.value <= 0){
            throw new Error("UserId must be a positive integer.");
        }   
    }

}