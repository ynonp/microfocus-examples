// read: https://tocode.co.il/blog/2016-07-ajax
//
class ChatWindow {
  constructor (el) {
    this.form = el.querySelector('form');
    this.panel = el.querySelector('ul');
    this.btnRefresh = el.querySelector('#btnRefresh');
    this.msgEl = this.form.querySelector('input');

    this.form.addEventListener('submit', this.sendMessage.bind(this));
    this.btnRefresh.addEventListener('click', this.refresh.bind(this));
    this.template = Handlebars.compile(`
      {{#each messages}}
        <li>{{this}}</li>
      {{/each}}
    `);
  }

  sendMessage (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/messages');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', this.refresh.bind(this));
    xhr.send(JSON.stringify({text: this.msgEl.value}));
    this.msgEl.value = '';
  }

  refresh () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/messages');
    xhr.addEventListener('load', this.showMessages.bind(this));
    xhr.send();
  }

  showMessages (ev) {
    const data = JSON.parse(ev.target.responseText);
    this.panel.innerHTML = this.template({ messages: data });
  }
}

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

const root = document.querySelector('#messages');
const chat = new ChatWindow(root);

setInterval(chat.refresh.bind(chat), 1000);

