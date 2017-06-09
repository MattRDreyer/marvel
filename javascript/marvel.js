(function() {

  $(function() {

    var name = $("#name");
    var nameSearch = $("#nameSearch");
    var characterSearch = $("#characterSearch"); //button search first letters
    var characterString;
    var characterTable = $("#characterTable");

    $.get("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=5cb1d371538bd4d2e369ae5748207fd2&hash=4bec04c2daa693cf330b36139d571983", function(data) { // data is an arbitrary word, but is used below as well... word should match
      $.each(data.data.results, function(index, value) {
        let image = value.thumbnail.path + '.' + value.thumbnail.extension
        console.log(value.name); //checking for name
        console.log(image); //checking for image

        characterTable.append('<tr><td>' + value.name + '</td><td><img src=' + image + ' height = 300px width = auto>');


      })
    })

    characterSearch.click(function() {
      characterString = nameSearch.val();
      console.log(characterString);
      $("#characterTable tr").detach();



      $.get(("https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=5cb1d371538bd4d2e369ae5748207fd2&hash=4bec04c2daa693cf330b36139d571983&nameStartsWith=" + characterString), function(data) { // data is an arbitrary word, but is used below as well... word should match
        $.each(data.data.results, function(index, value) {
          let image = value.thumbnail.path + '.' + value.thumbnail.extension
          console.log(value.name); //checking for name
          console.log(image); //checking for image

          characterTable.append('<tr><td>' + value.name + '</td><td><img src=' + image + ' height = 300px width = auto>');


        })
      })
    })
  })


})();
