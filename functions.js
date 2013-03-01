if (Meteor.isClient) {

  $('#navbar').affix();

  var enableRegistrations = true; // Do you want to enable registrations?
  var eventLink = "#register"; // Your event link goes here

  var partnersDir = "/partners/";
  var email = "kv.prshnt@gmail.com";
  var curator = "us";

  // Default definitions. No need to change unless css is changed
  var registerEnableClass = "btn-warning";
  var registerDisableClass = "btn-disable";

  Template.jumbotron.title = function() {
    return "Devthon 0.1d";
  }

  Template.jumbotron.edition = function() {
    return "";
  }

  Template.jumbotron.when = function() {
    return "March 30-31";
  }

  Template.jumbotron.tagline = function() {
    return "Launchpad for ideas, code contributions and discussions";
  }

  Template.jumbotron.requestInviteText = function() {
    return "Register";
  }

  Template.jumbotron.requestInviteLink = function() {
    return "#register";
  }

  Template.jumbotron.ticketLink = function() {
    var ticketLink = enableRegistrations ? eventLink : "";
    return ticketLink;
  }

  Template.jumbotron.ticketText = function() {
    var ticketText = enableRegistrations ? "Already registered? " : "Registrations will open soon. ";
    return ticketText;
  }

  Template.jumbotron.subscribeHtml = function() {
    var subscribeHtml = enableRegistrations ? "For updates, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a>" 
                                         : "Meanwhile, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a> for updates or \
					 <a href='http://proposals.devthon.org' target='_blank'>propose a hack</a>.";
    return subscribeHtml;
  }

  Template.jumbotron.buttonClass = function() {
    var buttonClass = enableRegistrations ? registerEnableClass : registerDisableClass;
    return buttonClass;
  }

  Template.jumbotron.isRegistrationOpen = enableRegistrations;

  Template.jumbotron.price = function() {
    return "Rs. 1000";
  }

  Template.about.content = function() {
    return "Launchpad for ideas, code contributions and discussions.Meet curious \
	    and tinkering minds and spend a weekend sparking new product ideas, \
	    Opensource code contributions or hacking hardware. You could even hack \
	    on furniture or food too.";
  }

  Template.about.mission = function() {
    return "We believe in the true blue 'hacking culture' of doing it because you \
	    love it. There are too many hackathons focusing on contests, hiring events \
	    or startups but none on hacking because its 'fun'. At the heart of all \
	    innovation is the culture of hacking and exploration. We want to \
	    encourage this culture through Devthon."
  }

  Template.about.contact = function() {
    return "Mail <a href='mailto:" + email + "'>" + curator + "</a> if you are interested in participating.";
  }

  Template.footer.copyright = function() {
    return "Copyright © 2013 Devthon.";
  }

  Template.navigation.navs = function() {
    return [
            { "text": "Proposals", "link": "http://proposals.devthon.org" }, 
	    { "text": "About", "link": "#about" },
	    { "text": "Blog", "link": "http://blog.devthon.org" },
	   ]
  }

  Template.discussions.events({
    'click a.thumbnail': function(event) {
      event.preventDefault();
    }
  });

  Template.discussions.tracks = function() {
    return [
       { 
           "name" : "Web Hacks", 
           "description" : "Hacks around web frameworks on Python (Django, web2py, etc), \
                            PHP (Codeigniter, Yii, Drupal, etc), Javascript (Node.js, meteorjs, etc) \
                            or any other framework you can think of!",
           "link" : "#"
       },
       {
           "name" : "Mobile Hacks",
           "description" : "Project ideas and hacks using mobile operating systems like \
                            Android and iOS or mobile development frameworks like Phonegap, Sencha, Kivy, etc",
           "link": "#"
       },
       {
           "name" : "Hardware hacks",
           "description" : "Get involved in awesome hardware hacks using Leap Motion, \
                            Arduino, Raspberry Pi or any hardware. You can get your own hardware too!",
           "link" : "#"
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

  Template.facebook.created = function() {
    return (function(d, s, id) {
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) return;
             js = d.createElement(s); js.id = id;
             js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=450411951699240";
             fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // In your server code: define a method that the client can call
  });
}
