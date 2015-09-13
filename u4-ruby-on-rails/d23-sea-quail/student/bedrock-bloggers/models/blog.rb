require './db/config.rb'
require 'pg'

$db = PG.connect(dbname: 'bedrock_bloggers')

class Blog

  attr_accessor :id, :title, :content, :blogger_id

  def initialize(options={})
    @id = options['id'].to_i
    @title = options['title']
    @content = options['content']
    @blogger_id = options['blogger_id'].to_i
  end # end initialize

  def self.all
    result = $db.exec("SELECT * FROM blogs")
    result.map do |attributes|
      new(attributes)
    end # end .map
  end # end self.all

  def self.find(id)
    result = $db.exec_params("SELECT * FROM blogs WHERE id = $1", [id])
    new(result.first)
  end # self.find

  def self.create(blogger, options={})
    new $db.exec_params("INSERT INTO blogs(blogger_id, title, content) VALUES ($1,$2,$3) RETURNING *", [blogger.id, options[:title], options[:content]]).first
  end

  def blogger

  end

end
