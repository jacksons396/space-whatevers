input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let Gound = 5
game.setLife(3)
let Lives = 3
sprite = game.createSprite(2, 5)
let Rock = game.createSprite(randint(1, 5), 0)
let Rock_2 = game.createSprite(randint(1, 5), 0)
basic.forever(function () {
    if (Lives == 0) {
        sprite.delete()
        basic.showString("Game over")
    }
    if (Rock.isTouching(sprite)) {
        sprite.delete()
        basic.showString("Game over")
    }
})
basic.forever(function () {
    if (Rock.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)) {
        Rock.set(LedSpriteProperty.Y, 0)
        Rock.set(LedSpriteProperty.X, randint(1, 5))
    }
})
basic.forever(function () {
    if (Rock_2.get(LedSpriteProperty.Y) == sprite.get(LedSpriteProperty.Y)) {
        Rock_2.set(LedSpriteProperty.Y, 0)
        Rock_2.set(LedSpriteProperty.X, randint(1, 5))
    }
})
basic.forever(function () {
    Rock.change(LedSpriteProperty.Y, 1)
    basic.pause(randint(250, 350))
})
basic.forever(function () {
    Rock_2.change(LedSpriteProperty.Y, 1)
    basic.pause(randint(250, 350))
})
basic.forever(function () {
    if (Lives == 0) {
        sprite.delete()
        basic.showString("Game over")
    }
    if (sprite.isTouching(Rock_2)) {
        sprite.delete()
        basic.showString("Game over")
    }
})
