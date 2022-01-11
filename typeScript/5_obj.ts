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
interface IWarMachine{
    skill: string,
    age: string,
    title: string


}



let fighter: IWarMachine = {
    skill: "digger",
    age: "202",
    title: "master"
}


function getF(usr: IWarMachine){
    return usr.title
}















