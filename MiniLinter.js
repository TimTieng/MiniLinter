// Mini Linter Project - CodeCademy Full-Stack Software Engineer 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// string.split (String Object Method) into a new array to be manipulated. Store as a new var
// string.split(special character/regular expression to use for splitting the string)
const storyWords = story.split(" ");
console.log(`There are ${storyWords.length} words in the story`);                 // Output 188

// Iterate through storyWords to filter out words from unnecessaryWords array - store into a new var
// .filter and .includes required
const betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word);
});
// Test - If filter work =< word count should be less than 188
// console.log(betterWords.length);            // Output 182

// count how many times a word from overusedWords occurs in storyWords

const overusedCounter =() => {
    let reallyCounter = 0;
    let veryCounter = 0;
    let basicallyCounter = 0;
    // for..of loop required because we are looping through the values of an array vs the keys(index)/props (for in)
    for (word of storyWords) {
        if (word === 'really') {
            reallyCounter++;
        } else if (word === 'very') {
            veryCounter++;
        } else if (word === 'basically') {
            basicallyCounter++;
        }
    }
    return `Really was used ${reallyCounter} number of times. 
            \nVery was used ${veryCounter} number of times. 
            \nBasically was used ${basicallyCounter} number of times.`;
};
console.log(overusedCounter());


// count how many sentences are in storyWords
const sentenceCounter = () => {
    let sentences = 0;
    for (word of storyWords) {
        if (word[word.length-1] === "." || word[word.length-1] === "!"){            // Treat word as an array of chars
            sentences++;
        }
    }
    return `There are ${sentences} sentences in the story.`;
};

console.log(sentenceCounter());

// print betterWords Array as a single string
// .join creates a string from a array type object or CSV object  .join(separator)
console.log(betterWords.join(' '));
