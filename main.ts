function 抬東西起來 () {
	
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        左轉()
    } else if (receivedNumber == 8) {
        上升()
    } else if (receivedNumber == 6) {
        右轉()
    } else if (receivedNumber == 2) {
        下降()
    } else if (receivedNumber == 7) {
        抬東西起來()
    } else if (receivedNumber == 9) {
        放東西下去()
    } else if (receivedNumber == 1) {
        上升()
    } else if (receivedNumber == 3) {
        下降()
    } else {
        停下來()
    }
})
function 左轉 () {
	
}
function 右轉 () {
	
}
function 放東西下去 () {
	
}
function 後退 () {
	
}
function 直走 () {
	
}
function 上升 () {
	
}
function 停下來 () {
	
}
function 下降 () {
	
}
radio.setGroup(98)
