if (Meteor.isClient) {

  $('#navbar').affix();

  var enableRegistrations = true; // Do you want to enable registrations?
  var eventLink = "#register"; // Your event link goes here

  var email = "kv.prshnt@gmail.com";
  var curator = "us";

  // Default definitions. No need to change unless css is changed
  var registerEnableClass = "btn-warning";
  var registerDisableClass = "btn-disable";

  function resetHeight(group) {
    group.each(function() { $(this).height(0); });
  }

  function equalResetHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;       
        }    
    });
    group.each(function() { $(this).height(tallest); });
  } 

  function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();       
        if(thisHeight > tallest) {
            tallest = thisHeight;       
        }    
    });
    group.each(function() { $(this).height(tallest); });
  } 

  Template.jumbotron.title = function() {
    return "Devthon 0.1d";
  }

  Template.jumbotron.edition = function() {
    return "";
  }

  Template.jumbotron.tagline = function() {
    return "Launchpad for ideas, code contributions and discussions";
  }

  Template.actions.where = function() {
    return "Hyderabad";
  }

  Template.actions.when = function() {
    return "March 30-31";
  }

  Template.actions.requestInviteText = function() {
    return "Register";
  }

  Template.actions.requestInviteLink = function() {
    return "#register";
  }

  Template.actions.proposalText = function() {
    return "Propose Hack";
  }

  Template.actions.proposalLink = function() {
    return "http://proposals.devthon.org";
  }

  Template.actions.ticketLink = function() {
    var ticketLink = enableRegistrations ? eventLink : "";
    return ticketLink;
  }

  Template.actions.ticketText = function() {
    var ticketText = enableRegistrations ? "Already registered? " : "Registrations will open soon. ";
    return ticketText;
  }

  Template.actions.subscribeHtml = function() {
    var subscribeHtml = enableRegistrations ? "For updates, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a>" 
                                         : "Meanwhile, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a> for updates or \
					 <a href='http://proposals.devthon.org' target='_blank'>propose a hack</a>.";
    return subscribeHtml;
  }

  Template.actions.buttonClass = function() {
    var buttonClass = enableRegistrations ? registerEnableClass : registerDisableClass;
    return buttonClass;
  }

  Template.actions.isRegistrationOpen = enableRegistrations;

  Template.about.content = function() {
    return "Meet curious and tinkering minds and spend a weekend sparking new product ideas, \
	    open source code contributions or hacking hardware. You could even hack \
	    on furniture or food too. We want to encourage this culture through Devthon."
  }

  Template.about.mission = function() {
    return "We believe in the true blue 'hacking culture' of doing it because you \
	    love it. There are too many hackathons focusing on contests, hiring events \
	    or startups but none on hacking because its 'fun'. At the heart of all \
	    innovation is the culture of hacking and exploration."
  }

  Template.about.contact = function() {
    return "Mail <a href='mailto:" + email + "'>" + curator + "</a> if you are interested in volunteering.";
  }

  Template.details.content = function() {
    return "Meet curious and tinkering minds and spend a weekend sparking new product ideas, \
	    open source code contributions or hacking hardware.";
  }

  Template.footer.copyright = function() {
    return "Copyright © 2013 Devthon.";
  }

  Template.navigation.navs = function() {
    return [
            { "text": "Proposals", "link": "http://proposals.devthon.org" }, 
            { "text": "About", "link": "#about", modal: true }, 
            { "text": "Hackers", "link": "#hackers" }, 
            { "text": "Schedule", "link": "#schedule" }, 
            { "text": "Sponsors", "link": "#sponsors" }, 
            { "text": "Venue", "link": "#venue" }, 
	    { "text": "Blog", "link": "http://blog.devthon.org", blank: true },
	   ]
  }

  Template.discussions.tracks = function() {
    return [
       { 
           "name" : "Spatial gesture sign language recognition", 
           "description" : "Recognize basic sign language gestures using the \
                            Leap Motion and translate the signs into text. Leap \
                            Motion provides an SDK with Python, Java, Javascript, \
                            other APIs",
           "link" : "http://proposals.devthon.org/proposal/s9iymKP9uT5hMS2AN",
       },
       {
           "name" : "Python Twisted CometD Server + Javascript Client",
           "description" : "CometD is a scalable HTTP-based event routing bus that \
                            uses a Ajax Push technology. The primary purpose of \
                            Twisted CometD server + client is to implement responsive \
                            user interactions for web clients.",
           "link" : "http://proposals.devthon.org/proposal/4awp5Atb3ZwmTN9LZ"
       },
       {
           "name" : "Symbol font for Indian states using HTML, CSS",
           "description" : "Create a symbol font that makes it easy to create map of \
                            India using HTML & CSS. This project makes the creators of \
                            simple visualizations easier. Inspiration is drawn from \
                            Intridea's Stately.",
           "link" : "http://proposals.devthon.org/proposal/aSd7QADBrvjWRCmvv"
       },
       {
           "name" : "Know Your Bus",
           "description" : "Based upon the source and destination areas selected, \
                            the user will be displayed with all the buses in the \
                            specific route along with the map. This application \
                            definitely make the user easy to travel.",
           "link" : "http://proposals.devthon.org/proposal/PZCyvskZGFJvBeknE"
       }
     ]
  }

  Template.setup.created = function() {
    if (!(window._gaq != null)) {
      window._gaq = [];
      _gaq.push(['_setAccount', 'UA-38480319-1']);
      _gaq.push(['_trackPageview']);
      return (function() {
        var ga, gajs, s;
        ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        gajs = '.google-analytics.com/ga.js';
        ga.src = document.location.protocol === 'https:' ? 'https://ssl' + gajs : 'https://www' + gajs;
        s = document.getElementsByTagName('script')[0];
        return s.parentNode.insertBefore(ga, s);
      })();
    }
  };

  Template.twitter.created = function() {
    return !function(d,s,id) {
             var js,fjs = d.getElementsByTagName(s)[0];
             if(!d.getElementById(id)){
               js=d.createElement(s);
               js.id=id;
               js.src="//platform.twitter.com/widgets.js";
               fjs.parentNode.insertBefore(js,fjs);
             }
     }(document,"script","twitter-wjs");
  }

  Template.prashant.rendered = function() {
    return !function(d,s,id) {
             var js,fjs = d.getElementsByTagName(s)[0];
             if(!d.getElementById(id)){
               js=d.createElement(s);
               js.id=id;
               js.src="//platform.twitter.com/widgets.js";
               fjs.parentNode.insertBefore(js,fjs);
             }
     }(document,"script","twitter-wjs");
  }

  Template.harish.rendered = function() {
    return !function(d,s,id) {
             var js,fjs = d.getElementsByTagName(s)[0];
             if(!d.getElementById(id)){
               js=d.createElement(s);
               js.id=id;
               js.src="//platform.twitter.com/widgets.js";
               fjs.parentNode.insertBefore(js,fjs);
             }
     }(document,"script","twitter-wjs");
  }

  Template.facebook.created = function() {
    return (function(d, s, id) {
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) return;
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=450411951699240";
             fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  Template.sponsors.sponsors = function() {
    return [
             { link: "http://mowbly.com", imageUrl: "/sponsors/_mowbly.png", style: "cloudpact" },
             { link: "http://mozilla.org", imageUrl: "/sponsors/mozilla_wordmark.png", style: "mozilla" },
             { link: "http://azrisolutions.com", imageUrl: "/sponsors/azri.png", style: "azri" },
             { link: "http://handsmedia.in", imageUrl: "/sponsors/hands.png", style: "hands" },
    ]
  }

  Template.hackers.hackers = function() {
    return [
             { name: "Prajwala Manchikatla", imageUrl: "/hackers/prajwala.jpg", handle: "prajwala" },
             { name: "Kashyap KMBC", imageUrl: "/hackers/kgrz.jpg", handle: "kgrz" },
             { name: "Charan Puvvala", imageUrl: "/hackers/charan.jpg", handle: "f4k1r" },
             { name: "Ravi Teja", imageUrl: "/hackers/ravi.jpg", handle: "ravitheboss" },
    ]
  }

  Template.discussions.rendered = function() {
    equalResetHeight($("#hacks .thumbnails li .track"));
  }

  $(window).resize(function() {
    equalResetHeight($("#hacks .thumbnails li .track"));
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // In your server code: define a method that the client can call
  });
}
