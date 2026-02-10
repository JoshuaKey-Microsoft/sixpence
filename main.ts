blocks.onBlockBroken(CAKE, function () {
    for (let index = 0; index < 24; index++) {
        mobs.spawn(PARROT, pos(0, 1, 0))
    }
})
