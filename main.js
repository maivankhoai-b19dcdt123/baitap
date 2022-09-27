function on1() {
    let text= " có bật đèn k"
    if( confirm(text) == true){
        document.getElementById('led1').src='den sang.jpg';
    }   
}

function off1() {
    let text= " có tắt đèn k"
    if( confirm(text) == true){
        document.getElementById('led1').src='den toi.jpg';
    }   
}
function on1() {
    let text= " có bật đèn k"
    if( confirm(text) == true){
        document.getElementById('led1').src='den sang.jpg';
    }   
}

function off1() {
    let text= " có tắt đèn k"
    if( confirm(text) == true){
        document.getElementById('led1').src='den toi.jpg';
    }   
}


const nds =[0,0,0,0,0,0,0,0,0,0,0,0];
const das =[0,0,0,0,0,0,0,0,0,0,0,0];
const ass =[0,0,0,0,0,0,0,0,0,0,0,0];
setInterval(function(){
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);   
    let z = Math.floor(Math.random()*100);
    
    
    function nhietDo() {    
        document.getElementById("text1").innerHTML = x + "°C";
        if( x >=0 && x < 32){
            document.getElementById("box1").style.backgroundColor = "pink";
        }
        else if( x >= 32 && x < 60 ) {
            document.getElementById("box1").style.backgroundColor = "violet";
        }
        else {
            document.getElementById("box1").style.backgroundColor = "red";
        }
    }
    nhietDo();

    function anhSang() {
        document.getElementById("text2").innerHTML =  y + "lux";
        if( y >=0 && y < 100) {
            document.getElementById("box2").style.backgroundColor = "lightblue";
        }
        else if( y >= 100 && y < 200 ) {
            document.getElementById("box2").style.backgroundColor = "blue";
        }
        else {
            document.getElementById("box2").style.backgroundColor = "darkblue";
        }
    }
    anhSang();

    function doAm() {  
        document.getElementById("text3").innerHTML = z + "%";
        if( z >=0 && z < 20) {
            document.getElementById("box3").style.backgroundColor = "lightgreen";
        }
        else if( z >= 20 && z < 50 ) {
            document.getElementById("box3").style.backgroundColor= "yellow";
        }
        else {
            document.getElementById("box3").style.backgroundColor= "orange";
        }
    }
    doAm();

    function bieuDo(){
        nds.push(x); nds.shift();
        das.push(y); das.shift();
        ass.push(z); ass.shift();
    }
    bieuDo();

    Highcharts.chart('container', {

        title: {
          text: 'BIEU DO NHIET DO, DO AM, ANH SANG TRONG NAM'
        },
        
        
        yAxis: {
            min:0,
            max:100
        },
        
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          
        },
        
        options: {
            scales: {
              y: {
                beginAtZero: true,     
            }
          },},
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
          
          }
        },
        
        series: [{
          name: 'Nhiệt độ',
          data: nds
        },{
          name: 'Độ ẩm',
          data: das
        }, {
          name: 'Ánh sáng',
          data: ass
        },],
        
        responsive: {
          rules: [{
            condition: {
              maxWidth: 100,
              minWidth:0
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
        
        });
},10000);