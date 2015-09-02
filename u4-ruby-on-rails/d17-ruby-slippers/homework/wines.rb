wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

saved_for_special_occasion = wine_cellar[2]
puts saved_for_special_occasion

swill = wine_cellar[3]
puts swill

wine_cellar[0][:color] = 'white'
puts wine_cellar[0][:color]

wine_cellar << { :label => "Joyalicious", :type => "Moscato", :color => "white" }
puts wine_cellar[10]

def retrieves_random_wine_for_party(array)
  wine_sample = array.sample
  puts wine_sample
  array.delete(wine_sample)
end
puts retrieves_random_wine_for_party(wine_cellar)
