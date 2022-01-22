修改 type script 

的 baseUrl


<hr>


<hr>



tsconfig.json


<hr>

<hr>



<hr>

从这个


"baseUrl": "./", 
"paths": {},

<hr>


<hr>


<hr>



<hr>


到这个路径下，开始索引 / 查找




  "baseUrl": "./src",    


<hr>


  // 这里， 也要指定


  "paths": {
            "@/assets/*": ["assets/*"],
  },