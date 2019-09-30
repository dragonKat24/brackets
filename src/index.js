module.exports = function check(str, bracketsConfig) {
    // my solution
    let result = true,
        strArr = str.split('');

    function getBracketPair(char) {
        let pair = false;

        bracketsConfig.map(function(item) {
            if (char === item[0]) {
                pair = item[1];
            }
        });

        return pair;
    };
    
    function checkStr(open, close) {
        if (!strArr.length) return;

        if (strArr[close] === getBracketPair(strArr[open])) {
            strArr.splice(open, 2);
            open = open - 2 >= 0 ? open - 2 : -1;
            close = open + 1;
        } else if (!strArr[close + 1]) {
            result = false;
            return;
        }

        checkStr(open + 1, close + 1);
    }

    checkStr(0, 1);

    return result;
}
