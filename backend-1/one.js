//https://nodejs.org/api/readline.html#readline_example_tiny_cli
//https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
//https://stackoverflow.com/questions/24661774/createinterface-prints-double-in-terminal
//https://stackoverflow.com/questions/33879896/how-to-execute-the-start-script-with-nodemon#:~:text=Just%20executing%20command%20nodemon%20index.js%20will%20run%20your,npm%20start%20will%20trigger%20the%20server%20to%20run.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false,
  
  prompt: '1.Show all Books \n2.Add a new Book \n3.Quit \n'
});

rl.prompt();
let books =['123','qwer','wesrerw']

rl.on('line', (line) => {
  switch (Number(line.trim())) {
    case 1:
      console.log('These are the books ->')
      books.forEach(book =>console.log(book))
      rl.prompt()
      break;
    case 2:
        rl.question('enter the name: ',(bookName)=>{
            books.push(bookName);
            console.log('book added sucessfully');
            rl.prompt()
            
        })
        break;
        

        

    case 3:
        rl.question("Are you sure you want to quit - press Y to quit",(inp)=>{
            if(inp=='Y'){
                rl.close()
            }
        })
        break;
       


    default:
      console.log(`Say what? I might have heard '${Number(line.trim())}'`);
      break;
  }
  //r1.setPrompt('1.Show all Books \n2.Add a new Book \n3.Quit \n')
 // rl.prompt();
})

rl.on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});