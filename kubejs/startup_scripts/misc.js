onEvent('recipes', event => {
    event.recipes.createFilling('hexerei:blood_bottle', [
        'minecraft:glass_bottle',
        Fluid.of('hexerei:blood', 250)
    ])

    event.recipes.createSandpaperPolishing('create:polished_rose_quartz', 'biomesoplenty:rose_quartz_shard')

    event.shapeless('biomesoplenty:mud_ball', ['byg:mud_ball'])
    event.shapeless('byg:mud_ball', ['biomesoplenty:mud_ball'])

    event.recipes.createCrushing([
            Item.of('immersive_engineering:sulfur').withChance(0.3),
            Item.of('pyromancer:brimstone').withChance(0.1)
        ],
        'biomesoplenty:brimstone'
    )

    event.recipes.createCrushing([
            Item.of('immersive_engineering:sulfur').withChance(0.03),
            Item.of('pyromancer:brimstone').withChance(0.01)
        ],
        'byg:brimstone'
    )

    event.recipes.createCrushing([
            'pyromancer:brimstone',
            Item.of('immersive_engineering:sulfur').withChance(0.1),
            Item.of('pyromancer:brimstone').withChance(0.5),
        ],
        'pyromancer:brimstone_ore'
    )

    event.recipes.createCrushing([
            'pyromancer:brimstone',
            Item.of('pyromancer:brimstone').withChance(0.5),
            Item.of('immersive_engineering:sulfur').withChance(0.1),
        ],
        'pyromancer:brimstone_ore'
    )

    event.remove({output: 'cnb:apple_slices'}) // redundant

    event.shapeless('farmersdelight:organic_compost',[
        'minecraft:dirt',
        '2x farmersdelight:straw',
        '2x minecraft:bone_meal',
        '4x #immersive_weathering:bark'
    ])

    event.shapeless('farmersdelight:organic_compost',[
        'minecraft:dirt',
        'overweight_farming:vegetable_compost',
        'farmersdelight:straw',
        'minecraft:bone_meal',
        '2x #immersive_weathering:bark'
    ])
})
