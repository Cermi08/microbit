input.onButtonPressed(Button.A, function () {
    v = 0
    h = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        v += 1
    }
    v = 4
    h = 1
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        h += 1
    }
    v = 3
    h = 4
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        v += -1
    }
    v = 0
    h = 3
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        h += -1
    }
})
input.onButtonPressed(Button.B, function () {
    v = 0
    h = 0
    for (let index = 0; index < 5; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        h += 1
    }
    v = 1
    h = 4
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        v += 1
    }
    v = 4
    h = 3
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        h += -1
    }
    v = 3
    h = 0
    for (let index = 0; index < 4; index++) {
        led.toggle(v, h)
        basic.pause(cas)
        led.toggle(v, h)
        v += -1
    }
})
let h = 0
let v = 0
let cas = 0
cas = 200
