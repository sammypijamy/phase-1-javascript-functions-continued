function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork();

const wrapAdjective = function(one = "*") {
 return function(parameter = "special") {
    return `You are ${one}${parameter}${one}!`
 }
}