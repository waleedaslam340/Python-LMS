import { Lesson, Topic } from './data';

const week1Topics: Topic[] = [
  {
    id: 'html-w1-1',
    number: '1.1',
    title: 'Welcome to the Web! 🌐',
    theory: [
      'HTML stands for **HyperText Markup Language**. It is the standard language used to create all Web pages on the internet.',
      'Think of HTML as the skeleton of a web page. It provides the structure and tells the web browser what is a heading, what is a paragraph, and what is an image.',
      '**Why is it useful for students?** Learning HTML gives you the superpower to build your own websites from scratch! You can share your hobbies, build projects, and understand how the internet actually works behind the scenes.'
    ],
    syntax: '<tagname> Content goes here </tagname>',
    keyPoints: [
      'HTML is a markup language, not a programming language.',
      'It uses "tags" to wrap around text to give it meaning.',
      'Learning HTML is the first step to becoming a Web Developer!'
    ],
    codeExample: `<h1>Hello World!</h1>\n<p>I am building my first website.</p>`,
    practiceCode: `<h1>My Superpower</h1>\n<p>I am learning to build websites with HTML!</p>`,
    quiz: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Tool Multi Language', 'HyperText Markup Language', 'High Text Machine Language', 'Home Tool Markup Language'],
        answer: 1,
        explanation: 'HTML stands for HyperText Markup Language.',
      }
    ]
  },
  {
    id: 'html-w1-2',
    number: '1.2',
    title: 'The Evolution: HTML5 🚀',
    theory: [
      'HTML has been around since 1991! Over the years, it has been updated to add new features and make web development easier.',
      'The current and most powerful version is **HTML5**. It was introduced to help browsers (like Chrome, Safari, and Edge) handle modern web needs.',
      'Before HTML5, you needed special plugins to play videos or music. Now, HTML5 has built-in tags like `<video>` and `<audio>` that do it automatically!'
    ],
    keyPoints: [
      'HTML5 is the latest major version of HTML.',
      'It allows video, audio, and animations to run natively in the browser.',
      'It is designed to work perfectly on computers, tablets, and mobile phones.'
    ],
    codeExample: `<!-- HTML5 made things simpler! -->\n<!DOCTYPE html>\n<p>This tells the browser we are using HTML5.</p>`,
    practiceCode: `<!-- Try running this! -->\n<h3>Welcome to the HTML5 era!</h3>\n<p>Websites are faster and cooler now.</p>`,
    quiz: [
      {
        question: 'What is the latest major version of HTML that supports built-in video and audio?',
        options: ['HTML3', 'HTMLX', 'HTML5', 'HTML Web'],
        answer: 2,
        explanation: 'HTML5 is the latest version, bringing native multimedia support without extra plugins.',
      }
    ]
  },
  {
    id: 'html-w1-3',
    number: '1.3',
    title: 'The Basic Structure 🏗️',
    theory: [
      'Every HTML document needs a basic skeleton to work properly. Just like a house needs a foundation, walls, and a roof!',
      '1. `<!DOCTYPE html>`: This is the declaration at the very top. It tells the browser "Hey, expect an HTML5 document!"',
      '2. `<html>`: The root tag that wraps everything on the page.',
      '3. `<head>`: The hidden brain of the page. It holds the `<title>` (what you see on the browser tab) and other settings. You do not see this on the main screen.',
      '4. `<body>`: The main container! Everything you actually SEE on the webpage (text, images, buttons) goes inside the body tag.'
    ],
    syntax: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    Visible content goes here\n  </body>\n</html>`,
    keyPoints: [
      'The <!DOCTYPE html> must be the very first line.',
      'The <head> section is for invisible metadata and the page title.',
      'The <body> section contains all the visible content.'
    ],
    codeExample: `<!DOCTYPE html>\n<html>\n<head>\n<title>This is document title</title>\n</head>\n<body>\n<h1>This is a heading</h1>\n<p>Document content goes here.....</p>\n</body>\n</html>`,
    practiceCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Website</title>\n</head>\n<body>\n  <h1>Welcome to my page!</h1>\n  <p>I am building the basic structure.</p>\n</body>\n</html>`,
    quiz: [
      {
        question: 'Which tag contains all the visible content that shows up on the main webpage?',
        options: ['<head>', '<title>', '<body>', '<html>'],
        answer: 2,
        explanation: 'The <body> tag is the container for all the visible content like headings, paragraphs, and images.',
      }
    ]
  }
];

const week2Topics: Topic[] = [
  {
    id: 'html-w2-1',
    number: '2.1',
    title: 'The <html> Tag: The Root 🌱',
    theory: [
      'The `<html>` tag is the ultimate wrapper! Everything in your web page must be placed inside this tag.',
      'It tells the web browser: "Everything inside me is HTML code." It is often called the **root element**.',
    ],
    syntax: `<html>\n  <!-- Content here -->\n</html>`,
    keyPoints: [
      'It is the parent of all other elements.',
      'It usually contains the <head> and <body> tags inside it.'
    ],
    codeExample: `<html>\n  <body>\n    <p>I am inside the root!</p>\n  </body>\n</html>`,
    practiceCode: `<html>\n  <body>\n    <p>Try adding another paragraph here!</p>\n  </body>\n</html>`,
    quiz: [
      {
        question: 'Which tag is known as the "root" element?',
        options: ['<body>', '<root>', '<html>', '<head>'],
        answer: 2,
        explanation: 'The <html> tag is the root element because it contains all other tags.',
      }
    ]
  },
  {
    id: 'html-w2-2',
    number: '2.2',
    title: 'The <head> Tag: The Brain 🧠',
    theory: [
      'The `<head>` tag is the brain of the webpage. It contains behind-the-scenes information that the user does not see directly on the page.',
      'This is where we put things like the page title, links to styles (CSS), and settings for search engines (like Google).'
    ],
    syntax: `<head>\n  <!-- Hidden data here -->\n</head>`,
    keyPoints: [
      'Placed inside the <html> tag, but before the <body> tag.',
      'Content inside <head> is NOT visible on the webpage.'
    ],
    codeExample: `<html>\n<head>\n  <title>Secret Settings</title>\n</head>\n</html>`,
    practiceCode: `<html>\n<head>\n  <!-- Add a <title> tag here! -->\n</head>\n</html>`,
    quiz: [
      {
        question: 'Is the content inside the <head> tag visible on the main screen?',
        options: ['Yes', 'No', 'Sometimes', 'Only on mobile'],
        answer: 1,
        explanation: 'No, the <head> tag holds invisible metadata.',
      }
    ]
  },
  {
    id: 'html-w2-3',
    number: '2.3',
    title: 'The <title> Tag: The Name Tag 🏷️',
    theory: [
      'Have you ever noticed the text on the tabs at the very top of your browser? That is made by the `<title>` tag!',
      'It MUST be placed inside the `<head>` tag. It is super important because it helps people (and Google) know what your page is about.'
    ],
    syntax: `<title>Your Awesome Title</title>`,
    keyPoints: [
      'It goes inside the <head>.',
      'It shows up on the browser tab, not on the webpage itself.'
    ],
    codeExample: `<head>\n  <title>My Super Game</title>\n</head>`,
    practiceCode: `<head>\n  <title>Change this to your name!</title>\n</head>`,
    quiz: [
      {
        question: 'Where does the text inside the <title> tag appear?',
        options: ['In the middle of the screen', 'At the bottom of the page', 'On the browser tab', 'It is invisible'],
        answer: 2,
        explanation: 'The <title> tag sets the text shown on the browser tab.',
      }
    ]
  },
  {
    id: 'html-w2-4',
    number: '2.4',
    title: 'The <body> Tag: The Canvas 🎨',
    theory: [
      'The `<body>` tag is the superstar container! Everything that you actually see on the screen—text, images, videos, games—goes inside the body.',
      'A webpage can only have ONE body tag.'
    ],
    syntax: `<body>\n  <!-- All visible things go here -->\n</body>`,
    keyPoints: [
      'It contains the visible content of the page.',
      'It goes right after the <head> tag.'
    ],
    codeExample: `<body>\n  <h1>Welcome!</h1>\n  <p>This is what you see!</p>\n</body>`,
    practiceCode: `<body>\n  <p>Add some more cool things inside the body!</p>\n</body>`,
    quiz: [
      {
        question: 'Where do you put an image that you want users to see?',
        options: ['Inside <head>', 'Inside <body>', 'Inside <title>', 'Outside <html>'],
        answer: 1,
        explanation: 'All visible content must go inside the <body> tag.',
      }
    ]
  },
  {
    id: 'html-w2-5',
    number: '2.5',
    title: 'The <h1> Tag: Big Headlines! 📰',
    theory: [
      'HTML has 6 different heading tags, from `<h1>` to `<h6>`.',
      '`<h1>` is the BIGGEST and most important heading. You should usually only have one `<h1>` per page!',
      '`<h6>` is the smallest heading. They are used for titles and subtitles.'
    ],
    syntax: `<h1>Main Title</h1>\n<h2>Subtitle</h2>`,
    keyPoints: [
      'h1 is the largest heading.',
      'h6 is the smallest heading.',
      'Headings automatically make text bold and big.'
    ],
    codeExample: `<h1>Super Big</h1>\n<h2>A bit smaller</h2>\n<h6>Tiny heading!</h6>`,
    practiceCode: `<h1>My Favorite Animals</h1>\n<!-- Add an <h2> subtitle here! -->`,
    quiz: [
      {
        question: 'Which heading tag is the biggest?',
        options: ['<h6>', '<head>', '<h1>', '<h10>'],
        answer: 2,
        explanation: '<h1> is the largest and most important heading tag.',
      }
    ]
  },
  {
    id: 'html-w2-6',
    number: '2.6',
    title: 'The <p> Tag: Paragraphs 📝',
    theory: [
      'The `<p>` tag stands for "Paragraph". It is used for normal blocks of text.',
      'Whenever you write a story, an article, or a simple sentence, you wrap it in a `<p>` tag so the browser spaces it nicely.'
    ],
    syntax: `<p>This is a sentence.</p>`,
    keyPoints: [
      'Used for regular text.',
      'Browsers automatically add a little bit of space above and below paragraphs.'
    ],
    codeExample: `<p>Once upon a time...</p>\n<p>There was a coder.</p>`,
    practiceCode: `<p>Write your own story here!</p>\n<p>Add another paragraph!</p>`,
    quiz: [
      {
        question: 'What does the <p> tag stand for?',
        options: ['Picture', 'Paragraph', 'Program', 'Position'],
        answer: 1,
        explanation: 'The <p> tag stands for Paragraph.',
      }
    ]
  },
  {
    id: 'html-w2-7',
    number: '2.7',
    title: 'The <br> Tag: Line Breaks 🛑',
    theory: [
      'Sometimes you want to start a new line but you do NOT want a whole new paragraph. That is what the `<br>` tag is for!',
      'It stands for "Break".',
      '**Special Rule:** It is an "empty tag", meaning it does not have a closing tag. You just write `<br>` and you are done!'
    ],
    syntax: `Line 1 <br> Line 2`,
    keyPoints: [
      '<br> creates a single line break.',
      'It does NOT have a closing tag (no </br> needed).'
    ],
    codeExample: `<p>Roses are red,<br>Violets are blue.</p>`,
    practiceCode: `<p>Try to split this sentence<br>into two lines using the br tag!</p>`,
    quiz: [
      {
        question: 'Does the <br> tag need a closing tag?',
        options: ['Yes, always', 'No, it is an empty tag', 'Only in HTML5', 'Yes, </break>'],
        answer: 1,
        explanation: 'The <br> tag stands alone and does not need a closing tag.',
      }
    ]
  },
  {
    id: 'html-w2-8',
    number: '2.8',
    title: 'The <hr> Tag: Drawing Lines 📏',
    theory: [
      'The `<hr>` tag creates a "Horizontal Rule". This is a fancy way of saying "draw a straight line across the screen"!',
      'It is great for separating different sections of your page.',
      'Just like `<br>`, the `<hr>` tag is an empty tag and does NOT have a closing tag.'
    ],
    syntax: `Section 1\n<hr>\nSection 2`,
    keyPoints: [
      '<hr> draws a horizontal line.',
      'It does not need a closing tag.'
    ],
    codeExample: `<h2>Chapter 1</h2>\n<p>It began...</p>\n<hr>\n<h2>Chapter 2</h2>`,
    practiceCode: `<h2>Section A</h2>\n<!-- Put a horizontal line below this! -->\n\n<h2>Section B</h2>`,
    quiz: [
      {
        question: 'What does the <hr> tag do?',
        options: ['Makes text bold', 'Draws a horizontal line', 'Creates a link', 'Shows an image'],
        answer: 1,
        explanation: 'The <hr> tag stands for Horizontal Rule and draws a line across the page.',
      }
    ]
  }
];

const week3Topics: Topic[] = [
  {
    id: 'html-w3-1',
    number: '3.1',
    title: 'The <img> Tag: Adding Pictures 🖼️',
    theory: [
      'Websites are boring without pictures! The `<img>` tag lets you show images.',
      'It is an empty tag (no closing tag), but it needs an **attribute** called `src` (source) to tell it WHERE the picture is.',
      'It also needs an `alt` (alternative text) attribute to describe the picture for blind users or if the image fails to load.'
    ],
    syntax: `<img src="image-url.jpg" alt="Description">`,
    keyPoints: [
      'Uses the src attribute to find the image.',
      'Uses the alt attribute to describe the image.',
      'Does not have a closing tag.'
    ],
    codeExample: `<img src="https://placekitten.com/200/200" alt="A cute kitten">`,
    practiceCode: `<!-- Change the src to another image URL! -->\n<img src="https://placekitten.com/300/300" alt="Cute cat">`,
    quiz: [
      {
        question: 'Which attribute tells the <img> tag where to find the picture?',
        options: ['href', 'src', 'link', 'alt'],
        answer: 1,
        explanation: 'The src (source) attribute contains the URL or path to the image.',
      }
    ]
  },
  {
    id: 'html-w3-2',
    number: '3.2',
    title: 'The <a> Tag: Magic Links 🔗',
    theory: [
      'The `<a>` tag stands for "Anchor". It creates the clickable links that connect the whole internet together!',
      'It requires the `href` (Hypertext Reference) attribute to tell the browser WHERE to go when you click it.'
    ],
    syntax: `<a href="url">Clickable Text</a>`,
    keyPoints: [
      'Uses the href attribute to set the destination.',
      'The text BETWEEN the opening and closing tags is what you actually click.'
    ],
    codeExample: `<a href="https://google.com">Click here to go to Google!</a>`,
    practiceCode: `<!-- Make a link to your favorite website! -->\n<a href="https://wikipedia.org">Go to Wikipedia</a>`,
    quiz: [
      {
        question: 'Which attribute sets the destination of an <a> link?',
        options: ['src', 'link', 'href', 'to'],
        answer: 2,
        explanation: 'The href attribute stands for Hypertext REFerence and holds the URL.',
      }
    ]
  },
  {
    id: 'html-w3-3',
    number: '3.3',
    title: 'The <ul> Tag: Bulleted Lists 📋',
    theory: [
      'The `<ul>` tag stands for "Unordered List". It creates a list with bullet points (like dots).',
      'It acts as the wrapper for the list. You put the actual items inside it using another tag called `<li>`!'
    ],
    syntax: `<ul>\n  <!-- List items go here -->\n</ul>`,
    keyPoints: [
      'Creates bulleted (unordered) lists.',
      'Must contain <li> tags inside.'
    ],
    codeExample: `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n</ul>`,
    practiceCode: `<h3>My Grocery List</h3>\n<ul>\n  <li>Milk</li>\n  <!-- Add another item below! -->\n</ul>`,
    quiz: [
      {
        question: 'What kind of list does <ul> create?',
        options: ['Numbered list', 'Bulleted list', 'Dropdown list', 'Checklist'],
        answer: 1,
        explanation: '<ul> stands for Unordered List, which uses bullet points.',
      }
    ]
  },
  {
    id: 'html-w3-4',
    number: '3.4',
    title: 'The <ol> Tag: Numbered Lists 🔢',
    theory: [
      'The `<ol>` tag stands for "Ordered List". It creates a list with numbers (1, 2, 3...) or letters automatically!',
      'Just like `<ul>`, it is a wrapper and needs `<li>` tags inside it.'
    ],
    syntax: `<ol>\n  <!-- List items go here -->\n</ol>`,
    keyPoints: [
      'Creates numbered (ordered) lists.',
      'Great for step-by-step instructions or top 10 lists.'
    ],
    codeExample: `<ol>\n  <li>Wake up</li>\n  <li>Brush teeth</li>\n  <li>Code HTML</li>\n</ol>`,
    practiceCode: `<h3>Top 3 Games</h3>\n<ol>\n  <li>Minecraft</li>\n  <!-- Add number 2 and 3! -->\n</ol>`,
    quiz: [
      {
        question: 'What kind of list does <ol> create?',
        options: ['Bulleted list', 'Numbered list', 'Random list', 'Hidden list'],
        answer: 1,
        explanation: '<ol> stands for Ordered List, which automatically adds numbers.',
      }
    ]
  },
  {
    id: 'html-w3-5',
    number: '3.5',
    title: 'The <li> Tag: List Items 📌',
    theory: [
      'The `<li>` tag stands for "List Item". It is the actual piece of data inside your lists.',
      'You MUST put `<li>` tags inside either a `<ul>` or an `<ol>`. They don\'t work correctly on their own!'
    ],
    syntax: `<li>Item name</li>`,
    keyPoints: [
      'Defines a single item in a list.',
      'Must be nested inside <ul> or <ol>.'
    ],
    codeExample: `<ul>\n  <li>I am a bullet point!</li>\n</ul>\n<ol>\n  <li>I am number 1!</li>\n</ol>`,
    practiceCode: `<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <!-- Create a third list item here! -->\n</ul>`,
    quiz: [
      {
        question: 'Can you use the <li> tag completely by itself?',
        options: ['Yes', 'No, it should be inside <ul> or <ol>', 'Only inside <body>', 'Only inside <head>'],
        answer: 1,
        explanation: 'The <li> tag is designed to be a child of a list container (<ul> or <ol>).',
      }
    ]
  }
];

const week4Topics: Topic[] = [
  {
    id: 'html-w4-1',
    number: '4.1',
    title: 'The <table> Tag: The Grid 📊',
    theory: [
      'The `<table>` tag is used to create grids of data, just like an Excel spreadsheet!',
      'It acts as the giant box holding all the rows and columns. Inside the table, you use rows and cells.'
    ],
    syntax: `<table>\n  <!-- Rows and cells go here -->\n</table>`,
    keyPoints: [
      'Wraps all table data.',
      'Helps organize data into rows and columns.'
    ],
    codeExample: `<table border="1">\n  <tr>\n    <td>Cell 1</td>\n    <td>Cell 2</td>\n  </tr>\n</table>`,
    practiceCode: `<table border="1">\n  <!-- Add rows here! -->\n</table>`,
    quiz: [
      {
        question: 'What is the purpose of the <table> tag?',
        options: ['To create a form', 'To display data in a grid of rows and columns', 'To draw a picture', 'To make text bold'],
        answer: 1,
        explanation: 'Tables are used to display tabular data in rows and columns.',
      }
    ]
  },
  {
    id: 'html-w4-2',
    number: '4.2',
    title: 'The <tr> Tag: Table Rows ⬅️➡️',
    theory: [
      'The `<tr>` tag stands for "Table Row". It creates one horizontal slice across your table.',
      'Every time you want a new line in your table, you need a new `<tr>` block!'
    ],
    syntax: `<tr>\n  <!-- Cells go here -->\n</tr>`,
    keyPoints: [
      'Stands for Table Row.',
      'Must be placed inside a <table>.'
    ],
    codeExample: `<table>\n  <tr>\n    <!-- First row -->\n  </tr>\n  <tr>\n    <!-- Second row -->\n  </tr>\n</table>`,
    practiceCode: `<table>\n  <tr>\n    <td>Row 1</td>\n  </tr>\n  <!-- Try adding a second row! -->\n</table>`,
    quiz: [
      {
        question: 'What does <tr> stand for?',
        options: ['Table Right', 'Text Row', 'Table Row', 'Table Region'],
        answer: 2,
        explanation: '<tr> stands for Table Row.',
      }
    ]
  },
  {
    id: 'html-w4-3',
    number: '4.3',
    title: 'The <td> Tag: Table Data 📦',
    theory: [
      'The `<td>` tag stands for "Table Data". These are the actual cells (boxes) inside the row where you put your text or numbers!',
      'You place `<td>` tags INSIDE your `<tr>` tags. If you put three `<td>` tags inside a row, your table will have three columns.'
    ],
    syntax: `<td>Information</td>`,
    keyPoints: [
      'Stands for Table Data (a cell).',
      'Goes inside a <tr> tag.'
    ],
    codeExample: `<table>\n  <tr>\n    <td>Apple</td>\n    <td>Red</td>\n  </tr>\n</table>`,
    practiceCode: `<table border="1">\n  <tr>\n    <td>Name:</td>\n    <td><!-- Put your name here! --></td>\n  </tr>\n</table>`,
    quiz: [
      {
        question: 'Which tag represents the actual cell/box holding the data in a table?',
        options: ['<table>', '<tr>', '<td>', '<cell>'],
        answer: 2,
        explanation: '<td> stands for Table Data, representing an individual cell.',
      }
    ]
  },
  {
    id: 'html-w4-4',
    number: '4.4',
    title: 'The <form> Tag: Collecting Data 📝',
    theory: [
      'The `<form>` tag acts as a container for user input. If you want to build a login screen, a search bar, or a contact page, you use a form!',
      'It bundles all the input boxes and buttons together so they can be sent to a server.'
    ],
    syntax: `<form>\n  <!-- Inputs go here -->\n</form>`,
    keyPoints: [
      'Wraps input fields and buttons.',
      'Used for collecting user information.'
    ],
    codeExample: `<form>\n  <label>Name:</label>\n  <input type="text">\n</form>`,
    practiceCode: `<form>\n  <!-- Try adding inputs here! -->\n  <p>This is a form container.</p>\n</form>`,
    quiz: [
      {
        question: 'Which tag acts as a wrapper when you want to collect user input?',
        options: ['<div>', '<form>', '<table>', '<input>'],
        answer: 1,
        explanation: 'The <form> tag wraps inputs so the data can be submitted together.',
      }
    ]
  },
  {
    id: 'html-w4-5',
    number: '4.5',
    title: 'The <input> Tag: Typing Boxes ⌨️',
    theory: [
      'The `<input>` tag is how users talk to your website! It creates a box where people can type text, passwords, or select checkboxes.',
      'It is an empty tag (no closing tag). You use the `type` attribute to change how it looks!',
      'Examples: `type="text"`, `type="password"`, `type="checkbox"`.'
    ],
    syntax: `<input type="text">`,
    keyPoints: [
      'Creates an interactive field for the user.',
      'The "type" attribute changes its behavior.',
      'Does not have a closing tag.'
    ],
    codeExample: `<input type="text" placeholder="Enter Username">\n<input type="password" placeholder="Password">`,
    practiceCode: `<form>\n  Username: <input type="text">\n  <br>\n  <!-- Create a password input below! -->\n</form>`,
    quiz: [
      {
        question: 'How do you turn an <input> into a password box?',
        options: ['<input password>', '<password>', '<input type="password">', '<input class="password">'],
        answer: 2,
        explanation: 'You use the type attribute and set it to "password".',
      }
    ]
  },
  {
    id: 'html-w4-6',
    number: '4.6',
    title: 'The <button> Tag: Click Me! 🖱️',
    theory: [
      'The `<button>` tag creates a clickable button. You can put text, emojis, or even images inside it!',
      'When placed inside a `<form>`, clicking the button usually submits the form data.'
    ],
    syntax: `<button>Click Here</button>`,
    keyPoints: [
      'Creates a clickable button.',
      'Can contain text or images inside.'
    ],
    codeExample: `<button>Submit Form</button>\n<button>🚀 Launch</button>`,
    practiceCode: `<form>\n  <input type="text" placeholder="Your Name">\n  <!-- Add a button below to submit! -->\n  \n</form>`,
    quiz: [
      {
        question: 'Which tag creates a clickable button on the screen?',
        options: ['<click>', '<button>', '<submit>', '<a>'],
        answer: 1,
        explanation: 'The <button> tag creates a standard interactive button.',
      }
    ]
  },
  {
    id: 'html-w4-7',
    number: '4.7',
    title: 'The <div> Tag: The Ultimate Box 📦',
    theory: [
      'The `<div>` tag stands for "Division". It is simply a blank, invisible box used to group other elements together.',
      'It is the most used tag in web design! By grouping items into `<div>` tags, you can easily move them around or color them using CSS.'
    ],
    syntax: `<div>\n  <!-- Grouped elements -->\n</div>`,
    keyPoints: [
      'Acts as a generic container/box.',
      'Used heavily for styling and layout with CSS.'
    ],
    codeExample: `<div>\n  <h2>Section Title</h2>\n  <p>This paragraph is grouped with the heading!</p>\n</div>`,
    practiceCode: `<!-- Group these two elements inside a <div> tag! -->\n<h2>My Info</h2>\n<p>Age: 10</p>`,
    quiz: [
      {
        question: 'What is the main purpose of the <div> tag?',
        options: ['To create a button', 'To display an image', 'To group other elements together in a box', 'To draw a line'],
        answer: 2,
        explanation: 'The <div> tag is a generic container used to group elements together.',
      }
    ]
  }
];


const week5Topics: Topic[] = [
  {
    id: 'html-w5-1',
    number: '5.1',
    title: 'The <acronym> Tag 🚫',
    theory: [
      'The `<acronym>` tag was used to define acronyms (like NASA or ASAP).',
      '**Why is it obsolete?** It was confusing because HTML also has the `<abbr>` tag for abbreviations. To make things simpler, HTML5 removed `<acronym>`.',
      '**Modern Alternative:** Use the `<abbr>` (abbreviation) tag instead! It does the exact same thing.'
    ],
    syntax: '<!-- Obsolete -->\n<acronym title="World Wide Web">WWW</acronym>\n<!-- Modern -->\n<abbr title="World Wide Web">WWW</abbr>',
    keyPoints: [
      'Removed to avoid confusion with <abbr>.',
      'Use <abbr> for all acronyms and abbreviations.'
    ],
    codeExample: `<p>We are learning about the <abbr title="HyperText Markup Language">HTML</abbr> language!</p>`,
    practiceCode: `<!-- Fix this old code by using the modern <abbr> tag! -->\n<p>I work at <acronym title="National Aeronautics and Space Administration">NASA</acronym>.</p>`,
    quiz: [{ question: 'What is the modern alternative to the <acronym> tag?', options: ['<abbr>', '<short>', '<word>', '<title>'], answer: 0, explanation: 'The <abbr> tag replaced <acronym> in HTML5.' }]
  },
  {
    id: 'html-w5-2',
    number: '5.2',
    title: 'The <applet> Tag 🚫',
    theory: [
      'The `<applet>` tag was used to embed Java applications directly into web pages in the early 2000s.',
      '**Why is it obsolete?** Java applets became a huge security risk and modern browsers completely stopped supporting them.',
      '**Modern Alternative:** Use the `<object>` or `<embed>` tags. For modern interactive apps, we use JavaScript!'
    ],
    syntax: '<!-- Modern Alternative -->\n<object data="game.swf"></object>',
    keyPoints: ['Removed due to severe security issues.', 'Replaced by <object> and modern JavaScript.'],
    codeExample: `<object data="animation.mp4" width="400" height="300"></object>`,
    practiceCode: `<!-- The <applet> tag doesn't work anymore! -->\n<p>To add modern interactivity, we use JavaScript instead of Java Applets.</p>`,
    quiz: [{ question: 'Why was the <applet> tag removed?', options: ['It was too fast', 'Security risks and lack of browser support', 'It looked ugly', 'Nobody knew Java'], answer: 1, explanation: 'Java applets were removed due to major security vulnerabilities.' }]
  },
  {
    id: 'html-w5-3',
    number: '5.3',
    title: 'The <basefont> & <font> Tags 🚫',
    theory: [
      'The `<basefont>` and `<font>` tags were used to change the text color, size, and font family.',
      '**Why are they obsolete?** HTML is supposed to handle STRUCTURE (like a skeleton). CSS handles STYLING (like clothes). Mixing them was messy!',
      '**Modern Alternative:** Use CSS properties like `color`, `font-size`, and `font-family`.'
    ],
    syntax: '<!-- Obsolete -->\n<font color="red">Stop!</font>\n<!-- Modern -->\n<span style="color: red;">Stop!</span>',
    keyPoints: ['HTML is for structure, CSS is for styling.', 'Never use HTML tags just to change colors or sizes.'],
    codeExample: `<p style="color: blue; font-size: 20px;">This is styled with modern CSS!</p>`,
    practiceCode: `<!-- Change this obsolete <font> tag to use a modern inline style! -->\n<font color="green">Success!</font>`,
    quiz: [{ question: 'What should you use instead of the <font> tag?', options: ['The <color> tag', 'The <text> tag', 'CSS (Cascading Style Sheets)', 'The <styletext> tag'], answer: 2, explanation: 'CSS is the modern standard for styling web pages.' }]
  },
  {
    id: 'html-w5-4',
    number: '5.4',
    title: 'The <big> Tag 🚫',
    theory: [
      'The `<big>` tag made text slightly larger than the text around it.',
      '**Why is it obsolete?** Just like the `<font>` tag, it was a "presentational" tag. It controlled how things looked rather than what they meant.',
      '**Modern Alternative:** Use CSS `font-size` to control exactly how big your text should be.'
    ],
    syntax: '<!-- Modern -->\n<span style="font-size: larger;">Bigger text</span>',
    keyPoints: ['It is purely visual, which violates HTML5 rules.', 'Use CSS for text sizing.'],
    codeExample: `<p>Normal text and <span style="font-size: 24px;">big text</span>.</p>`,
    practiceCode: `<!-- Fix this by replacing <big> with a span and CSS style -->\n<p>This is <big>IMPORTANT</big></p>`,
    quiz: [{ question: 'Why was <big> removed from HTML5?', options: ['It broke computers', 'It was a presentational tag', 'It was too hard to type', 'It made text too big'], answer: 1, explanation: 'It controlled presentation (looks) instead of meaning, which is the job of CSS.' }]
  },
  {
    id: 'html-w5-5',
    number: '5.5',
    title: 'The <center> Tag 🚫',
    theory: [
      'The `<center>` tag pushed everything inside it to the middle of the screen.',
      '**Why is it obsolete?** Once again, HTML is for structure! Positioning and aligning items is the job of CSS.',
      '**Modern Alternative:** Use CSS `text-align: center` for text, or Flexbox/Grid for layout alignment.'
    ],
    syntax: '<!-- Modern -->\n<div style="text-align: center;">Centered Text</div>',
    keyPoints: ['Used for layout, which is now handled by CSS.', 'Use text-align or Flexbox instead.'],
    codeExample: `<h1 style="text-align: center;">I am perfectly centered!</h1>`,
    practiceCode: `<!-- Fix this old centering method using inline CSS! -->\n<center>\n  <p>Put me in the middle!</p>\n</center>`,
    quiz: [{ question: 'Which CSS property replaced the <center> tag for text?', options: ['align: middle', 'text-align: center', 'position: center', 'float: center'], answer: 1, explanation: 'The text-align: center CSS property is the modern way to center text.' }]
  },
  {
    id: 'html-w5-6',
    number: '5.6',
    title: 'The <dir> Tag 🚫',
    theory: [
      'The `<dir>` tag was used for "directory" lists, which looked exactly like unordered lists.',
      '**Why is it obsolete?** It was completely redundant. It did the exact same thing as the `<ul>` tag!',
      '**Modern Alternative:** Just use the `<ul>` (Unordered List) tag.'
    ],
    syntax: '<!-- Modern -->\n<ul>\n  <li>Folder 1</li>\n</ul>',
    keyPoints: ['Redundant tag removed to clean up HTML.', 'Replaced entirely by <ul>.'],
    codeExample: `<ul>\n  <li>Documents</li>\n  <li>Downloads</li>\n</ul>`,
    practiceCode: `<!-- Change this old directory list to an unordered list! -->\n<dir>\n  <li>Photos</li>\n  <li>Music</li>\n</dir>`,
    quiz: [{ question: 'Which tag completely replaced the <dir> tag?', options: ['<list>', '<ol>', '<ul>', '<directory>'], answer: 2, explanation: 'The <ul> (Unordered List) tag does exactly what <dir> did.' }]
  },
  {
    id: 'html-w5-7',
    number: '5.7',
    title: 'The <frame>, <frameset> & <noframes> Tags 🚫',
    theory: [
      'These tags were used to chop a web page into multiple separate windows (frames) that loaded different HTML files.',
      '**Why are they obsolete?** They broke the "Back" button, were terrible for SEO (Google couldn\'t read them well), and were awful on mobile phones.',
      '**Modern Alternative:** Use the `<iframe>` tag if you absolutely must embed another page, or use CSS layouts (like Grid or Flexbox) to divide your page!'
    ],
    syntax: '<!-- Modern Alternative -->\n<iframe src="other-page.html"></iframe>',
    keyPoints: ['Framesets ruined usability and SEO.', 'Use <iframe> for embedding widgets like YouTube videos.'],
    codeExample: `<iframe src="https://example.com" width="400" height="300"></iframe>`,
    practiceCode: `<!-- Try creating an iframe instead of a frameset! -->\n<iframe src="https://example.com"></iframe>`,
    quiz: [{ question: 'Why were framesets bad for the web?', options: ['They looked ugly', 'They broke navigation and SEO', 'They were too expensive', 'They only worked on Apple computers'], answer: 1, explanation: 'Frames made it hard to bookmark pages, broke the back button, and confused search engines.' }]
  },
  {
    id: 'html-w5-8',
    number: '5.8',
    title: 'The <isindex> Tag 🚫',
    theory: [
      'The `<isindex>` tag automatically created a search box to query the server.',
      '**Why is it obsolete?** It was inflexible and confusing. Web forms became much more powerful, making this single tag useless.',
      '**Modern Alternative:** Use a standard `<form>` with an `<input type="text">`!'
    ],
    syntax: '<!-- Modern -->\n<form>\n  <input type="text" placeholder="Search...">\n</form>',
    keyPoints: ['Replaced by standard HTML forms.', 'Forms offer way more control and styling options.'],
    codeExample: `<form>\n  <input type="search" placeholder="Search here...">\n  <button>Go</button>\n</form>`,
    practiceCode: `<!-- Build a modern search input! -->\n<input type="search" placeholder="Find something...">`,
    quiz: [{ question: 'What is the modern way to create a search box?', options: ['<search>', '<isindex type="modern">', '<input type="search">', '<find>'], answer: 2, explanation: 'Modern HTML uses the <input> tag for all user data entry.' }]
  },
  {
    id: 'html-w5-9',
    number: '5.9',
    title: 'The <marquee> Tag 🚫',
    theory: [
      'The `<marquee>` tag made text automatically scroll horizontally across the screen like a news ticker.',
      '**Why is it obsolete?** It was extremely annoying to read, distracted users, and caused major accessibility issues for people with visual impairments or reading difficulties.',
      '**Modern Alternative:** If you really need moving text, use CSS Animations. But generally, avoid moving text!'
    ],
    syntax: '<!-- Modern CSS approach (Requires CSS file) -->\n<div class="scrolling-text">News!</div>',
    keyPoints: ['Terrible for accessibility and user experience.', 'Removed from standard HTML.', 'Use CSS animations if absolutely necessary.'],
    codeExample: `<!-- We don't use marquee anymore! Keep your text readable! -->\n<p>Breaking News: HTML5 is awesome!</p>`,
    practiceCode: `<!-- Delete the marquee tags to make the text readable! -->\n<marquee>Please stop moving!</marquee>`,
    quiz: [{ question: 'Why is <marquee> considered bad practice?', options: ['It uses too much internet data', 'It is distracting and bad for accessibility', 'It makes the text blurry', 'It only scrolls backwards'], answer: 1, explanation: 'Auto-scrolling text is a massive distraction and makes the site hard to use for people with disabilities.' }]
  },
  {
    id: 'html-w5-10',
    number: '5.10',
    title: 'The <strike> & <tt> Tags 🚫',
    theory: [
      '`<strike>` drew a line through text. `<tt>` (Teletype) made text look like an old typewriter.',
      '**Why are they obsolete?** Both are purely visual (presentational) tags.',
      '**Modern Alternatives:** For deleted text, use `<del>`. For strikethrough styling, use CSS `text-decoration: line-through`. For typewriter text, use `<code>` or CSS `font-family: monospace`.'
    ],
    syntax: '<!-- Modern Strikethrough -->\n<del>Old Price</del>\n<!-- Modern Teletype -->\n<code>Code font</code>',
    keyPoints: ['Visual tags replaced by CSS.', 'Use <del> if the text was actually deleted/changed.'],
    codeExample: `<p>The price was <del>$50</del>, now it is $40!</p>\n<p>Type <code>Hello</code></p>`,
    practiceCode: `<!-- Replace <strike> with the modern <del> tag! -->\n<p>I <strike>hate</strike> love HTML!</p>`,
    quiz: [{ question: 'Which tag should you use to indicate that text has been deleted or changed?', options: ['<strike>', '<del>', '<delete>', '<s>'], answer: 1, explanation: 'The <del> tag semantically tells the browser that the text was deleted.' }]
  }
];

const week6Topics: Topic[] = [
  {
    id: 'html-w6-1',
    number: '6.1',
    title: 'Project 1: My Hobby Page 🚲',
    theory: [
      'It is time to put everything you have learned together! For this project, you will build a webpage about your favorite hobby.',
      '**Requirements:**',
      '1. **Text Tags:** A main `<h1>` heading, an `<h2>` subtitle, and at least one `<p>` paragraph describing the hobby.',
      '2. **Images & Links:** An `<img>` showing your hobby and an `<a>` link to a website where we can learn more about it.',
      '3. **Lists & Tables:** A `<ul>` bulleted list of equipment needed, and a `<table>` showing your weekly practice schedule.',
      '4. **Forms:** A `<form>` at the bottom so people can subscribe to your hobby newsletter (needs a text `<input>` and a `<button>`).',
      'Check the "Example Code" tab to see what the final output should look like!'
    ],
    syntax: '<!-- Combine all tags: headings, img, ul, table, form -->',
    keyPoints: [
      'Make sure every tag is closed properly (except empty tags like img and input).',
      'Use proper nesting (e.g., tr inside table, td inside tr).'
    ],
    codeExample: `<!-- Expected Output Design -->\n<img src="/images/project1.png" width="100%" alt="Hobby Page Mockup" style="border: 2px solid #ccc; border-radius: 8px;">`,
    practiceCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Hobby</title>\n</head>\n<body>\n  <!-- Start building your Hobby Page here! -->\n  \n</body>\n</html>`,
    quiz: [{ question: 'Which of these tags is used to create the rows inside your schedule table?', options: ['<td>', '<table>', '<tr>', '<ul>'], answer: 2, explanation: 'The <tr> tag creates a Table Row.' }]
  },
  {
    id: 'html-w6-2',
    number: '6.2',
    title: 'Project 2: Pet Adoption Center 🐶',
    theory: [
      'Your second challenge is to build a webpage for a Pet Adoption Center!',
      '**Requirements:**',
      '1. **Text Tags:** Use an `<h1>` for the center name, `<hr>` to draw a line below it, and `<p>` for a welcome message.',
      '2. **Images & Links:** Add an `<img>` of a cute pet and an `<a>` link to Google Maps for the shelter location.',
      '3. **Lists & Tables:** Use an `<ol>` numbered list for "Steps to Adopt". Create a `<table>` listing 3 pets (Name, Age, Animal Type).',
      '4. **Forms:** Build an adoption application `<form>` with text inputs for the user\'s name and a `<button>` to submit.',
      'Check the "Example Code" tab for a visual mockup of what you need to build!'
    ],
    syntax: '<!-- Structure your page clearly with a header, content, and footer form -->',
    keyPoints: [
      'An <ol> list automatically numbers your steps.',
      'The <form> should wrap all your inputs and your submit button.'
    ],
    codeExample: `<!-- Expected Output Design -->\n<img src="/images/project2.png" width="100%" alt="Pet Adoption Mockup" style="border: 2px solid #ccc; border-radius: 8px;">`,
    practiceCode: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Pet Adoption Center</title>\n</head>\n<body>\n  <!-- Start building the Adoption Center here! -->\n  \n</body>\n</html>`,
    quiz: [{ question: 'When creating the "Steps to Adopt", which tag should you use so the steps are automatically numbered?', options: ['<ul>', '<ol>', '<li>', '<dl>'], answer: 1, explanation: 'The <ol> tag stands for Ordered List, which automatically numbers items.' }]
  }
];
export const htmlCurriculum: Lesson[] = [
  {
    id: 'html-w1-intro',
    title: 'Week 1: HTML Basics & Structure 🧱',
    description: 'Learn the building blocks of the web and construct your first page skeleton!',
    phase: 1,
    week: 1,
    slug: 'html-basics',
    preloadedCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Challenge</title>\n</head>\n<body>\n  <!-- Write your code here -->\n</body>\n</html>',
    hint: 'Remember to put your visible content inside the <body> tags!',
    concept: 'Understanding tags, elements, and the standard document structure.',
    syntax: '<tagname>content</tagname>',
    example: '<!DOCTYPE html>\n<html>\n<head>\n<title>My Page</title>\n</head>\n<body>\n<h1>Hi!</h1>\n</body>\n</html>',
    challenge: 'Build a complete HTML document with a title, a heading, and a paragraph!',
    topics: week1Topics,
  },
  {
    id: 'html-w2-core',
    title: 'Week 2: Essential Tags Mastery 🏷️',
    description: 'Dive deep into the most important HTML tags that build every website.',
    phase: 1,
    week: 2,
    slug: 'html-core-tags',
    preloadedCode: '<!DOCTYPE html>\n<html>\n<body>\n  \n</body>\n</html>',
    hint: 'Use <h1> for big titles and <p> for paragraphs.',
    concept: 'Mastering the fundamental tags required for document structure.',
    syntax: '<h1>...</h1> <br> <hr>',
    example: '<h1>Welcome</h1>\n<hr>\n<p>Enjoy the site.</p>',
    challenge: 'Create a page with a title, two paragraphs separated by a horizontal line, and a line break!',
    topics: week2Topics,
  },
  {
    id: 'html-w3-media',
    title: 'Week 3: Links, Images & Lists 🔗',
    description: 'Make your page interactive with links, add colorful images, and organize data with lists!',
    phase: 1,
    week: 3,
    slug: 'html-links-images-lists',
    preloadedCode: '<h3>My Favorite Things</h3>\n<ul>\n  <li>Item 1</li>\n</ul>',
    hint: 'Images need the src attribute, links need the href attribute!',
    concept: 'Adding media and structure to web pages.',
    syntax: '<img src="..."> <a href="...">...</a>',
    example: '<a href="https://google.com">Google</a>',
    challenge: 'Build a list of your 3 favorite animals and add an image of one of them!',
    topics: week3Topics,
  },
  {
    id: 'html-w4-forms',
    title: 'Week 4: Tables, Forms & Containers 📦',
    description: 'Organize data into grids, collect user input, and build complex layouts using divs.',
    phase: 2,
    week: 4,
    slug: 'html-tables-forms-divs',
    preloadedCode: '<div>\n  <form>\n    \n  </form>\n</div>',
    hint: 'Tables use tr for rows and td for cells. Forms wrap inputs!',
    concept: 'Advanced structuring and data collection.',
    syntax: '<table><tr><td></td></tr></table>',
    example: '<form>\n<input type="text">\n<button>Send</button>\n</form>',
    challenge: 'Create a login form inside a div container, and build a 2x2 table below it!',
    topics: week4Topics,
  }
,
  {
    id: 'html-w5-obsolete',
    title: 'Week 5: The Museum of Obsolete Tags 🏛️',
    description: 'Learn the history of HTML by exploring tags that are banned, and discover their modern superpowers!',
    phase: 2,
    week: 5,
    slug: 'html-obsolete-tags',
    preloadedCode: '<!-- Welcome to the museum! -->\n<p>Write your modern code here!</p>',
    hint: 'Remember: HTML is for structure, CSS is for styling!',
    concept: 'Understanding the separation of concerns: HTML (Structure) vs CSS (Presentation).',
    syntax: '<del>old</del> vs <strike>old</strike>',
    example: '<p>Instead of <center>, use <div style="text-align: center;"></p>',
    challenge: 'Fix a badly written website by replacing an old <marquee>, <center>, and <font> tag with modern HTML and CSS!',
    topics: week5Topics,
  }
,
  {
    id: 'html-w6-projects',
    title: 'Week 6: Final Projects 🎓',
    description: 'Put everything you have learned together! Build complete webpages with text, media, lists, tables, and forms.',
    phase: 2,
    week: 6,
    slug: 'html-final-projects',
    preloadedCode: '<!DOCTYPE html>\n<html>\n<body>\n\n</body>\n</html>',
    hint: 'Plan your page structure first: headings at the top, lists/tables in the middle, forms at the bottom!',
    concept: 'Synthesizing all basic HTML tags to build a complete, functional webpage layout.',
    syntax: '<!-- Combine everything! -->',
    example: 'See the "Example Code" tab in the topics for visual mockups of your final projects.',
    challenge: 'Combine all 4 categories (Text, Media, Data, Forms) perfectly into a single webpage!',
    topics: week6Topics,
  }
];
