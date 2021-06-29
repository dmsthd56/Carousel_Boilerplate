console.log("hello, vanilla.");


let nums = 1;
document.getElementById('leftBtn').onclick = function(){
    nums++;
    if(nums==6){
        nums = 1;
    }
    document.getElementById("imgs").src = "images/image-"+nums+".png";
}
document.getElementById('rightBtn').onclick = function(){
    nums--;
    if(nums==0){
        nums = 5;
    }
    document.getElementById("imgs").src = "images/image-"+nums+".png";

}

function imgs(anything){
    for(let f=1; f<5; f++){
        document.getElementById("imgs").src = anything;
    };
}

/*css 부분*/
*,body {
  background-image: url("./images/bg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Varela Round", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-family: "Pacifico", cursive;
  text-align: center;
  font-size: 72px;
}

label,span {display: block;}
ol,ul {list-style:none; margin:0; padding:0;}

.outline{
  width:1200px; 
  height:630px;
  margin:0 auto; 
  position: relative;
  border: 2px solid rgb(116, 116, 116);

}
.banner{
  width:600px; 
  height:600px;
  margin: 0 auto;
  position:relative; 
}
.banner>li {
  width:100%; 
  height:600px;
  position:absolute; 
  /* display: none; */
  /* background: url(); */
}
/* .banner>li:first-child{
  display: block;
} */
.banner>li>img {
  width: 100%; 
  object-fit: contain;
}

/*버튼*/
.leftBtn,.rightBtn {
  width:50px; 
  height:50px;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  position:absolute; 
  z-index:10;
  top:50%; 
  margin-top:-25px; 
  cursor: pointer;
}
.leftBtn {left:5px;}
.rightBtn {right:5px;}

/*디스크*/
.disc{
  width:cala(45*4px); 
  height:20px; 
  text-align:center; 
  margin:0 auto;
  line-height:20px;
  position:relative; 
  background: none;
 }
 .disc>li {
   width:40px; 
   height:5px;
   background: none;
   background-color:rgb(102, 102, 102);
   display:inline-block;   
   vertical-align:4px;
   cursor: pointer;
 }
