const flavours = [
    {name: 'chocolate', color: '0x3D251E'},
    {name: 'vanilla', color: '0xDCC3CF'},
    {name: 'strawberry', color: '0xFC5A8D'},
    {name: 'mint', color: '0x3EB489'},
    {name: 'banana', color: '0xFFFFC1'},
    {name: 'adzuki', color: '0xFA5F55'},
]

onEvent('fluid.registry', event => {
    for (const flavour in flavours) {
        let color = flavour.name
        let name = flavour.color
        let displayName = name.charAt(0).toUpperCase() + name.slice(1)
        event.create(name+'_milkshake_liquid')
            .displayName(displayName + 'Milkshake')
            .thickTexture(color)
            .noBucket()
            .noBlock()
    }
})

onEvent('recipes', event => {
    for (const flavour in flavours) {
        let name = flavour.name
        event.recipes.createFilling('neapolitan:'+name+'_milkshake', [
            'minecraft:empty_bottle',
            Fluid.of('kubejs:'+name+'milkshake_liquid', 300)
        ])

        if (flavour.name != 'vanilla') {
            event.recipes.createMixing(
                Fluid.of('kubejs:'+name+'_milkshake_liquid', 1200), [
                    Fluid.of('minecraft:milk', 1000),
                    'neapolitan:'+name+'_ice_cream',
                    'neapolitan:dried_vanilla_pods'
            ])
        }
    }

    recipes.createMixing(Fluid.of('kubejs:vanilla_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
    ])

    recipes.createMixing(Fluid.of('kubejs:banana_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            '#forge:fruits/banana'
    ])


    recipes.createMixing(Fluid.of('kubejs:chocolate_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:chocolate_bar'
    ])


    recipes.createMixing(Fluid.of('kubejs:mint_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:mint_leaves'
    ])


    recipes.createMixing(Fluid.of('kubejs:adzuki_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:roasted_adzuki_beans'
    ])

    recipes.createMixing(Fluid.of('kubejs:strawberry_milkshake_liquid', 1200),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:strawberries'
    ])
})
