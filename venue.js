if (Meteor.isClient) {

  Template.venue.rendered = function() {
    equalHeight($(".thumbnail.space"));
  }

  window.onresize = function(event) {
    equalHeight($(".thumbnail.space"));
  }

  Template.venue.spaces = function() {
    return [
       { 
           "name" : "Discussion Space", 
           "description" : "A place for teams to come together and brainstorm on the hacks. \
                            You will have access to few whiteboards and markers. Make sure to \
                            take turns so other teams can use this space as well!",
           "provision" : "3 whiteboards, markers"
       },
       {
           "name" : "Hack space",
           "description" : "This is where you attain hack nirvana. You let go of \
                            everything and hack away with your soul. It will consist \
                            of few bean bags, tables and chairs and other seating and \
                            of course, WiFi!",
           "provision": "Bean bags, Tables, Chairs"
       },
       {
           "name" : "Presentation space",
           "description" : "This space won't be in use except for lightning talks or \
                            showcases. It will be most crowded towards the end of Devthon. \
                            A projector connected to a laptop will be available here for \
                            presentations.",
           "provision" : "1 projector, 1 power strip"
       }
     ]
  }

}
