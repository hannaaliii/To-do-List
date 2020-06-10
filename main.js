var cnt=0;
var c=0;
function todo(){
    var count=0;
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        console.log("start");
        if(this.readyState==4&&this.status==200){
            // console.log(1);
            var res =JSON.parse(this.responseText);
            // console.log(res);
            var out="";
            res.forEach(i => {
                // console.log(i.id);
                if(i.completed==false){
                    count++;
                    out+=`<input type="checkbox" id="mycheck" onchange="check(this);" ><label>${i.title}</label><br><hr>`;
                }
                else{
                    out+=`<input type="checkbox" id="mycheck"  checked disabled class="checkbox checkbox-primary"><label>${i.title}</label><br><hr>`;
                }
            });
            document.getElementById("chk").innerHTML=out;
            document.getElementById("chk").style.padding="6%";
        }
    };
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    
}
todo();

function check(z){
    var prm=new Promise(function(resolve,reject){
        cnt++;
        console.log(z);
        console.log(cnt);
        if(z.checked==true){
            c++;
        }
        else{
            c--;
        }
        console.log(c);
        if(c>=5&&cnt>=5){
            resolve(" Congrats. 5 Tasks have been Successfully Completed");
        }  
        else{
            reject("not completed");
        } 
    });

   prm.then(function(f){
       alert(f);
   })
   .catch(function(l){
       console.log(l);
   })
   
}