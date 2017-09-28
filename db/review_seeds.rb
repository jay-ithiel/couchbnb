module ReviewsFactory
  positive = [
    "We absolutely loved our stay here! Definitely would recommend",
    "Wonderful spot for our kids and spouse to take some much needed time off",
    "Loved the location! Right by public transport and a variety of food options",
    "Loved our stay! Would come back if we're ever in the city again",
    "Amazing spot",
    "You won't have any regrets staying here",
    "You will regret not staying here",
    "Thumbs up",
    "100%",
    "A++",
    "Amazing",
    "Awesome spot",
    "Love the house",
    "Such an amazing house and location. Will definitely be back",
    "Our friends loved this place.",
    "This was our first time using Couchbnb. Had a great experience - loved the house, location, simplicity and the service. We will be using Couchbnb to travel more often",
    "Not bad",
    "Lovely",
    "Quaint home",
    "YES yes yes yes yes!",
    "Couldn't have asked for a better experience for our honeymoon!"
  ]

  negative = [
    "Never coming back here",
    "Very difficult communicating with the Host. They were never available. Will not be staying here again",
    "Bad",
    "Horrible",
    "Terrible. DO NOT stay here! Need I say more?",
    "This spot ruined our honeymoon trip! Extremely disappointing",
    "This place looks like it hasn't been cleaned properly in 15 years",
    "We had a terrible time staying here",
    "Everything about our trip was gold - except this spot. Dirty sheets, blinds, bathroom. And where's that funky smell coming from?",
    "This place smells funky",
    "The host is extremely deceptive. DO NOT TRUST!",
    "Annoying neighbors. Will not be back",
    "Not impressed"
  ]


  500.times do
    Review.create!({
      guest_id: 1 + rand(69),
      spot_id: 1 + rand(200),
      body: negative.shuffle[0],
      rating: rand(2) + 1
    })
  end

  4000.times do
    Review.create!({
      guest_id: 1 + rand(69),
      spot_id: 1 + rand(200),
      body: positive.shuffle[0],
      rating: rand(2) + 4
    })
  end

  90.times do
    Review.create!({
      guest_id: 2 + rand(69),
      spot_id: 1 + rand(3),
      body: positive.shuffle[0],
      rating: 5
    })
  end
end
