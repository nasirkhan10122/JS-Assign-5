// 1. Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.

var x = 3
var y = 5
var z = x+y
document.write("Sum of "+x+" and "+y+" is "+z+"<br/>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
z = x-y
document.write("Subtraction of "+x+" and "+y+" is "+z+"<br/>")
z=x*y
document.write("Multiplication of "+x+" and "+y+" is "+z+"<br/>")
z=x/y
document.write("Division of "+x+" and "+y+" is "+z+"<br/>")
z=x%y
document.write("Modulus of "+x+" and "+y+" is "+z+"<br/>")

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

var a 
document.write("Value after variable declaration is " +a+ "</br>")
a = 5
document.write("Initial value: " +a+ "</br>")
a++
document.write("Value after increment is: " +a+ "</br>")
a= a+7
document.write("Value after addition is: " +a+ "</br>")
a--
document.write("Value after decrement is: " +a+ "</br>")
a = a%3
document.write("The remainder is: " +a+ "</br>")

// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. 

var cost = 600
var total = cost*5
document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR </br>")

// 5. Write a script to display multiplication table of any number in your browser.

document.write("<h2> Table of 4 </h2>")
document.write(
    "4 x 1 =" +4*1+ "<br/>" +
    "4 x 2 =" +4*2+ "<br/>" +
    "4 x 3 =" +4*3+ "<br/>" +
    "4 x 4 =" +4*4+ "<br/>" +
    "4 x 5 =" +4*5+ "<br/>" +
    "4 x 6 =" +4*6+ "<br/>" +
    "4 x 7 =" +4*7+ "<br/>" +
    "4 x 8 =" +4*8+ "<br/>" +
    "4 x 9 =" +4*9+ "<br/>" +
    "4 x 10 =" +4*10+ "<br/>"
)
// 6. The Temperature Converter: It’s hot out! 
// Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


var c = 25
var f =(c* 9/5)+32
document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
var f = 70
var c =(f-32) * 5/9
document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")

// 7. Write a program to implement 
// checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables.
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var ITEM1 = 650
var ITEM2 = 100
var quantity1 = 3
var quantity2 = 7
var charges = 100
var total = ITEM1*quantity1+ITEM2*quantity2+charges

document.write(
    "<h1> Shopping Card </h1>"+
    "Price of item 1 is "+ITEM1+
    "<br/>Quantity of item 1 is "+quantity1+
    "<br/> Price of item 2 is "+ITEM2+
    "<br/>Quantity of item 2 is "+quantity2+
    "<br/>Shipping Charges" +charges+
    "<br/> <br/> <br/>Total cost of your order is "+total

)
// 8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser.

var totalmarks = 980
var marksobtained = 804
var percentage = 804/980 *100

document.write(
    "<h1> Marks Sheet </h1>" +
    "Total marks :" +totalmarks+
    "<br/>Marks obtained :" +marksobtained+
    " <br/> Percentage :" +percentage+"%"

)
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var USDollar = 104.80 * 10
var SaudiRiyal = 28 * 25
var PakistaniRupees = USDollar+SaudiRiyal 

document.write("<h1> Currency in PKR </h1> Total Currency in PKR:" +PakistaniRupees)

// 10. Write a program to initialize a variable with some number and 
// do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression.


var number = 1
number = (((number+5)*10)/2)
alert(number)

// 11. The Age 
// Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

var currentyear = 2016
var birthyear = 1992
var age = currentyear-birthyear
document.write("<h1>Age Calculator</h1>Current Year: "+currentyear+"</br>Birth Year: "+birthyear+"</br>Your Age is: "+age)

// 12. The Geometrizer: 
// Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output 
// “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius * radius

document.write (
    "<h1>The Geometrizer </h1>"
    +"Radius of a circle : " +radius+
    "<br/> The circumference is : "+circumference+
    "<br/> The area is : "+area

)
// 13. The Lifetime Supply 
// Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: 
// “You will need NNNN to last you until the ripe old age of NN”.

var snack = "chocolate chip"
var age = 15
var maxage = 65
var amountPerDay = 3
var total = (maxage -age)*amountPerDay

document.write(
    "<h1> The Life Time Calculator</h1>" +
    "Favourite Snack : "+snack+
    "<br/> Current age: " +age+
    "<br/> Estimated Maximum Age: "+maxage+
    "<br/> Amount old snacks Per day: "+amountPerDay+
    "<br/> You will need: "+total+" "+snack+
    "to last you untill the ripe old age of" +" "+maxage

)