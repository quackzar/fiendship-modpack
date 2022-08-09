onEvent('recipes', event => {
    event.recipes.createMixing('farmersdelight:hot_cocoa', [
        'minecraft:glass_bottle',
        'minecraft:sugar',
        '2x minecraft:cocoa_beans',
        Fluid.of('minecraft:milk', 250)
    ]).heated()

    event.recipes.createMixing('farmersdelight:apple_cider', [
        'minecraft:glass_bottle',
        'minecraft:sugar',
        '2x minecraft:apple',
    ]).heated()

    event.recipes.createMixing('2x farmersdelight:dumplings', [
        'farmersdelight:raw_pasta',
        'farmersdelight:raw_pasta',
        '#forge:salad_ingredients',
        'farmersdelight:onion',
        '#createlive:dumplings'
    ]).heated()

    event.recipes.createMixing('farmersdelight:cooked_rice',[
        'minecraft:bowl',
        'farmersdelight:rice'
    ]).heated()


    event.recipes.createMixing('farmersdelight:beef_stew',[
        'minecraft:bowl',
        '#forge:raw_beef',
        'minecraft:carrot',
        'minecraft:potato'
    ]).heated()

    event.recipes.createMixing('farmersdelight:chicken_soup', [
        'minecraft:bowl',
        '#forge:raw_chicken',
        'minecraft:carrot',
        '#forge:salad_ingredients',
        '#forge:vegetables'
    ]).heated()

    event.recipes.createMixing('farmersdelight:fish_stew', [
        'minecraft:bowl',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:beetroot',
        '#forge:salad_ingredients'
    ]).heated()

    event.recipes.createMixing('farmersdelight:fried_rice', [
        'minecraft:bowl',
        'farmersdelight:rice',
        '#forge:eggs',
        'minecraft:carrot',
        'farmersdelight:onion'
    ]).heated()


    event.recipes.createMixing('farmersdelight:pumpkin_soup', [
        'minecraft:bowl',
        'farmersdelight:pumpkin_slice',
        '#forge:salad_ingredients',
        '#forge:raw_pork'
    ]).heated()


    event.recipes.createMixing('farmersdelight:baked_cod_stew', [
        'minecraft:bowl',
        '#forge:raw_fishes/cod',
        'minecraft:potato',
        '#forge:eggs',
        'farmersdelight:tomato'
    ]).heated()


    event.recipes.createMixing('farmersdelight:noodle_soup', [
        'minecraft:bowl',
        'farmersdelight:raw_pasta',
        'farmersdelight:fried_egg',
        'minecraft:dried_kelp',
        '#forge:raw_pork'
    ]).heated()


    event.recipes.createMixing('farmersdelight:pasta_with_meatballs', [
        'minecraft:bowl',
        'farmersdelight:minced_beef',
        'farmersdelight:raw_pasta',
        'farmersdelight:tomato_sauce'
    ]).heated()


    event.recipes.createMixing('farmersdelight:pasta_with_mutton_chop', [
        'minecraft:bowl',
        '#forge:raw_mutton',
        'farmersdelight:raw_pasta',
        'farmersdelight:tomato_sauce'
    ]).heated()

    
    event.recipes.createMixing('farmersdelight:vegetable_noodles', [
        'minecraft:bowl',
        'minecraft:carrot',
        'minecraft:brown_mushroom',
        'farmersdelight:raw_pasta',
        '#forge:salad_ingredients',
        '#forge:vegetables'
    ]).heated()


    event.recipes.createMixing('farmersdelight:ratatouille', [
        'minecraft:bowl',
        'farmersdelight:tomato',
        'farmersdelight:onion',
        'minecraft:beetroot',
        '#forge:vegetables'
    ]).heated()


    event.recipes.createMixing('farmersdelight:squid_ink_pasta', [
        'minecraft:bowl',
        '#forge:raw_fishes',
        'farmersdelight:raw_pasta',
        'farmersdelight:tomato',
        'minecraft:ink_sac'
    ]).heated()

    
    event.recipes.createMixing('farmersrespite:blazing_chili', [
        'minecraft:bowl',
        '2x minecraft:blaze_powder',
        '2x minecraft:nether_wart',
        'farmersrespite:coffee_beans',
        '#forge:raw_beef',
    ]).heated()


    event.recipes.createMixing('nethersdelight:magma_gelatin', [
        '3x minecraft:magma_cream',
        'nethersdelight:propelpearl',
        'minecraft:lava_bucket',
    ]).heated()

    event.recipes.createMixing('nethersdelight:magma_gelatin', [
        '3x minecraft:magma_cream',
        'nethersdelight:propelpearl',
        'minecraft:bucket',
        Fluid.of('minecraft:lava', 1000)
    ]).heated()

    event.recipes.createMixing('farmersdelight:dog_food', [
        'minecraft:bowl',
        'minecraft:rotten_flesh',
        'minecraft:bone_meal',
        '#farmersdelight:wolf_prey',
        'farmersdelight:rice'
    ]).heated()

    event.recipes.createCutting(
        '4x farmersdelight:pumpkin_slice',
        'minecraft:pumpkin'
    ).processingTime(50)

    event.recipes.createCutting(
        '2x farmersdelight:minced_beef',
        'minecraft:beef'
    ).processingTime(50)

    event.recipes.createCutting(
        ['2x farmersdelight:chicken_cuts', 'minecraft:bone_meal'],
        'minecraft:chicken'
    ).processingTime(50)

    event.recipes.createCutting(
        '2x farmersdelight:bacon',
        'minecraft:porkchop'
    ).processingTime(50)

    event.recipes.createCutting(
        ['2x farmersdelight:cod_slice', 'minecraft:bone_meal'],
        'minecraft:cod'
    ).processingTime(50)

    event.recipes.createCutting(
        ['2x farmersdelight:salmon_slice', 'minecraft:bone_meal'],
        'minecraft:salmon'
    ).processingTime(50)

    event.recipes.createCutting(
        '2x farmersdelight:mutton_chops',
        'minecraft:mutton'
    ).processingTime(50)

    event.recipes.createCutting(
        '7x farmersdelight:cake_slice',
        'minecraft:cake'
    ).processingTime(50)

    event.recipes.createCutting(
        '4x farmersdelight:apple_pie_slice',
        'farmersdelight:apple_pie'
    ).processingTime(50)

    event.recipes.createCutting(
        '4x farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:sweet_berry_cheesecake'
    ).processingTime(50)

    event.recipes.createCutting(
        '4x farmersdelight:chocolate_pie_slice',
        'farmersdelight:chocolate_pie'
    ).processingTime(50)

    event.recipes.createCutting(
        '4x farmersrespite:rose_hip_pie_slice',
        'farmersrespite:rose_hip_pie'
    ).processingTime(50)

    event.recipes.createCutting(
        '4x farmersrespite:coffee_cake_slice',
        'farmersrespite:coffee_cake'
    ).processingTime(50)


    event.recipes.createCutting(
        '7x abnormals_delight:chocolate_cake_slice',
        'neapolitan:chocolate_cake'
    ).processingTime(50)

    event.recipes.createCutting(
        '7x abnormals_delight:vanilla_cake_slice',
        'neapolitan:vanilla_cake'
    ).processingTime(50)


    event.recipes.createCutting(
        '7x abnormals_delight:strawberry_cake_slice',
        'neapolitan:strawberry_cake'
    ).processingTime(50)

    event.recipes.createCutting(
        '7x abnormals_delight:adzuki_cake_slice',
        'neapolitan:adzuki_cake'
    ).processingTime(50)


    event.recipes.createCutting(
        '7x abnormals_delight:banana_cake_slice',
        'neapolitan:banana_cake'
    ).processingTime(50)


    
    event.recipes.createCutting(
        '7x abnormals_delight:mint_cake_slice',
        'neapolitan:mint_cake'
    ).processingTime(50)
    
})
