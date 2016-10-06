/**
 * Created by raylinares on 10/6/16.
 */
"use strict";

var amtRyanSpent=250;
var amtCameronSpent=180;
var amtGeorgeSpent=320;
var discount=.80;

if (amtRyanSpent > 200){
    console.log("Ryan", amtRyanSpent, (discount*amtRyanSpent));
}
else    console.log("Ryan", amtRyanSpent);

if (amtCameronSpent > 200){
    console.log("Cameron", amtCameronSpent, (discount*amtCameronSpent));
}
else    console.log("Cameron", amtCameronSpent);

if (amtGeorgeSpent > 200){
    console.log("George", amtGeorgeSpent, (discount*amtGeorgeSpent));
}
else    console.log("George", amtGeorgeSpent);

var buyACar="Buy A Car";
var buyAHouse="Buy A House";
var flipACoin=Math.floor(Math.random()*2);

if (flipACoin==0){
    console.log(buyACar);
}
else    console.log(buyAHouse);

