FactoryBot.define do
  factory :robot do
    name 'Robot Name'
    association :robot_configuration

    factory :robot_with_status do
      after(:create) { |robot| create_list(:status, 1, robot: robot) }
    end

    trait :with_batch do
      association :batch
    end
  end
end
