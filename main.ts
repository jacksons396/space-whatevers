input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
game.setLife(3)
let Lives = 3
sprite = game.createSprite(2, 5)
let Rock = game.createSprite(randint(1, 5), 0)
basic.forever(function () {
    if (Lives == 0) {
        sprite.delete()
        basic.showString("Game over")
    }
    if (sprite.isTouching(Rock)) {
        Lives += -1
    }
})
basic.forever(function () {
    if (Rock.get(LedSpriteProperty.Y) == "5") {
        Rock.set(LedSpriteProperty.Y, 0)
    }
})
basic.forever(function () {
    Rock.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
})
