/**
 * Created by raylinares on 10/7/16.
 */
var allCones=Math.floor(Math.random()*50)+50;


    do{
        var cones=Math.floor(Math.random()*5)+1;
        console.log(cones+" cones sold");
        console.log(allCones+" left");
        if (allCones<cones){
            console.log("Can't sell you "+cones+". I only have "+allCones+" left.")
        }
        allCones=(allCones-cones);
    }while (allCones>=0);
console.log("Yay! I sold them all!");

