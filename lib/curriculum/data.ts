// ─── MCQ quiz question ───────────────────────────────────────────────────────
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;        // 0-based index of the correct option
  explanation: string;   // shown after the student answers
};

// ─── Topic: a sub-section within a week ───────────────────────────────────────
export type Topic = {
  id: string;
  number: string;          // e.g. "Intro", "2.1", "2.2"
  title: string;
  theory: string[];        // array of explanation paragraphs
  syntax?: string;         // formal syntax structure
  keyPoints?: string[];    // bullet-point key facts
  codeExample?: string;    // code shown in the "Example" block
  practiceCode?: string;   // starter code loaded into PracticeBoard
  hint?: string;
  quiz?: QuizQuestion[];   // MCQ questions (shown in Quiz tab)
};

// ─── Lesson: one week's entry ────────────────────────────────────────────────
export type Lesson = {
  id: string;
  title: string;
  description: string;
  phase: number;
  week: number;
  slug: string;
  // Legacy single-topic fields (used when topics array is absent)
  preloadedCode: string;
  hint: string;
  concept: string;
  syntax: string;
  example: string;
  challenge: string;
  // Optional multi-topic structure
  topics?: Topic[];
};

// ─── Week 1 ───────────────────────────────────────────────────────────────────
const week1Topics: Topic[] = [
  {
    id: 'w1-1',
    number: '1.1',
    title: 'Python\'s Secret History 🕵️‍♂️',
    theory: [
      'Welcome to the Python Mission! Python was created by a Dutch programmer named **Guido van Rossum** in 1991. 🇳🇱',
      'Fun fact: It wasn\'t named after the scary snake! Guido was a big fan of a funny TV show called "Monty Python\'s Flying Circus". 🎪',
      'Today, Python is used everywhere—from building Instagram to controlling Mars Rovers! It is famous for being super easy to read and type.',
    ],
    syntax: '# No special syntax here, just text!\nprint("Your Message")',
    keyPoints: [
      'Python is a high-level language (easy for humans).',
      'It was released in 1991.',
      'It is named after a comedy show, not a snake!',
    ],
    codeExample: `# Your very first line of code!\nprint("Python is awesome!")`,
    practiceCode: `# 🚨 BUG DETECTED: The communication array is offline!\n# TODO: 1. Fix the error in the first print statement.\n# TODO: 2. Add your own print statement to say "Hello" to the aliens.\n\nprint("Booting up Mission Control...)  # Oops! Missing something at the end?\nprint("Radar shows 3 alien ships.")\n\n# --- EXPERIMENT ---\n# Try printing a number without quotes, like print(42). Does it work?`,
    quiz: [
      {
        question: 'Who created Python?',
        options: ['Guido van Rossum', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
        answer: 0,
        explanation: 'Guido van Rossum created Python in the late 1980s and released it in 1991.',
      }
    ]
  },
  {
    id: 'w1-2',
    number: '1.2',
    title: 'Input & Output: Let\'s Talk! 🗣️',
    theory: [
      '**Output** is how the computer talks to YOU. We use the `print()` function to show text on the screen.',
      '**Input** is how YOU talk to the computer. We use the `input()` function. It stops the program and waits for you to type something and press **Enter**! ⌨️',
      'When you use `input()`, you can put a question inside the parentheses to tell the user what to type.',
    ],
    syntax: 'print("Output Text")\nvariable = input("Question Text")',
    keyPoints: [
      'print() displays information.',
      'input() receives information from the keyboard.',
      'input() always gives you a "String" (text).',
    ],
    codeExample: `name = input("What is your name? ")\nprint(f"Hi {name}! Nice to meet you!")`,
    practiceCode: `# 🚨 BUG DETECTED: The detective robot is malfunctioning!\n# TODO: 1. Fix the error in the input() function.\n# TODO: 2. Add an f-string print statement to output what the suspect typed!\n\nsuspect_name = input("What is your name? ) # Missing a quote?\n\n# Write your print statement below this line:\n\n\n# --- EXPERIMENT ---\n# Run the code and type a number for your name. Does Python care?`,
    hint: 'Use input("Your message") to ask a question.',
    quiz: [
      {
        question: 'Which command shows text on the screen?',
        options: ['input()', 'write()', 'print()', 'talk()'],
        answer: 2,
        explanation: 'print() is the standard way to output text in Python.',
      }
    ]
  },
  {
    id: 'w1-3',
    number: '1.3',
    title: 'Secret Boxes: Variables & Types 📦',
    theory: [
      'Imagine you have different types of toys. You wouldn\'t put a puzzle in the same box as your LEGOs, right? Computers do the same thing!',
      '**Variables** are like named boxes where you store data. Python has four major "types" of boxes:',
      '1. **Strings (`str`):** Text and letters, like `"Hello"`. Always use quotes!',
      '2. **Integers (`int`):** Whole numbers like `10` or `-5`.',
      '3. **Floats (`float`):** Decimal numbers like `3.14`. Even `10.0` is a float!',
      '4. **Booleans (`bool`):** Simple `True` or `False` values.',
    ],
    syntax: 'variable_name = value',
    keyPoints: [
      'Variables store data for later use.',
      'The type of data determines what you can do with it.',
      'Python is smart—you don\'t have to tell it the type; it figures it out!',
    ],
    codeExample: `name = "SuperCoder" # This is a String\nage = 10           # This is an Integer\nheight = 1.45      # This is a Float\nis_ready = True     # This is a Boolean`,
    practiceCode: `# 🚨 BUG DETECTED: The secret profile is incomplete!\n# TODO: 1. Add a new variable called 'agent_age' and set it to a number.\n# TODO: 2. Add 'agent_age' into the f-string using {}.\n\nscore = 100\nname = "Commander"\n\nprint(f"Profile: {name}. Score: {score}. Age: ")\n\n# --- EXPERIMENT ---\n# Try changing 'score' to a float like 99.5.`,
    hint: 'Variable names should be simple and describe what is inside.',
    quiz: [
      {
        question: 'What is the type for decimal numbers like 3.14?',
        options: ['String', 'Integer', 'Float', 'Boolean'],
        answer: 2,
        explanation: 'Decimal numbers are called Floats in Python.',
      }
    ]
  },
  {
    id: 'w1-4',
    number: '1.4',
    title: 'Assignment & Multi-line 📝',
    theory: [
      'We use the `=` symbol to "assign" a value to a variable. In coding, `=` doesn\'t mean "equals" like in math—it means **"Put this value into this box"**.',
      'Sometimes you want to write a long story or a poem. For this, Python uses **Triple Quotes** (`"""` or `\'\'\'`). This tells Python: "Keep going until you see another triple quote!"',
    ],
    syntax: '# Single line\nmsg = "Hi"\n\n# Multi-line\nstory = """Once upon a time...\nin a galaxy far away"""',
    keyPoints: [
      'Assignment happens from right to left.',
      'Triple quotes allow your text to span multiple lines.',
    ],
    codeExample: `message = """This is a very long\nmessage that spans\nmultiple lines!"""\nprint(message)`,
    practiceCode: `# 🚨 BUG DETECTED: The story is broken into pieces!\n# TODO: 1. Fix the triple quotes so the whole story prints correctly.\n# TODO: 2. Add one more line to the story inside the quotes.\n\nstory = """Once upon a time\nin a galaxy filled with code...\n# Hmm, the quotes here aren't right -> ""\nprint(story)\n\n# --- EXPERIMENT ---\n# What happens if you use single quotes ''' instead of double quotes """?`,
    quiz: [
      {
        question: 'What does the = sign do in Python?',
        options: ['Check if two things are equal', 'Put a value into a variable (box)', 'Delete a variable', 'Add two numbers'],
        answer: 1,
        explanation: 'The = symbol is the Assignment operator. It stores the value on the right into the box on the left!',
      }
    ]
  },
  {
    id: 'w1-5',
    number: '1.5',
    title: 'Naming Your Boxes 🏷️',
    theory: [
      'Naming your variables is like naming your pets—there are rules! 🐾',
      '1. **Start with a letter** or an underscore `_`. No numbers at the start!',
      '2. **No spaces!** Use underscores instead (this is called "snake_case").',
      '3. **Letters and numbers only.** No `!`, `@`, `#`, or `-`.',
      '4. **Case sensitive.** `MyBox` and `mybox` are two different boxes!',
    ],
    syntax: 'good_name = 1\n_also_good = 2\n\n# Bad names:\n# 1st_place = 10\n# my name = "Bob"',
    keyPoints: [
      'Good: my_score, player_1, speed',
      'Bad: 1score, my-score, player 1',
      'Variable names are case-sensitive.',
    ],
    codeExample: `user_name = "Alice"  # Good!\nscore_count = 10     # Good!\n\n# 1st_place = "Gold" # ERROR! Can't start with 1`,
    practiceCode: `# 🚨 BUG DETECTED: The pet's name violates naming rules!\n# TODO: 1. Fix the variable name so it uses snake_case.\n# TODO: 2. Update the print statement to match the new variable name.\n\nbest pet! = "Robot Dog"\nprint(f"My sidekick is {best pet!}")\n\n# --- EXPERIMENT ---\n# Can you start a variable name with a number like 1st_pet? Try it!`,
    quiz: [
      {
        question: 'Which one is a GOOD variable name?',
        options: ['1st_player', 'player 1', 'player_1', 'player!'],
        answer: 2,
        explanation: 'Variable names cannot start with numbers, contain spaces, or special symbols like !.',
      }
    ]
  },
  {
    id: 'w1-6',
    number: '1.6',
    title: 'Special Keywords 🔑',
    theory: [
      'Some words are so special that Python keeps them for itself. These are called **Keywords**.',
      'Think of them like "Reserved Seats" at a movie. You can\'t use these words to name your variables, or Python will get confused!',
      'Examples: `if`, `else`, `for`, `while`, `def`, `class`, `import`, `True`, `False`.',
    ],
    syntax: '# These are forbidden for variable names:\n# if = 5\n# for = "loop"',
    keyPoints: [
      'Keywords have specific jobs in Python.',
      'Most keywords are lowercase (except True, False, and None).',
      'If you try to use one as a name, you get a SyntaxError.',
    ],
    codeExample: `# You can't do this: if = 10\nprint("if, for, and def are keywords!")\nprint("They turn a special color in your editor!")`,
    practiceCode: `# 🚨 BUG DETECTED: A forbidden word was used!\n# TODO: 1. Look at the error message when you run this.\n# TODO: 2. Rename the variable 'True' to something legal, like 'is_true'.\n\nTrue = "Yes" # You can't name a box 'True'!\nprint(True)\n\n# --- EXPERIMENT ---\n# Try naming a variable 'for' or 'def'. What happens?`,
    quiz: [
      {
        question: 'Can you use the word "if" as a variable name?',
        options: ['Yes, always', 'No, it is a reserved keyword', 'Only if it is uppercase', 'Only if it is a number'],
        answer: 1,
        explanation: 'Keywords like "if" are reserved by Python for its own rules and cannot be used as names.',
      }
    ]
  },
  {
    id: 'w1-7',
    number: '1.7',
    title: 'Number Basics 🔢',
    theory: [
      'In Python, there are two main types of numbers:',
      '1. **Integers (`int`):** These are whole numbers without decimals, like `1`, `100`, or `-5`. Use them for counting things!',
      '2. **Floats (`float`):** These are numbers with a decimal point, like `3.14`, `0.5`, or even `5.0`. Use them for precise measurements!',
    ],
    syntax: 'my_int = 10\nmy_float = 10.5',
    keyPoints: [
      'Integers are whole numbers.',
      'Floats have decimal points.',
      'You can use the type() function to check what a number is.',
    ],
    codeExample: `x = 5       # int\ny = 5.0     # float\nprint(type(x))\nprint(type(y))`,
    practiceCode: `# 🚨 BUG DETECTED: The spaceship coordinates are the wrong type!\n# TODO: 1. Make x an integer (whole number).\n# TODO: 2. Make y a float (decimal number).\n\nx = "10"\ny = "5.5"\nprint(f"Coordinates: X={x}, Y={y}")\n\n# --- EXPERIMENT ---\n# Use type() to see what type x is after you fix it! print(type(x))`,
    quiz: [
      {
        question: 'What type is the number 10.5?',
        options: ['int', 'float', 'string', 'boolean'],
        answer: 1,
        explanation: 'Numbers with decimals are called Floats in Python.',
      }
    ]
  },
  {
    id: 'w1-8',
    number: '1.8',
    title: 'Math & Precedence 🧮',
    theory: [
      'Python is a master of math! It follows the **PEMDAS / BODMAS** rule just like in your math class.',
      '1. **P**arentheses `()`\n2. **E**xponents `**`\n3. **M**ultiplication `*` and **D**ivision `/`\n4. **A**ddition `+` and **S**ubtraction `-`!',
    ],
    syntax: 'result = (2 + 2) * 5',
    keyPoints: [
      'Parentheses always come first.',
      'Exponents (powers) are written as **.',
      'Multiplication uses * and Division uses /.',
    ],
    codeExample: `result = (10 + 2) * 3\nprint(result)  # 36\n\nresult2 = 10 + 2 * 3\nprint(result2) # 16`,
    practiceCode: `# 🚨 BUG DETECTED: The math is doing addition before multiplication!\n# TODO: 1. Use parentheses () so that 5 + 5 happens BEFORE multiplying by 2.\n# TODO: 2. Calculate the square of the result using ** 2.\n\nresult = 5 + 5 * 2\nprint(f"The result is {result}")\n\n# --- EXPERIMENT ---\n# Without parentheses, what does Python calculate first?`,
    quiz: [
      {
        question: 'What is the result of 10 + 2 * 5?',
        options: ['60', '20', '25', '17'],
        answer: 1,
        explanation: 'Python follows PEMDAS. 2 * 5 = 10, then 10 + 10 = 20.',
      }
    ]
  },
  {
    id: 'w1-9',
    number: '1.9',
    title: 'String Secrets (Part 1) 🧵',
    theory: [
      'Strings are like trains made of letters! Every letter has its own seat number, called an **Index**.',
      '**The most important rule:** Python starts counting at **0**, not 1! The first letter is always at index 0.',
      '**Slicing:** You can "slice" a string to get a smaller piece of it using `[start:stop]`. It takes the letters from the start index up to (but not including) the stop index.',
    ],
    syntax: 'text = "Python"\nletter = text[0]  # Get "P"\nslice = text[0:2] # Get "Py"',
    keyPoints: [
      'Strings are indexed starting at 0.',
      'Slicing uses [start:stop].',
      'len(text) tells you how many letters are in the string.',
    ],
    codeExample: `word = "Python"\nprint(word[0])    # P\nprint(word[0:2])  # Py\nprint(len(word))  # 6`,
    practiceCode: `# 🚨 BUG DETECTED: The slicing is cutting off too early!\n# TODO: 1. Slice 'my_name' so it prints the full word 'Super'.\n# TODO: 2. Print just the VERY FIRST letter using index 0.\n\nmy_name = "SuperCoder"\nprint(my_name[0:3]) # Oops, this only prints 'Sup'\n\n# --- EXPERIMENT ---\n# What happens if you try my_name[100]?`,
    quiz: [
      {
        question: 'What index does Python start counting at?',
        options: ['1', '0', '-1', '10'],
        answer: 1,
        explanation: 'Python (and most languages) start counting indices at 0!',
      }
    ]
  },
  {
    id: 'w1-10',
    number: '1.10',
    title: 'String Secrets (Part 2) 🛠️',
    theory: [
      'Strings have "Methods"—these are like special tools that live inside the string.',
      '1. `.upper()`: Makes everything BIG (UPPERCASE).',
      '2. `.lower()`: Makes everything small (lowercase).',
      '3. `.replace("old", "new")`: Swaps a word for a new one.',
      '4. `.count("x")`: Counts how many times "x" appears.',
    ],
    syntax: 'text.upper()\ntext.replace("a", "b")',
    keyPoints: [
      'Methods are called with a dot `.` after the string variable.',
      'They don\'t change the original string (they return a new one).',
    ],
    codeExample: `msg = "Hello World"\nprint(msg.upper())\nprint(msg.replace("World", "Python"))`,
    practiceCode: `# 🚨 BUG DETECTED: The message needs to be yelled, but the word is wrong!\n# TODO: 1. Use .upper() to make the shout variable uppercase.\n# TODO: 2. Use .replace() on msg to change "apples" to "coding".\n\nshout = "i am a hacker"\nprint(shout)\n\nmsg = "I love apples"\nprint(msg)\n\n# --- EXPERIMENT ---\n# Can you chain methods? Try msg.replace(...).upper()!`,
    quiz: [
      {
        question: 'Which method makes a string ALL CAPS?',
        options: ['.lower()', '.upper()', '.replace()', '.count()'],
        answer: 1,
        explanation: '.upper() turns all letters into uppercase.',
      }
    ]
  },
  {
    id: 'w1-11',
    number: '1.11',
    title: 'Concatenation 🔗',
    theory: [
      '**Concatenation** is a fancy word for "sticking strings together". You can use the `+` symbol to join two or more strings into one.',
      '**f-strings:** This is the modern, "cool" way to mix variables and text. Just put an `f` before your quotes and use curly braces `{}` for your variables! ✨',
    ],
    syntax: 'full = string1 + string2\nmsg = f"Hello {name}"',
    keyPoints: [
      'Use + to join strings.',
      'f-strings are the best way to format text with variables.',
      'Don\'t forget the space between words when using +!',
    ],
    codeExample: `first = "Python"\nlast = "Kids"\nfull = first + " " + last\nprint(full)\n\nprint(f"Welcome to {full}!")`,
    practiceCode: `# 🚨 BUG DETECTED: The variables aren't showing up in the string!\n# TODO: 1. Turn the string into an f-string by adding 'f' before the quote.\n# TODO: 2. Add the 'city' variable into the string using {}.\n\nhero = "Spider-Man"\ncity = "New York"\n\nprint("Hero: {hero} protects the city of ")\n\n# --- EXPERIMENT ---\n# What happens if you forget the curly braces {} around hero?`,
    quiz: [
      {
        question: 'What is the best way to mix variables and text?',
        options: ['f-strings', 'Adding with +', 'Printing separately', 'Writing on paper'],
        answer: 0,
        explanation: 'f-strings are the modern, fastest, and cleanest way to format text in Python.',
      }
    ]
  },
  {
    id: 'w1-12',
    number: '1.12',
    title: 'Oops! Error Messages 🚧',
    theory: [
      'Everyone makes mistakes, even pro coders! 😅 Errors are just Python\'s way of saying "I don\'t understand".',
      '1. **SyntaxError:** You broke a rule of the Python language (like a missing quote or bracket).',
      '2. **NameError:** You tried to use a variable that doesn\'t exist yet.',
      '3. **TypeError:** You tried to do something that doesn\'t make sense (like adding a number to a string).',
    ],
    syntax: 'print("Hello   # SyntaxError\nprint(ghost)   # NameError',
    keyPoints: [
      'Don\'t be afraid of errors; they help you learn!',
      'Read the last line of the error message to find the cause.',
      'The "arrow" usually points to exactly where the mistake is.',
    ],
    codeExample: `# SyntaxError Example: print("Hello"\n# NameError Example: print(ghost_variable)`,
    practiceCode: `# 🚨 BUG DETECTED: There are 3 errors hidden here!\n# TODO: 1. Fix the missing quote in the first print.\n# TODO: 2. Fix the missing parenthesis in the second print.\n# TODO: 3. Fix the capitalization of 'Print' in the third line.\n\nprint("Hello World)\nprint("I am fixing bugs!"\nPrint("Python is strict!")\n\n# --- EXPERIMENT ---\n# Errors are your friends! They tell you exactly what line is broken.`,
    quiz: [
      {
        question: 'What happens if you forget a quote in print("Hello)?',
        options: ['SyntaxError', 'NameError', 'It works anyway', 'The computer explodes'],
        answer: 0,
        explanation: 'Python needs both quotes to understand it is a string! This is a rule of the language, so it is a SyntaxError.',
      }
    ]
  },
  {
    id: 'w1-13',
    number: '1.13',
    title: 'Comments & Docstrings 💬',
    theory: [
      '**Comments** are notes for humans. Python ignores them completely! Use the `#` symbol for short notes.',
      '**Docstrings** (Documentation Strings) are used to explain what a big part of your program does. They use triple quotes `"""`.',
    ],
    syntax: '# Short comment\n"""Long docstring\nexplaining everything"""',
    keyPoints: [
      'Comments help other people understand your code.',
      'Use comments to explain WHY you did something.',
      'Python ignores everything after the #.',
    ],
    codeExample: `# This is a comment\nprint("Hello") # Comment at end\n\n"""\nThis is a docstring.\nIt can be many lines!\n"""`,
    practiceCode: `# 🚨 BUG DETECTED: The computer is trying to run human text!\n# TODO: 1. Turn the first line into a comment using '#'.\n# TODO: 2. Turn the bottom three lines into a docstring using triple quotes.\n\nThis is a note for humans, not for Python!\nprint("Code runs fine here.")\n\nThis is a long story\nthat spans multiple lines\nand needs triple quotes!\n\n# --- EXPERIMENT ---\n# If you remove the # from a comment, what error do you get?`,
    quiz: [
      {
        question: 'Which symbol is used for a single-line comment?',
        options: ['/', '//', '#', '/*'],
        answer: 2,
        explanation: '# is the hash symbol used for comments in Python.',
      }
    ]
  },
  {
    id: 'w1-14',
    number: '1.14',
    title: 'Why Python? 🌎',
    theory: [
      'Python is like a superpower! 🚀 It is used to build the world\'s coolest things:',
      '1. **Websites:** YouTube, Instagram, and Spotify all use Python.',
      '2. **AI:** ChatGPT and Self-Driving Cars are powered by Python.',
      '3. **Science:** NASA uses it to study space and galaxies!',
    ],
    syntax: '# No special syntax here, just inspiration!',
    keyPoints: [
      'Python is versatile and easy to learn.',
      'It has a huge community of helpful coders.',
      'Knowing Python opens doors to many careers.',
    ],
    codeExample: `print("Python is the language of the future! 🚀")`,
    practiceCode: `# 🚨 BUG DETECTED: We need to program the Mars Rover!\n# TODO: 1. Create a variable 'rover_name' and give it a name.\n# TODO: 2. Write an f-string print statement that says "{rover_name} is ready for Mars!"\n\n\n\n# --- EXPERIMENT ---\n# NASA uses Python because it is easy to read. Write a comment explaining your code!`,
    quiz: [
      {
        question: 'Which of these is built using Python?',
        options: ['Instagram', 'YouTube', 'Spotify', 'All of them!'],
        answer: 3,
        explanation: 'Python is used by almost all major tech companies and science agencies!',
      }
    ]
  },
  {
    id: 'w1-15',
    number: '1.15',
    title: 'The Road Ahead 🛤️',
    theory: [
      'Congratulations! You\'ve completed Week 1! 🏅 You now know how to talk to computers, use variables, and work with numbers and text.',
      'Next week, we\'ll learn about **Expressions** and how to do even cooler math tricks. Are you ready?',
    ],
    syntax: 'print("Onwards to Week 2!")',
    keyPoints: [
      'You are now a Python Coder!',
      'Practice makes perfect—keep coding every day!',
      'The journey of 1000 miles starts with a single "Hello World".',
    ],
    codeExample: `print("Ready for Week 2? Let's go!")`,
    practiceCode: `# 🏆 FINAL CHALLENGE: Week 1 Complete!\n# TODO: 1. Print a massive congratulatory message using triple quotes.\n# TODO: 2. Calculate 10 * 10 inside an f-string to show your brain power!\n\n\n\n# --- EXPERIMENT ---\n# Take a deep breath. You are a real coder now. Get ready for Week 2!`,
    quiz: [
      {
        question: 'Are you ready for Week 2?',
        options: ['Yes!', 'Double Yes!', 'Definitely!', 'Let\'s go!'],
        answer: 0,
        explanation: 'Great job completing Week 1! See you in Week 2.',
      }
    ]
  }
];

// ─── Week 2 ───────────────────────────────────────────────────────────────────
const week2Topics: Topic[] = [
  {
    id: 'w2-1',
    number: '2.1',
    title: 'What is an Expression? 🧠',
    theory: [
      'An **expression** is like a math sentence. It is a combination of values, variables, and operators that Python "evaluates" (calculates) to find a single result.',
      'Think of it as asking Python a question, and the answer is the result of the expression! 💬',
    ],
    syntax: 'result = value + value * variable',
    keyPoints: [
      'Expressions result in a single value.',
      'Python calculates expressions using specific rules (Precedence).',
    ],
    codeExample: `result = 10 + 5 * 2\n# (5 * 2) = 10, then 10 + 10 = 20\nprint(result)`,
    practiceCode: `calculation = 100 / 10 + 5\nprint(calculation)\n# Try changing the numbers!`,
    quiz: [
      {
        question: 'What is an expression?',
        options: ['A way to print text', 'A combination of values that results in a single value', 'A secret password', 'A type of variable'],
        answer: 1,
        explanation: 'Expressions are evaluated by Python to produce a result.',
      }
    ]
  },
  {
    id: 'w2-2',
    number: '2.2',
    title: 'Mixed Data Types 🎨',
    theory: [
      'What happens when you mix an Integer (10) with a Float (2.5)? Python is smart! It usually converts everything to a Float so that no information is lost.',
      'It is like mixing water and juice; you get a bigger cup of juice! 🥤 This is called "Implicit Conversion".',
    ],
    syntax: 'int + float -> float',
    keyPoints: [
      'Floats are more "precise" than integers.',
      'Python prefers floats when mixing types.',
    ],
    codeExample: `x = 10    # int\ny = 2.5   # float\nz = x + y # Result is 12.5 (float)\nprint(type(z))`,
    practiceCode: `score = 5\nbonus = 0.5\nfinal = score + bonus\nprint(f"Total: {final} (Type: {type(final)})")`,
    quiz: [
      {
        question: 'What happens when you add an Integer and a Float?',
        options: ['You get an Error', 'It becomes an Integer', 'It becomes a Float', 'It disappears'],
        answer: 2,
        explanation: 'Python automatically converts the result to a Float to keep the precision.',
      }
    ]
  },
  {
    id: 'w2-3',
    number: '2.3',
    title: 'Floating-Point Errors ⚠️',
    theory: [
      'Computers are fast, but they store numbers in "binary" (0s and 1s). Some decimals are hard for them to store perfectly.',
      'Sometimes, `0.1 + 0.2` might not be exactly `0.3`! It is a tiny, tiny error, but it is good to know about. 🧮',
    ],
    syntax: '0.1 + 0.2 != 0.3  # Sometimes!',
    keyPoints: [
      'Computers use binary math.',
      'Tiny errors can happen with float decimals.',
      'Don\'t worry, it rarely affects normal programs!',
    ],
    codeExample: `print(0.1 + 0.2)\n# Might show 0.30000000000000004`,
    practiceCode: `print(0.1 + 0.1 + 0.1)\n# See if the computer gets it exactly right!`,
    quiz: [
      {
        question: 'Why is 0.1 + 0.2 sometimes not exactly 0.3?',
        options: ['Python is bad at math', 'Computers use binary which is tricky for decimals', 'The computer is tired', 'None'],
        answer: 1,
        explanation: 'Computers store numbers in binary, and some decimal numbers cannot be represented perfectly.',
      }
    ]
  },
  {
    id: 'w2-4',
    number: '2.4',
    title: 'Rounding & Units 📏',
    theory: [
      'To clean up long decimals, use the `round()` function. You can tell it how many decimal places you want to keep!',
      'This is super helpful for unit conversions, like changing kilometers to miles or dollars to cents. 🏃‍♂️',
    ],
    syntax: 'round(number, decimals)',
    keyPoints: [
      'round() makes numbers look neater.',
      'The second argument tells Python how many decimals to keep.',
    ],
    codeExample: `pi = 3.14159\nprint(round(pi, 2)) # Shows 3.14\n\nkm = 5\nmiles = km * 0.621371\nprint(f"{km}km is {round(miles, 2)} miles")`,
    practiceCode: `price = 19.9987\nprint(f"The price is {round(price, 2)}")`,
    quiz: [
      {
        question: 'What does round(3.14159, 2) return?',
        options: ['3', '3.1', '3.14', '3.142'],
        answer: 2,
        explanation: 'The second argument tells Python to keep 2 decimal places.',
      }
    ]
  },
  {
    id: 'w2-5',
    number: '2.5',
    title: 'Overflow & Underflow 🌊',
    theory: [
      '**Overflow** happens when a number is so HUGE that the computer can\'t handle it. 🌋',
      '**Underflow** happens when a number is so tiny (close to zero) that the computer treats it as zero. 💧',
      'Python is very powerful and can handle much bigger integers than most languages!',
    ],
    syntax: 'x = 10**1000  # A very big number!',
    keyPoints: [
      'Python handles large integers automatically.',
      'Floats have a maximum limit.',
    ],
    codeExample: `# Python handles large integers automatically!\nprint(10**500) # This is a GIGANTIC number`,
    practiceCode: `print(10**100)\n# How big can you make your number?`,
    quiz: [
      {
        question: 'Can Python handle very large whole numbers?',
        options: ['Yes, it handles them automatically', 'No, they must be small', 'Only if you use a float', 'Only up to 100'],
        answer: 0,
        explanation: 'Python is great because it handles extremely large integers automatically!',
      }
    ]
  },
  {
    id: 'w2-6',
    number: '2.6',
    title: 'Division & Modulo ➗',
    theory: [
      'In Python, there are three types of division:',
      '1. **`/` (Normal Division):** Always gives a float (10 / 2 = 5.0).',
      '2. **`//` (Floor Division):** Gives only the whole number, chopping off the decimal (10 // 3 = 3).',
      '3. **`%` (Modulo):** Gives only the REMAINDER! (10 % 3 = 1). Think of it like pieces of cake left over! 🍰',
    ],
    syntax: 'x / y  # Normal\nx // y # Floor\nx % y  # Remainder',
    keyPoints: [
      'Normal division always results in a float.',
      'Modulo is great for checking if a number is Even or Odd!',
    ],
    codeExample: `print(10 / 3)  # 3.333...\nprint(10 // 3) # 3\nprint(10 % 3)  # 1`,
    practiceCode: `print(15 % 2)\n# If the result is 1, the number is ODD.\n# If the result is 0, the number is EVEN!`,
    quiz: [
      {
        question: 'What is 7 % 2?',
        options: ['3.5', '3', '1', '0'],
        answer: 2,
        explanation: '7 divided by 2 is 3 with a remainder of 1.',
      }
    ]
  },
  {
    id: 'w2-7',
    number: '2.7',
    title: 'Type Conversion Intro 🔄',
    theory: [
      'Sometimes we need to change a variable from one type to another. This is called **Type Casting**.',
      'You can change a string `"10"` into a real number `10` so you can do math with it! 🧙‍♂️',
    ],
    syntax: 'new_type = type_name(variable)',
    keyPoints: [
      'int() converts to whole numbers.',
      'float() converts to decimals.',
      'str() converts to text.',
    ],
    codeExample: `age_str = "10"\nage_int = int(age_str)\nprint(age_int + 5) # 15`,
    practiceCode: `score_text = "50"\n# Try converting score_text to an integer and add 10 to it!`,
    quiz: [
      {
        question: 'How do you turn the string "10" into a number?',
        options: ['num("10")', 'int("10")', 'str(10)', 'float("10")'],
        answer: 1,
        explanation: 'int() is used to convert strings or floats into whole numbers.',
      }
    ]
  },
  {
    id: 'w2-8',
    number: '2.8',
    title: 'Implicit Conversion ☁️',
    theory: [
      'This is **Automatic** conversion. Python does it for you without being asked.',
      'Example: Adding an integer to a float automatically makes the result a float. It\'s Python\'s way of keeping things precise! 🎩',
    ],
    syntax: '5 + 2.0 -> 7.0 (Auto)',
    keyPoints: [
      'Python tries not to lose information.',
      'Floats are "wider" than integers.',
    ],
    codeExample: `a = 5     # int\nb = 2.0   # float\nc = a * b # c is 10.0 (float) automatically!`,
    practiceCode: `x = 7\ny = 1.0\nprint(f"7 * 1.0 is {x * y} (Type: {type(x*y)})")`,
    quiz: [
      {
        question: 'What is "Implicit Conversion"?',
        options: ['Manual conversion', 'Automatic conversion by Python', 'Deleting data', 'A type of error'],
        answer: 1,
        explanation: 'Implicit conversion happens automatically when Python thinks it is safer.',
      }
    ]
  },
  {
    id: 'w2-9',
    number: '2.9',
    title: 'Explicit Conversion 🛠️',
    theory: [
      'This is **Manual** conversion. You use functions like `int()`, `float()`, and `str()` to force a change.',
      'Very useful when getting input from a user, because `input()` always gives you a String, even if they type a number! 🔡',
    ],
    syntax: 'num = int(input("Number: "))',
    keyPoints: [
      'input() always returns a String.',
      'Use int() to do math with user input.',
    ],
    codeExample: `user_age = "12"\nreal_age = int(user_age) # Now it is a number\nprint(real_age + 1)`,
    practiceCode: `number = input("Type a number: ")\n# Try adding 5 to the number! \n# Hint: You need int() first.`,
    quiz: [
      {
        question: 'What type of data does input() always return?',
        options: ['Integer', 'Float', 'String', 'Boolean'],
        answer: 2,
        explanation: 'Even if the user types a number, input() always gives you a String.',
      }
    ]
  },
  {
    id: 'w2-10',
    number: '2.10',
    title: 'Combining Ints & Floats 🤝',
    theory: [
      'Whenever you combine an int and a float in any math operation (+, -, *, /), the result will **ALWAYS** be a float.',
      'Python prefers to be precise and keep the decimal point just in case! 🎯',
    ],
    syntax: '5 * 2.0 = 10.0',
    keyPoints: [
      'Even if the result is a whole number (like 10.0), it stays a float.',
      'This ensures that divisions like 5 / 2 = 2.5 work perfectly.',
    ],
    codeExample: `print(10 + 2.0) # 12.0\nprint(5 * 1.0)  # 5.0`,
    practiceCode: `print(100 / 2)\n# Notice how it is 50.0, not 50!`,
    quiz: [
      {
        question: 'What is 10 / 2 in Python?',
        options: ['5', '5.0', '10', '2'],
        answer: 1,
        explanation: 'The single slash / always results in a Float.',
      }
    ]
  },
  {
    id: 'w2-11',
    number: '2.11',
    title: 'Built-in Magic Functions ✨',
    theory: [
      'Python has many "built-in" functions ready to use without any extra setup. They are like tools in a Swiss Army knife! 🔪',
      '1. **`abs(x)`:** Returns the "absolute value" (removes negative signs).',
      '2. **`max(a, b, ...)`:** Finds the biggest number in a group.',
      '3. **`min(a, b, ...)`:** Finds the smallest number in a group.',
    ],
    syntax: 'abs(-5)\nmax(1, 2, 3)\nmin(1, 2, 3)',
    keyPoints: [
      'Built-in functions save you from writing complex math yourself.',
      'max() and min() can take any number of arguments.',
    ],
    codeExample: `print(abs(-10))  # 10\nprint(max(5, 12, 7)) # 12\nprint(min(4, 1, 8))  # 1`,
    practiceCode: `number = -50\nprint(f"The positive version of {number} is {abs(number)}")\n# Try finding the max of your own numbers!`,
    quiz: [
      {
        question: 'Which function finds the largest number?',
        options: ['min()', 'max()', 'abs()', 'large()'],
        answer: 1,
        explanation: 'max() returns the largest value from the arguments given.',
      }
    ]
  },
  {
    id: 'w2-12',
    number: '2.12',
    title: 'Modules & Imports 🔌',
    theory: [
      'A **Module** is like a library of extra powers. You can "import" them to add new features to your code.',
      'It\'s like downloading an app for your phone! To use a module, use the `import` keyword followed by the module name. 🔌',
    ],
    syntax: 'import module_name\nmodule_name.function_name()',
    keyPoints: [
      'Imports must be at the very top of your file.',
      'The `math` module is one of the most useful for calculations.',
    ],
    codeExample: `import math\n# Now you have math powers!\nprint(math.sqrt(16)) # 4.0`,
    practiceCode: `import math\nprint(math.factorial(5))\n# Factorial 5 is 5*4*3*2*1! Try another number!`,
    quiz: [
      {
        question: 'How do you bring extra powers into your code?',
        options: ['load', 'include', 'import', 'get'],
        answer: 2,
        explanation: 'We use the import keyword to use modules.',
      }
    ]
  },
  {
    id: 'w2-13',
    number: '2.13',
    title: 'Advanced Math Powers 📐',
    theory: [
      'With the `math` module, you can solve complex problems like finding the area of a circle or a cylinder!',
      'It includes constants like `math.pi` (3.1415...) so you don\'t have to type them out. 🏺',
    ],
    syntax: 'import math\narea = math.pi * r**2',
    keyPoints: [
      'math.pi is a built-in constant.',
      'math.sqrt() finds the square root.',
    ],
    codeExample: `import math\nr = 5\narea = math.pi * r**2\nprint(f"Circle Area: {round(area, 2)}")`,
    practiceCode: `import math\n# Try to find the square root of 144! \n# Hint: math.sqrt(144)`,
    quiz: [
      {
        question: 'Which module has the square root function?',
        options: ['random', 'sys', 'math', 'os'],
        answer: 2,
        explanation: 'The math module contains functions like sqrt, pi, and sin.',
      }
    ]
  },
  {
    id: 'w2-14',
    number: '2.14',
    title: 'Trigonometry 🌊',
    theory: [
      'The `math` module even handles trigonometry (Sin, Cos, Tan). These are useful for making games, animations, and drawing waves! 🎮',
      'Note: Python uses **radians** instead of degrees. You can convert between them using `math.radians()` and `math.degrees()`.',
    ],
    syntax: 'import math\nmath.sin(math.radians(90))',
    keyPoints: [
      'Angles in math functions are in radians.',
      'Use math.radians(90) to convert 90 degrees to radians.',
    ],
    codeExample: `import math\nangle = math.radians(90)\nprint(math.sin(angle)) # 1.0`,
    practiceCode: `import math\ndegrees = 45\nradians = math.radians(degrees)\nprint(f"The Sin of 45 degrees is {math.sin(radians)}")`,
    quiz: [
      {
        question: 'What unit does math.sin() use for angles?',
        options: ['Degrees', 'Radians', 'Inches', 'Seconds'],
        answer: 1,
        explanation: 'Python math functions use radians. You can convert degrees using math.radians().',
      }
    ]
  },
  {
    id: 'w2-15',
    number: '2.15',
    title: 'Formatting Your Code 💅',
    theory: [
      'Beautiful code is easier to read! Python has a set of rules called **PEP 8** that tells us how to format our code.',
      'Always use spaces around operators (like `x = 10 + 5`) and give your variables clear, descriptive names. Coding style is like handwriting; keep it neat! ✍️',
    ],
    syntax: '# Good:\nx = 10 + 5\n\n# Bad:\nx=10+5',
    keyPoints: [
      'Use spaces for clarity.',
      'Give variables names that mean something.',
      'Neat code has fewer bugs!',
    ],
    codeExample: `# Messy: x=10+5\n# Neat:  x = 10 + 5\n\nprint("Clean code is happy code! ✨")`,
    practiceCode: `# Try to re-write this messy line of code neatly!\n# y=20*2+5`,
    quiz: [
      {
        question: 'What is the name of Python\'s style guide?',
        options: ['PEP 8', 'Style 101', 'Code Rules', 'Python Pro'],
        answer: 0,
        explanation: 'PEP 8 is the official style guide for Python code.',
      }
    ]
  },
];

// ─── Week 3 ───────────────────────────────────────────────────────────────────
const week3Topics: Topic[] = [
  {
    id: 'w3-1',
    number: '3.1',
    title: 'What is an Object? 🧱',
    theory: [
      'In Python, everything is an **Object**! Think of an object like a LEGO brick. It has **Properties** (what it is, like its color or size) and **Methods** (what it can do, like clicking into another brick).',
      'Objects are the basic building blocks that hold data and have special powers to change that data. 🧱',
    ],
    syntax: 'object.method()\nobject.property',
    keyPoints: [
      'Almost everything in Python is an object.',
      'Methods are functions that belong to an object.',
      'Use a dot `.` to access an object\'s powers.',
    ],
    codeExample: `text = "Hello"\nprint(text.upper()) # .upper() is a Method of the string object`,
    practiceCode: `msg = "python is fun"\n# Try using the .capitalize() method on msg!\nprint(msg.capitalize())`,
    quiz: [
      {
        question: 'What is an object in Python?',
        options: ['A physical thing', 'A building block with data and powers', 'A type of error', 'Nothing'],
        answer: 1,
        explanation: 'Objects are the basic building blocks that hold data and have special powers (methods).',
      }
    ]
  },
  {
    id: 'w3-2',
    number: '3.2',
    title: 'Unicode & Code Points 🌏',
    theory: [
      'Computers only understand numbers (0s and 1s), so how do they show emojis like 🐍 or 🚀? They use **Unicode**!',
      'Every character, letter, and emoji in the world has its own unique number called a **Code Point**. Python knows all of them, which means you can write code in any language! 📖',
    ],
    syntax: 'ord("A")  # Get number\nchr(65)   # Get character',
    keyPoints: [
      'Unicode is a worldwide standard for characters.',
      'ord() turns a letter into its code number.',
      'chr() turns a code number back into a letter.',
    ],
    codeExample: `print("\\u1F40D") # The code for a snake!\nprint(ord('A'))    # Shows 65\nprint(chr(66))    # Shows 'B'`,
    practiceCode: `print(chr(128640))\n# This is the code for a Rocket! What else can you find?`,
    quiz: [
      {
        question: 'What is the unique number for every character called?',
        options: ['Zip Code', 'Area Code', 'Code Point', 'Secret Key'],
        answer: 2,
        explanation: 'Every character in Unicode has a unique number called a Code Point.',
      }
    ]
  },
  {
    id: 'w3-3',
    number: '3.3',
    title: 'ASCII & Escape Sequences ⌨️',
    theory: [
      '**ASCII** is an older, simpler way to code letters. **Escape Sequences** are special codes that start with a backslash `\\`.',
      'They tell Python: "Don\'t print this literally, do something special instead!"',
      'Common ones:\n- `\\n`: Start a NEW LINE\n- `\\t`: Add a TAB space\n- `\\\'`: Print a single quote without breaking the string.',
    ],
    syntax: 'print("Line1\\nLine2")\nprint("I\\\'m coding!")',
    keyPoints: [
      'Backslash \\ is the escape character.',
      '\\n is the most common escape sequence.',
    ],
    codeExample: `print("Line 1\\nLine 2")\nprint("Column 1\\tColumn 2")\nprint("I\\\'m a coder!")`,
    practiceCode: `print("Pizza\\nBurger\\nSushi")\n# Try to print a list of your favorite things on different lines!`,
    quiz: [
      {
        question: 'What does \\n do in a string?',
        options: ['Adds a number', 'Starts a new line', 'Deletes text', 'Makes it bold'],
        answer: 1,
        explanation: '\\n is the newline escape sequence.',
      }
    ]
  },
  {
    id: 'w3-4',
    number: '3.4',
    title: 'F-Strings: The Best Way to Format ✨',
    theory: [
      '**F-strings** (Formatted Strings) are the most powerful way to mix variables and text. They are fast, easy to read, and very flexible.',
      'Just put an `f` before the first quote and use curly braces `{}` to "inject" your variables directly into the sentence! 💅',
    ],
    syntax: 'name = "Python"\nf"I love {name}"',
    keyPoints: [
      'Always start with f".',
      'Variables go inside {}.',
      'You can even do math inside the braces!',
    ],
    codeExample: `name = "Python"\nprint(f"I love {name}!")\nprint(f"2 + 2 is {2 + 2}")`,
    practiceCode: `pet = "Dragon"\nprint(f"My pet is a {pet}!")\n# Try adding another variable for the pet's name!`,
    quiz: [
      {
        question: 'What must come before the quotes in an f-string?',
        options: ['a', 'b', 'f', 's'],
        answer: 2,
        explanation: 'You must put the letter f before the quotes to make it an f-string.',
      }
    ]
  },
  {
    id: 'w3-5',
    number: '3.5',
    title: 'Formatting Numbers 🔢',
    theory: [
      'You can control exactly how numbers look inside f-strings. This is great for showing prices or keeping decimals neat.',
      'Use `:.2f` to show exactly 2 decimal places. The `f` stands for "Fixed-point" notation. 🎯',
    ],
    syntax: 'f"{variable:.2f}"',
    keyPoints: [
      'Controls the number of decimals shown.',
      'Great for money ($19.99).',
    ],
    codeExample: 'price = 19.9987\nprint(f"Price: {price:.2f}") # Shows 20.00',
    practiceCode: `score = 85.66666\nprint(f"Your final score is {score:.1f}%")\n# Try changing .1f to .3f!`,
    quiz: [
      {
        question: 'What does :.2f do in an f-string?',
        options: ['Shows 2 characters', 'Shows 2 decimal places', 'Multiplies by 2', 'Adds 2 spaces'],
        answer: 1,
        explanation: ':.2f is a format specifier for 2 fixed-point decimal places.',
      }
    ]
  },
  {
    id: 'w3-6',
    number: '3.6',
    title: 'Format Specifiers 🧬',
    theory: [
      'Format specifiers are like instructions for how to display data. You can align text to the left, right, or center!',
      '1. `:<10`: Left align in a 10-character space.',
      '2. `:>10`: Right align.',
      '3. `:^10`: Center align. 🧬',
    ],
    syntax: 'f"{var:<10}" # Left\nf"{var:>10}" # Right\nf"{var:^10}" # Center',
    keyPoints: [
      'Specifiers follow a colon `:` inside the braces.',
      'They make console output look professional and organized.',
    ],
    codeExample: `text = "Hi"\nprint(f"|{text:<5}|") # Left\nprint(f"|{text:>5}|") # Right\nprint(f"|{text:^5}|") # Center`,
    practiceCode: `name = "Python"\n# Try centering the name in a 20-character space!\nprint(f"|{name:^20}|")`,
    quiz: [
      {
        question: 'Which symbol centers text in an f-string?',
        options: ['<', '>', '^', '*'],
        answer: 2,
        explanation: '^ is used for center alignment.',
      }
    ]
  },
  {
    id: 'w3-7',
    number: '3.7',
    title: 'Lists: The Magic Backpack 🎒',
    theory: [
      'A **List** is a special container that can hold many things in a specific order. Think of it like a magic backpack where you can store your tools, snacks, and gadgets! 🎒',
      'Lists use square brackets `[]` and each item is separated by a comma. You can even mix different types (Strings and Numbers) together!',
    ],
    syntax: 'my_list = [item1, item2, item3]',
    keyPoints: [
      'Lists keep items in the order you put them.',
      'Items are accessed using their index (starting at 0).',
      'Lists use square brackets [].',
    ],
    codeExample: `items = ["Sword", "Shield", "Potion"]\nprint(items)\nprint(f"First item: {items[0]}")`,
    practiceCode: `inventory = ["Map", "Compass", "Torch"]\nprint(inventory)\n# Try adding a fourth item to your inventory!`,
    quiz: [
      {
        question: 'Which bracket is used for a List?',
        options: ['()', '{}', '[]', '<>'],
        answer: 2,
        explanation: 'Lists always use square brackets [].',
      }
    ]
  },
  {
    id: 'w3-8',
    number: '3.8',
    title: 'List Powers: Modifying 🛠️',
    theory: [
      'Lists are **Mutable**, which means you can change them after you create them! 🛠️',
      '1. `.append(item)`: Adds an item to the end.',
      '2. `.pop(index)`: Removes and "pops" an item out.',
      '3. `.reverse()`: Flips the whole list around!',
    ],
    syntax: 'list.append(new_item)\nlist.pop(0)  # Remove first',
    keyPoints: [
      'Methods change the original list.',
      'append() is the most common way to grow a list.',
    ],
    codeExample: `L = [1, 2, 3]\nL.append(4)\nL.pop(0) # Removes the first item\nL.reverse()\nprint(L) # Should show [4, 3, 2]`,
    practiceCode: `fruits = ["Apple", "Banana"]\nfruits.append("Cherry")\nprint(fruits)\n# Try popping the "Banana" from the list!`,
    quiz: [
      {
        question: 'What method adds an item to the end of a list?',
        options: ['.add()', '.insert()', '.append()', '.push()'],
        answer: 2,
        explanation: '.append() is the standard way to add an item to the end of a list.',
      }
    ]
  },
  {
    id: 'w3-9',
    number: '3.9',
    title: 'Tuples: The Stone Carving 🗿',
    theory: [
      '**Tuples** are like lists, but they use parentheses `()`. The big difference is they are **Immutable**—once you create them, they are "carved in stone" and CANNOT be changed! 🗿',
      'Use them for things that should stay the same, like the X and Y coordinates on a map or the months of the year.',
    ],
    syntax: 'my_tuple = (item1, item2)',
    keyPoints: [
      'Tuples are faster than lists.',
      'You cannot append() or pop() from a tuple.',
      'They protect your data from being accidentally changed.',
    ],
    codeExample: `days = ("Mon", "Tue", "Wed")\nprint(days[0])\n# days[0] = "Sun" # This would cause an ERROR!`,
    practiceCode: `colors = ("Red", "Green", "Blue")\nprint(f"The first color is {colors[0]}")\n# Try to change colors[0] and see the error message!`,
    quiz: [
      {
        question: 'Can you change a Tuple after it is created?',
        options: ['Yes', 'No, they are immutable', 'Only if they have numbers', 'Only on Tuesdays'],
        answer: 1,
        explanation: 'Tuples are immutable, meaning they cannot be changed once created.',
      }
    ]
  },
  {
    id: 'w3-10',
    number: '3.10',
    title: 'Indexing Mastery 🎯',
    theory: [
      'Remember, Python starts counting at **0**! Index 0 is the first item, Index 1 is the second, and so on.',
      '**Negative Indexing:** You can count from the end using negative numbers! `-1` is always the very last item, `-2` is the second to last. 🔚',
    ],
    syntax: 'item = my_list[0]  # First\nitem = my_list[-1] # Last',
    keyPoints: [
      'Positive indices start from 0.',
      'Negative indices start from -1.',
      'Accessing an index that doesn\'t exist causes an IndexError.',
    ],
    codeExample: `fruit = ["Apple", "Banana", "Cherry"]\nprint(fruit[0])  # Apple\nprint(fruit[-1]) # Cherry`,
    practiceCode: `numbers = [10, 20, 30, 40, 50]\nprint(numbers[-1])\n# Try to print the number 20 using its index!`,
    quiz: [
      {
        question: 'What does index -1 refer to?',
        options: ['The first item', 'The last item', 'The second item', 'Nothing'],
        answer: 1,
        explanation: 'Negative indexing starts from the end, so -1 is the last item.',
      }
    ]
  },
];

// ─── Week 4 ───────────────────────────────────────────────────────────────────
const week4Topics: Topic[] = [
  {
    id: 'w4-1',
    number: '4.1',
    title: 'True or False? Booleans 🎭',
    theory: [
      'Boolean values are the simplest data type in Python. They only have two values: `True` and `False`.',
      'Think of it like a light switch—it\'s either ON or OFF. We use them to answer "Yes/No" questions in our code! 🎭',
    ],
    syntax: 'is_sunny = True\nis_raining = False',
    keyPoints: [
      'Always capitalize True and False.',
      'They are the result of comparisons (like 5 > 3).',
    ],
    codeExample: `is_sunny = True\nis_raining = False\nprint(f"Is it sunny? {is_sunny}")`,
    practiceCode: `is_python_fun = True\n# Try changing it to False (if you dare!)\nprint(f"Python is fun: {is_python_fun}")`,
    quiz: [
      {
        question: 'What are the two Boolean values?',
        options: ['Yes and No', '1 and 0', 'True and False', 'Up and Down'],
        answer: 2,
        explanation: 'In Python, we use True and False (with capital letters!).',
      }
    ]
  },
  {
    id: 'w4-2',
    number: '4.2',
    title: 'Logical Operators 🧩',
    theory: [
      'Logical operators let you combine Boolean values to make complex decisions:',
      '1. **`and`**: True only if BOTH sides are true.',
      '2. **`or`**: True if AT LEAST ONE side is true.',
      '3. **`not`**: Flips the value (True becomes False). 🔄',
    ],
    syntax: 'True and False\nTrue or False\nnot True',
    keyPoints: [
      'Logical operators are used with Booleans.',
      'and/or help filter data.',
    ],
    codeExample: `print(True and False) # False\nprint(True or False)  # True\nprint(not True)       # False`,
    practiceCode: `can_play = True\nhas_homework = False\nprint(f"Can I play? {can_play and not has_homework}")\n# Change has_homework to True and see what happens!`,
    quiz: [
      {
        question: 'Which operator returns True only if BOTH sides are true?',
        options: ['and', 'or', 'not', 'if'],
        answer: 0,
        explanation: 'The "and" operator requires both sides to be True.',
      }
    ]
  },
  {
    id: 'w4-3',
    number: '4.3',
    title: 'Truth Conversion 🧙‍♂️',
    theory: [
      'You can convert other values into Booleans using `bool()`.',
      'Most things are "True", but empty things (like 0, "", or []) are "False"! This is called **"Truthy"** and **"Falsy"**. 🌑',
    ],
    syntax: 'bool(value)',
    keyPoints: [
      '0 is Falsy.',
      'Empty strings "" are Falsy.',
      'Almost everything else is Truthy.',
    ],
    codeExample: `print(bool(10))   # True\nprint(bool(0))    # False\nprint(bool("Hi")) # True\nprint(bool(""))   # False`,
    practiceCode: `message = "Hello"\nprint(f"Is '{message}' true? {bool(message)}")\n# Try changing message to an empty string ''!`,
    quiz: [
      {
        question: 'What is bool(0) equal to?',
        options: ['True', 'False', '1', 'None'],
        answer: 1,
        explanation: '0 is a "Falsy" value, so bool(0) is False.',
      }
    ]
  },
  {
    id: 'w4-4',
    number: '4.4',
    title: 'The Great Comparison ⚖️',
    theory: [
      'Comparison operators ask questions about numbers and strings:',
      '- `==`: Is it equal?\n- `!=`: Is it NOT equal?\n- `>` / `<`: Greater than / Smaller than\n- `>=` / `<=`: Greater or Equal / Smaller or Equal ⚖️',
    ],
    syntax: 'x == y\nx > y',
    keyPoints: [
      'Comparison results in a Boolean.',
      'Works for both numbers and text.',
    ],
    codeExample: `score = 10\nprint(score > 5)   # True\nprint(score == 10) # True\nprint("apple" == "apple") # True`,
    practiceCode: `my_age = 15\n# Try to write a comparison to check if my_age is greater than 18!`,
    quiz: [
      {
        question: 'What is the "Equal to" operator in Python?',
        options: ['=', '==', '!=', '==='],
        answer: 1,
        explanation: '== is used to compare if two things are equal. (A single = is for assignment!)',
      }
    ]
  },
  {
    id: 'w4-5',
    number: '4.5',
    title: 'Conditional Expressions ⚡',
    theory: [
      'This is a shortcut way to pick a value based on a condition. It\'s like a one-line "if-else" statement.',
      'It reads like a sentence: "Value 1 if Condition is True, else Value 2". ⚡',
    ],
    syntax: 'result = value1 if condition else value2',
    keyPoints: [
      'Great for simple choices.',
      'Keeps your code short and sweet.',
    ],
    codeExample: `age = 10\nstatus = "Kid" if age < 18 else "Adult"\nprint(status)`,
    practiceCode: `weather = "Sunny"\naction = "Go to park" if weather == "Sunny" else "Stay inside"\nprint(action)`,
    quiz: [
      {
        question: 'How do you read a conditional expression?',
        options: ['Condition first', 'Value 1 if Condition else Value 2', 'Else first', 'None'],
        answer: 1,
        explanation: 'It reads like a sentence: "Give me Value 1 IF the condition is true, OTHERWISE give me Value 2."',
      }
    ]
  },
  {
    id: 'w4-6',
    number: '4.6',
    title: 'The "If" Statement 🚦',
    theory: [
      'The `if` statement tells Python: "Only run this code IF the condition is True". It\'s like a bouncer at a club checking IDs! 🕺',
      'If the condition is True, the indented code runs. If it\'s False, Python just skips over it and moves on.',
    ],
    syntax: 'if condition:\n    # Indented code here',
    keyPoints: [
      'Always use a colon `:` after the condition.',
      'The code block must be indented (usually 4 spaces).',
    ],
    codeExample: `hunger = 8\nif hunger > 5:\n    print("Time for a snack! 🍏")`,
    practiceCode: `points = 100\nif points >= 100:\n    print("You win a trophy! 🏆")\n# Try changing points to 50!`,
    quiz: [
      {
        question: 'What symbol must come after an "if" condition?',
        options: [';', '.', ':', '!'],
        answer: 2,
        explanation: 'Python uses a colon : to mark the end of the condition line.',
      }
    ]
  },
  {
    id: 'w4-7',
    number: '4.7',
    title: 'The "Else" Backup 🛡️',
    theory: [
      'The `else` statement is your "Plan B"! It\'s what happens when the `if` condition is False.',
      'Think of it like a fork in the road: "If the door is open, go in; OTHERWISE (else), knock!" 🚪',
    ],
    syntax: 'if condition:\n    ...\nelse:\n    ...',
    keyPoints: [
      'else never has a condition of its own.',
      'Only one path (if or else) will ever run.',
    ],
    codeExample: `is_sunny = False\nif is_sunny:\n    print("Go outside! ☀️")\nelse:\n    print("Stay inside and code! 💻")`,
    practiceCode: `points = 40\nif points >= 50:\n    print("Level Up!")\nelse:\n    print("Keep training!")`,
    quiz: [
      {
        question: 'When does the "else" block run?',
        options: ['When the if is True', 'When the if is False', 'Always', 'Never'],
        answer: 1,
        explanation: 'The else block is the backup that runs only if the condition was False.',
      }
    ]
  },
  {
    id: 'w4-8',
    number: '4.8',
    title: 'Chained & Nested Decisions 🔗',
    theory: [
      '1. **Chained (`elif`):** Use `elif` (else-if) to check many specific choices in a row. Python checks them one by one until it finds a True one.',
      '2. **Nested:** You can put an "if" inside another "if". It\'s like a secret room inside another room! 🌳',
    ],
    syntax: 'if cond1:\n    ...\nelif cond2:\n    ...\n\n# Nested:\nif cond1:\n    if cond2:\n        ...',
    keyPoints: [
      'elif helps avoid too many nested blocks.',
      'Nested ifs are useful for secondary checks.',
    ],
    codeExample: `score = 85\nif score >= 90:\n    print("Grade A")\nelif score >= 80:\n    print("Grade B")\nelse:\n    print("Keep trying!")`,
    practiceCode: `is_weekend = True\nis_sunny = True\nif is_weekend:\n    if is_sunny:\n        print("Beach day!")\n# Try changing is_sunny to False!`,
    quiz: [
      {
        question: 'What is "elif" short for?',
        options: ['Extra if', 'Else if', 'Empty if', 'End if'],
        answer: 1,
        explanation: 'elif is short for "else if" and is used to check multiple conditions in order.',
      }
    ]
  },
  {
    id: 'w4-9',
    number: '4.9',
    title: 'Order Matters! 📏',
    theory: [
      'Logical operators have a specific order, called **Precedence**:',
      '1. **`not`** comes first.\n2. **`and`** comes next.\n3. **`or`** comes last.',
      'Always use **Parentheses `()`** to make your code clear and force the order you want! 📐',
    ],
    syntax: 'True or False and False  # evaluated as True or (False and False)',
    keyPoints: [
      'The "not" operator is the strongest.',
      'Parentheses are the best way to avoid mistakes.',
    ],
    codeExample: `result = True or False and False\n# False and False = False, then True or False = True\nprint(result)\n\nresult2 = (True or False) and False\n# True or False = True, then True and False = False\nprint(result2)`,
    practiceCode: `print(not True or True)\n# Try adding parentheses to see how the result changes!`,
    quiz: [
      {
        question: 'Which logical operator is the strongest (runs first)?',
        options: ['and', 'or', 'not', 'all equal'],
        answer: 2,
        explanation: 'In the order of precedence, "not" is the strongest, followed by "and", then "or".',
      }
    ]
  },
];

// ─── Week 5 ───────────────────────────────────────────────────────────────────
const week5Topics: Topic[] = [
  {
    id: 'w5-1',
    number: '5.1',
    title: 'What is a Loop? 🔄',
    theory: [
      'A loop is a way to repeat a block of code over and over again.',
      'Why use them? Instead of writing `print("Hello")` ten times, you can just tell Python to "Loop" it 10 times! It saves time and makes your code cleaner. 🧹',
    ],
    syntax: 'for i in range(10):\n    # code to repeat',
    keyPoints: [
      'Loops save time by repeating tasks.',
      'They make code much shorter and cleaner.',
      'The code inside a loop is indented.',
    ],
    codeExample: `for i in range(3):\n    print("Hello! 👋")`,
    practiceCode: `# 🚨 BUG DETECTED: The robot is stuck repeating itself!\n# TODO: 1. Make the loop run exactly 5 times.\n# TODO: 2. Change the message to something else.\n\nfor i in range(100):\n    print("I am a robot! 🤖")\n\n# --- EXPERIMENT ---\n# Add a print statement OUTSIDE the loop at the very end.`,
    quiz: [
      {
        question: 'Why do we use loops?',
        options: ['To make the computer slower', 'To repeat code without re-writing it', 'To delete code', 'To change colors'],
        answer: 1,
        explanation: 'Loops are great for doing repetitive tasks automatically!',
      }
    ]
  },
  {
    id: 'w5-2',
    number: '5.2',
    title: 'The While Loop: Keep Going! 🏃‍♂️',
    theory: [
      'A `while` loop keeps running as long as a condition is `True`.',
      'It\'s like saying: "While you are hungry, keep eating!" 🍕',
    ],
    syntax: 'while condition:\n    # code to repeat',
    keyPoints: [
      'While loops depend on a condition.',
      'If the condition becomes False, the loop stops.',
      'Always make sure the condition can eventually become False!',
    ],
    codeExample: `energy = 3\nwhile energy > 0:\n    print("Running... 🏃‍♂️")\n    energy = energy - 1\nprint("Tired! 😴")`,
    practiceCode: `# 🚨 BUG DETECTED: We want to count down, not up!\n# TODO: 1. Change count to start at 5.\n# TODO: 2. Change the condition to while count > 0:\n# TODO: 3. Change count += 1 to count -= 1\n\ncount = 1\nwhile count <= 5:\n    print(f"Countdown: {count}")\n    count += 1\n\n# --- EXPERIMENT ---\n# Add a print("Blastoff! 🚀") after the loop ends!`,
    quiz: [
      {
        question: 'How long does a "while" loop run?',
        options: ['Exactly 10 times', 'As long as the condition is True', 'Forever', 'Once'],
        answer: 1,
        explanation: 'A while loop continues as long as its condition remains True.',
      }
    ]
  },
  {
    id: 'w5-3',
    number: '5.3',
    title: 'The For Loop & Range 🚂',
    theory: [
      'A `for` loop is used to go through a "sequence", like a list of items or a range of numbers.',
      'The `range(5)` function gives you numbers from 0 up to (but not including) 5. 🔢',
    ],
    syntax: 'for variable in sequence:\n    # code to repeat',
    keyPoints: [
      'For loops go through items one by one.',
      'range(n) starts at 0 and stops at n-1.',
      'Great for doing something a fixed number of times.',
    ],
    codeExample: `for x in range(5):\n    print(f"Counting: {x}")`,
    practiceCode: `# 🚨 BUG DETECTED: The kangaroo is jumping too much!\n# TODO: 1. Change the range so it only jumps 3 times.\n# TODO: 2. Add an f-string to number the jumps (e.g., Jump 0, Jump 1).\n\nfor i in range(10):\n    print("Jump! 🦘")\n\n# --- EXPERIMENT ---\n# What happens if you change range(10) to range(2, 5)?`,
    quiz: [
      {
        question: 'What numbers does range(5) give you?',
        options: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '5, 5, 5, 5, 5', '0, 5'],
        answer: 1,
        explanation: 'range(n) starts at 0 and stops right before n.',
      }
    ]
  },
  {
    id: 'w5-4',
    number: '5.4',
    title: 'Step Sizes: Jumping Numbers! 🦘',
    theory: [
      'In `range(start, stop, step)`, the "step" is how much you add each time.',
      'A step of 2 means you skip every other number! 2, 4, 6... 🏁',
    ],
    syntax: 'range(start, stop, step)',
    keyPoints: [
      'The "step" tells Python how much to jump by.',
      'You can even use a negative step to count backwards!',
      'The "stop" number is never included.',
    ],
    codeExample: `for i in range(0, 11, 2):\n    print(i) # 0, 2, 4, 6, 8, 10`,
    practiceCode: `# 🚨 BUG DETECTED: We want to count by 2s to find even numbers!\n# TODO: 1. Change the step to 2.\n# TODO: 2. Fix the start number to be 0 instead of 1.\n\nfor i in range(1, 11, 3):\n    print(f"Number: {i}")\n\n# --- EXPERIMENT ---\n# Try using a negative step to count backwards: range(10, 0, -1)`,
    quiz: [
      {
        question: 'In range(0, 10, 2), what does the 2 mean?',
        options: ['Start at 2', 'Stop at 2', 'The step size (skip by 2)', 'Loop 2 times'],
        answer: 2,
        explanation: 'The third number in range() is the step, which tells Python how much to add each time.',
      }
    ]
  },
  {
    id: 'w5-5',
    number: '5.5',
    title: 'Nested Loops: Loop-de-Loop 🌀',
    theory: [
      'A nested loop is just a loop inside another loop. The "inner" loop finishes completely for every single step of the "outer" loop.',
      'Think of it like a clock: the minute hand (inner) goes around 60 times for every 1 hour (outer). ⏰',
    ],
    syntax: 'for i in ...:\n    for j in ...:\n        # code',
    keyPoints: [
      'The inner loop finishes all its steps for every ONE step of the outer loop.',
      'Great for making grids or coordinate systems.',
      'Be careful! Nested loops can make your code slow if they are too big.',
    ],
    codeExample: `for hour in range(2):\n    for minute in range(3):\n        print(f"Time: {hour}:{minute}")`,
    practiceCode: `# 🚨 BUG DETECTED: The grid is the wrong size!\n# TODO: 1. Make the outer loop (x) range(2).\n# TODO: 2. Make the inner loop (y) range(4).\n\nfor x in range(3):\n    for y in range(3):\n        print(f"Grid Coordinate: X={x}, Y={y}")\n\n# --- EXPERIMENT ---\n# Try changing one of the loop variables to a word, like for x in ["A", "B"]!`,
    quiz: [
      {
        question: 'What is a nested loop?',
        options: ['A loop that is broken', 'A loop inside another loop', 'A loop that never ends', 'A loop for birds'],
        answer: 1,
        explanation: 'Nested loops are loops placed inside the block of another loop.',
      }
    ]
  },
  {
    id: 'w5-6',
    number: '5.6',
    title: 'Mixed Loops 🥨',
    theory: [
      'You can mix `for` and `while` loops together! For example, a `for` loop can go through a list of players, and a `while` loop can handle their turns. 🎮',
    ],
    syntax: 'for ...:\n    while ...:',
    keyPoints: [
      'You can nest any type of loop inside any other loop.',
      'Useful for complex logic like games.',
      'Indentation is key to seeing which loop is which!',
    ],
    codeExample: `players = ["Alice", "Bob"]\nfor p in players:\n    tries = 0\n    while tries < 2:\n        print(f"{p} is trying...")\n        tries += 1`,
    practiceCode: `# 🚨 BUG DETECTED: We need to upgrade to level 3!\n# TODO: 1. Change the while condition so level reaches 3.\n# TODO: 2. Add "Potion" to the items list.\n\nitems = ["Sword", "Shield"]\nfor item in items:\n    level = 1\n    while level <= 2:\n        print(f"Upgrading {item} to level {level} 🔨")\n        level += 1\n\n# --- EXPERIMENT ---\n# What happens if you forget to indent 'level += 1'?`,
    quiz: [
      {
        question: 'Can you use a "while" loop inside a "for" loop?',
        options: ['Yes, you can mix them!', 'No, only same types', 'Only if the for loop is small', 'None'],
        answer: 0,
        explanation: 'You can mix and match any type of loop depending on what your program needs.',
      }
    ]
  },
  {
    id: 'w5-7',
    number: '5.7',
    title: 'Break & Continue 🛑',
    theory: [
      '1. `break`: Stops the loop completely and jumps out.',
      '2. `continue`: Skips the rest of the current step and goes to the next one. ⏭️',
    ],
    syntax: 'if condition: break\nif condition: continue',
    keyPoints: [
      'Break "kills" the loop.',
      'Continue just "skips" one turn.',
      'They are very helpful for managing loop flow.',
    ],
    codeExample: `for i in range(10):\n    if i == 5: break # Stops at 5\n    print(i)\n\nfor i in range(5):\n    if i == 2: continue # Skips 2\n    print(i)`,
    practiceCode: `# 🚨 BUG DETECTED: We want to STOP (break) when we hit 5!\n# TODO: 1. Change 'continue' to 'break'.\n# TODO: 2. Change the condition to if i == 5:\n\nfor i in range(1, 11):\n    if i % 2 == 0: continue\n    print(f"Processing number: {i}")\n\n# --- EXPERIMENT ---\n# See the difference? Break completely ends the loop, continue just skips a turn!`,
    quiz: [
      {
        question: 'Which keyword stops a loop completely?',
        options: ['stop', 'end', 'break', 'exit'],
        answer: 2,
        explanation: 'The break keyword jumps out of the loop immediately.',
      }
    ]
  },
  {
    id: 'w5-8',
    number: '5.8',
    title: 'The Infinite Loop ♾️',
    theory: [
      'An infinite loop is a loop that never ends! This usually happens when the `while` condition is always `True`.',
      'Be careful! It can make your program "freeze". Use `Ctrl+C` to stop it! ❄️',
    ],
    syntax: 'while True:\n    # code that never stops',
    keyPoints: [
      'Infinite loops are usually a mistake.',
      'They happen when the "stop rule" is missing.',
      'Use Ctrl+C in the terminal to force them to stop.',
    ],
    codeExample: `# while True:\n#     print("Forever...")`,
    practiceCode: `# 🚨 BUG DETECTED: Danger! Infinite Loop!\n# TODO: 1. Uncomment the code by removing the '#' at the start of each line.\n# TODO: 2. Fix the loop by changing the condition so it STOPS (e.g., while count < 10:).\n\n# count = 1\n# while count > 0:\n#     print(f"Infinite... {count}")\n#     count += 1\n\n# --- EXPERIMENT ---\n# If you ever get stuck in an infinite loop, remember to hit the Reset button!`,
    quiz: [
      {
        question: 'How do you stop an infinite loop in the terminal?',
        options: ['Ctrl + C', 'Delete key', 'Turn off the computer', 'Scream'],
        answer: 0,
        explanation: 'Ctrl + C is the universal command to stop a running program in the terminal.',
      }
    ]
  },
  {
    id: 'w5-9',
    number: '5.9',
    title: 'Loops have an "Else" too! 🤔',
    theory: [
      'A loop can have an `else` block. It runs only if the loop finished "normally" (without being stopped by a `break`).',
      'It\'s like a "Mission Complete" message! 🏆',
    ],
    syntax: 'for ...:\n    ...\nelse:\n    # runs at end',
    keyPoints: [
      'Else runs if the loop reaches the very end.',
      'If you "break" the loop, the else block is skipped.',
      'Useful for searching (if not found, do something else).',
    ],
    codeExample: `for i in range(3):\n    print(i)\nelse:\n    print("Loop finished normally!")`,
    practiceCode: `# 🚨 BUG DETECTED: The else block runs because the break never happens!\n# TODO: 1. Change the if condition to: if i == 3:\n# TODO: 2. Run the code. Notice the 'else' block gets skipped now!\n\nfor i in range(5):\n    if i == 10: break\n    print(f"Checking {i}...")\nelse:\n    print("Mission Success! 🚀")\n\n# --- EXPERIMENT ---\n# Try changing it to 'continue' instead of 'break'. Does the else block run?`,
    quiz: [
      {
        question: 'When does the "else" block in a loop NOT run?',
        options: ['When the loop finishes normally', 'When the loop is stopped by a "break"', 'Always', 'Never'],
        answer: 1,
        explanation: 'The loop-else block only runs if the loop was NOT interrupted by a break.',
      }
    ]
  },
];

// ─── Week 6 ───────────────────────────────────────────────────────────────────
const week6Topics: Topic[] = [
  {
    id: 'w6-1',
    number: '6.1',
    title: 'What is a Function? 🎁',
    theory: [
      'A function is a reusable "Magic Box" of code. Imagine you have a set of steps you do every day, like making a sandwich. Instead of writing down every step every time, you just say "Make a Sandwich"!',
      'In coding, functions let you group instructions together under a name. Once defined, you can use that name over and over again anywhere in your program.',
      'There are two main types of functions:\n1. **Built-in Functions:** These come ready-to-use with Python (like `print()`, `len()`, or `input()`).\n2. **User-defined Functions:** These are the special ones YOU create to do exactly what you want! 🛠️',
    ],
    syntax: 'def function_name():\n    # code block starts here\n    # indent 4 spaces!\n    instruction 1\n    instruction 2',
    keyPoints: [
      'Functions help avoid repeating the same code.',
      'They make your program organized and easy to read.',
      'You must define a function before you can use it.',
    ],
    codeExample: `# Defining our own function\ndef say_hello():\n    print("Hello! I am a function! 👋")\n    print("I can do many things.")\n\n# Calling the function to make it run\nsay_hello()`,
    practiceCode: `def my_first_function():\n    # Write something cool here!\n    print("I am a coding wizard! 🧙‍♂️")\n\n# Don't forget to call your function!\nmy_first_function()`,
    hint: 'A function starts with "def" and ends with a colon ":". Everything inside must be indented!',
    quiz: [
      {
        question: 'What keyword do we use to create a function?',
        options: ['create', 'function', 'def', 'start'],
        answer: 2,
        explanation: '"def" is short for "define". It tells Python we are starting a new function.',
      }
    ]
  },
  {
    id: 'w6-2',
    number: '6.2',
    title: 'Defining & Calling 📣',
    theory: [
      'Creating a function is like writing a recipe. This is called **Defining**. You use the `def` keyword, followed by a name and parentheses `()`.',
      'Running the code inside is called **Calling** the function. You just type the name with parentheses anywhere in your program.',
      '**Control Flow:** When Python sees a function call, it "jumps" to the recipe, follows all the steps, and then "jumps back" to exactly where it left off! 🦘',
    ],
    syntax: '# Defining\ndef name():\n    ...\n\n# Calling\nname()',
    keyPoints: [
      'Defining does not run the code; Calling runs it.',
      'Function names should be clear and descriptive.',
      'Always include the () when calling, even if there are no arguments.',
    ],
    codeExample: `def show_magic():\n    print("1... 2... 3...")\n    print("Abracadabra! 🪄")\n\nprint("The show is starting!")\nshow_magic() # The jump happens here!\nprint("The show is over.")`,
    practiceCode: `def sing_song():\n    print("Twinkle, twinkle, little star...")\n    # Add more lines to the song!\n\nsing_song()`,
    hint: 'Make sure your "def" is at the very beginning of the line (no spaces before it)!',
  },
  {
    id: 'w6-3',
    number: '6.3',
    title: 'Scope: Local vs Global 🏠',
    theory: [
      '1. Global Scope: Variables created outside any function. Everyone can see them!',
      '2. Local Scope: Variables created inside a function. They only exist inside that "house". 🏘️',
    ],
    syntax: 'x = 10 # Global\ndef f():\n    y = 5 # Local',
    keyPoints: [
      'Global variables are accessible everywhere.',
      'Local variables are "born and die" inside the function.',
      'Python looks for Local first, then Global.',
    ],
    codeExample: `x = 10 # Global\n\ndef my_func():\n    y = 5 # Local\n    print(y)\n\nmy_func()\n# print(y) # This would cause an ERROR!`,
    practiceCode: `score = 0\n\ndef increase():\n    # score = 10 # This would be a local 'score'\n    print("Checking score...")\n\nincrease()\nprint(score)`,
    quiz: [
      {
        question: 'What is a variable created inside a function called?',
        options: ['Global variable', 'Local variable', 'Secret variable', 'Static variable'],
        answer: 1,
        explanation: 'Variables created inside a function are "Local" to that function.',
      }
    ]
  },
  {
    id: 'w6-4',
    number: '6.4',
    title: 'Arguments & Parameters 📥',
    theory: [
      'Sometimes a function needs information to do its job. For example, a "Greet" function needs to know WHO to greet.',
      '**Parameters** are like variable placeholders you put in the function definition. They are the "empty spots" waiting for data.',
      '**Arguments** are the actual values you send to the function when you call it. It\'s like sending a letter (Argument) to a mailbox (Parameter)! 📨',
    ],
    syntax: 'def name(parameter1, parameter2):\n    # use parameters like variables\n\nname(argument1, argument2)',
    keyPoints: [
      'Parameters are part of the definition.',
      'Arguments are part of the call.',
      'The number of arguments must match the number of parameters.',
    ],
    codeExample: `def say_hi(name): # "name" is the Parameter\n    print(f"Hi {name}! Welcome to the mission! 🚀")\n\nsay_hi("Alice") # "Alice" is the Argument\nsay_hi("Bob")   # "Bob" is another Argument`,
    practiceCode: `def favorite_food(food):\n    print(f"I love eating {food}! 😋")\n\n# Call the function with your favorite food!\nfavorite_food("Pizza")`,
    hint: 'You can use the parameter name inside the function just like a normal variable.',
  },
  {
    id: 'w6-5',
    number: '6.5',
    title: 'Multiple Arguments 👯‍♂️',
    theory: [
      'A function can take as many arguments as you want! Just separate them with commas. 🍬',
    ],
    syntax: 'def name(a, b, c):\n    ...',
    keyPoints: [
      'You can have zero, one, or many parameters.',
      'Order of arguments must match the order of parameters.',
      'Commas separate each argument.',
    ],
    codeExample: `def add(a, b):\n    print(a + b)\n\nadd(10, 20)`,
    practiceCode: `def player_info(name, score, level):\n    print(f"Player: {name}, Score: {score}, Level: {level}")\n\nplayer_info("SuperCoder", 500, 5)`,
    quiz: [
      {
        question: 'How do you separate multiple arguments in a function call?',
        options: ['Spaces', 'Dots', 'Commas', 'Dashes'],
        answer: 2,
        explanation: 'We use commas to separate parameters in a definition and arguments in a call.',
      }
    ]
  },
  {
    id: 'w6-6',
    number: '6.6',
    title: 'Default Values ⚙️',
    theory: [
      'You can give parameters a "default" value. If the caller doesn\'t provide one, Python uses the default! 🛡️',
    ],
    syntax: 'def name(p="Default"):\n    ...',
    keyPoints: [
      'Defaults are used when an argument is missing.',
      'They make functions easier to use.',
      'Always put parameters with defaults AFTER those without.',
    ],
    codeExample: `def greet(name="Friend"):\n    print(f"Hello {name}!")\n\ngreet("Bob")\ngreet() # Uses "Friend"`,
    practiceCode: `def power_up(type="Speed"):\n    print(f"You got a {type} boost! ⚡")\n\npower_up()\npower_up("Jump")`,
    quiz: [
      {
        question: 'When is a default value used?',
        options: ['Always', 'Only if the user provides an argument', 'Only if the user DOES NOT provide an argument', 'Never'],
        answer: 2,
        explanation: 'Default values are fallback values used when an argument is missing.',
      }
    ]
  },
  {
    id: 'w6-7',
    number: '6.7',
    title: 'The Return Statement 📤',
    theory: [
      'Functions can "return" a value back to you. It\'s like sending a robot to fetch something! 🤖',
      'You can even use multiple `return` statements inside `if` blocks.',
    ],
    syntax: 'def name():\n    return value',
    keyPoints: [
      'Return sends a result back to the caller.',
      'Once a function hits "return", it stops immediately.',
      'You can store the returned value in a variable.',
    ],
    codeExample: `def square(n):\n    return n * n\n\nresult = square(5)\nprint(result) # 25`,
    practiceCode: `def double(n):\n    return n * 2\n\nmy_num = double(10)\nprint(f"10 doubled is {my_num}")`,
    quiz: [
      {
        question: 'What does the "return" statement do?',
        options: ['Exits the program', 'Sends a value back to the caller', 'Prints text', 'Repeats the function'],
        answer: 1,
        explanation: 'return gives a value back from the function to whoever called it.',
      }
    ]
  },
  {
    id: 'w6-8',
    number: '6.8',
    title: 'Mutability & Objects 🧱',
    theory: [
      'When you send an object (like a List) to a function, the function can actually change it! This is because Lists are "Mutable".',
      'Strings and Numbers are "Immutable"—they won\'t change! 🗿',
    ],
    syntax: 'def change(my_list):\n    my_list.append(1)',
    keyPoints: [
      'Mutable objects (lists, dicts) can be changed inside functions.',
      'Immutable objects (strings, ints) cannot be changed.',
      'This is important for keeping your data safe!',
    ],
    codeExample: `def change_list(L):\n    L.append(100)\n\nmy_list = [1, 2]\nchange_list(my_list)\nprint(my_list) # [1, 2, 100]`,
    practiceCode: `def add_item(inventory, item):\n    inventory.append(item)\n\nmy_bag = ["Map"]\nadd_item(my_bag, "Compass")\nprint(my_bag)`,
    quiz: [
      {
        question: 'What happens if a function appends to a list passed to it?',
        options: ['The list is unchanged', 'The original list is modified', 'An error occurs', 'The list is deleted'],
        answer: 1,
        explanation: 'Lists are mutable, so changes made to them inside a function affect the original list.',
      }
    ]
  },
  {
    id: 'w6-9',
    number: '6.9',
    title: 'Function Mastery! 🏆',
    theory: [
      'By combining functions, scope, and parameters, you can build complex systems like games or web apps! 🚀',
    ],
    syntax: 'def mastery():\n    return "Expert"',
    keyPoints: [
      'Functions are the building blocks of large programs.',
      'Always aim for clear, descriptive names.',
      'Return statements make functions much more powerful.',
    ],
    codeExample: `def calculate_score(points, bonus=10):\n    return points + bonus\n\nfinal = calculate_score(100)\nprint(f"Final Score: {final}")`,
    practiceCode: `def create_player(name, health=100):\n    return {"name": name, "hp": health}\n\np1 = create_player("Hero")\nprint(p1)`,
    quiz: [
      {
        question: 'Which is a better function name?',
        options: ['func1()', 'do_thing()', 'calculate_area()', 'x()'],
        answer: 2,
        explanation: 'Function names should be descriptive and use snake_case.',
      }
    ]
  },
];

// ─── Week 7 ───────────────────────────────────────────────────────────────────
const week7Topics: Topic[] = [
  {
    id: 'w7-1',
    number: '7.1',
    title: 'What is a Module? 🔌',
    theory: [
      'A module is like a toolbox filled with tools (functions and variables) that someone else wrote for you!',
      'Instead of building everything from scratch, you can just "import" a module and use its powers. 🔌',
    ],
    syntax: 'import module_name',
    keyPoints: [
      'Modules help organize large amounts of code.',
      'They allow you to reuse code others have written.',
      'Python has hundreds of built-in modules.',
    ],
    codeExample: `import math\nprint(math.pi) # Using the pi tool from the toolbox`,
    quiz: [
      {
        question: 'What is a module?',
        options: ['A type of computer', 'A toolbox of code', 'A bug', 'A screen'],
        answer: 1,
        explanation: 'Modules are files containing Python code that you can reuse!',
      }
    ]
  },
  {
    id: 'w7-2',
    number: '7.2',
    title: 'Importing Powers 📥',
    theory: [
      'To use a module, you use the `import` keyword. Once imported, you use a "dot" `.` to reach the tools inside.',
      'Example: `module.tool_name()` 🛠️',
    ],
    syntax: 'import module\nmodule.function()',
    keyPoints: [
      'The dot (.) connects the module name to its functions.',
      'Imports let you use code from other files.',
      'Always import at the top of your script.',
    ],
    codeExample: `import random\nprint(random.randint(1, 10)) # Get a random number`,
    practiceCode: `import random\n# Try to get a random number between 1 and 100!\nprint(random.randint(1, 100))`,
    quiz: [
      {
        question: 'Which symbol is used to access tools inside a module?',
        options: ['Colon :', 'Dot .', 'Comma ,', 'Dash -'],
        answer: 1,
        explanation: 'We use the dot . after the module name to reach its functions.',
      }
    ]
  },
  {
    id: 'w7-3',
    number: '7.3',
    title: 'The "from" Keyword 🎯',
    theory: [
      'If you only need one specific tool, you can use `from module import tool`.',
      'This lets you use the tool directly without the `module.` prefix! 🎯',
    ],
    syntax: 'from module import function',
    keyPoints: [
      'Allows you to use the function name directly.',
      'Can make code shorter and easier to read.',
      'Be careful not to overwrite your own variables with imported tools.',
    ],
    codeExample: `from math import sqrt\nprint(sqrt(25)) # No need for math.sqrt!`,
    practiceCode: `from math import pi\nprint(f"The value of PI is {pi}")`,
    quiz: [
      {
        question: 'What is the benefit of "from module import tool"?',
        options: ['It is slower', 'You can use the tool name directly', 'It imports everything', 'None'],
        answer: 1,
        explanation: 'Using "from" lets you use the function name directly without the module prefix.',
      }
    ]
  },
  {
    id: 'w7-4',
    number: '7.4',
    title: 'Name Collisions 💥',
    theory: [
      'Be careful! If you have two tools with the same name from different modules, they will "collide".',
      'Python will only remember the last one you imported. Using `as` can help you give them nicknames! 🏷️',
    ],
    syntax: 'import module as nickname',
    keyPoints: [
      'Nicknames (aliases) prevent name collisions.',
      'They can make long module names much shorter.',
      'Common aliases: np for numpy, pd for pandas.',
    ],
    codeExample: `import math as m\nprint(m.sqrt(16))`,
    practiceCode: `import random as r\nprint(r.random())`,
    quiz: [
      {
        question: 'What does the "as" keyword do in an import?',
        options: ['Checks for errors', 'Gives the module a nickname (alias)', 'Deletes the module', 'Changes the code'],
        answer: 1,
        explanation: '"as" allows you to rename the module in your script, usually to something shorter.',
      }
    ]
  },
  {
    id: 'w7-5',
    number: '7.5',
    title: 'Top Level Code 🏠',
    theory: [
      'When you import a module, Python runs all the code at the "top level" (not inside functions).',
      'This is why we usually keep our main code inside a special check like `if __name__ == "__main__":`. 🏠',
    ],
    syntax: 'if __name__ == "__main__":',
    keyPoints: [
      'Top-level code runs immediately on import.',
      '__name__ is "__main__" only when running the file directly.',
      'This keeps your modules clean for others to use.',
    ],
    codeExample: `print("This runs on import!")\n\ndef my_func():\n    print("This only runs when called")`,
    practiceCode: `if __name__ == "__main__":\n    print("I am running directly!")`,
    quiz: [
      {
        question: 'When does "top level" code in a module run?',
        options: ['Only when called', 'As soon as the module is imported', 'Never', 'Once a year'],
        answer: 1,
        explanation: 'Python executes all code at the top level of a module immediately when it is imported.',
      }
    ]
  },
  {
    id: 'w7-6',
    number: '7.6',
    title: 'Your Assistant: help() 🙋‍♂️',
    theory: [
      'Not sure how a tool works? Use the `help()` function! It tells you everything you need to know about a module or a function. 📖',
    ],
    syntax: 'help(object)',
    keyPoints: [
      'Shows the documentation (docstring) of any object.',
      'Works on built-ins, modules, and your own functions.',
      'A great way to learn about new libraries.',
    ],
    codeExample: `import math\n# help(math.sqrt) # Try this in your real Python terminal!`,
    practiceCode: `import random\n# help(random.choice)`,
    quiz: [
      {
        question: 'What does help() do?',
        options: ['Asks the teacher', 'Shows documentation for a function/module', 'Fixes your code', 'Restarts Python'],
        answer: 1,
        explanation: 'help() provides a built-in guide for any Python object or module.',
      }
    ]
  },
  {
    id: 'w7-7',
    number: '7.7',
    title: 'Colorful Code 🎨',
    theory: [
      'You can use modules to make your text colorful! Modules like `colorama` (third-party) or simple escape codes can change your terminal colors. 🌈',
    ],
    codeExample: `print("\\033[91mThis is Red!\\033[0m")\nprint("\\033[92mThis is Green!\\033[0m")`,
    practiceCode: `print("\\033[94mI am blue!\\033[0m")`,
    quiz: [
      {
        question: 'Can you change the color of text in the terminal?',
        options: ['Yes, using special codes or modules', 'No, only white', 'Only if you have a pro computer', 'None'],
        answer: 0,
        explanation: 'You can use ANSI escape codes or modules like colorama to make terminal text colorful.',
      }
    ]
  },
  {
    id: 'w7-8',
    number: '7.8',
    title: 'Module Documentation 📝',
    theory: [
      'Good coders write notes! You can write documentation for your own modules using "Docstrings" (triple quotes `"""`). 📝',
    ],
    codeExample: `"""This is a module for magic tricks."""\n\ndef disappear():\n    """Makes things go poof!"""\n    print("Poof! ✨")`,
    practiceCode: `def my_tool():\n    """This tool is awesome!"""\n    pass`,
    quiz: [
      {
        question: 'What do we use for multi-line documentation strings?',
        options: ['#', '//', '"""Triple Quotes"""', '/*'],
        answer: 2,
        explanation: 'Docstrings are written using triple quotes to explain what code does.',
      }
    ]
  },
  {
    id: 'w7-9',
    number: '7.9',
    title: 'Finding Modules 🔍',
    theory: [
      '1. Built-in: Included with Python (like `math`, `random`).',
      '2. User-defined: The `.py` files you create yourself!',
      '3. Third-party: Modules shared by other coders on the internet. 🌐',
    ],
    codeExample: `import sys\n# print(sys.path) # This shows where Python looks for modules!`,
    practiceCode: `import sys\n# print(sys.version)`,
    quiz: [
      {
        question: 'Which of these is a Built-in module?',
        options: ['math', 'Instagram', 'Minecraft', 'None'],
        answer: 0,
        explanation: 'math is built-in to Python. Others are apps or games!',
      }
    ]
  },
  {
    id: 'w7-10',
    number: '7.10',
    title: 'Third-Party Modules 📦',
    theory: [
      'You can download millions of modules using a tool called `pip`. From making games to AI, someone has already built a module for it! 🚀',
    ],
    codeExample: `# To install: pip install requests\n# Then use: import requests`,
    practiceCode: `# pip install pygame\n# import pygame`,
    quiz: [
      {
        question: 'What tool is used to install third-party modules?',
        options: ['app-store', 'pip', 'download.py', 'install-tool'],
        answer: 1,
        explanation: 'pip (Package Installer for Python) is used to download modules from the internet.',
      }
    ]
  },
];

// ─── Week 8: Phase 1 Review ───────────────────────────────────────────────────
const week8Topics: Topic[] = [
  {
    id: 'w8-1',
    number: '8.1',
    title: 'Review: Basics & Math 🔢',
    theory: [
      'Let\'s see how much you remember! Variables, numbers, and math are the foundation of everything.',
      'Can you still solve the math puzzles from Week 1? 🔢',
    ],
    syntax: 'x = 10 + 5',
    keyPoints: [
      'Variables store data.',
      'Math operators: +, -, *, /, //, %',
      'Order of operations matters!',
    ],
    codeExample: `energy = 100\ncost = 20\nremaining = energy - cost\nprint(f"Energy left: {remaining}")`,
    quiz: [
      {
        question: 'What is the result of 10 // 3?',
        options: ['3.33', '3', '1', '0'],
        answer: 1,
        explanation: '// is floor division, which rounds down to the nearest whole number.',
      }
    ]
  },
  {
    id: 'w8-2',
    number: '8.2',
    title: 'Review: Strings & Input 🗣️',
    theory: [
      'Talking to the computer is a key skill. We use strings for text and input() to listen to the user! 🗣️',
    ],
    syntax: 'text = input("Say something: ")',
    keyPoints: [
      'input() always returns a string.',
      'Use f-strings for easy formatting.',
      'String methods like .upper() and .lower() are powerful.',
    ],
    codeExample: `name = "Coder"\nprint(f"Hello, {name.upper()}!")`,
    quiz: [
      {
        question: 'Which function takes a message from the user?',
        options: ['print()', 'input()', 'get()', 'say()'],
        answer: 1,
        explanation: 'input() lets the user type a message into your program.',
      }
    ]
  },
  {
    id: 'w8-3',
    number: '8.3',
    title: 'Review: Decisions 🚦',
    theory: [
      'if, elif, and else are the brains of your code. They help your program decide what to do! 🚦',
    ],
    syntax: 'if score > 10: ...',
    keyPoints: [
      'Conditions must be True or False.',
      'Indentation is required for code blocks.',
      'elif lets you check many things.',
    ],
    codeExample: `score = 50\nif score >= 50: print("Pass")\nelse: print("Fail")`,
    quiz: [
      {
        question: 'What symbol starts an indented code block in an if-statement?',
        options: [';', ':', '.', '!'],
        answer: 1,
        explanation: 'The colon : tells Python a code block is starting.',
      }
    ]
  },
  {
    id: 'w8-4',
    number: '8.4',
    title: 'Review: Loops 🔄',
    theory: [
      'Repeat! Repeat! Repeat! for and while loops keep your code running as long as you need. 🔄',
    ],
    syntax: 'for i in range(5): ...',
    keyPoints: [
      'For loops go through sequences (ranges, lists).',
      'While loops run as long as a condition is True.',
      'range(5) goes from 0 to 4.',
    ],
    codeExample: `for i in range(1, 4):\n    print(f"Counting {i}")`,
    quiz: [
      {
        question: 'How many times will "for i in range(3)" run?',
        options: ['1', '2', '3', '4'],
        answer: 2,
        explanation: 'range(3) gives indices 0, 1, and 2, so it runs 3 times.',
      }
    ]
  },
  {
    id: 'w8-5',
    number: '8.5',
    title: 'Review: Functions 🎁',
    theory: [
      'Functions are reusable magic boxes. Define them once, use them everywhere! 🎁',
    ],
    syntax: 'def magic(): ...',
    keyPoints: [
      'def creates the function.',
      'return sends a value back.',
      'Parameters are inputs for the function.',
    ],
    codeExample: `def add(a, b): return a + b\nprint(add(5, 5))`,
    quiz: [
      {
        question: 'What keyword sends a value back from a function?',
        options: ['send', 'give', 'return', 'exit'],
        answer: 2,
        explanation: 'return is used to output a value from a function.',
      }
    ]
  },
  {
    id: 'w8-6',
    number: '8.6',
    title: 'Review: Modules 🔌',
    theory: [
      'Don\'t build everything from scratch! Use modules to borrow powers from other coders. 🔌',
    ],
    syntax: 'import math',
    keyPoints: [
      'import brings in a toolbox.',
      'random.randint() is great for games.',
      'math.sqrt() solves square roots.',
    ],
    codeExample: `import random\nprint(random.randint(1, 6)) # Dice roll!`,
    quiz: [
      {
        question: 'Which module would you use for random numbers?',
        options: ['math', 'sys', 'random', 'os'],
        answer: 2,
        explanation: 'The random module contains tools for generating random choices.',
      }
    ]
  },
  {
    id: 'w8-7',
    number: '8.7',
    title: 'Phase 1 Mastery! 🏆',
    theory: [
      'You have finished the foundation of Python! You are now ready for Phase 2, where we dive deep into Data and advanced objects. 🏆',
    ],
    syntax: 'Phase 1 Mastery',
    keyPoints: [
      'You can write scripts to solve problems.',
      'You understand logic and flow.',
      'Next up: List Mastery!',
    ],
    codeExample: `print("I am a Phase 1 Master! 🎓")`,
    practiceCode: `### SHOW OFF YOUR SKILLS!\n# Can you build a mini-game using loops, if-statements, and functions?`,
    quiz: [
      {
        question: 'Are you ready for Phase 2?',
        options: ['Yes!', 'Double Yes!', 'I am a Coding Wizard!', 'Let\'s go!'],
        answer: 2,
        explanation: 'Phase 1 is complete! Get ready for advanced storage and objects.',
      }
    ]
  },
];

// ─── Week 9 ───────────────────────────────────────────────────────────────────
const week9Topics: Topic[] = [
  {
    id: 'w9-1',
    number: '9.1',
    title: 'Advanced Slicing ✂️',
    theory: [
      'Slicing lets you take a "slice" of a list. You can even skip items or flip the list backwards using the "step" part of the slice! ✂️',
      'Format: `list[start:stop:step]`',
    ],
    syntax: 'L[::2] # Every second item\nL[::-1] # Reverse list',
    keyPoints: [
      'Slicing does not change the original list; it makes a new one.',
      'If you leave start or stop blank, it goes to the very end.',
      'A step of -1 is the fastest way to reverse!',
    ],
    codeExample: `nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4]) # [1, 2, 3]\nprint(nums[::2]) # [0, 2, 4]`,
    practiceCode: `letters = ["a", "b", "c", "d", "e"]\n# Try to get only ["b", "c", "d"] using a slice!\nprint(letters[1:4])`,
    quiz: [
      {
        question: 'What does L[::-1] do?',
        options: ['Deletes the list', 'Reverses the list', 'Skips every second item', 'Nothing'],
        answer: 1,
        explanation: 'A step of -1 tells Python to count backwards from the end to the start.',
      }
    ]
  },
  {
    id: 'w9-2',
    number: '9.2',
    title: 'Sorting & Reversing 🏁',
    theory: [
      'Python can sort your lists automatically! You can sort alphabetically or by number size.',
      '1. `.sort()`: Changes the original list.\n2. `sorted()`: Gives you a NEW sorted list. 🏁',
    ],
    syntax: 'L.sort()\nnew_L = sorted(L)',
    keyPoints: [
      '.sort() is "in-place" (it changes the box).',
      'sorted() is safe (it keeps the original box).',
      'Use reverse=True to sort from BIG to small.',
    ],
    codeExample: `toys = ["Car", "Ball", "Doll"]\ntoys.sort()\nprint(toys) # Alphabetical!`,
    practiceCode: `scores = [10, 50, 20, 40]\nscores.sort(reverse=True)\nprint(scores) # Should be 50, 40, 20, 10`,
    quiz: [
      {
        question: 'Which method changes the ORIGINAL list?',
        options: ['sorted()', '.sort()', '.organize()', '.change()'],
        answer: 1,
        explanation: '.sort() is a method that modifies the list it is called on.',
      }
    ]
  },
  {
    id: 'w9-3',
    number: '9.3',
    title: 'List Comprehension ⚡',
    theory: [
      'This is a "Power User" trick! You can create a new list from an old one in just one line of code.',
      'It\'s like a tiny for-loop inside a list! ⚡',
    ],
    syntax: '[item for item in sequence]',
    keyPoints: [
      'Much faster than using a normal loop to build a list.',
      'Easier to read once you get used to it.',
      'You can even add "if" rules inside it!',
    ],
    codeExample: `nums = [1, 2, 3]\nsquares = [x*x for x in nums]\nprint(squares) # [1, 4, 9]`,
    practiceCode: `names = ["alice", "bob", "charlie"]\nupper_names = [n.upper() for n in names]\nprint(upper_names)`,
    quiz: [
      {
        question: 'What is List Comprehension?',
        options: ['A way to delete a list', 'A one-line shortcut to build a list', 'A type of error', 'A math problem'],
        answer: 1,
        explanation: 'List comprehension provides a concise way to create lists.',
      }
    ]
  },
  {
    id: 'w9-4',
    number: '9.4',
    title: 'Nested Lists: Grids 🗺️',
    theory: [
      'A list can hold another list! This is how we make grids, like a Tic-Tac-Toe board or a map for a game. 🗺️',
    ],
    syntax: 'grid = [[1, 2], [3, 4]]',
    keyPoints: [
      'Access items using TWO brackets: grid[row][column].',
      'Useful for coordinate systems (X, Y).',
      'It\'s like a cabinet where every drawer has boxes inside.',
    ],
    codeExample: `board = [\n    ["X", "O", "X"],\n    ["O", "X", "O"],\n    ["X", "O", "X"]\n]\nprint(board[1][1]) # The center X`,
    practiceCode: `map = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]\n# The 1 is the player! Can you find their position?\nprint(map[1][1])`,
    quiz: [
      {
        question: 'How do you access the middle item of [[1,2,3], [4,5,6], [7,8,9]]?',
        options: ['L[0]', 'L[1][1]', 'L[5]', 'L[2][2]'],
        answer: 1,
        explanation: 'L[1] gets the middle list [4,5,6], and [1] gets the 5!',
      }
    ]
  },
  {
    id: 'w9-5',
    number: '9.5',
    title: 'The "in" Operator 🔍',
    theory: [
      'Want to know if a snack is in your backpack? Use `in`! It returns `True` if the item is in the list and `False` if not. 🔍',
    ],
    syntax: 'if item in my_list:',
    keyPoints: [
      'Very fast way to check for items.',
      'Works on strings and other sequences too.',
      'Use "not in" to check if something is missing.',
    ],
    codeExample: `backpack = ["Pen", "Apple", "Book"]\nif "Apple" in backpack:\n    print("Snack found! 🍏")`,
    practiceCode: `banned_users = ["BadGuy123", "Troll456"]\nuser = "HappyCoder"\n# Check if 'user' is allowed to enter!`,
    quiz: [
      {
        question: 'Which keyword checks if an item exists in a list?',
        options: ['has', 'find', 'in', 'check'],
        answer: 2,
        explanation: 'The "in" operator is the standard way to search for an item in a sequence.',
      }
    ]
  },
  {
    id: 'w9-6',
    number: '9.6',
    title: 'List Functions: Max, Min, Sum 📊',
    theory: [
      'Python has built-in math tools just for lists! You can find the biggest number, smallest number, or total sum in one second. 📊',
    ],
    syntax: 'sum(L), max(L), min(L)',
    keyPoints: [
      'sum() adds all numbers together.',
      'max() finds the highest value.',
      'min() finds the lowest value.',
    ],
    codeExample: `scores = [80, 95, 70]\nprint(sum(scores)) # 245\nprint(max(scores)) # 95`,
    practiceCode: `inventory_costs = [10, 5, 20]\n# Find the total cost of all items!\nprint(sum(inventory_costs))`,
    quiz: [
      {
        question: 'Which function adds up all the numbers in a list?',
        options: ['total()', 'add_all()', 'sum()', 'plus()'],
        answer: 2,
        explanation: 'The sum() function totals all numerical elements in a list.',
      }
    ]
  },
  {
    id: 'w9-7',
    number: '9.7',
    title: 'List Mastery! 🏆',
    theory: [
      'You are now a master of data storage! Lists are the most common way to handle data in Python. From here, we will look at even more powerful maps called Dictionaries. 🏆',
    ],
    syntax: 'Advanced List Mastery',
    keyPoints: [
      'Lists are mutable and ordered.',
      'Slicing and Comprehensions are power tools.',
      'You can build complex grids using nested lists.',
    ],
    codeExample: `print("I am a List Master! 🚂")`,
    practiceCode: `### THE ULTIMATE LIST CHALLENGE!\n# Create a list of 10 numbers using range.\n# Use list comprehension to double them.\n# Find the max and sum of the new list!`,
    quiz: [
      {
        question: 'What is the most powerful list tool you learned?',
        options: ['Slicing', 'Comprehension', 'Nesting', 'All of them!'],
        answer: 3,
        explanation: 'Combining all these tools makes you a professional Python programmer!',
      }
    ]
  },
];

// ─── Week 10: Treasure Maps (Dictionaries) ────────────────────────────────────
const week10Topics: Topic[] = [
  {
    id: 'w10-1',
    number: '10.1',
    title: 'What is a Dictionary? 📖',
    theory: [
      'A Dictionary is like a real-life dictionary! It maps a "Key" (the word) to a "Value" (the definition).',
      'It is a collection of Key-Value pairs. It is fast, organized, and very powerful! 📖',
    ],
    syntax: 'd = {key: value}',
    keyPoints: [
      'Dictionaries use unique Keys to find Values.',
      'They are very fast at searching.',
      'They are unordered (until Python 3.7+).',
    ],
    codeExample: `ages = {"Alice": 10, "Bob": 12}\nprint(ages["Alice"])`,
    quiz: [
      {
        question: 'What does a Dictionary map?',
        options: ['Numbers to Lists', 'Keys to Values', 'Words to Pages', 'None'],
        answer: 1,
        explanation: 'Dictionaries map a unique Key to a specific Value!',
      }
    ]
  },
  {
    id: 'w10-2',
    number: '10.2',
    title: 'Creating Dictionaries 🛠️',
    theory: [
      'You can create a dictionary using curly braces `{}` or the `dict()` method.',
      'Example using `dict()`: `my_dict = dict(name="Python", version=3.10)` 🛠️',
    ],
    syntax: 'dict(key1=val1, key2=val2)',
    keyPoints: [
      'Keys are usually strings or numbers.',
      'Values can be anything (lists, strings, even other dicts).',
      'dict() is a built-in function to create dictionaries.',
    ],
    codeExample: `hero = dict(name="Ironman", power="Suit")\nprint(hero)`,
    practiceCode: `pet = {"name": "Buddy", "type": "Dog"}\nprint(pet)\n# Try creating a dictionary for your favorite movie!`,
    quiz: [
      {
        question: 'Which bracket is used to create a Dictionary?',
        options: ['()', '[]', '{}', '<>'],
        answer: 2,
        explanation: 'Dictionaries use curly braces {} to store Key-Value pairs.',
      }
    ]
  },
  {
    id: 'w10-3',
    number: '10.3',
    title: 'Accessing Treasures 💎',
    theory: [
      'To get a value, you use its key inside square brackets `[]` or use the `.get()` method.',
      'The `.get()` method is safer because it won\'t crash if the key is missing! 🛡️',
    ],
    syntax: 'd[key] OR d.get(key, default)',
    keyPoints: [
      'Using [key] on a missing key causes an error.',
      '.get() returns None (or a default) if the key is missing.',
      'Always use .get() if you aren\'t sure the key exists.',
    ],
    codeExample: `fruit = {"apple": 5, "banana": 3}\nprint(fruit["apple"])\nprint(fruit.get("cherry", 0)) # Returns 0 instead of error`,
    practiceCode: `points = {"p1": 10, "p2": 20}\nprint(points.get("p3", "No points yet"))`,
    quiz: [
      {
        question: 'What happens if you try to access a key that does not exist using []?',
        options: ['It returns None', 'It crashes with a KeyError', 'It creates the key', 'It returns 0'],
        answer: 1,
        explanation: 'Using square brackets [] on a missing key will cause a KeyError. Using .get() is safer!',
      }
    ]
  },
  {
    id: 'w10-4',
    number: '10.4',
    title: 'Dictionary Powers 🧬',
    theory: [
      'Dictionaries have special functions:\n- `.keys()`: Lists all keys\n- `.values()`: Lists all values\n- `.items()`: Lists all pairs 🧬',
    ],
    syntax: 'd.keys(), d.values(), d.items()',
    keyPoints: [
      'keys() gives you a list of all labels.',
      'values() gives you all the data stored.',
      'items() gives you both as pairs.',
    ],
    codeExample: `info = {"ID": 1, "Type": "Robot"}\nprint(info.keys())\nprint(info.values())`,
    practiceCode: `car = {"brand": "Tesla", "model": "S", "year": 2024}\nprint(f"The keys are: {list(car.keys())}")`,
    quiz: [
      {
        question: 'Which method gives you all the Values in a dictionary?',
        options: ['.keys()', '.items()', '.values()', '.data()'],
        answer: 2,
        explanation: '.values() returns a list-like object of all values in the dictionary.',
      }
    ]
  },
  {
    id: 'w10-5',
    number: '10.5',
    title: 'Mutable Maps 🧱',
    theory: [
      'Dictionaries are "Mutable", meaning you can add, change, or remove items!',
      'To add/change: `d[key] = value` \nTo remove: `del d[key]` or `d.pop(key)` 🧱',
    ],
    syntax: 'd[key] = value\ndel d[key]',
    keyPoints: [
      'You can update existing values by using their key.',
      'Adding a new key-value pair is the same as updating.',
      'del removes the key and its value completely.',
    ],
    codeExample: `pets = {"cat": 1}\npets["dog"] = 2 # Adding\npets["cat"] = 5 # Changing\nprint(pets)`,
    practiceCode: `inventory = {"potions": 10}\ninventory["arrows"] = 50\ndel inventory["potions"]\nprint(inventory)`,
    quiz: [
      {
        question: 'Are Dictionaries mutable (changeable)?',
        options: ['Yes', 'No', 'Only if they are empty', 'None'],
        answer: 0,
        explanation: 'Yes, you can add, remove, and update items in a dictionary at any time.',
      }
    ]
  },
  {
    id: 'w10-6',
    number: '10.6',
    title: 'Looping through Pairs 🔄',
    theory: [
      'You can use a `for` loop to look at every key and value in your dictionary.',
      'Use `.items()` to get both at the same time! 🔄',
    ],
    syntax: 'for k, v in d.items():',
    keyPoints: [
      'By default, looping over a dict gives you the keys.',
      '.items() is the standard way to get both keys and values.',
      'The order in the loop is the order items were added.',
    ],
    codeExample: `scores = {"Red": 10, "Blue": 15}\nfor team, score in scores.items():\n    print(f"{team} has {score} points!")`,
    practiceCode: `colors = {"apple": "red", "banana": "yellow"}\nfor fruit in colors:\n    print(f"The {fruit} is {colors[fruit]}")`,
    quiz: [
      {
        question: 'Which method should you use to loop through both keys and values?',
        options: ['.keys()', '.values()', '.items()', '.both()'],
        answer: 2,
        explanation: '.items() provides both the key and the value in each step of the loop.',
      }
    ]
  },
  {
    id: 'w10-7',
    number: '10.7',
    title: 'Nested Dictionaries 🗺️',
    theory: [
      'A dictionary can hold another dictionary! This is great for complex data, like a class of students.',
      'It\'s like a map within a map! 🗺️',
    ],
    syntax: 'd = {key: {inner_key: value}}',
    keyPoints: [
      'Allows you to group related information deeply.',
      'Access inner data with multiple brackets: d[k1][k2].',
      'Commonly used for settings or user profiles.',
    ],
    codeExample: `students = {\n    "Alice": {"age": 10, "grade": "A"},\n    "Bob": {"age": 12, "grade": "B"}\n}\nprint(students["Alice"]["age"])`,
    practiceCode: `world = {\n    "Forest": {"loot": "Wood", "danger": 1},\n    "Cave": {"loot": "Gold", "danger": 5}\n}\nprint(world["Cave"]["loot"])`,
    quiz: [
      {
        question: 'Can a dictionary contain another dictionary?',
        options: ['Yes, this is called nesting', 'No, only strings', 'Only if the keys are the same', 'None'],
        answer: 0,
        explanation: 'Dictionaries can hold any type of object, including other dictionaries!',
      }
    ]
  },
  {
    id: 'w10-8',
    number: '10.8',
    title: 'Dictionary Comprehension ⚡',
    theory: [
      'This is a shortcut to create a new dictionary from another one in just one line!',
      'Format: `{key: value for item in list}` ⚡',
    ],
    syntax: '{k: v for i in seq}',
    keyPoints: [
      'Provides a clean, readable way to transform data.',
      'Faster than using a normal loop to build a dict.',
      'You can add "if" conditions to filter items too.',
    ],
    codeExample: `nums = [1, 2, 3]\nsquares = {x: x*x for x in nums}\nprint(squares) # {1: 1, 2: 4, 3: 9}`,
    practiceCode: `names = ["Alice", "Bob"]\nname_lengths = {n: len(n) for n in names}\nprint(name_lengths)`,
    quiz: [
      {
        question: 'What is dictionary comprehension used for?',
        options: ['Deleting data', 'Creating a dictionary in one line', 'Printing data', 'None'],
        answer: 1,
        explanation: 'Comprehensions provide a concise way to create dictionaries from other sequences.',
      }
    ]
  },
  {
    id: 'w10-9',
    number: '10.9',
    title: 'Dictionary Master! 🏆',
    theory: [
      'You now know how to map data like a pro! Dictionaries are one of the most useful tools in a programmer\'s belt. Ready for the challenge? 🏆',
    ],
    syntax: 'Dictionary Mastery',
    keyPoints: [
      'Dictionaries map labels (keys) to data (values).',
      'They are extremely fast for looking up info.',
      'Always use .get() for safer coding.',
    ],
    codeExample: `inventory = {"potions": 5, "swords": 1}\n# Use your dictionary skills here!`,
    practiceCode: `mission_stats = {"enemies": 10, "collected": 2}\nmission_stats["enemies"] -= 1\nprint(mission_stats)`,
    quiz: [
      {
        question: 'Which of these is a valid key in a dictionary?',
        options: ['"name"', '10', 'True', 'All of them!'],
        answer: 3,
        explanation: 'Any immutable type (strings, numbers, booleans) can be used as a dictionary key.',
      }
    ]
  },
];

// ─── Week 11: Objects & Architects (OOP) ──────────────────────────────────────
const week11Topics: Topic[] = [
  {
    id: 'w11-1',
    number: '11.1',
    title: 'What is OOP? 🏗️',
    theory: [
      'Object-Oriented Programming (OOP) is a way to organize your code into "Objects".',
      'Instead of just writing steps, you group data and powers together into one thing—like a "Car" or a "Robot"! 🏗️',
    ],
    syntax: 'class ClassName:',
    keyPoints: [
      'OOP groups data and functions together.',
      'It makes complex code easier to manage.',
      'Everything in Python is actually an object!',
    ],
    codeExample: `class Robot:\n    pass\n\nbot1 = Robot() # Creating a Robot object`,
    quiz: [
      {
        question: 'What does OOP stand for?',
        options: ['Only One Programming', 'Object-Oriented Programming', 'On-Offline Processing', 'None'],
        answer: 1,
        explanation: 'OOP stands for Object-Oriented Programming!',
      }
    ]
  },
  {
    id: 'w11-2',
    number: '11.2',
    title: 'Classes & Instances 🏛️',
    theory: [
      'A Class is like a blueprint for a LEGO house. An Instance is the actual house you build from that blueprint.',
      'You can build as many houses as you want from one blueprint! 🏛️',
    ],
    syntax: 'instance = Class()',
    keyPoints: [
      'The class is the design; the instance is the object.',
      'Each instance can have its own unique data.',
      'Classes are named using PascalCase (e.g. MyClass).',
    ],
    codeExample: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\ndog1 = Dog("Buddy") # Instance 1\ndog2 = Dog("Bella") # Instance 2`,
    practiceCode: `class Cat:\n    def __init__(self, name, color):\n        self.name = name\n        self.color = color\n\nmy_cat = Cat("Luna", "White")\nprint(f"{my_cat.name} is {my_cat.color}")`,
    quiz: [
      {
        question: 'What is an "Instance" in OOP?',
        options: ['A blueprint', 'A specific object built from a class', 'A type of error', 'A loop'],
        answer: 1,
        explanation: 'If a Class is a blueprint, an Instance is the actual object built using that blueprint.',
      }
    ]
  },
  {
    id: 'w11-3',
    number: '11.3',
    title: 'Instance Methods 🛠️',
    theory: [
      'Methods are functions that belong to an object. They are the "Powers" that the object has.',
      'We use `self` to talk to the specific object we are working with. 🛠️',
    ],
    syntax: 'def method(self, ...):',
    keyPoints: [
      'Methods define what an object can DO.',
      'They must have "self" as their first argument.',
      'You call them using object.method().',
    ],
    codeExample: `class Cat:\n    def speak(self):\n        print("Meow! 🐱")\n\nmy_cat = Cat()\nmy_cat.speak()`,
    practiceCode: `class Robot:\n    def greet(self):\n        print("Beep Boop! Hello! 🤖")\n\nbot = Robot()\nbot.greet()`,
    quiz: [
      {
        question: 'What is "self" used for in a class method?',
        options: ['To refer to the class name', 'To refer to the specific object instance', 'To delete the object', 'To print text'],
        answer: 1,
        explanation: 'self refers to the current instance of the class, allowing you to access its own data.',
      }
    ]
  },
  {
    id: 'w11-4',
    number: '11.4',
    title: 'Attributes: Instance vs Class 🏷️',
    theory: [
      '1. Instance Attributes: Unique to each object (like a dog\'s name).',
      '2. Class Attributes: Shared by all objects of that class (like "all dogs have 4 legs"). 🏷️',
    ],
    syntax: 'self.attr = val # Instance\nattr = val # Class',
    keyPoints: [
      'Instance attributes are set inside __init__.',
      'Class attributes are set directly inside the class.',
      'Changing a class attribute affects ALL instances.',
    ],
    codeExample: `class Dog:\n    legs = 4 # Class Attribute\n    def __init__(self, name):\n        self.name = name # Instance Attribute`,
    practiceCode: `class Bird:\n    wings = 2\n    def __init__(self, species):\n        self.species = species\n\nb1 = Bird("Parrot")\nprint(f"A {b1.species} has {b1.wings} wings.")`,
    quiz: [
      {
        question: 'What is a Class Attribute?',
        options: ['Unique to each object', 'Shared by all objects of that class', 'A private variable', 'A type of method'],
        answer: 1,
        explanation: 'Class attributes are defined outside the __init__ and are the same for every instance.',
      }
    ]
  },
  {
    id: 'w11-5',
    number: '11.5',
    title: 'Encapsulation: Keeping Secrets 🔒',
    theory: [
      'Encapsulation means keeping data safe inside an object and only letting it be changed through methods.',
      'It\'s like a protective shell around your code! 🔒',
    ],
    syntax: 'self.__private = value',
    keyPoints: [
      'Prevents accidental changes to important data.',
      'Uses double underscores (__) for private variables.',
      'Provides "Getters" and "Setters" to control access.',
    ],
    codeExample: `class Account:\n    def __init__(self):\n        self.__balance = 0\n    \n    def deposit(self, amount):\n        self.__balance += amount`,
    practiceCode: `class Hero:\n    def __init__(self):\n        self.__health = 100\n    def hit(self): self.__health -= 10\n    def show(self): print(f"HP: {self.__health}")`,
    quiz: [
      {
        question: 'How do you make a variable private in a Python class?',
        options: ['Use "private"', 'Use double underscores __', 'Use a capital letter', 'Use a hashtag #'],
        answer: 1,
        explanation: 'Double underscores __ at the start of a variable name suggest it should be private.',
      }
    ]
  },
  {
    id: 'w11-6',
    number: '11.6',
    title: 'Inheritance: Code Families 🌳',
    theory: [
      'Inheritance lets one class borrow code from another. A "Child" class gets everything the "Parent" class has! 🌳',
    ],
    syntax: 'class Child(Parent):',
    keyPoints: [
      'Prevents repeating code across different classes.',
      'Allows you to specialize (e.g. ElectricCar IS-A Car).',
      'One parent can have many children.',
    ],
    codeExample: `class Animal:\n    def eat(self): print("Munch!")\n\nclass Dog(Animal): pass\n\nbuddy = Dog()\nbuddy.eat() # Inherited power!`,
    practiceCode: `class Vehicle:\n    def drive(self): print("Vroom!")\n\nclass Bike(Vehicle): pass\n\nmy_bike = Bike()\nmy_bike.drive()`,
    quiz: [
      {
        question: 'What does Inheritance do?',
        options: ['Deletes a class', 'Allows a class to reuse code from another class', 'Makes a list', 'None'],
        answer: 1,
        explanation: 'Inheritance lets a "Child" class take on the attributes and methods of a "Parent" class.',
      }
    ]
  },
  {
    id: 'w11-7',
    number: '11.7',
    title: 'Polymorphism: Many Shapes 🌈',
    theory: [
      'Polymorphism lets different classes use the same method name to do different things. For example, both `Dog` and `Cat` can have a `speak()` method, but one says "Woof" and the other "Meow"! 🌈',
    ],
    syntax: 'def speak(self): # Different in each class',
    keyPoints: [
      'Same method name, different action.',
      'Makes code flexible and easy to expand.',
      'Essential for complex game systems.',
    ],
    codeExample: `class Dog: def speak(self): print("Woof!")\nclass Cat: def speak(self): print("Meow!")\n\nanimals = [Dog(), Cat()]\nfor a in animals: a.speak()`,
    practiceCode: `class Circle: def draw(self): print("Drawing Circle")\nclass Square: def draw(self): print("Drawing Square")`,
    quiz: [
      {
        question: 'What is Polymorphism?',
        options: ['One class', 'Many shapes (different objects using the same method name)', 'A loop', 'None'],
        answer: 1,
        explanation: 'Polymorphism allows different types of objects to be handled through the same interface.',
      }
    ]
  },
  {
    id: 'w11-8',
    number: '11.8',
    title: 'Recursion: The Mirror 🪞',
    theory: [
      'Recursion is when a function calls itself. It\'s like two mirrors facing each other! It\'s a powerful way to solve repeating problems by breaking them into smaller steps. 🪞',
    ],
    syntax: 'def f(): f()',
    keyPoints: [
      'Every recursive function needs a "Base Case" (Stop Rule).',
      'It helps solve complex math and search problems.',
      'Be careful of infinite recursion (Stack Overflow)!',
    ],
    codeExample: `def countdown(n):\n    if n <= 0: return\n    print(n)\n    countdown(n-1)`,
    practiceCode: `def sum_to(n):\n    if n == 1: return 1\n    return n + sum_to(n-1)\n\nprint(sum_to(5))`,
    quiz: [
      {
        question: 'What must every recursive function have?',
        options: ['A loop', 'A Base Case (Stop Rule)', 'A string', 'None'],
        answer: 1,
        explanation: 'The Base Case is essential to tell the function when to stop calling itself.',
      }
    ]
  },
  {
    id: 'w11-9',
    number: '11.9',
    title: 'Master Builder! 🏆',
    theory: [
      'Congratulations! You have mastered the most advanced parts of Python structure. You can now build complex, professional-level programs! 🏆',
    ],
    syntax: 'OOP Mastery',
    keyPoints: [
      'Classes are blueprints; Objects are the items.',
      'Inheritance and Polymorphism save time.',
      'You are now a high-level Python architect.',
    ],
    codeExample: `class MasterCoder:\n    def __init__(self, language):\n        self.language = language\n\nme = MasterCoder("Python")`,
    practiceCode: `class Superhero:\n    def __init__(self, name, power):\n        self.name = name\n        self.power = power\n\n# Create your own superhero instance here!`,
    quiz: [
      {
        question: 'Are you an OOP Master?',
        options: ['Yes!', 'Getting there!', 'Ready for more!', 'Let\'s go!'],
        answer: 0,
        explanation: 'OOP is a huge milestone. Great job!',
      }
    ]
  },
];

// ─── Week 12: File Shield (Files & Errors) ────────────────────────────────────
const week12Topics: Topic[] = [
  {
    id: 'w12-1',
    number: '12.1',
    title: 'Reading Files: The Secrets 📖',
    theory: [
      'Reading a file is like opening a book and reading the pages. You can read the whole thing at once or go line by line.',
      'Different modes:\n- `r`: Read (the default)\n- `rb`: Read Binary (for images or PDFs) 📖',
    ],
    syntax: 'open(file, "r")',
    keyPoints: [
      'The "with" keyword ensures the file is closed for you.',
      'Reading a file that doesn\'t exist causes an error.',
      'Modes control what you can do (read, write, etc.).',
    ],
    codeExample: `with open("secrets.txt", "r") as f:\n    content = f.read()\n    print(content)`,
    quiz: [
      {
        question: 'What does "r" stand for in open()?',
        options: ['Run', 'Read', 'Reset', 'Rewrite'],
        answer: 1,
        explanation: '"r" stands for Read mode!',
      }
    ]
  },
  {
    id: 'w12-2',
    number: '12.2',
    title: 'Writing & Appending ✍️',
    theory: [
      'Writing to a file creates a new one (or wipes the old one!). Appending adds to the end without deleting what\'s already there.',
      '- `w`: Write (Wipes the file!)\n- `a`: Append (Adds to the end) ✍️',
    ],
    syntax: 'open(file, "w") OR open(file, "a")',
    keyPoints: [
      '"w" is dangerous—it erases everything in the file!',
      '"a" is safe—it keeps your old data and adds more.',
      'Use \\n to move to the next line in the file.',
    ],
    codeExample: `with open("diary.txt", "a") as f:\n    f.write("Dear Diary, today was awesome!\\n")`,
    practiceCode: `with open("test.txt", "w") as f:\n    f.write("Hello World!")\n# Try changing 'w' to 'a' and run it twice!`,
    quiz: [
      {
        question: 'Which mode adds text to a file WITHOUT deleting what is there?',
        options: ['w', 'r', 'a', 'x'],
        answer: 2,
        explanation: '"a" stands for Append, which adds text to the end of the file.',
      }
    ]
  },
  {
    id: 'w12-3',
    number: '12.3',
    title: 'CSV Files: Tables 📊',
    theory: [
      'CSV (Comma Separated Values) files are like simple Excel spreadsheets. They use commas to separate different pieces of data.',
      'Python has a special `csv` module to help you work with them! 📊',
    ],
    syntax: 'import csv\ncsv.reader(file)',
    keyPoints: [
      'CSV is a universal format for tables.',
      'Each line in the file is a "row" in the table.',
      'Perfect for storing scores or player stats.',
    ],
    codeExample: `import csv\nwith open("scores.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)`,
    practiceCode: `import csv\n# To write: writer = csv.writer(f)\n# writer.writerow(["Name", "Score"])`,
    quiz: [
      {
        question: 'What does CSV stand for?',
        options: ['Code Simple Variable', 'Comma Separated Values', 'Computer System Version', 'None'],
        answer: 1,
        explanation: 'CSV files use commas to separate different pieces of data in a table.',
      }
    ]
  },
  {
    id: 'w12-4',
    number: '12.4',
    title: 'Opening Other Code Files 💻',
    theory: [
      'You can use Python to open and read ANY text file, including other coding files like `.py`, `.java`, or `.html`!',
      'This is how tools like code editors are built. 💻',
    ],
    syntax: 'open("file.py", "r")',
    keyPoints: [
      'Python files are just plain text.',
      'You can write scripts that modify other scripts!',
      'Useful for automated code generation.',
    ],
    codeExample: `with open("my_app.html", "r") as f:\n    print(f.read())`,
    practiceCode: `with open("main.py", "r") as f:\n    # print(f.read())\n    pass`,
    quiz: [
      {
        question: 'Can Python read its own source code files?',
        options: ['Yes, they are just text files', 'No, that is illegal', 'Only if they are compiled', 'None'],
        answer: 0,
        explanation: 'Python files (.py) are plain text, so Python can read and even write them!',
      }
    ]
  },
  {
    id: 'w12-5',
    number: '12.5',
    title: 'Handling Errors: Try/Except 🛡️',
    theory: [
      'Sometimes code goes wrong! Maybe a file is missing, or you divide by zero.',
      'Instead of crashing, you can use a `try` and `except` block to catch the error and handle it gracefully. 🛡️',
    ],
    syntax: 'try:\n    ...\nexcept Error:',
    keyPoints: [
      'Try: Code that might fail.',
      'Except: Code that runs IF it fails.',
      'Keeps your program running smoothly.',
    ],
    codeExample: `try:\n    with open("missing.txt", "r") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print("Oops! That file doesn't exist! 🔍")`,
    practiceCode: `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("You can't divide by zero! 🛑")`,
    quiz: [
      {
        question: 'What block catches an error to prevent a crash?',
        options: ['catch', 'except', 'stop', 'handle'],
        answer: 1,
        explanation: 'Python uses "except" to catch and handle errors from the "try" block.',
      }
    ]
  },
  {
    id: 'w12-6',
    number: '12.6',
    title: 'Common Error Types ⚠️',
    theory: [
      '1. `FileNotFoundError`: The file is missing.\n2. `IndexError`: Trying to get an item from a list that isn\'t there.\n3. `ValueError`: Using the wrong type of value (like turning "hello" into a number). ⚠️',
    ],
    syntax: 'except ValueError:',
    keyPoints: [
      'Each error has its own name.',
      'You can catch specific errors to give better messages.',
      'A generic "except Exception:" catches everything.',
    ],
    codeExample: `try:\n    n = int("abc")\nexcept ValueError:\n    print("That's not a number!")`,
    practiceCode: `try:\n    L = [1, 2]\n    print(L[5])\nexcept IndexError:\n    print("That index is out of bounds!")`,
    quiz: [
      {
        question: 'Which error happens when a file is not found?',
        options: ['ValueError', 'IndexError', 'FileNotFoundError', 'TypeError'],
        answer: 2,
        explanation: 'FileNotFoundError is raised when open() cannot find the file you asked for.',
      }
    ]
  },
  {
    id: 'w12-7',
    number: '12.7',
    title: 'The Raise Statement 📣',
    theory: [
      'You can also make your own errors happen on purpose! Use the `raise` keyword to shout out that something is wrong.',
      'It\'s like a referee blowing a whistle! 📣',
    ],
    syntax: 'raise ErrorName("message")',
    keyPoints: [
      'Used when you detect something wrong in your logic.',
      'The "message" helps others understand the error.',
      'Stops the program unless caught by a try/except.',
    ],
    codeExample: `age = -5\nif age < 0:\n    raise ValueError("Age cannot be negative!")`,
    practiceCode: `def check_score(s):\n    if s > 100: raise ValueError("Score too high!")\n\n# check_score(150)`,
    quiz: [
      {
        question: 'What keyword makes an error happen on purpose?',
        options: ['make', 'shout', 'raise', 'error'],
        answer: 2,
        explanation: 'The raise keyword is used to trigger an exception manually.',
      }
    ]
  },
  {
    id: 'w12-8',
    number: '12.8',
    title: 'File & Error Master! 🏆',
    theory: [
      'You now know how to save your data forever and keep your programs from crashing. You are a truly robust coder! 🏆',
    ],
    syntax: 'Final File Mastery',
    keyPoints: [
      'Always use "with" to handle files safely.',
      'Use try/except to prevent crashes.',
      'Raise errors when the user gives bad input.',
    ],
    codeExample: `try:\n    # Build a file saver here!\n    pass\nexcept Exception as e:\n    print(f"Error: {e}")`,
    practiceCode: `with open("completion.txt", "w") as f:\n    f.write("I finished Week 12! 🏅")`,
    quiz: [
      {
        question: 'Are you ready for the final projects?',
        options: ['Yes!', 'Double Yes!', 'I am a File Master!', 'Let\'s go!'],
        answer: 2,
        explanation: 'Handling data and errors makes your programs professional!',
      }
    ]
  },
];

// ─── Week 13: Data Detective (Data Science) ───────────────────────────────────
const week13Topics: Topic[] = [
  {
    id: 'w13-1',
    number: '13.1',
    title: 'What is Data Science? 🧪',
    theory: [
      'Data Science is like being a detective for numbers. You look at clues (data) to find secret patterns and predict the future!',
      'Python is the most popular tool for this because it has many "Power-Up" libraries. 🧪',
    ],
    syntax: 'import pandas as pd',
    keyPoints: [
      'Data science is about finding meaning in numbers.',
      'Patterns help us predict future events.',
      'Python is the #1 tool for data detectives.',
    ],
    codeExample: `# Data Science helps predict things like weather or movie trends!`,
    quiz: [
      {
        question: 'What is data science?',
        options: ['Playing games', 'Finding patterns in data', 'Writing emails', 'None'],
        answer: 1,
        explanation: 'Data science is all about understanding and using data!',
      }
    ]
  },
  {
    id: 'w13-2',
    number: '13.2',
    title: 'NumPy: The Number Pro 🔢',
    theory: [
      'NumPy stands for Numerical Python. It is super fast at handling large lists of numbers (called Arrays).',
      'It is much faster than normal Python lists for math! 🔢',
    ],
    syntax: 'import numpy as np\narr = np.array([1, 2, 3])',
    keyPoints: [
      'NumPy is built for math and large datasets.',
      'Arrays are like lists but much faster.',
      'You can perform math on the whole array at once.',
    ],
    codeExample: `import numpy as np\narr = np.array([1, 2, 3])\nprint(arr * 2) # [2, 4, 6]`,
    practiceCode: `import numpy as np\n# Create an array of zeros: np.zeros(5)`,
    quiz: [
      {
        question: 'What does NumPy stand for?',
        options: ['Number Python', 'Numerical Python', 'New Python', 'None'],
        answer: 1,
        explanation: 'NumPy is the foundation for math and science in Python.',
      }
    ]
  },
  {
    id: 'w13-3',
    number: '13.3',
    title: 'Pandas: Data Tables 📊',
    theory: [
      'Pandas is like Excel for Python. It uses a "DataFrame" to store data in rows and columns.',
      'It makes sorting and analyzing data very easy! 📊',
    ],
    syntax: 'df = pd.DataFrame(data)',
    keyPoints: [
      'DataFrames are the most important part of Pandas.',
      'They store data in a grid (rows and columns).',
      'You can load CSV, Excel, and SQL data into Pandas.',
    ],
    codeExample: `import pandas as pd\ndata = {"Name": ["Alice", "Bob"], "Age": [10, 12]}\ndf = pd.DataFrame(data)\nprint(df)`,
    practiceCode: `import pandas as pd\n# Try adding a third student to the data dictionary!`,
    quiz: [
      {
        question: 'What is the main data structure in Pandas?',
        options: ['List', 'DataFrame', 'Dictionary', 'Array'],
        answer: 1,
        explanation: 'A DataFrame is like a table with rows and columns.',
      }
    ]
  },
  {
    id: 'w13-4',
    number: '13.4',
    title: 'Data Visualization 📈',
    theory: [
      'Data visualization means turning boring numbers into beautiful charts and graphs.',
      'A picture is worth a thousand numbers! 📈',
    ],
    syntax: 'plt.plot(), plt.show()',
    keyPoints: [
      'Visuals help people understand data quickly.',
      'Common charts: Bar charts, Line graphs, Pie charts.',
      'Matplotlib is the most famous charting library.',
    ],
    codeExample: `# import matplotlib.pyplot as plt\n# plt.plot([1, 2, 3], [10, 20, 30])\n# plt.show()`,
    practiceCode: `# pip install matplotlib\n# import matplotlib.pyplot as plt`,
    quiz: [
      {
        question: 'Which library is most famous for making graphs in Python?',
        options: ['Pandas', 'Matplotlib', 'NumPy', 'OS'],
        answer: 1,
        explanation: 'Matplotlib is the most standard library for creating plots and charts.',
      }
    ]
  },
  {
    id: 'w13-5',
    number: '13.5',
    title: 'Data Science Master! 🏆',
    theory: [
      'You are now a data detective! You can look at raw numbers and turn them into insights. The world of AI and Data is now open to you! 🏆',
    ],
    codeExample: `print("I am a Data Scientist! 🚀")`,
    practiceCode: `print("Course Completed! 🎓")\n# Write a message about your favorite thing you learned!`,
    quiz: [
      {
        question: 'Are you ready for the final mission?',
        options: ['Yes!', 'Double Yes!', 'I am a Data Detective!', 'Let\'s go!'],
        answer: 2,
        explanation: 'You\'ve completed the entire curriculum! Time for the final projects.',
      }
    ]
  },
];

// ─── Final Projects ───────────────────────────────────────────────────────────
const project1Topics: Topic[] = [
  {
    id: 'p1-intro',
    number: 'Project 1',
    title: 'The Galactic Pet Shop 🌌',
    theory: [
      "Welcome to your first big mission! 🚀 You are the owner of a Pet Shop in Space.",
      "Your mission is to use everything you have learned—Lists for pet names, Dictionaries for their favorite snacks, and Functions to feed them!",
      "Can you keep your space pets happy? 🌌"
    ],
    syntax: 'Project Foundation',
    keyPoints: [
      'Use Lists to manage inventory.',
      'Use Dictionaries to link keys to details.',
      'Use Functions for repeatable actions.',
    ],
    codeExample: `pets = ["Moon Cat", "Star Fox"]\nsnacks = {"Moon Cat": "Milk Way", "Star Fox": "Solar Berry"}\n\ndef info(name):\n    print(f"{name} loves {snacks[name]}!")`,
    practiceCode: `### BUILD YOUR SPACE PET SHOP HERE!\npets = ["Moon Cat"]\n\n### Can you add a Mars Dog to the list?\n### Can you make a function to greet them?`,
    hint: 'Use everything you learned: Lists, Dictionaries, and Functions!',
    quiz: [
      {
        question: 'Which tool stores our pet names in a row?',
        options: ['List', 'Loop', 'import', 'Integer'],
        answer: 0,
        explanation: 'Lists are best for a sequence of names!',
      }
    ]
  }
];

const project2Topics: Topic[] = [
  {
    id: 'p2-intro',
    number: 'Project 2',
    title: 'Secret Agent Code Breaker 🕵️‍♂️',
    theory: [
      "Top Secret! 🤫 You are a Secret Agent. Your job is to build a program that hides messages.",
      "You will build a 'Code Breaker' that turns normal words into secret symbols using Dictionaries and Loops.",
      "It is time to send some top-secret information! 🕵️‍♂️"
    ],
    syntax: 'Secret Logic',
    keyPoints: [
      'Loops process each character of a message.',
      'Dictionaries transform characters into codes.',
      'Conditionals can handle missing codes.',
    ],
    codeExample: `secret_code = {"A": "!", "B": "@", "C": "#"}\n\nmsg = "ABC"\nfor letter in msg:\n    print(secret_code[letter])`,
    practiceCode: `### BUILD YOUR SECRET AGENT TOOL HERE!\ncode = {"h": "★", "e": "🌞", "l": "💧", "o": "🌀"}\n\n### Try to print "hello" in secret symbols!`,
    hint: 'Loop through the message and look up each letter in your dictionary!',
    quiz: [
      {
        question: 'What maps letters to symbols?',
        options: ['Loops', 'Classes', 'Dictionaries', 'Variables'],
        answer: 2,
        explanation: 'Dictionaries map a Key (letter) to a Value (symbol)!',
      }
    ]
  }
];

const fundamentalProgrammingTopics: Topic[] = [
  {
    id: 'f0-intro',
    number: '0.1',
    title: 'Fundamental Programming Intro',
    theory: [
      'Welcome to Fundamental Programming!',
      'Before we start building cool things, we need to understand the basic building blocks of coding.',
      'We will learn about Constants, Variables, and different types of Operators.'
    ],
    syntax: '# Fundamentals',
    keyPoints: [
      'Constants never change.',
      'Variables can change.',
      'Operators help us do math and logic.'
    ],
    codeExample: `print("Welcome to Fundamentals!")`,
    practiceCode: `print("Ready to learn fundamentals!")`,
    quiz: []
  },
  {
    id: 'f0-vars',
    number: '0.2',
    title: 'Constant and Variable',
    theory: [
      'A **Variable** is like a box where you can store data. Its value can change during the program.',
      'A **Constant** is a box whose value should never change! In Python, we usually write constants in ALL CAPS.'
    ],
    syntax: 'my_var = 10\nPI = 3.14',
    keyPoints: [
      'Use variables for things that change (like score).',
      'Use constants for things that stay the same (like gravity).'
    ],
    codeExample: `SPEED_OF_LIGHT = 299792458\nplayer_speed = 5`,
    practiceCode: `# Create a constant for GRAVITY and a variable for jump_height`,
    quiz: []
  },
  {
    id: 'f0-datatypes',
    number: '0.3',
    title: 'Data and its types',
    theory: [
      'Data is everything! But not all data is the same.',
      'There are different types of data, such as **Numbers** (Integers and Floats), **Text** (Strings), and **Booleans** (True/False).'
    ],
    syntax: 'type(data)',
    keyPoints: [
      'Strings are text.',
      'Integers are whole numbers.',
      'Floats have decimal points.'
    ],
    codeExample: `print(type("Hello"))\nprint(type(5))`,
    practiceCode: `# Find out the type of 3.14!\nprint(type(3.14))`,
    quiz: []
  },
  {
    id: 'f0-arithmetic',
    number: '0.4',
    title: 'Arithmetic Operators',
    theory: [
      '**Arithmetic Operators** let us do math! You already know most of them.',
      'Addition (+), Subtraction (-), Multiplication (*), and Division (/)'
    ],
    syntax: '10 + 5\n10 * 2',
    keyPoints: [
      'Python can act like a giant calculator.'
    ],
    codeExample: `print(10 + 5)`,
    practiceCode: `print(100 * 5)`,
    quiz: []
  },
  {
    id: 'f0-relational',
    number: '0.5',
    title: 'Relational Operators',
    theory: [
      '**Relational Operators** compare two things and give you a True or False answer.',
      'Is 10 greater than 5? Yes! Is 5 equal to 5? Yes!',
      '> (greater than), < (less than), == (equal to), != (not equal to)'
    ],
    syntax: '10 > 5\n5 == 5',
    keyPoints: [
      'Relational operators always return a Boolean (True or False).'
    ],
    codeExample: `print(10 > 5)  # True\nprint(5 == 6)  # False`,
    practiceCode: `# Write an expression that checks if 100 is not equal to 99`,
    quiz: []
  },
  {
    id: 'f0-logical',
    number: '0.6',
    title: 'Logical Operators',
    theory: [
      '**Logical Operators** combine multiple conditions together.',
      '**and**: Both must be True.',
      '**or**: Only one needs to be True.',
      '**not**: Flips True to False, and False to True.'
    ],
    syntax: 'True and False\nnot True',
    keyPoints: [
      'and requires both sides to be True.'
    ],
    codeExample: `print(True and False)  # False\nprint(not False)       # True`,
    practiceCode: `# What is True or False? Try it out!`,
    quiz: []
  }
];

// ─── Curriculum ───────────────────────────────────────────────────────────────
export const curriculum: Lesson[] = [
  {
    id: 'w0-fundamentals',
    title: 'Fundamental Programming 🧱',
    description: 'Learn about Variables, Constants, and Operators!',
    phase: 1,
    week: 0,
    slug: 'fundamental-programming',
    preloadedCode: 'print("Fundamentals!")',
    hint: 'Master the basics.',
    concept: 'Understanding fundamental concepts before coding.',
    syntax: 'var = 10, 5 > 3, True and False',
    example: 'print(10 + 5)',
    challenge: 'Master the operators!',
    topics: fundamentalProgrammingTopics,
  },
  {
    id: 'w1-basics',
    title: 'Week 1: First Steps 🚀',
    description: 'Learn how to talk to your computer and solve math magic!',
    phase: 1,
    week: 1,
    slug: 'hello-python',
    preloadedCode: 'print("My magic starts here!")',
    hint: 'Use print() and math.',
    concept: 'Giving orders to the computer using text and numbers.',
    syntax: 'print(), +, -, *, /',
    example: 'print(10 + 20)',
    challenge: 'Introduce yourself to the computer!',
    topics: week1Topics,
  },
  {
    id: 'w2-variables',
    title: 'Week 2: Secret Boxes 📦',
    description: 'Store values and master math expressions!',
    phase: 1,
    week: 2,
    slug: 'variables',
    preloadedCode: 'box = "Treasure"\nprint(box)',
    hint: 'Use = to store things.',
    concept: 'Storing values in named boxes and solving math puzzles.',
    syntax: 'x = 10, y = x + 5',
    example: 'score = 0\nscore = score + 1',
    challenge: 'Create a variable for your age.',
    topics: week2Topics,
  },
  {
    id: 'w3-objects',
    title: 'Week 3: Object Magic ✨',
    description: 'Strings, Lists, and the building blocks of Python!',
    phase: 1,
    week: 3,
    slug: 'objects',
    preloadedCode: 'print("Object World".upper())',
    hint: 'Everything is an object.',
    concept: 'Understanding how everything in Python has its own powers and properties.',
    syntax: 'obj.method()',
    example: '"hello".upper()',
    challenge: 'Turn a word into all capitals!',
    topics: week3Topics,
  },
  {
    id: 'w4-decisions',
    title: 'Week 4: Making Choices 🚦',
    description: 'Teach your computer how to make smart decisions!',
    phase: 1,
    week: 4,
    slug: 'logic',
    preloadedCode: 'if True:\n    print("It is True!")',
    hint: 'Use if and else.',
    concept: 'Teaching the computer how to make its own decisions based on rules.',
    syntax: 'if-elif-else',
    example: 'if score > 10:\n    print("You win!")',
    challenge: 'Make a program that checks if a number is big!',
    topics: week4Topics,
  },
  {
    id: 'w5-loops',
    title: 'Week 5: Repeat! Repeat! 🔄',
    description: 'Do things over and over without getting tired!',
    phase: 1,
    week: 5,
    slug: 'repetition',
    preloadedCode: 'for i in range(5):\n    print("Jump!")',
    hint: 'Loops go round and round.',
    concept: 'Repeating code over and over without getting tired.',
    syntax: 'for i in range(n):',
    example: 'for x in [1, 2, 3]:\n    print(x)',
    challenge: 'Print "I am a coder" 10 times!',
    topics: week5Topics,
  },
  {
    id: 'w6-functions',
    title: 'Week 6: Reusable Magic 🎁',
    description: 'Give names to your code and use them again!',
    phase: 1,
    week: 6,
    slug: 'functions',
    preloadedCode: 'def magic():\n    print("Poof! ✨")',
    hint: 'Define your magic with def.',
    concept: 'Creating reusable magic boxes of code that we can call by name.',
    syntax: 'def name():',
    example: 'def greet(n):\n    print(f"Hi {n}")',
    challenge: 'Create a function that claps!',
    topics: week6Topics,
  },
  {
    id: 'w7-modules',
    title: 'Week 7: Superpowers 🔌',
    description: 'Import powers from other coders around the world!',
    phase: 1,
    week: 7,
    slug: 'modules',
    preloadedCode: 'import random\nprint(random.randint(1, 100))',
    hint: 'Use import to get powers.',
    concept: 'Borrowing powerful toolboxes and superpowers from other programmers.',
    syntax: 'import module_name',
    example: 'import math\nprint(math.sqrt(16))',
    challenge: 'Get a random number between 1 and 10.',
    topics: week7Topics,
  },
  {
    id: 'w8-review',
    title: 'Week 8: Phase 1 Review 🛠️',
    description: 'Practice everything you learned in Phase 1!',
    phase: 1,
    week: 8,
    slug: 'phase-1-review',
    preloadedCode: 'print("Reviewing Phase 1...")',
    hint: 'Combine everything!',
    concept: 'Comprehensive Review.',
    syntax: 'Mixed syntax',
    example: 'if x > 0:\n    print(x)',
    challenge: 'Complete the Phase 1 final challenge!',
    topics: week8Topics,
  },
  {
    id: 'w9-lists',
    title: 'Week 9: List Mastery 🚂',
    description: 'Mastering the toy trains of data storage!',
    phase: 2,
    week: 9,
    slug: 'lists-mastery',
    preloadedCode: 'train = ["Engine", "Car 1", "Car 2"]',
    hint: 'Lists hold many things.',
    concept: 'Mastering the toy trains of data by adding, removing, and sorting items.',
    syntax: 'L.append(), L.sort()',
    example: 'items.append("New")',
    challenge: 'Sort a list of your favorite toys!',
    topics: week9Topics,
  },
  {
    id: 'w10-dictionaries',
    title: 'Week 10: Treasure Maps 📖',
    description: 'Use Key-Value pairs to find exactly what you need!',
    phase: 2,
    week: 10,
    slug: 'dictionaries',
    preloadedCode: 'map = {"Gold": "Cave", "Silver": "Mountain"}',
    hint: 'Keys find Values.',
    concept: 'Using secret keys to find treasure fast in a map of data.',
    syntax: 'd = {key: val}',
    example: 'print(map["Gold"])',
    challenge: 'Create a dictionary of your friends and their ages.',
    topics: week10Topics,
  },
  {
    id: 'w11-classes',
    title: 'Week 11: Master Builder 🏗️',
    description: 'Create blueprints for your own objects using Classes!',
    phase: 2,
    week: 11,
    slug: 'classes-oop',
    preloadedCode: 'class Robot:\n    def __init__(self, name):\n        self.name = name',
    hint: 'Classes are plans.',
    concept: 'Designing blueprints to build any number of custom objects.',
    syntax: 'class Name:',
    example: 'my_robot = Robot("Beep")',
    challenge: 'Build a blueprint for a Dog!',
    topics: week11Topics,
  },
  {
    id: 'w12-files-errors',
    title: 'Week 12: File Shield 🛡️',
    description: 'Save data forever and protect your code from crashing!',
    phase: 2,
    week: 12,
    slug: 'files-exceptions',
    preloadedCode: 'with open("hero.txt", "w") as f:\n    f.write("I am a coder!")',
    hint: 'Use try/except for safety.',
    concept: 'Saving information and handling errors gracefully.',
    syntax: 'open(), try:, except:',
    example: 'try:\n    open("file.txt")\nexcept:\n    print("Error")',
    challenge: 'Write a secret message to a file!',
    topics: week12Topics,
  },
  {
    id: 'w13-data-science',
    title: 'Week 13: Data Detective 🧪',
    description: 'Analyze numbers and find secret patterns in data!',
    phase: 2,
    week: 13,
    slug: 'data-science',
    preloadedCode: 'import numpy as np\nimport pandas as pd',
    hint: 'Use Pandas and NumPy.',
    concept: 'Using powerful libraries to understand large amounts of information.',
    syntax: 'import pandas as pd',
    example: 'df.describe()',
    challenge: 'Analyze a table of your favorite foods!',
    topics: week13Topics,
  },
  {
    id: 'p1-galaxy',
    title: 'Final Project: Galaxy Shop 🌌',
    description: 'Manage a pet shop in outer space!',
    phase: 3,
    week: 14,
    slug: 'project-galaxy',
    preloadedCode: '# BUILD YOUR SPACE PET SHOP!\npets = []',
    hint: 'Use lists and functions.',
    concept: 'Final Project 1.',
    syntax: 'All-in-one',
    example: 'print("Space Mission!")',
    challenge: 'Build the best pet shop in the galaxy!',
    topics: project1Topics,
  },
  {
    id: 'p2-agent',
    title: 'Final Project: Secret Agent 🕵️‍♂️',
    description: 'Build a code-breaking machine for secret messages!',
    phase: 3,
    week: 15,
    slug: 'project-agent',
    preloadedCode: '# BUILD YOUR CODE BREAKER!\ncode = {}',
    hint: 'Use dictionaries and loops.',
    concept: 'Final Project 2.',
    syntax: 'All-in-one',
    example: 'print("Message Encrypted")',
    challenge: 'Break the secret code of the rivals!',
    topics: project2Topics,
  },
];
