const questions = [
    "What did you learn today?",
    "What bothered you today?",
    "What should I do to improve?",
    "What made me happy?",
    "Did I help anyone today?How many?"

]

const ask = ( index = 0) => {
 process.stdout.write(questions[index] + "\n\n\n")  //função pela saída na tela  
}

ask()

process.stdin.on("data", data => {
process.stdout.write(data.toString().trim() + '\n')
process.exit()
})