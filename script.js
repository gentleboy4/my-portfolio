function showMessage() {
    document.getElementById("message").innerText = "Email me at: williamsamaechi999@gmail.com";
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

let hours = new Date().getHours();
let greetingText = "";

if (hours < 12) {
    greetingText = "Good morning!";
} else if (hours < 18) {
    greetingText = "Good afternoon!";
} else {
    greetingText = "Good evening!";
}

document.getElementById("greeting").innerText = greetingText;

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task=== "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Mark complete
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
 
    document.getElementById("tasklist").appendChild(li);
    
    input.value = "";

}

function createTask(task) {
    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function() {
        li.classList.toggle("completed");
        saveTask();
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function() {
        li.remove();
        saveTask();
    };

    li.appendChild(delBtn);

    document.getElementById("tasklist").appendChild(li);

}

function saveTask() {
    let tasks = [];

    document.querySelectorAll("#tasklist li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerText = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.onclick = function () {
            li.classList.toggle("completed");
            saveTask();
        };

        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        delBtn.onclick = function () {
            li.remove();
            saveTask();
        };

        li.appendChild(delBtn);

        document.getElementById("tasklist").appendChild(li);
    });
}

loadTasks();

function clearTasks() {
    localStorage.removeItem("tasks");
    document.getElementById("tasklist").innerHTML = "";

}

let userScore = 0;
let computerScore = 0;

function playGame(user) {
    let choices = ["rock", "paper", "scissors"];
    let computer = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (user === computer) {
        result = "It's a tie!";
    } 
    else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        result = "You win🎉🎉!";
        userScore++;
    } 
    else {
        result = "You lose😢😢!";
        computerScore++;
    }

    document.getElementById("result").innerText =
        `You chose ${user}, Computer chose ${computer}. ${result}`;

    document.getElementById("score").innerText =
        `Score → You: ${userScore} | Computer: ${computerScore}`;
}

window.addEventListener("scroll" , function() {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("show");
    });
});

let text = "Welcome to my portfolio!";
let i = 0;

function typeeffect() {
    if (i <text.length) {
        document.getElementById("typing").innerText += text.charAt(i);
        i++;
        setTimeout(typeeffect, 50);
    }
}

console.log("Portfolio Loaded Successfully");

typeeffect();
