json.partial! 'api/guests/guest', guest: @guest
json.gifts @guest.gifts, :title, :description
# json.guest do
#   json.gifts do
#     json.title guest.gifts.title
#     json.description guest.gifts.description
#   end
# end
