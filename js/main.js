$(function() {

/*
* TODO :: Here I would a framework such as AngularJs to construct the framework's implementation of MVC. Here's a primitive MVC structure instead.
* Messages and contacts would be coming from some backend API with a web socket opened to listen for new messages.
* Client-side, these messages could then be stored in something like IndexedDB.
*
*/
var model = {
	selected_contact: null,
	contacts: [
	],
  messages: [
  ]
};

var controller = {
	init: function() {
			view.init();
	},
  selectContact: function() {
    console.log("hello");
    view.rendorContactMessages();
  }
};

var view = {
	init: function() {
    var self = this;
    this.contacts = $(".contacts");
    this.messages = $(".messages");
    $(".contacts__list > .contact").click(function(event) {
      if($(".exit-messages").css("display") !== "none") self.showMessages();
    });
    $(".exit-messages").click(function(event){
      self.showContacts();
    });
	},
	rendorContactMessages: function() {
    this.showContacts();
    this.showMessages();
	},
  showContacts: function() {
    this.messages.hide();
    this.contacts.show();
  },
  //You would typically need to get the individual messages for a contact here.
  showMessages: function(contact = {}) {
    this.contacts.hide();
    this.messages.show();
  },
  showAll: function() {
    this.contacts.show();
    this.messages.show();
  }
};

controller.init();

})
