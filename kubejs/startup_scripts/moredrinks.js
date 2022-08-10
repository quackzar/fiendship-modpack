onEvent('fluid.registry', event => {

    // Hot Cocoa #3D251E
    event.create('hot_cocoa_liquid')
        .displayName('Hot Cocoa')
        .thickTexture(0x3D251E)
        .noBlock()
})

onEvent('recipes', event => {
    event.recipes.createMixing(Fluid.of('kubejs:hot_cocoa_liquid', 250), [
        'minecraft:sugar',
        '2x minecraft:cocoa_beans',
        Fluid.of('minecraft:milk', 250)
    ]).heated()


    event.recipes.createFilling('farmersdelight:hot_cocoa', [
        'minecraft:glass_bottle',
        Fluid.of('kubejs:hot_cocoa_liquid', 250)
    ])

})
