let soldier :  {
    skill: string,
    age: string
} = {
    skill: "fist",
    age: "101"
}



/*



// 内联类型



:  {
    skill: string,
    age: string
} 


*/




console.log(soldier.skill)



let warrior :  {
    skill: string,
    age: number
} = {
    skill: "fist",
    age: 101
}








// 复制一份，内联类型

function weapon(user:  {
    skill: string,
    age: string
} ){


    return user.age

}




/*


// 接口




*/ 













interface WarMachine{



}



// 前面加个 I,  表示接口
// 接口， define
// 接口，用来描述，这个对象，有哪些属性

// 接口，对象的形状

interface IWarMachine{
    skill: string,
    age: string,
    title: string


}



interface Duck{
    skill: string,
    age: string,
    title: string


}


let fighter: IWarMachine = {
    skill: "digger",
    age: "202",
    title: "master"
}


let six: Duck = {
    skill: "digger",
    age: "202",
    title: "master"
}

function getF(usr: IWarMachine){
    return usr.title
}



let result = getF(six)

console.log(result)






// 如果两个接口，定义的属性一致，

// ts 就认为，这两个接口，是同一个











