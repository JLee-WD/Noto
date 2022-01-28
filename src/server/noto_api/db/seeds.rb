# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.create(title: "useState()", description: "Use state is used for local state", code: "useState()", public: true)
Note.create(title: "useEffect()", description: "Use effect is used for side effects", code: "useEffect()", public: true)
Note.create(title: "useReducer()", description: "Use reducer is used for other functions", code: "useReducer()", public: true)