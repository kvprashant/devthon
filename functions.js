if (Meteor.isClient) {

  $('#navbar').affix();

  var enableRegistrations = true; // Do you want to enable registrations?
  var eventLink = "#register"; // Your event link goes here

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
           "description" : "Hacks around web using HTML5 or Python (Django, web2py, etc), \
                            PHP (Codeigniter, Yii, Drupal, etc), Javascript (Node.js, meteorjs, etc) \
                            or any other framework you can think of!",
           "link" : "#"
       },
       {
           "name" : "Mobile Hacks",
           "description" : "Project ideas and hacks using mobile operating systems like \
                            Android, iOS or the newest Firefox OS and mobile development frameworks \
                            like Phonegap, Sencha, Kivy, etc",
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
             { link: "http://azrisolutions.com", imageUrl: "/sponsors/azri.png", style: "azri" },
    ]
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // In your server code: define a method that the client can call
  });
}
