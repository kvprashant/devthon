if (Meteor.isClient) {

  $('#navbar').affix();

  var enableRegistrations = false; // Do you want to enable registrations?
  var eventLink = "http://doattend.com"; // Your event link goes here

  var partnersDir = "/partners/";
  var email = "kv.prshnt@gmail.com";
  var curator = "Prashant";

  // Default definitions. No need to change unless css is changed
  var registerEnableClass = "btn-warning";
  var registerDisableClass = "btn-disable";

  Template.jumbotron.title = function() {
    return "Devthon";
  }

  Template.jumbotron.edition = function() {
    return "1st";
  }

  Template.jumbotron.when = function() {
    return "March 30-31";
  }

  Template.jumbotron.tagline = function() {
    return "Launchpad for ideas, code contributions and discussions";
  }

  Template.jumbotron.requestInviteText = function() {
    return "Request Invite";
  }

  Template.jumbotron.requestInviteLink = function() {
    return "#request";
  }

  Template.jumbotron.ticketLink = function() {
    var ticketLink = enableRegistrations ? eventLink : "";
    return ticketLink;
  }

  Template.jumbotron.ticketText = function() {
    var ticketText = enableRegistrations ? "Already invited? " : "Invitations and Hack proposals will open soon. ";
    return ticketText;
  }

  Template.jumbotron.subscribeHtml = function() {
    var subscribeHtml = enableRegistrations ? "For updates, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a>" 
                                         : "Meanwhile, <a href='http://eepurl.com/vyCzb' target='_blank'>subscribe</a> for updates. ";
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
    return "Devthon is a launchpad for ideas, code contributions and discussions. \
            Meet curious and tinkering minds and spend a weekend getting a high on new ideas, code and hardware. \
            This is a developer marathon running on caffeine and <a href='http://en.wikipedia.org/wiki/Vada_pav' target='_blank'>vada pav</a>.";
  }

  Template.about.contact = function() {
    return "Mail <a href='mailto:" + email + "'>" + curator + "</a> if you are interested in participating.";
  }

  Template.footer.copyright = function() {
    return "Copyright © 2013 Devthon.";
  }

  Template.navigation.navs = function() {
    return [
            { "text": "Hacks", "link": "http://www.google.com/moderator/#16/e=2052b0" }, 
	    { "text": "About", "link": "#about" }
	   ]
  }

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
