if (Meteor.isClient) {

Meteor.startup(function () {
    var video = document.querySelector("#videoElement");
 
              navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
              if (navigator.getUserMedia) {       
                navigator.getUserMedia({video: true}, handleVideo, videoError);
              }
 
              function handleVideo(stream) {
                video.src = window.URL.createObjectURL(stream);
              }
 
              function videoError(e) {
                  // do something
              }
});

  Template.body.helpers({
    photo: function () {
      return Session.get("photo");
    },

  });

  Template.body.events({
    'click button': function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });
    }
  });
}

  

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

  });
}