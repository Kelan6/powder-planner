# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name: 'kelan', password: 'kelan', email: 'kelan@yahoo.com', snowboarder: true)
User.create(name: 'alyssa', password: 'alyssa', email: 'alyssa@yahoo.com', snowboarder: true)

Mountain.create(title: 'Keystone', address: '100 Dercum Square, Keystone, CO 80435', elevation: '12,408 feet')
Mountain.create(title: 'Breckenridge', address: '1599 Ski Hill Rd, Breckenridge, CO 80424', elevation: '12,998 feet')

Event.create(user_id: 1, mountain_id: 2, name: 'Shred Schoolmarm')
Event.create(user_id: 2, mountain_id: 1, name: 'Meet me at Peak 6')

Lift.create(title: 'Montezuma', mountain_id: 1)
Lift.create(title: 'Kensho Super Chair', mountain_id: 2)