



interface DarkDuck{
    skill: string,
    age: string,


    // 可选属性
    title?: string,

    say: () => string,
}





let eight: DarkDuck = {
    skill: "digger",
    age: "202",
    // title: "master"
    say: function(){
        return this.title
    }
}
}



let nine: DarkDuck = {
    skill: "digger",
    age: "202",
    title: "master",
    say: function(){
        return this.title
    }
}
}








interface DarkSwan{

    // 只读属性
    k: number,
    readonly skill: string,


    age: string,


    // 可选属性
    title?: string


}


interface Xxx extends  DarkSwan{
    rule: string[];



}









let ten: DarkSwan = {
    k: 666,
    skill: "digger",
    age: "202",
    title: "master"
}



let tenXXx: Xxx = {
    k: 666,
    skill: "digger",
    age: "202",
    title: "master",
    rule: ["stay"],
}

// 只读属性，

// 不可重新赋值

// ten.skill = 'aaa'



let xxx: DarkSwan = {
    k: 66699,
    skill: "digger",
    age: "212",
    title: "master"
}



// 可索引的属性

interface BirdMap{
    // 里面的 k , 是动态的
    // 就是具体的 bird -> k
    [k: string]: DarkSwan
}

let birdMap : BirdMap = {
    [ten.k]: ten,
    [xxx.k]: xxx

}





interface BirdMapNo{

    [k: string]: DarkSwan
    // title: String
}

let birdMapNo : BirdMapNo = {
    [ten.k]: ten,
    [xxx.k]: xxx,
    // title: 'ninja'
}












