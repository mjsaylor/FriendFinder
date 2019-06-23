$(".submit").on("click", function (event) {
  event.preventDefault();

  // Here we grab the form elements
  const friend = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    // document.querySelectorAll returns a list of all elements that match the given selector (returns as array-like object)
    //[...] is the spread operator. It turns an "array-like" object into an array
    // map function maps over the array
    scores: [...document.querySelectorAll(".survey-option")].map(select => select[select.selectedIndex].value)
  };

  console.log(friend);

  $.post("/api/friends", friend,
    function (data) {
      console.log(data)
      $("#yourFriend").append(`<span class="friend-name">${data.name}</span>
        <span class="friend-photo"><img src="${data.photo}"></span>`)
      $("#friendModal").show()
    });
});