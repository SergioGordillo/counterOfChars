const charsInput = "{'c','a','i','o','p','a'}";
const counterOfChars = {};

function countChars(charsInput){

    const cleanedCharsInput = charsInput.replace(/[{}']/g, '').split(',');

    cleanedCharsInput.forEach(char => {
        counterOfChars[char] = counterOfChars[char] + 1 || 1;

        if(counterOfChars[char]>=2){
            console.log("This character appears at least 2 times: " + char);
        }
    });
}

countChars(charsInput);