// read: https://tocode.co.il/blog/2016-07-ajax
//
const templateString = `
  <div style="background-color:{{favoriteColor}}">
    <p><b>Title: </b>{{title}}</p>
    <p><b>Name: </b>{{name}}</p>
    <h4>{{name}} likes</h4>
    <ul>
    {{#each likes}}
      <li>{{this}}</li>
    {{/each}}
    </ul>
  </div>
`;

const template = Handlebars.compile(templateString);

function showResponse (ev) {
  const xhr = ev.target;
  if (xhr.status !== 200) {
    alert('error...');
    return;
  }

  const jsonData = JSON.parse(xhr.responseText);
  document.querySelector('#tgt').innerHTML = template(jsonData);
}

function getDataFromServer (ev) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/friends/23');
  xhr.addEventListener('load', showResponse);
  xhr.send();
  // $.getJSON('/hello', showResponse);
}

const btn = document.querySelector('button');
btn.addEventListener('click', getDataFromServer);
