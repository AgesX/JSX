class 只是语法糖，


class 最终，只是构造函数




<hr>


<hr>



<hr>


function Dog(a, b){
	this.a = a;
    this.b = b;
}


Dog.prototype.vv = function(){
    console.log(this.a);
};


class SuperDog extends Dog{

	fire(){
    	console.log("gg");
    }
}


let ddd = new SuperDog(6, 66, 666);

ddd.vv();

ddd.fire();


let dd___d = new Dog(6, 66);


