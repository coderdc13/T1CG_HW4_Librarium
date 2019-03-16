
//was not able to get buttons working...
//directly below, wrote in html file where IDs are...
const statusRead = document.getElementById('statusRead');
const statusNotRead = document.getElementById('statusNotRead');
const button = document.querySelector('#checkBooks');
//directly below is array whose individual elements may be seen as untitle objects with three 
//property:property-value pairs each...
const library = [
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marijn Haverbek',
    readingStatus: 'true',
  },
  {
    title: 'Second Book',
    author: 'Second Author',
    readingStatus: 'false',
  },
  {
    title: 'Third Book',
    author: 'Third Author',
    readingStatus: 'true',
  },
  {
    title: 'Fourth Book',
    author: 'Fourth Author',
    readingStatus: 'false',
  },
];
//directly below is an increment function with if else statment inside...
checkStoredBooks = () => {
  for (let i = 0; i < library.length; i++) {
    let book = ["'" + library[i].title + "'" + ' by ' + library[i].author + '.'];
    if (library[i].readingStatus === 'true') {
      const linebreak = document.createElement('br');
      statusRead.append(book);
      statusRead.appendChild(linebreak);
    } else {
      const linebreak = document.createElement('br');
      statusNotRead.append(book);
      statusNotRead.appendChild(linebreak);
    }
  }
  button.disabled = true;
};
//directly below in title, author, and readingStatus JS variables, noted in html file (in div specifically)
//where they are used...
//also, in addBook function, noting the endings .value and .checked...
addBook = () => {
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let readingStatus = document.getElementById('readingStatus').checked;

  let newObj = {
    title: '',
    author: '',
    readingStatus: '',
  };

  newObj.title = title;
  newObj.author = author;
  newObj.readingStatus = readingStatus;

  library.push(newObj);

  let book = "'" + newObj.title + "'" + ' by ' + newObj.author + '.';
  if (newObj.readingStatus === true) {
    const linebreak = document.createElement('br');
    statusRead.append(book);
    statusRead.appendChild(linebreak);
  } else {
    const linebreak = document.createElement('br');

    statusNotRead.append(book);
    statusNotRead.appendChild(linebreak);
  }

  resetForm();
};

function resetForm() {
  title.value = '';
  author.value = '';
}
///////////New Tasks/////////////
const unreadBookArrayView = document.querySelector('.unreadBookArrayView');
const readBookArrayView = document.querySelector('.readBookArrayView');
let unreadBookArray = [];
let readBookArray = [];
makeArray = () => {
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === 'false') {
      unreadBookArray.push(library[i].title + ',' + '<br />');
    } else {
      readBookArray.push(library[i].title + ',' + '<br />');
    }
  }
//still don't get innerHTML? show everything inside the HTML tag? as in everything bw <html> and </html>?
  unreadBookArrayView.innerHTML = unreadBookArray.join('');
  readBookArrayView.innerHTML = readBookArray.join('');
};
//directly below is function for adding new items?
updateArray = () => {
  unreadBookArray = [];
  readBookArray = [];
  unreadBookArrayView.innerHTML = '';
  readBookArrayView.innerHTML = '';
  makeArray();
};
//////////////////////////////////