angular.module("instaApp", [])
  .controller("pictureSearch", function($http) {
    // this.count = 0;
    this.getPictures = function() {


      var input = this.input;
      var self = this;
      var url = "https://api.instagram.com/v1/tags/" + input + "/media/recent";
      // alert(url);
      var request = {
        client_id: "e6b92ba581bd45abb7f2d9dc91c9c9a8",
        callback: 'JSON_CALLBACK',
        count:21
      };
      $http({
        method: 'JSONP',
        url: url,
        params: request
      })
      .then(function(result) {
        self.results = result.data.data;
        this.input = "";
        // self.cap = self.result[0].caption.from.full_name;
        // self.pic = self.result[0].images.standard_resolution.url;

        console.log(result);
        // console.log(self.pic);
        // console.log(self.user);
        // console.log(self.result[1])
        // alert(this.capt);
        // need a this var //
        //this.result = result.data.data //
          // alert('Success!');
        },
        function () {
        alert('No pictures Found!');
      });
    };

  // this.submit= function ( ) {
    // alert("test");
    // need to submit value to page before this.input is cleared?
    // this.input = "";
    // this.count++;
  // };


  // call to API
  // "https://api.instagram.com/v1/tags/" + video + "/media/recent?access_token=341290126.e6b92ba.ef366927f98e43e2a9fc5b855da43628&max_tag_id=1026669534125882303"
  // callback: 'JSON_CALLBACK'
  // client_id:
});
