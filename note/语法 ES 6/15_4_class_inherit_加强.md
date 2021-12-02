class Dog{

  constructor(a, b){
  		this.a = a;
	    this.b = b;
  
  }
  
  
  vv(){
    
  	console.log(this.a);
  }

}




class SuperDog extends Dog{
  
    constructor(a, b, c){
        // super , 调用的是 Dog 的 construct 方法
        super(a, b);
	    this.c = c;
  
    }   
  
   

	fire(){
    	console.log("gg");
    }
}


let ddd = new SuperDog(6, 66);

ddd.vv();

ddd.fire();


let dd___d = new Dog(6, 66);


