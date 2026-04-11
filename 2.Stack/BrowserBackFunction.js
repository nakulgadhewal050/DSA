import PromptSync from "prompt-sync";
import Stack from "./index.js";

const stack = new Stack()

const prompt = PromptSync();

let exit = false
 while (!exit) {
    const userChoisce = prompt(`please select one of the below chices
    1. Press 1 to add a new domain
    2. Press 2 to see the current domain
    3. Press 3 to go back
    4. Press 4 to exit
    `)

    const userChoiceNumber = parseInt(userChoisce)
    console.log(userChoiceNumber)

    switch (userChoiceNumber) {
        case 1:
         const domainname =  prompt("Enter the domain name you want to add: ")
            console.log(domainname)
            stack.push(domainname)
            break;
        case 2:
            console.log("current domain is: ",stack.peek())
            break;
        case 3:
            console.log("going back to previous domain: ",stack.pop())
            break;
        case 4:
            exit = true;
        default:
            break;
    }
 }