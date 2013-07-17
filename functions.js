Dummy = new Meteor.Collection("dummy");

if (Meteor.isClient) {

  $('#navbar').affix();

  var enableRegistrations = true; // Do you want to enable registrations?
  var eventLink = "#register"; // Your event link goes here

  var email = "kv.prshnt@gmail.com";
  var curator = "us";

  // Default definitions. No need to change unless css is changed
  var registerEnableClass = "btn-danger";
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
    return "Devthon";
  }

  Template.jumbotron.edition = function() {
    return "";
  }

  Template.jumbotron.tagline = function() {
    return "Launchpad for innovation and exploration";
  }

  Template.actions.venueLink = function() {
    return "http://goo.gl/maps/rxkmZ";
  }

  Template.actions.venue = function() {
    return "Progress Software"
  }

  Template.actions.where = function() {
    return "#18, 4th Floor, iLAB's Centre, Madhapur";
  }

  Template.actions.when = function() {
    return "August 10-11, 2013";
  }

  Template.actions.requestInviteText = function() {
    return "Register";
  }

  Template.actions.requestInviteLink = function() {
    return "http://devthonhyd.doattend.com";
  }

  Template.actions.proposalText = function() {
    return "Propose Hack";
  }

  Template.actions.proposalLink = function() {
    return "https://groups.google.com/forum/?fromgroups#!forum/devthon";
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
    var subscribeHtml = enableRegistrations ? "You may also <a href='https://groups.google.com/forum/?fromgroups#!forum/devthon'>propose your own hack</a>!" : "";
    return subscribeHtml;
  }

  Template.actions.buttonClass = function() {
    var buttonClass = enableRegistrations ? registerEnableClass : registerDisableClass;
    return buttonClass;
  }

  Template.actions.isRegistrationOpen = enableRegistrations;

  Template.about.content = function() {
    return "Meet curious and tinkering minds and spend a weekend sparking new ideas, \
    work on existing hacks or explore what you always wanted to work on"
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
    return "Meet curious and tinkering minds and spend a weekend sparking new ideas, \
    work on existing hacks or explore photography/film-making, anything that you love!";
  }

  Template.footer.copyright = function() {
    return "Copyright © 2013 Devthon.";
  }

  Template.navigation.navs = function() {
    return [
          { "text": "Proposals", "link": "https://groups.google.com/forum/?fromgroups#!forum/devthon" }, 
          { "text": "Blog", "link": "http://blog.devthon.org", blank: true },
          { "text": "About", "link": "#about", modal: true }, 
          { "text": "Schedule", "link": "#schedule" }, 
          { "text": "Sponsors", "link": "#sponsors" }, 
          { "text": "Why?", "link": "http://blog.devthon.org/post/44214309416/why-devthon" }, 
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
            { link: "http://mowbly.com", imageUrl: "/sponsors/blr/_mowbly.png", style: "cloudpact", first: true},
            { imageUrl: "/sponsors/blr/azri.png", style: "azri", has_link: false},
    ]
  }

  Template.partners.partners = function() {
    return [
            { link: "http://bdotnet.in", imageUrl: "/sponsors/blr/bdotnet.png", style: "bdotnet"},
            { link: "http://venturehire.in", imageUrl: "/sponsors/blr/vh.png", style: "venturehire"},
            { link: "https://developers.google.com/groups/chapter/104550553343399000979/", imageUrl: "/sponsors/blr/gdgblr.png", style: "gdgblr"},
    ]
  }

  Template.hackers.hackers = function() {
    return [
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
