class Track < ApplicationRecord
  validates :title, :ord, presence: true
  validates :title, uniqueness: true

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_one :band,
    through: :album,
    source: :band

end
