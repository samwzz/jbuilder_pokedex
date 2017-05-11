json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
json.image_url asset_path(@pokemon.image_url)
json.items @pokemon.items, :id, :name, :pokemon_id, :price, :happiness
# json.image_url asset_path(@pokemon.items.image_url)
