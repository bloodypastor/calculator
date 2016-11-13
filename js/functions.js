          // name function  //paramtres
    function newFucntionName (x, y, z) {
    // body function
}

    var average = function (x,y) {
    return (x + y)/2;
};
          
//console.log(average(2, 4));
          
    function getIt() {
        return this.x;
    };

    var obj1 = {
        get: getIt,
        x: 1
    };

    var obj2 = {
        get: getIt,
        x: 2
    };

    // console.log(obj1.get());

    // Функція як властивість обєкту obj

    var obj = {
        base: 13,
        average : function (x,y) {
            return(this.base + x + y) / 3;
        }
    };
//console.log(obj.average);

var amount = function() {
    i = 0;
    sum = 0;
    for ( i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum / arguments.length;
};

//console.log(amount(20, 40,25));

// Замикання функції

var getAnswer = (function() {
    var answer = 42;

    return function inner() {
        return answer;
    };
}());

//console.log(getAnswer);

// 2 variant

function greeting(name) {
    var text = 'Hello ' + name
        greet = function() {
            //console.log(text);
        }
        return greet;

};
ar = greeting('Victor');
