require 'fileutils'
class Photo < ActiveRecord::Base
  attr_accessor :upload
  after_save do
    if @upload
      upload_path = Rails.root.join('public', 'photos',"#{id}.orig"+File.extname(@upload.path))
      FileUtils.copy(@upload.path, upload_path)
      PhotoResizerWorker.perform_async(id, @upload.path)
    end #@upload
  end #after_save
end #Photo
