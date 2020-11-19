basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showIcon(IconNames.Heart)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.No)
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
