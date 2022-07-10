let btn = document.getElementsByClassName("btn");

let doc = [
    { coctel: 'margarita', count: 0 },
    { coctel: 'vodka', count: 0 },
    { coctel: 'whiskey', count: 0 },
    { coctel: 'whiskeycoca', count: 0 },
    { coctel: 'gin', count: 0 },
    { coctel: 'mojito', count: 0 },
    { coctel: 'cubalibre', count: 0 }
];
localStorage.setItem("doc", JSON.stringify(doc));

for (const el of btn) {
    el.addEventListener("click", function (e) {
        console.log(e.target);
        sum(e.target.id);
    })
}

const reload = () => {
    window.location.reload();
}

const sum = (id) => {
    let doc = localStorage.getItem("doc");
    doc = JSON.parse(doc);
    for (let i = 0; i < doc.length; i++) {
        if (doc[i].coctel === id) {
            doc[i].count++;
        }
    }
    localStorage.setItem("doc", JSON.stringify(doc));
    read();
};

const read = () => {
    let doc = localStorage.getItem("doc");
    let docObj = JSON.parse(doc);
    for (let i = 0; i < docObj.length; i++) {
        const { coctel, count } = docObj[i];
        document.getElementById(coctel + "Count").innerHTML = count;
    }
}

document.getElementById("reload").addEventListener("click", reload);