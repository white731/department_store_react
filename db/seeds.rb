# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Department.destroy_all

sports = Department.create(name:"Sports")
    
    10.times do
    sports.items.create(name:Faker::Company.industry,  price: rand(1.5...50.5).round(2))
    end

groceries = Department.create(name:"Groceries")
    
    10.times do
    groceries.items.create(name:Faker::Company.industry , price: rand(1.5...40.5).round(2))
    end

clothing = Department.create(name:"Clothing")
    
    10.times do
    clothing.items.create(name:Faker::Company.industry , price: rand(1.5...50.5).round(2))
    end

toys = Department.create(name:"Toys")
    
    10.times do
    toys.items.create(name:Faker::Company.industry , price: rand(1.5...25.5).round(2))
    end

lawn = Department.create(name:"Lawn and Gardening")
    
    10.times do
    lawn.items.create(name:Faker::Company.industry , price: rand(1.5...30.5).round(2))
    end



puts "seeded"