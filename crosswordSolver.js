const emptyPuzzle =
    `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];
// const emptyPuzzle =
//     `1.11.
// 0.00.
// 10000
// 0.00.
// 0.0..`;
// const words = ['wonka', 'najia', 'najat', 'blik'];
// crosswordSolver(emptyPuzzle, words)
/* output:
`casa
i..l
anta
o..n`
*/

function canPlaceH(puzzle, output, word, pos) {
    let i = 0;
    if (puzzle[pos.l][pos.c] == 0 ||
        puzzle[0].length - pos.c < word.length)
        return false;
    while (i < word.length) {
        if (puzzle[pos.l][pos.c + i] == '.' ||
            (/[a-z]/i.test(output[pos.l][pos.c + i]) &&
                output[pos.l][pos.c + i] !== word[i]))
            return false;
        i++;
    }
    return true;
}
function canPlaceV(puzzle, output, word, pos) {
    let i = 0;

    if (puzzle[pos.l][pos.c] == 0 ||
        puzzle.length - pos.l < word.length)
        return false;
    while (i < word.length) {
        if (puzzle[pos.l + i][pos.c] == '.' ||
            (/[a-z]/i.test(output[pos.l + i][pos.c]) &&
                output[pos.l + i][pos.c] !== word[i]))
            return false;
        i++;
    }
    return true;
}


function placeH(puzzle, output, word, pos) {
    let toReturn = {
        isDone: false,
        arr: []
    };
    if (canPlaceH(puzzle, output, word, pos)) {
        puzzle[pos.l][pos.c]--;
        for (let j = pos.c; j < word.length; j++) {
            toReturn.arr[j - pos.c] = /[a-z]/i.test(output[pos.l][j]) ? false : true;
            output[pos.l][j] = word[j - pos.c];
        }
        toReturn.isDone = true;
    }
    return toReturn;
}
function placeV(puzzle, output, word, pos) {
    let toReturn = {
        isDone: false,
        arr: []
    };
    if (canPlaceV(puzzle, output, word, pos)) {
        puzzle[pos.l][pos.c]--;
        for (let i = pos.l; i < word.length; i++) {
            toReturn.arr[i - pos.l] = /[a-z]/i.test(output[i][pos.c]) ? false : true;
            output[i][pos.c] = word[i - pos.l];
        }
        toReturn.isDone = true;
    }
    return toReturn;
}

function rmvH(puzzle, output, pos, boolArr) {
    puzzle[pos.l][pos.c]++;
    for (let i = pos.c; i < output[0].length - pos.c; i++) {
        if (boolArr[i - pos.c])
            output[pos.l][i - pos.c] = puzzle[pos.l][i - pos.c];
    }
}
function rmvV(puzzle, output, pos, boolArr) {
    puzzle[pos.l][pos.c]++;
    for (let j = pos.l; j < output.length - pos.l; j++) {
        if (boolArr[j - pos.l])
            output[j - pos.l][pos.c] = puzzle[j - pos.l][pos.c];
    }
}
function fill(puzzle, output, words, k) {
    let place;
    let len = puzzle.length;
    let height = puzzle[0].length;
    let pos = {
        l: 0,
        c: 0
    };

    if (k == words.length)
        return true;
    for (let i = 0; i < height; i++) {
        pos.l = i;
        for (let j = 0; j < len; j++) {
            pos.c = j;
            place = placeH(puzzle, output, words[k], pos);
            if (place.isDone) {
                if (fill(puzzle, output, words, k + 1))
                    return true;
                rmvH(puzzle, output, pos, place.arr)
            }
            place = placeV(puzzle, output, words[k], pos);
            if (place.isDone) {
                if (fill(puzzle, output, words, k + 1))
                    return true;
                rmvV(puzzle, output, pos, place.arr)
            }
        }
    }
    return false;
}
function wordsIsValid(words) {
    return new Set(words).size == words.length;
}
function puzzleIsValid(puzzle) {
    //check that puzzle contain only nbr or . or \n
    return !/[^\d\.\n]/g.test(puzzle) &&
        //check that sum of nbr == words
        puzzle.replaceAll(/[\.\n]/g, '')
            .split("")
            .reduce((x, y) => x + parseInt(y), 0) == words.length &&
        //check that all line have same length
        ((puzzle + "\n").indexOf("\n") + 1)
        * ((puzzle + "\n").match(/\n/g).length)
        === (puzzle + "\n").length;
}

function crosswordSolver(puzzle, words) {
    if (!wordsIsValid(words) || !puzzleIsValid(puzzle))
        console.log("Error");
    else {
        let output = [];

        puzzle = puzzle.split("\n");
        puzzle.forEach(el => puzzle[puzzle.indexOf(el)] = el.split(""));
        output = puzzle.map(ele => ele.slice());

        if (fill(puzzle, output, words, 0))
            console.log(output.join("\n").replaceAll(',', ''));
        else
            console.log("Error");
    }
}

crosswordSolver(emptyPuzzle, words);
//(puzzle.match(/\n/g) || []).length