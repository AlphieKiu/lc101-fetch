function init() {
    // Add Code for retrieving comments using fetch() from https://jsonplaceholder.typicode.com/
    fetch("https://jsonplaceholder.typicode.com/comments").then(function(response) {
        response.json().then(function(json) {
            let div = document.getElementById("comments")
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                <div class="comments">
                  <ul>
                    <li>Post ID: ${json[i].postID}</li>
                    <li>Comment ID: ${json[i].id}</li>
                    <li>Name: ${json[i].name}</li>
                    <li>Email: ${json[i].email}</li>
                    <li>Comment: ${json[i].body}</li>
                  </ul>
                </div>
            `
            }
        });
    });
    // Then code code for adding the comment JSON values to the <div id="comments"> div using a for loop
}

window.onload = init;