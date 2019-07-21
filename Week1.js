var app = new Vue({
    el:'#thispage',
    data:{
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
                Completed:false
            });

            this.newToDo='';
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
    cT.style.strokeDasharray=p*126+" 100";
}
setCircle(0.6);

function getTime(){
    var nowTime =Date();
}