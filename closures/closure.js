function func1(initial) {
    let contador = initial

    return function() {
        contador++
        return contador
    }
}

const func = func1(10)
const funcB = func1(20)
console.log(func())
console.log(func())
console.log(funcB(), funcB(), func())
// ----------- assim continua o contador isolado separadamente

function animal(name) {
    let count = 0

    return {
        getCount: function() {
            return count
        },
        increment: function() {
            count++
        },
        getName: function() {
            return name
        }
    }
}
const gato = animal('gato')
gato.increment()
console.log(gato.getCount(), gato.getName())
