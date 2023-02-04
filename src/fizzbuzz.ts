export default function fizzbuzz(n: number){
    let rep: string[] = [];
    
    for(let i:number = 1; i <= n; i++){
        
        if(((i % 3) === 0 ) && ((i % 5) === 0)){
            rep.push('FizzBuzz');
        }
        else if((i % 3) === 0){
            rep.push('Fizz');    
        }
        else if((i % 5) === 0){
            rep.push('Buzz');
        }
        else{
            rep.push(i.toString());
        }
    }

    return rep;
}