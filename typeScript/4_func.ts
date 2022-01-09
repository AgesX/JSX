function combine(a: string, b?: string): string{
    if (b && b !== null && b != undefined){

        //   如果  b  存在


        return a + b
    }
    else{
        return a
    }

    

}





let aaa = combine('1001');

console.log(aaa);











function add(a: string, b: string){



    return a + b

}







let result = add('st', '   deng')

console.log(result);











let anonySum = function add(a: string, b: string){



    return a + b

}










let anonyAdd: (a: string, b: string) => string = function add(a: string, b: string){



    return a + b

}




let anonyAddXxx: (xxx: string, yyy: string) => string = function add(a: string, b: string){



    return a + b

}








