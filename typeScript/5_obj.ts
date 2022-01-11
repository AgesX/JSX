let soldier :  {
    skill: string,
    age: string
} = {
    skill: "fist",
    age: "101"
}



/*


// 接口




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





