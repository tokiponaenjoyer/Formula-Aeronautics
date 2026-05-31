// remove every recipe that doesn't output an item in the whitelist
ServerEvents.recipes(event => {
    // example 'minecraft:stick'
    const whitelist = [
        
    ]

    event.forEachRecipe({}, recipe => {
        // Remove if there's no output, or the first output item isn't in the whitelist
        if (!recipe.outputItems?.length || !whitelist.includes(recipe.outputItems[0].id)) {
            event.remove({ id: recipe.getId() })
        }
    })
})