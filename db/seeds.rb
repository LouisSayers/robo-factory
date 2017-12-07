all_statuses = ['on fire', 'rusty', 'loose screws', 'paint scratched']
all_statuses.each do |description|
  Status.find_or_create_by(description: description)
end
