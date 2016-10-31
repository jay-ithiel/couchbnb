{
  currentUser: {
    id: 1,
    fname: "first-name",
    lname: "last-name",
    email: "email@email.com",
    reviews: {
      1: {
        id: 1,
        title: "title",
        body: "body",
        star-rating: "* * * * * ",
        author_id: 1
        spot_id: spot_id
      }
    }
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
      host_id: host-id,
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
      title: "spot-title",
      location: "spot-location",
      price: "$100 per night",
      spotDetails: {
        room-type: "private-house/apt/flat",
        max-guests: 4,
        bed-count: 4,
        bathroom-count: 2.5,
        kitchen: true,
        pet-friendly: true,
        air-conditioning: true,
        heating: true,
        parking: true,
      },
      reviews: {
        1: {
          id: 1,
          title: "review title",
          body: "review body",
          star-rating: "* * * * * ",
          author_id: author_id,
          spot_id: spot_id
        }
      }
    }
  },

  messages: {
    subject: "message subject",
    body: "message body",
    author_id: author_id,
    recipient_id: recipient_id
  }
}
