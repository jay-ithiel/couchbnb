```js
{
  currentUser: {
    id: 1,
    fname: "first-name",
    lname: "last-name",
    email: "email@email.com"
  },

  forms: {
    signUp: { errors: [] },
    signIn: { errors: [] },
    createReview: { errors: [] },
    createMessage: { errors: [] },
    createSpot: { errors: [] },
    createBooking: { errors: [] }
  },

  bookings: {
    1: {
      booking_id: 1
      spot_id: spot-id,
      guest_id: guest-id,
      check-in-date: 01/December/2016,
      check-out-date: 01/January/2017,
      price: "$3000",
      location: "street-address/city/country"
    }
  },

  spots: {
    1: {
      spot_id: 1,
      host_id: host-id,
      host_name: host_name,
      title: "spot-title",
      country: "United States",
      state-region: "California",
      post-code: "94102",
      street-address: "string"
      price: "$100 per night",
      room-type: "private-house/apt/flat",
      bed-count: 4
    }
  },

  reviews: {
    1: {
      id: 1,
      title: "review title",
      body: "review body",
      star-rating: 5,
      author_id: author_id,
      spot_id: spot_id
    }
  },

  messages: {
    subject: "message subject",
    body: "message body",
    author_id: author_id,
    recipient_id: recipient_id
  }
}
```
