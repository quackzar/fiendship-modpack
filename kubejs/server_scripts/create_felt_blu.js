onEvent('block.break', event => {
	
	// Code to spawn a given item similar to how vanilla does
	let spawnItem = (item) => {
		
		let entity = event.block.createEntity('minecraft:item')
		entity.item = item
		
		// Center the item
		entity.x += 0.5
		entity.z += 0.5 
		
		// Add a random motion in all three axis
		let heading = 360 * Math.random()
		let xspeed = 0.1 * Math.random() * Math.sin(heading)
		let zspeed = 0.1 * Math.random() * Math.cos(heading)
		let yspeed = (0.2 * Math.random()) + (0.2 * Math.random()) // To get a better average
		entity.addMotion(xspeed, yspeed, zspeed)

		entity.spawn()
	}
	
	// Make Immersive Engineering crates drop items
	let dropableContainers = [
		'immersiveengineering:crate'
		// To add another container like reinforced crates, put a comma after the first line and add them here
		// For example:
		// 'immersiveengineering:reinforced_crate',
		// 'minecraft:shulker_box'
	]
	if (dropableContainers.includes(event.block.id)) {
		
		let inventory = event.block.getInventory(Direction.UP) // Direction doesnt matter
		for (let i = 0; i < inventory.size; i++) {
			if (inventory.get(i).toString() != 'Item.empty') {
				spawnItem(inventory.get(i))
			}
		}
		
		// Destroy old crate and spawn new empty one
		event.block.set('air')
		spawnItem(event.block.id)
		
		event.cancel()
	}
})