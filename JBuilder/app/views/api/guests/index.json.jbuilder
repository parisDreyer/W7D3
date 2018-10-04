

json.array! @guests do |guest|

  # json.set! guest.id do
    json.extract! guest, :name, :age, :favorite_color
  # end
end
# json.set! todo.id do
#   json.extract! todo, :id, :title, :body, :done
# end
