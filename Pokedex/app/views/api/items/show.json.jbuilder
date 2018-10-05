json.item do
  json.extract! @item, :id, :name, :happiness, :price
  json.image_url asset_path(@item.image_url)
end
