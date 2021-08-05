let magnes = 0
for (let kolumna = 0; kolumna <= 4; kolumna++) {
    for (let wiersz = 0; wiersz <= 4; wiersz++) {
        led.plotBrightness(kolumna, wiersz, wiersz * 50 + kolumna * 10)
    }
}
while (true) {
    magnes = input.magneticForce(Dimension.X)
    if (Math.abs(magnes) > 500) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
    serial.writeNumber(magnes)
    serial.writeLine("")
    basic.pause(10)
}
basic.forever(function () {
	
})
