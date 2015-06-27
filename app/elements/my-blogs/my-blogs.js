(function() {
    Polymer({
        is: 'my-blogs',
        properties: {
            headers: {
                type: Array,
                value: [
                    {name: "Blogs", destination: "http://garimasharma.github.io/"},
                    {name: "Githib", destination: "https://github.com/GarimaSharma"},
                    {name: "Twitter", destination: "https://twitter.com/gariimash"},
                    {name: "About me", destination: "https://about.me/garimash"}]
            }
        }
    });
})();
