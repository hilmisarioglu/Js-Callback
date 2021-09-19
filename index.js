// ForEach

const movement = [100, -200, 50, -120];
arrDeposits=[];
arrWithdraws=[];

// You deposited $..
// You withdrew $..

movement.forEach(element => {
    if (element > 0) {
        console.log(`You deposited $ ${element}`)
        arrDeposits.push(element)
    } else {
        console.log(`You withdrew $ ${element}`)
        arrWithdraws.push(element)
    }
});

console.log('Deposits are :',arrDeposits)
console.log('Withdraws are :',arrWithdraws)

// -------------------------------------------------------

// map initial

// “Dizinin her bir elemanı için; parametre olarak verilen (callback) fonksiyonu çağırır ve fonksiyonda belirtilen işlemlere göre yeni bir dizi(array) oluşturur.”

const str="Hilmi Sarioglu"
const arrayStr = str.split(" ")
console.log(arrayStr)
const arrayNew = arrayStr.map(element => element[0])
console.log(arrayNew)
const joinStr = arrayNew.join("")
console.log(joinStr)

// ---------------------------------------
// map
const strng = "Hilmi Sarioglu"

const newStr = strng.split("").map((element)=>{
    return (
        element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase()
    )
}).join('')

console.log(newStr)

// ----------------------------------

// filter words longer than 6 length
// filter() metodu, parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür. Bu sayede çeşitli filtrelemeler yapmanıza olanak sağlar. Yaptığı iş oldukça gerekli olan bir iş, kullanımda da bir o kadar basit. Bu arada, filter() metodu boolean değer döndürür.

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction"
]
 const result = words.filter((element) => element.length > 6);
 console.log(result)

//  -------------------------------------------

const array3 = [1,2,3,4,5,6];
const myFunk = (previousValue, currentValue) => previousValue + currentValue;
console.log(array3.reduce(myFunk));

// --------------------------------------------
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}