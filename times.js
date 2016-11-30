var times = {}

var store = function(key, value){
    times[key]= (times[key] || []).concat(value)
}

var average = function(key){
    var items = times[key]
    var len = items.length
    var total = items.reduce(function(acc, time){
        acc += parseInt(time)
        return acc
    }, 0)
    return ["key", key, "times.length", len, "average", total / len].join(':')
}

module.exports = {
    store: store,
    average: average
}
