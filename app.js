
tab_harmo = [];




function nb_aleatoire(min,max){
    
   return min + (Math.floor(Math.random() * (max-min)));
    
}// return number between min and max

function nb_aleatoire_float(min,max){
    
     return min + Math.random() * (max-min);
    
}

function getClickPosition(e){
    
    x1 = e.clientX;
    y1 = e.clientY;
    
    if(tab_harmo.length == (myParamTranform[cherche_parametre("number_max")][1])){
    
    
    tab_harmo.shift();
   
   
}   
    


    
    tab_harmo.push(generation_harmonographe(
        Number(myParamTranform[cherche_parametre("slider_Random_Friction")][1]),
        Number(myParamTranform[cherche_parametre("slider_Random_Friction1")][1]),
        Number(myParamTranform[cherche_parametre("slider_Power_range")][1]),
        Number(myParamTranform[cherche_parametre("slider_Power_range1")][1]),
        Number(myParamTranform[cherche_parametre("slider_Pulse_range")][1]),
        Number(myParamTranform[cherche_parametre("slider_Pulse_range1")][1]),
        Number(myParamTranform[cherche_parametre("slider_depha_range")][1]),
        Number(myParamTranform[cherche_parametre("slider_depha_range1")][1]),
        x1,
        y1
    ));

    
}

function reafichage_background(ctx){
            ctx.rect(0,0,c.width,c.height);     // reecriture du background
            
        var a = myParamTranform[cherche_parametre("background_color")][1];
        a = a.substr(3);
                    
        ctx.fillStyle =  "#" + a;
        ctx.fill();
}

function spawn_random(value){
    
    
        var x1;
        var y1;
        var i = 0;
        while( i < value){
            
                    x1 = nb_aleatoire(0,c.width);
                    y1 = nb_aleatoire(0,c.height);
        
                    tab_harmo.push(generation_harmonographe(
                        Number(myParamTranform[cherche_parametre("slider_Random_Friction")][1]),
                        Number(myParamTranform[cherche_parametre("slider_Random_Friction1")][1]),
                        Number(myParamTranform[cherche_parametre("slider_Power_range")][1]),
                        Number(myParamTranform[cherche_parametre("slider_Power_range1")][1]),
                        Number(myParamTranform[cherche_parametre("slider_Pulse_range")][1]),
                        Number(myParamTranform[cherche_parametre("slider_Pulse_range1")][1]),
                        Number(myParamTranform[cherche_parametre("slider_depha_range")][1]),
                        Number(myParamTranform[cherche_parametre("slider_depha_range1")][1]),
                        x1,
                        y1
                    ));
            i++;
            
        }
    }

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

reafichage_background(ctx);

var temp_pause = 1000 / myParamTranform[cherche_parametre("frame_per_sec")][1];

var nb_tracee = 1000; // nombre de tracee reel incrementation_tracee fois superieur
var incrementation_tracee = 1 / myParamTranform[cherche_parametre("frame_draw")][1];    // pour changer la vitesse



function generation_harmonographe(friction1,friction2,power1,power2,pulse1,pulse2,dephasing1,dephasing2,x1,y1){
    
    
    
    var info_harmono = {
    
    "Ax" : nb_aleatoire(power1,power2),
    "Ay" : nb_aleatoire(power1,power2),
    "As" : nb_aleatoire(power1,power2),
    "At" : nb_aleatoire(power1,power2),
    
    "Px" : nb_aleatoire(pulse1,pulse2),
    "Py" : nb_aleatoire(pulse1,pulse2),
    "Ps" : nb_aleatoire(pulse1,pulse2),
    "Pt" : nb_aleatoire(pulse1,pulse2),
    
    "Dx" : nb_aleatoire(dephasing1,dephasing2),
    "Dy" : nb_aleatoire(dephasing1,dephasing2),
    "Ds" : nb_aleatoire(dephasing1,dephasing2),
    "Dt" : nb_aleatoire(dephasing1,dephasing2),
    
    "AMx" : nb_aleatoire_float(friction1,friction2),
    "AMy" : nb_aleatoire_float(friction1,friction2),
    "AMs" : nb_aleatoire_float(friction1,friction2),
    "AMt" : nb_aleatoire_float(friction1,friction2),
    
    "ligne" : [],
        
    "x1" : x1,
    "y1" : y1,
        
};
    
    info_harmono["x"] = info_harmono["x1"]+ info_harmono["Ax"]*( Math.sin( info_harmono["Dx"] * info_harmono["AMs"] + info_harmono["Px"] ))     +     info_harmono["As"] * ( Math.sin( info_harmono["Ds"] * info_harmono["AMs"] + info_harmono["Ps"]));
    
    
    info_harmono["y"] = info_harmono["y1"]+ 1 * ( info_harmono["Ay"] * ( Math.sin( info_harmono["Py"] * info_harmono["AMy"] + info_harmono["Dy"]) )        +       info_harmono["At"] * ( Math.sin( info_harmono["Pt"] * info_harmono["AMt"] + info_harmono["Dt"]) ) );
    
return info_harmono;
    
}

function creation_des_hormonographes(){
    
    
        // gestion du point de spawn
    
    if(myParamTranform[cherche_parametre("Spawn")][1] == "1"){  //spawn click

         c.addEventListener("click", getClickPosition, false);

    }else if(myParamTranform[cherche_parametre("Spawn")][1] == "3"){ // spawn centre
    
        x1 = c.width/2;
        y1 = c.height/2;
        
        tab_harmo.push(generation_harmonographe(
            Number(myParamTranform[cherche_parametre("slider_Random_Friction")][1]),
            Number(myParamTranform[cherche_parametre("slider_Random_Friction1")][1]),
            Number(myParamTranform[cherche_parametre("slider_Power_range")][1]),
            Number(myParamTranform[cherche_parametre("slider_Power_range1")][1]),
            Number(myParamTranform[cherche_parametre("slider_Pulse_range")][1]),
            Number(myParamTranform[cherche_parametre("slider_Pulse_range1")][1]),
            Number(myParamTranform[cherche_parametre("slider_depha_range")][1]),
            Number(myParamTranform[cherche_parametre("slider_depha_range1")][1]),
            x1,
            y1
        ));

    }else{  // spawn random
        
        spawn_random(myParamTranform[cherche_parametre("number_max")][1]);
    }

    
}

creation_des_hormonographes();

var relatif = 1;
















var val = [];

var i = 0;
var refresh = 4;



var reduction = true;

//gestion des teintes

if(myParamTranform[cherche_parametre("line_color")][1] == "pastel"){    // gestion de la teinte pastel
    
    var teinte = [
                "#BBF0FE",
                "#E2F4FE",
                "#F0DCE5",
                "#FEEFE8",
                "#C2E7DC",
                "#B0F0DF",
                "#EC414A",
                "#BCC8FC",
                "#16B394",
                "#E48F7B",
                "#C19C4E"
             ];



var gradient=ctx.createLinearGradient(0,0,c.width,0);

gradient.addColorStop("0.0",teinte[nb_aleatoire(0,teinte.length-1)]);
gradient.addColorStop("0.5",teinte[nb_aleatoire(0,teinte.length-1)]);
gradient.addColorStop("1",teinte[nb_aleatoire(0,teinte.length-1)]);


ctx.strokeStyle=gradient;
    
}
else{          //gestion des autres teintes
    
    ctx.strokeStyle=myParamTranform[cherche_parametre("line_color")][1];
    
}


ctx.lineWidth=myParamTranform[cherche_parametre("thickness")][1];





function writeNext(tracee)
{
    
    
    
    tab_harmo.forEach(function(element,index,object) {
        
        
    if(i>refresh){

        if(element["Ax"] < myParamTranform[cherche_parametre("number_min_power")][1]){
            
            if(myParamTranform[cherche_parametre("infinit")][1] != "true"){
                 object.splice(index, 1);
                
                    //gestion du random
                if(myParamTranform[cherche_parametre("Spawn")][1] == "2"){
                    spawn_random(1);    
                }

                    
                reafichage_background(ctx);
               }
            reduction = false;    
        }
        else if(element["Ax"] > myParamTranform[cherche_parametre("number_max_power")][1]){
            reduction = true;
        }
        
        i = 0;

        while(element["ligne"].length > nb_tracee){
               element["ligne"].splice(0, 1);
        }
        
        
        tab_harmo.forEach(function(element1) {
        
        ctx.save();     

        ctx.setTransform(1, 0, 0, 1, 0, 0); //netoyage
        ctx.clearRect(0, 0,c.width,c.height);
        ctx.restore();
        
        reafichage_background(ctx);
            
        ctx.beginPath();
        
        tab_harmo.forEach(function(element) {
            
      
         
            
        element["ligne"].forEach(function(element,index) {

            ctx.lineTo(element[0],element[1]);
           
            });
            ctx.stroke();
           ctx.beginPath();
            });
        
        

        
        
        ctx.stroke();
            
            });
        

       }
    
    i = i+1;
        
        
     
    if(reduction){
        element["Ax"] = element["Ax"] * (1-element["AMx"]);
        element["Ay"] = element["Ay"] * (1-element["AMy"]);
        element["As"] = element["As"] * (1-element["AMs"]);
        element["At"] = element["At"] * (1-element["AMt"]);
    }else{
        element["Ax"] = element["Ax"] * (1+element["AMx"]);
        element["Ay"] = element["Ay"] * (1+element["AMy"]);
        element["As"] = element["As"] * (1+element["AMs"]);
        element["At"] = element["At"] * (1+element["AMt"]);
    }



    x = element["x1"] + element["Ax"]*( Math.sin( (element["Px"] * tracee) + element["Dx"] ))     +     element["As"] * ( Math.sin( (element["Ps"] * tracee) + element["Ds"]));
              
    y = element["y1"] + relatif * ( element["Ay"] * ( Math.sin( (element["Py"] * tracee) + element["Dy"]) )        +       element["At"] * ( Math.sin( (element["Pt"] * tracee) + element["Dt"]) ) );
    
    element["ligne"].push([x,y]);
        
        
        
});
    

      
    setTimeout(function(){writeNext(tracee + incrementation_tracee);}, temp_pause); //rapelle de la function apres temp_pause, avec incrementation de tracee
}

writeNext(1);
