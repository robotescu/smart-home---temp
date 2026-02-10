let temp = 0
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    temp = smarthome.dht11Sensor(DigitalPin.P1, smarthome.DHT11_state.DHT11_temperature_C)
    OLED.writeNumNewLine(temp)
    if (temp > 40) {
        smarthome.motorFan(AnalogPin.P2, true)
    } else {
        smarthome.motorFan(AnalogPin.P2, false)
    }
    basic.pause(1000)
})
