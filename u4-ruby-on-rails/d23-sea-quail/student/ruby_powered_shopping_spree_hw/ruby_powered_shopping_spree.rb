require 'pry'
require 'pg'

$pg_conn = PG.connect(dbname: 'shopping_db')
#======================
# Starter Data
#======================
stores = ["Street Vendor", "The White House Gift Shop", "Nordstrom Rack", "The Cake Ambiance"]

quantities = [5, 10, 15, 2, 7]

prices = [4.99, 9.99, 50.00, 75.00, 100.00]

items = [
  "Gummy Cola Bottle",
  "Guava Candy",
  "Taco",
  "Bibimbop",
  "Burrito",
  "Channa Masala",
  "Lettuce Wrap",
  "PIZZA",
  "Cheese",
  "(Disney Soundtrack)",
  "Whiskey",
  "Athletic Socks",
  "Teach Like a Champion",
  "Practice Perfect"
]
5.times do
  insert_statement = "INSERT INTO receipts(store, item, number_of_items, price, buy_date) VALUES ($1,$2,$3,$4,$5) RETURNING *"
  $pg_conn.exec_params(insert_statement,[stores.sample,items.sample,quantities.sample,prices.sample,Date.today])
end

$pg_conn.exec_params("UPDATE receipts SET item='Giants Jersey' WHERE item='49ers Jersey'")
$pg_conn.exec_params("UPDATE receipts SET item='PS4', price='$350' WHERE price='$400'")

partfour = $pg_conn.exec_params("UPDATE receipts SET returned=true WHERE id IN (SELECT id FROM receipts ORDER BY random() LIMIT 8)")

$pg_conn.finish
