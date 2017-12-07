FactoryBot.define do
  factory :robot_configuration do
    has_sentience true
    has_wheels true
    has_tracks true
    number_of_rotors 4
    colour 'blue'
  end
end

