import fizzbuzz from "../fizzbuzz";

describe('FizzBuzz tdd test', () => {
    let expectedValuesNone: string[] = ["1"];
    let expectedValuesFizz: string[] = ["1","2","Fizz"]
    let expectedValuesBuzz: string[] = ["1","2","Fizz","4","Buzz"];
    let expectedValuesFizzBuzz: string[] = 
        ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];

    it('Should return the number if its not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toEqual(expectedValuesNone);
    });

    it('should return Fizz if the number is divisible by 3', ()=> {
        expect(fizzbuzz(3)).toEqual(expectedValuesFizz);
    });

    it('should return Buzz if the number is divisible by 5.', ()=>{
        expect(fizzbuzz(5)).toEqual(expectedValuesBuzz);
    });

    it('shoule return FizzBuzz if the number is divisible by 3 and 5.', ()=>{
        expect(fizzbuzz(15)).toEqual(expectedValuesFizzBuzz);
    });
});