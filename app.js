var count =1;
var c = 0 ;

function getData(item){

    
        if(count<=9){

            if(count%2!=0){


                if(putData(item.id,"X")){
                
                document.getElementById(item.id).style.color = "green";
                

                } 
            
            }else{
            
                putData(item.id,"0");

                document.getElementById(item.id).style.color = "red";

            }
            winner();
            count++;
            if(winner()){
                var va = document.getElementById(item.id).innerText;
                alert(va + " " +'is winer')
                reset();
            }
        }else
        {
            var Draw = "opp's"
            alert(Draw  +""+'Game Draw');
            reset();
        }
    
}

// for reset the value 


function reset(){

    for(var i=1;i<=9;i++){
        document.getElementById('div'+i).innerHTML ="";
    }
    return count =1;
}
// winner function 

function winner(div){

    if(checkCondition('div1','div2','div3')|| checkCondition('div4','div5','div6')  || checkCondition('div6','div7','div8') || checkCondition('div1','div5','div9') ||checkCondition('div3','div5','div7') ||checkCondition('div1','div4','div7') ||checkCondition('div2','div5','div8') ||checkCondition('div3','div6','div9') )
    {
        return true;
    }
    


}
// check function 

function checkCondition(div1 ,div2 ,div3){

    if(getDiv(div1)!=="" && getDiv(div2)!=="" && getDiv(div3)!=="" && getDiv(div1) == getDiv(div2) && getDiv(div2)== getDiv(div3))
    {
        return true;
    }

}

// return div 

function getDiv(div)
{
    return document.getElementById(div).innerHTML;
}

//
function putData(div,data){

    

    return document.getElementById(div).innerHTML = data;


}


    

      


    

