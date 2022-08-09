const flavours = [
    {name: 'chocolate', color: 0xA56C4B}, // #A56C4B
    {name: 'vanilla', color: 0xDCC3CF}, // #FFFFC1
    {name: 'strawberry', color: 0xFC5A8D}, //#FF99AA
    {name: 'mint', color: 0x3EB489},   // #3EB489
    {name: 'banana', color: 0xFFFFC1}, // #FFFFAA
    {name: 'adzuki', color: 0xFC6F88}, // #FC6F88
]


onEvent('fluid.registry', event => {


    for (const flavour of flavours) {
        let color = flavour.color
        let name = flavour.name
        let displayName = name.charAt(0).toUpperCase() + name.slice(1)
        event.create(name+'_milkshake_liquid')
            .displayName(displayName + ' Milkshake')
            .thickTexture(color)
            .noBlock()
    }
})

onEvent('recipes', event => {

    for (const flavour of flavours) {
        let name = flavour.name
        event.recipes.createFilling('neapolitan:'+name+'_milkshake', [
            'minecraft:glass_bottle',
            Fluid.of('kubejs:'+name+'_milkshake_liquid', 300)
        ])

        if (flavour.name == 'vanilla') {
            continue // vanilla is special
        }
        event.recipes.createMixing(
            Fluid.of('kubejs:'+name+'_milkshake_liquid', 1000), [
                Fluid.of('minecraft:milk', 1000),
                'neapolitan:'+name+'_ice_cream',
                'neapolitan:dried_vanilla_pods'
        ])
    }

    event.recipes.createMixing(Fluid.of('kubejs:vanilla_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
    ])

    event.recipes.createMixing(Fluid.of('kubejs:banana_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            '#forge:fruits/banana'
    ])


    event.recipes.createMixing(Fluid.of('kubejs:chocolate_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:chocolate_bar'
    ])


    event.recipes.createMixing(Fluid.of('kubejs:mint_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:mint_leaves'
    ])


    event.recipes.createMixing(Fluid.of('kubejs:adzuki_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:roasted_adzuki_beans'
    ])

    event.recipes.createMixing(Fluid.of('kubejs:strawberry_milkshake_liquid', 1000),[
            Fluid.of('minecraft:milk', 1000),
            'neapolitan:vanilla_ice_cream',
            'neapolitan:strawberries'
    ])
})
