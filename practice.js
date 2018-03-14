var payroll = [
    [1, 'abby hall', 'city manager ', '98538', '02132'],
    [2, 'dana bell', 'police chief ', '83942', '02136'],
    [3, 'cora cook', 'city attorney', '98538', '02132'],
    [4, 'judy king', 'fire director', '70073', '02090']
   ];

//forEach
var totalSalaries = 0;
function add(item){
    totalSalaries += Number(item[3]);
}
payroll.forEach(add);
console.log(totalSalaries);


//filter
target = 80000
function isBigEnough (element){
    return Number(element[3])>target
}
var x = payroll.filter(isBigEnough);
console.log(x);

//reduce
var y = payroll.reduce(function(previous,current){
    return previous+=Number(current[3]);
},0);
console.log(y);

//map
function squareRoot(element){
    return Math.sqrt(Number(element[3]));
}
var z = payroll.map(squareRoot);
console.log(z)

//sort
function compare(a,b){
    if (Number(a[3])-Number(b[3])>0) return 1;
    if (Number(a[3])-Number(b[3])<0) return -1;
    if (Number(a[3])===Number(b[3])) return 0;
}
var a = payroll.sort(compare);
console.log(a);

var payroll2 = [
    {details:[1, 'abby hall', 'city manager ', '98538', '02132'], cat:'A'},
    {details:[2, 'dana bell', 'police chief ', '83942', '02136'], cat:'B'},
    {details:[3, 'cora cook', 'city attorney', '98538', '02132'], cat:'A'},
    {details:[4, 'judy king', 'fire director', '70073', '02090'], cat:'D'}
   ];

//forEach
var allSalaries=0;
function add2(item){
    allSalaries += Number(item.details[3]);
};
payroll2.forEach(add2);
console.log(allSalaries);

//filter
function isBigEnough2(item){
    return Number(item.details[3])>80000;
}
var filteredSalaries = payroll2.filter(isBigEnough2);
console.log(filteredSalaries);

//reduce
var sumSalary = payroll2.reduce(function(previous,current){
    return previous += Number(current.details[3]);
},0);
console.log(sumSalary);

//use reduce to count the number of objects in each cat
var catCount = payroll2.reduce(function(previous,current){
    if (current.cat in previous){
        previous[current.cat] += 1;
    }
    else {
        previous[current.cat] = 1;
    }
    return previous;
},{});
console.log(catCount);

//map
function squareRoot2(item){
    return Math.sqrt(Number(item.details[3]));
}
var newValues = payroll2.map(squareRoot2);
console.log(newValues);

//sort
function compare2(a,b){
    if (Number(a.details[3])-Number(b.details[3])>0) return 1;
    if (Number(a.details[3])-Number(b.details[3])>0) return -1;
    if (Number(a.details[3])===Number(b.details[3])) return 0;
}
var sortedArray = payroll2.sort(compare2)
console.log(sortedArray);