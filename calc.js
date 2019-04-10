var num = process.argv[2];
// var leng = num.length
const add = require('./addition')
const sub = require('./substract')
const mul = require('./multiply')
const div = require('./division')
// var op = ['+', '-', '/', '*']
if (num.indexOf('+') != -1) {
    final = num.split('+')
    var part1 = Number(final[0])
    var part2 = Number(final[1])
    console.log(add.a(part1, part2))
} else {
    if (num.indexOf('-') != -1) {
        final = num.split('-')
        var part1 = Number(final[0])
        var part2 = Number(final[1])
        console.log(sub.a(part1, part2))
    } else {
        if (num.indexOf('/') != -1) {
            final = num.split('/')
            var part1 = Number(final[0])
            var part2 = Number(final[1])
            console.log(div.a(part1, part2))
        } else {
            if (num.indexOf('*') != -1) {
                final = num.split('*')
                var part1 = Number(final[0])
                var part2 = Number(final[1])
                console.log(mul.a(part1, part2))
            } else {
                console.log('Invalid Input')
            }
        }
    }
}


// const process = require('process')
// console.log(process)
// console.log(process.argv)