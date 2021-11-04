构造函数，


配合 


`new`

<hr>



构造函数中，通过 this, 


来绑定属性


<hr>


this.prop = 





<hr>




<hr>




<hr>




<hr>





```

function Dog(n, year){
  
  this.name = n;
  this.age = year;
  
  this.hello = () =>{
  	 return this.name;
  };
    
}



let aa = new Dog('11', 22);

console.log(aa.hello());
```




<hr>




<hr>




```

function Dog(n, year){
  
  this.name = n;
  this.age = year;
  
  this.hello = () =>{
  	 return this.name;
  };
    
}


function newXxxx(Creator, ...args){
	// 1, 创建对象
  
  	let obj = new Object();
  
    // 搜索这个对象，的原型
    // 这个对象，的原型的原型
    // 原型链
    obj.__proto__ = Object.prototype;
    obj.toString();
  
  
	// 2, 将 obj 的 __proto__ 属性，绑定到构造函数的 prototype 属性上
    // 每一个 js 对象， 都有  __proto__ 属性
    // 只有函数，才有 prototype 属性
	obj.__proto__ = Creator.prototype;
    
  
    
  
  
  

}




function newX(Creator, ...args){
	// 1, 创建对象
  
  	let obj = {};
  
    obj.toString();
  
  
	// 2, 将 obj 的 __proto__ 属性，绑定到构造函数的 prototype 属性上
    // 每一个 js 对象， 都有  __proto__ 属性
    // 只有函数，才有 prototype 属性
	obj.__proto__ = Creator.prototype;
    
  
    // 3， 将 obj, 作为构造函数的 this
    // apply, 改变函数的 this 指向
    
    let result = Creator.apply(obj, args);
    
    // 4, result 存在，就返回 result
    // result 不存在，就返回 obj
  
    return result || obj;

}





let aa = newX(Dog, '11', 22);

console.log(aa.hello());







```



<hr>




<hr>

