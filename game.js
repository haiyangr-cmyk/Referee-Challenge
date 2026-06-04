<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let mode, index=0, score=0;</p>
<p class="p2"><br></p>
<p class="p1">function start(m){</p>
<p class="p1"><span class="Apple-converted-space">    </span>mode=m;</p>
<p class="p1"><span class="Apple-converted-space">    </span>index=0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>score=0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>show("game");</p>
<p class="p1"><span class="Apple-converted-space">    </span>render();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function render(){</p>
<p class="p1"><span class="Apple-converted-space">    </span>let data = LEVELS[mode][index];</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("top").innerText = `Level ${index+1}`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("question").innerText = data.q;</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>let html="";</p>
<p class="p1"><span class="Apple-converted-space">    </span>data.options.forEach((o,i)=&gt;{</p>
<p class="p1"><span class="Apple-converted-space">        </span>html+=`&lt;button onclick="choose(${i})"&gt;${o}&lt;/button&gt;`;</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("options").innerHTML=html;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function choose(i){</p>
<p class="p1"><span class="Apple-converted-space">    </span>let data = LEVELS[mode][index];</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>show("result");</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>if(mode==="good"){</p>
<p class="p1"><span class="Apple-converted-space">        </span>if(i===data.answer){</p>
<p class="p1"><span class="Apple-converted-space">            </span>score++;</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById("resultText").innerText="✅ Correct";</p>
<p class="p1"><span class="Apple-converted-space">        </span>}else{</p>
<p class="p1"><span class="Apple-converted-space">            </span>document.getElementById("resultText").innerText="❌ Wrong";</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}else{</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.getElementById("resultText").innerText="😈 Perfect Corruption";</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById("desc").innerText=data.desc;</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function next(){</p>
<p class="p1"><span class="Apple-converted-space">    </span>index++;</p>
<p class="p1"><span class="Apple-converted-space">    </span>if(index&gt;=LEVELS[mode].length){</p>
<p class="p1"><span class="Apple-converted-space">        </span>alert("Game Over Score:"+score);</p>
<p class="p1"><span class="Apple-converted-space">        </span>location.reload();</p>
<p class="p1"><span class="Apple-converted-space">        </span>return;</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>show("game");</p>
<p class="p1"><span class="Apple-converted-space">    </span>render();</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">function show(id){</p>
<p class="p1"><span class="Apple-converted-space">    </span>["home","game","result"].forEach(x=&gt;{</p>
<p class="p1"><span class="Apple-converted-space">        </span>document.getElementById(x).classList.add("hidden");</p>
<p class="p1"><span class="Apple-converted-space">    </span>});</p>
<p class="p1"><span class="Apple-converted-space">    </span>document.getElementById(id).classList.remove("hidden");</p>
<p class="p1">}</p>
</body>
</html>
