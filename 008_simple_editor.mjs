import { stdin, stdout } from "process";
import readline from "readline";
const rl = readline.createInterface({ input : stdin,
    output: stdout });



    let numberoperations = 0;
    let operationCount = 0;
    

rl.on('line', (input) => {
    if(numberoperations===0){
        numberoperations = parseInt(input)
    }else{
        operationCount++;
        let operation = input.split(' ');
        let numb = parseInt(operation[0]);
        let ops = operation[1];
       
        if(numb===1){
            simpleEditor.append(ops);
        }else if(numb===2){
            simpleEditor.delete(parseInt(ops));
        }else if(numb===3){
            simpleEditor.print(parseInt(ops));
        }else if(numb===4){
            simpleEditor.undo();
        }else{
            console.log('Invalid operations! on line, ' + operationCount)
        }

        if(operationCount===numberoperations){
            simpleEditor.final()
            rl.close();
        }
    }
   
   
});



class SimpleEditor{
    constructor(s){
        this.history = [];
        this.s = "";
        this.close = [];
    }
    append(W){
      this.history.push(this.s);
      this.s += W
    }
    delete(k){
     this.history.push(this.s);
     this.s = this.s.slice(0, -k);
    }

    print(k){
    this.close.push(this.s[k - 1])
      console.log(this.s[k - 1]);
    }

    undo(){
      if(this.history.length > 0){
        this.s = this.history.pop();
      }
    }

    final(){
        for(let i = 0; i < this.close.length; i++){
            console.log(this.close[i]);
        }
    }

}

let simpleEditor = new SimpleEditor();
let numberOfOperations = 0;
let operationsCount = 0;

