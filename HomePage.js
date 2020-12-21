var app = new Vue({
    name:'HomePage',
    el: '#app',
    data: {
        imgSrc:[
            'image/service1.png',
            'image/service2.png',
            'image/service3.png',
        ],
        index:0,
    },
    mounted: function() {
        
    },
    
    methods: {
        left:function(){
            if(this.index==1){
                this.index--;
                
                
            }
        },
        right:function(){
            if(this.index<1){
                this.index++;
                document.getElementById("btn_next").className="far fa-arrow-alt-circle-left fa-2x";
            }
        }

    },

})