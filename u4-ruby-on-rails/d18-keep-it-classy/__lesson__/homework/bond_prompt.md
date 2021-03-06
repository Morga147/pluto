## Her Majesty's Secret Service

![:image](http://media.giphy.com/media/3ZRsipv0ygPKM/giphy.gif)

You'll be writing code using iterator methods ( ***`.map`***,***`select`***, etc) to sort through the data in `bond_data.rb`

### The Problem

One of GA's core principals is "bring data to the conversation."  Our problem is we can't really talk about James Bond unless we have some data on who really was the best Bond.  Tonight you'll use a module in `bond_data.rb`, which contains all the data needed to anwer some tough questions.

#### Instructions

## Setup

1. Create a new folder `homework`, and inside it, a file called `bond_answers.rb`
1. `require_relative` the `bond_data.rb` file at the top of `bond_answers.rb`
1. In `bond_data.rb` is a Module called `Bond` with a constant called `MOVIE_DATA`
1. One can say that `MOVIE_DATA` is [**namespaced**](http://stackoverflow.com/questions/5032844/ruby-what-does-prefix-do) within the `Bond` module. To access it's data you need merely call `Bond::MOVIE_DATA`.
1. Write methods in `bond_answers.rb` to complete the following steps below to use the movie data and solve each problem. If you are stuck or unsure you can search the [array](http://www.ruby-doc.org/core-2.2.0/Array.html) and [hash](http://ruby-doc.org/core-2.2.0/Hash.html) docs for useful methods!
1. To test your methods individually, run `load bond_answers.rb` in pry, and call each function manually. Alternatively, you could put a function call in your ruby file and run `ruby bond_answers.rb` in terminal and examine the output.

### Completion

**Finish at least up to Number 6.** As always: more is better; healthy living is best. Only do the bonus if you have completed every single part. Do not expect to get the bonus finished EVER.

1. Write a method, `get_gross_for`, that takes a movie title ( a `string`) and the `array` of `MOVIE_DATA` as inputs and returns the gross of that movie as an `integer`. Use it on several films to ensure that it works as intended.

1. Combine your knowledge of iteration and arithmetic to determine the total cumulative gross of the Bond franchise. Save it to a sensibly-named variable.

1. Create a new array with the names of the all actors who have ever played Bond, but with no duplicates. (One Roger Moore is more than enough.) Assign it to a sensibly-named variable.

1. Create a new array of strings from `MOVIE_DATA` with the names of al the Bond films. Assign it to a sensibly-named variable.

1. Create a new array of hashes of only the bond films released on odd-numbered years. Assign it to a sensibly-named variable.

1. Create a variable called `worst_grossing_bond`. Use all the tools at your disposal (and perhaps one or two you have yet to discover) to iterate through all the films and return the film with the lowest gross. Store the returned film hash in the variable `worst_grossing_bond`.

1. Similarly, create a variable called `highest_grossing_bond` and use your programming powers to return the highest grossing film hash, storing it to `highest_grossing_bond`.

1. Create a new array, `movies_per_actor`, where each value in the array is a hash where the key is the Bond actor's name and the value is their total number of films.  For example `{ "Daniel Craig" => 3 }`

1. Sort the `MOVIE_DATA` array by year of release, with the earliest films first. Store it in a variable called `sorted_by_release`

#### Bonus
1. Find a method to use on your `movies_per_actor` array that identifies __and returns__ the hash of the actor who starred in the least number of films.

1. Find a method to sort the `MOVIE_DATA` array of hashes by gross, with the highest grossing films first. Store it in a variable called `sorted_by_gross`.

1. Write methods that accomplish each of the above questions.

### Bonus Reading Material

- **Enumeration Methods**
  - [Using these methods](http://www.eriktrautman.com/posts/ruby-explained-map-select-and-other-enumerable-methods)
  - more practice with [Ruby Monk](http://rubymonk.com/learning/books/4-ruby-primer-ascent/chapters/44-collections/lessons/98-iterate-filtrate-and-transform)
- **Object-Oriented Programming**
  - [The Ruby Object Model](http://www.hokstad.com/ruby-object-model)
  - [the Pragmatic Guide's in-depth intro to Classes and Objects in Ruby](http://phrogz.net/programmingruby/tut_classes.html)
  - [Inheritance (Classical and Mixin), and Composition](http://naildrivin5.com/blog/2012/12/19/re-use-in-oo-inheritance.html)
