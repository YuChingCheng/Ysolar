var app = new Vue({
    name:'HomePage',
    el: '#app',
    data: {
        imgArr:["image/feature1.png","image/feature2.png"],
        index:0,
    },
    mounted: function() {
        
    },
    
    methods: {
        left:function(){
            if(this.index!=0){
                this.index--;
                if(this.index==0){
                    var btn_feature1 = document.getElementById("btn_feature1");
                    btn_feature1.style.opacity= "0.6";
                    btn_feature1.style.cursor= "not-allowed";

                    var btn_feature2 = document.getElementById("btn_feature2");
                    btn_feature2.style.opacity= "1";
                    btn_feature2.style.cursor= "initial";
                }
                
            }
        },
        right:function(){
            if(this.index<1){
                this.index++;
                if(this.index==1){
                    var btn_feature2 = document.getElementById("btn_feature2");
                    btn_feature2.style.opacity= "0.6";
                    btn_feature2.style.cursor= "not-allowed";

                    var btn_feature1 = document.getElementById("btn_feature1");
                    btn_feature1.style.opacity= "1";
                    btn_feature1.style.cursor= "initial";
                }
                
            }
        }

    },

})