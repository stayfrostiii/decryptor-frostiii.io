
let question;
let answer;

function newGame()
{
    question = "";
    if (document.getElementById("button1").innerHTML == "submit")
    {
        if (document.getElementsByName("answer")[0].value != "")
        {
            question = document.getElementsByName("answer")[0].value;
            document.getElementById("button1").innerHTML = "answer";
        }
        else
            return;
    }
    else
    {
        question = start();
    }
    document.getElementById("q").innerHTML = "Decrypt: " + question;
    document.getElementsByName("answer")[0].value = "";
    document.getElementById("a").innerHTML = "";
    document.getElementById("seed").innerHTML = "";
    answer = "";
    encrypt();
    console.log("answer = " + answer + ", question = " + question + ", length = " + question.length);
}

function start()
{
    let createQues = "";
    for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++)
    {
        let newChar = Math.floor(Math.random() * 36);
        //console.log(newChar);
        if (newChar <= 9)
            createQues += newChar.toString();
        else
            createQues += String.fromCharCode(65 + newChar - 10);
    }
    return createQues;
}

function checkFor1()
{
    let count1 = 0;
    for (let i = 0; i < question.length; i++)
    {
        if (question[i] == "1")
            count1++;
    }

    return count1;
}

function decChar(c)
{
    if (c == 'B')
        return "Z";
    else if (c == 'A')
        return "Y";
    return String.fromCharCode(c.charCodeAt(0) - 2);
}

function incChar(c)
{
    if (c == 'Y')
        return "A";
    else if (c == 'Z')
        return "B";
    return String.fromCharCode(c.charCodeAt(0) + 2);
}

function encrypt()
{
    let endString = "";
    for (let i = 0; i < question.length; i++)
    {
        if (question[i] >= "0" && question[i] <= "9")
        switch (question[i])
        {
            case("0"):
                answer += "1";
                break;
            case("1"):
                answer += "0";
                break;
            case("2"):
                answer += checkFor1().toString();
                break;
            case("3"):
                endString += "3";
                break;
            case("4"):
                endString += "4";
                break;
            case("5"):
                endString += "5";
                break;
            case("6"):
                endString += "6";
                break;
            case("7"):
                answer += "49";
                break;
            case("8"):
                answer += "64";
                break;
            case("9"):
                answer += "81";
                break;
        }
        else if (question[i] <= "F")
        {
            switch  (question[i])
            {
                case("A"):
                    answer += "1010";
                    break;
                case("B"):
                    answer += "1011";
                    break;
                case("C"):
                    answer += "1100";
                    break;
                case("D"):
                    answer += "1101";
                    break;
                case("E"):
                    answer += "1110";
                    break;
                case("F"):
                    answer += "1111";
                    break;
            }
        }
        else if (question[i] <= "S")
        {
            answer += incChar(question[i]);
        }
        else
        {
            answer += decChar(question[i]);
        }
    }
    answer += endString;
}

function butt1()
{
    if (document.getElementById("button1").innerHTML == "answer")
        answerHere();
    else
        newGame();
}

function butt2()
{
    if (document.getElementById("button2").innerHTML == "seed")
        seedFinder();
    else
        changeToGame();
}

function answerHere()
{
    let answerIn = document.getElementsByName("answer")[0].value;
    if (answerIn == answer)
    {
        document.getElementById("a").innerHTML = "True";
        console.log("True");
    }
    else
    {
        document.getElementById("a").innerHTML = "False, answer = " + answer;
        console.log("False");
    }
    document.getElementById("seed").innerHTML = "seed: " + question;
}

function seedFinder()
{
    document.getElementById("newGameButt").style.visibility = "hidden";
    
    document.getElementById("q").innerHTML = "Enter Seed";
    document.getElementById("button1").innerHTML = "submit";
    document.getElementById("button2").innerHTML = "new game";
    document.getElementById("seed").innerHTML = "";
    answer = null;
}

function changeToGame()
{
    document.getElementById("newGameButt").style.visibility = "visible";
    document.getElementById("button2").innerHTML = "seed";
    document.getElementById("button1").innerHTML = "answer";
    document.getElementById("seed").innerHTML = "";
    newGame();
}