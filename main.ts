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
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    200
    )
}
function 右轉 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
function 放東西下去 () {
	
}
function 後退 () {
	
}
function 直走 () {
	
}
function 上升 () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function 停下來 () {
	
}
function 下降 () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
radio.setGroup(98)
