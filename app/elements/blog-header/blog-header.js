(function() {
    Polymer({
        is: 'blog-header',
        properties: {
            header: String,
            destination: String
        },

        goToDestination: function(e) {
            console.log(this.destination);
        }
    });
})();
