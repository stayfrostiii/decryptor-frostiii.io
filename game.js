
let question;
let answer;

function start()
{
    question = "";
    for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++)
    {
        question += Math.floor(Math.random() * 3).toString();
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
            case(3):
            case(4):
            case(5):
            case(6):
            case(7):
            case(8):
            case(9):
        }
    }
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