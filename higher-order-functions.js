const repeat = function(fn, num) {
    for (let i = 0; i < num; i++) {
        console.log(fn);
    }
};

function hello() {
    return 'Hello World';
}

function goodbye() {
    return 'Goodbye World';
}

repeat(hello(), 5);
repeat(goodbye(), 5);