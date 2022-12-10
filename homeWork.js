function completeWork(Submitted)
{
    setTimeout(()=>{console.log("Homework is completed");Submitted()},1000);
}

function submitHomework()
{
    console.log("Homework is submitted");
}


completeWork(submitHomework);