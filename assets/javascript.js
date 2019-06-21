$(document).ready(function() {
    // $("#search").on("click", function() {
  var searchTerm = $("#searchBar").attr("data");
  var searchTerm = "election";

  var beginDate = "19000101";
  var endDate = "20191231";

  // if ($("#beginDate").attr("data") !== "") {
  //   beginDate = $("#beginDate").attr("data");
  // }

  // if ($("#endDate").attr("data") !== "") {
  //   endDate = $("endDate").attr("data");
  // }

  $.ajax({
    url:
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&begin_date=" +
      beginDate +
      "&end_date=" +
      endDate +
      "&api-key=KszjBSR05bvGSLAEBIwd46iRdt5oyBCL",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var records = response.response.docs;
    console.log(records);

      if ($("#numRecords").attr("data") !== "") {
    // output  number of record that was told
        var numberToOutput = $('#numRecords').attr('data');

        for (var i = 0; i < numberToOutput; i++) {

        }

      } else {

        for (var i = 0; i < records.length; i++) {
          
        }

      }
  });
    // });


    $('#clear').on('click', function() {

    });

    $("#search").on("click", function(event) {
      event.preventDefault();
      var searchTerm = $("#searchTerm").val();
      var recordsToRetrieve = $("#recordsToRetrieve").val();
      console.log(searchTerm);
      console.log(recordsToRetrieve);
    });
    
});
