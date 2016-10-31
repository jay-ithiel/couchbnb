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
      host_id: "host-id",
      guest_id: "guest-id",
      check-in-date: "01/December/2016",
      check-out-date: "01/January"/2017,
      price: "$3000",
      location: "street-address/city/country"
    }
  },

  spots: {
    1: {
      spot_id: 1,
      host_id: host-id
    }
  }
}
