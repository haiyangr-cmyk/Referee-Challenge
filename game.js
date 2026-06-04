let mode, index=0, score=0;

function start(m){
    mode=m;
    index=0;
    score=0;
    show("game");
    render();
}

function render(){
    let data = LEVELS[mode][index];
    document.getElementById("top").innerText = `Level ${index+1}`;
    document.getElementById("question").innerText = data.q;

    let html="";
    data.options.forEach((o,i)=>{
        html+=`<button onclick="choose(${i})">${o}</button>`;
    });
    document.getElementById("options").innerHTML=html;
}

function choose(i){
    let data = LEVELS[mode][index];

    show("result");

    if(mode==="good"){
        if(i===data.answer){
            score++;
            document.getElementById("resultText").innerText="✅ Correct";
        }else{
            document.getElementById("resultText").innerText="❌ Wrong";
        }
    }else{
        document.getElementById("resultText").innerText="😈 Perfect Corruption";
    }

    document.getElementById("desc").innerText=data.desc;
}

function next(){
    index++;
    if(index>=LEVELS[mode].length){
        alert("Game Over Score:"+score);
        location.reload();
        return;
    }
    show("game");
    render();
}

function show(id){
    ["home","game","result"].forEach(x=>{
        document.getElementById(x).classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}