let arr:  number[] = [0, 1, 2, 3]


function reverse(data: number[]){


    const list: number[] = []
    for (var i = data.length - 1; i >= 0; i--){

        list.push(data[i])


    }

    return list

}

console.log(reverse(arr))

//

//

// 泛型化


function reverseXx<T>(data: T[]){


    const list: T[] = []
    for (var i = data.length - 1; i >= 0; i--){

        list.push(data[i])


    }

    return list

}




//

//


const one = reverseXx(arr)

let arrTwo:  string[] = ['0', '2', '3']


const two = reverseXx(arrTwo)









