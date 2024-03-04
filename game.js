
let question;
let answer;

function start()
{
    question = "Encrypt: ";
    for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++)
    {
        question += Math.floor(Math.random() * 10).toString();
    }
    document.getElementById("q").innerHTML = question;
    document.getElementsByName("answer")[0].value = "";
    document.getElementById("a").innerHTML = "";
    answer = "";
    encrypt();
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

function encrypt()
{
    let endString = "";
    for (let i = 0; i < question.length; i++)
    {
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
    }
    answer += endString;
    console.log("answer = " + answer + ", question = " + question + ", length = " + question.length);
}

function sendTo()
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
}