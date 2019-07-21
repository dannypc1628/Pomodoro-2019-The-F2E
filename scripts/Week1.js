runNowTime();
var app = new Vue({
    el:'#thispage',
    data:{
        toDayDate:'',
        toDayTime:'',
        status:1,
        charted:false,
        timer:"25:00",
        newToDo:'',
        list:[
            {
                ID:'1',
                Title:'工作目標1',
                Completed:false,
                CreateDate:'2019/7/21'
            },
            {
                ID:'2',
                Title:'工作目標2',
                Completed:false,
                CreateDate:'2019/7/21'
            },
            {
                ID:'3',
                Title:'工作目標3',
                Completed:false,
                CreateDate:'2019/7/20'
            },
            {
                ID:'4',
                Title:'工作目標4',
                Completed:true,
                CreateDate:'2019/7/21'
            }
        ]

    },
    methods:{
        addToDo:function(){
            var title=this.newToDo.trim();
            console.log('進行新增目標:'+title);
            if(!title){
                return;
            }

            this.list.push({
                ID:this.list.length+1,
                Title:title,
                Completed:false,
                CreateDate:'2019/7/21'
            });

            this.newToDo='';
        },
        play:function(){
            setTimer();
            runTimer();
            this.status=2;
        },
        paused:function(){
            this.status=3;
            cancelTimer();
        },
        play2:function(){
            setPausedTimer();
            runTimer();
            this.status=2;
        },
        cancel:function(){
            cancelTimer();
            this.timer="25:00";
            this.status=1;
        },
        restart:function(){
            cancelTimer();
            setTimer();
            runTimer();
            this.status=2;
        },

        
    },
    computed:{
        todayTotal:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].CreateDate=='2019/7/21'){
                    total++;
                }
            }
            return total;
        },
        todayFinish:function(){
            var total=0;
            for(var i=0;i<this.list.length;i++){
                if(this.list[i].CreateDate=='2019/7/21'&&this.list[i].Completed==true){
                    total++;
                }
            }
            return total;
        }
    }
});

function setCircle(p){
    var cT = document.getElementById('circleT');
    cT.style.strokeDasharray=p*126+" 300";
}



function getDate(){
    var today = new Date();
    var date =today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate();
    return date;
}
function getTime(){
    var today = new Date();
    var date =today.getHours()+":"+today.getMinutes();
    return date;
}

var TimerInitSecond=25*60*1000;
var RemainingTime=TimerInitSecond;
var TimerCreateTimeSecond=Date.now();
var TimerGoalTimeSecond=TimerCreateTimeSecond+TimerInitSecond;

function setTimer(){
    console.log("setTimer");
    TimerCreateTimeSecond=Date.now();
    RemainingTime=TimerInitSecond;
    TimerGoalTimeSecond=TimerCreateTimeSecond+TimerInitSecond;
}
function setTimerText(){
    app.timer=RemainingTimer();
}
function RemainingTimer(){
    RemainingTime=TimerGoalTimeSecond-Date.now();
    var Minute=parseInt(RemainingTime/1000/60,10);
    var Second=parseInt(RemainingTime/1000%60,10);
    setCircle(RemainingTimerCircle());
    return Minute+":"+Second;
}
function RemainingTimerCircle(){
    
    return 1-RemainingTime/TimerInitSecond;
}
var timerID = 0;
function runTimer(){
    timerID = setInterval('setTimerText()',300);
}

function setNowTime(){
    app.toDayDate=getDate();
    app.toDayTime=getTime();
}

function runNowTime(){
    setInterval('setNowTime()',3000);
}

function cancelTimer(){
    clearTimeout(timerID);
}
function setPausedTimer(){
    TimerCreateTimeSecond=Date.now();
    TimerGoalTimeSecond=TimerCreateTimeSecond+RemainingTime;
}
