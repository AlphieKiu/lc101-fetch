function init() {
  fetch("https://jsonplaceholder.typicode.com/comments").then( function(response) {
    response.json().then( function(json) {
      const div = document.getElementById("comments");
      div.innerHTML = "";
      for (let i = 0; i < json.length; i++) {
        div.innerHTML += `
          <div class="comment">
            <ul>
              <li>PostID ${json[i].postId}</li>
              <li>CommentID ${json[i].id}</li>
              <li>Name ${json[i].name}</li>
              <li>Email ${json[i].email}</li>
              <li>Body ${json[i].body}</li>
            </ul>
          </div>
        `;
      }
    });
});
}

window.onload = init;