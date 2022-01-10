// First define your tour.
var tour = {
  "id": "hello-hopscotch",
  "steps": [
    {
      "target": "profile-picture",
      "placement": "right",
      "title": "Profile Picture",
      "content": "This is your profile picture. Looking good!"
    },
    {
      "target": "find-conn",
      "placement": "bottom",
      "title": "Find Connections",
      "content": "The internet is always more fun when you connect with others. Find some connections by clicking here."
    }
  ]
};

// Then start the tour.
hopscotch.startTour(tour);