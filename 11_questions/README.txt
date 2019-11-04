var expense = {
    type : 'Business',
    amount: '$50'
}
var type = expense.type;
var amount = expense.amount;

Write the above using ES6 conventions

------------------------------------------------------


Write a function (say fruitPresent('fruit-name') )to find out if a given input is present in the array below using ES6 Output should be true or false
let fruits = ['Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Crab apples',
'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Coconut', 'Cranberry', 'Custard apple', 'Date', 'dragonfruit', 'durian',
'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'grape', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry',
'Jabuticaba', 'Jackfruit', 'Jambul', 'jujube', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon',
'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine', 'Mandarine',
'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pluot',
'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Rambutan', 'Redcurrant', 'Salal berry', 'Salak', 'Salmonberry',
'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu']

fruitPresent('apple') should return true
fruitPresent('artichoke') should return false

4 let productCart = [
{ productname:'iphone-x',qty:10, price:1000 },
{ productname:'macbook pro',qty:200, price:2000},
{ productname:'iwatch',qty:100, price:550 },
{ productname:'macbook air',qty:100, price:1000},
{ productname:'iphone 8',qty:300, price:700 },
{ productname:'iphone 7',qty:100, price:550 },
{ productname:'ipad Retina',qty:20, price:1000},
{ productname:'ipad', qty:10, price:700 },
{ productname:'Magic Mouse',qty:50, price:300},
{ productname:'Magic Trackpad',qty:75, price:200}
]
i) Find the total cost of all products with quantity > n using vanilla JS (ES6)
like , CostOfProductForQtyGreaterThan(n)
e.g., CostOfProductForQtyGreaterThan(100)
ii) Write a function that can take a product name and return the total cost.
e.g. -
CostOfProduct('ipad') should output 7000