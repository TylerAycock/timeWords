

const hourWords = hours => {
    let hourArr = [
        'twelve',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven'
    ]
    if (hours >= 12){
        hours -= 12
    }

    return(hourArr[hours])
}

const minuteWords = minutes =>{
    let aboveTwenties = [
        'twenty',
        'thirty',
        'fourty',
        'fifty',
    ]
    let onesArr = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ]
    let belowTwenties = [
        `o'clock`,
        `oh one`,
        'oh two',
        'oh three',
        'oh four',
        'oh five',
        'oh six',
        'oh seven',
        'oh eight',
        'oh nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    if(minutes < 20){
        return belowTwenties[minutes]
    } else {
        let minuteArr = String(minutes).split('')
        let tens = parsInt(minuteArr[0]) -2
        let ones = parseInt(minuteArr[1])
        return `${aboveTwenties[tens]} ${onesArr[ones]}`
    }

}

const timeWord = time => {
    if (time === `00:00`){
        return `midnight`
    } else if(time === '12:00'){
        return `noon`
    }
    let timeArr = time.split(':')
    let hours = hourWords(parseInt(timeArr[0]))
    let minutes = minuteWords(parseInt(timeArr[1]))

    let timeOfDay = parseInt(timeArr[0]) < 12 ? 'am' : 'pm'

    return `${hours} ${minutes} ${timeOfDay}`
}


console.log(timeWord("00:00"))
// "one o'clock am"

console.log(timeWord("12:00"))
// 'six oh one am'

console.log(timeWord("06:10"))
// 'six ten am'

console.log(timeWord("19:18"))
// 'six eighteen am'

console.log(timeWord(`17:04`))
