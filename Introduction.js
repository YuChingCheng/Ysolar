new Vue({
    el: "#app",
    data: {
        imgArr:[
            "image/advantage1.png",
            "image/advantage2.png",
            "image/advantage3-1.png",
            "image/advantage3-2.png",
            "image/advantage4-1.png",
            "image/advantage4-2.png"
        ],
        index:0,
    },
    mounted() {
        
    },
    methods: {
        showInfo(adItem){
            if(adItem=='ad1'){
                this.index=0;
                document.getElementById('picture_message1').style.visibility="visible";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="hidden";

            }
            else if(adItem=='ad2'){
                this.index=1;
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="visible";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
            else if(adItem=='ad3'){
                this.index=2;
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="visible";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
            else if(adItem=='ad4'){
                this.index=4;
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="visible";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
        },
        right(item){
            if(item=='message3-2'){
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="visible";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
            else if(item=='message4-2'){
                this.index=5;
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="visible";
            }
        },
        left(item){
            if(item=='message3-1'){
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="visible";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="hidden";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
            else if(item=='message4-1'){
                this.index=4;
                document.getElementById('picture_message1').style.visibility="hidden";
                document.getElementById('picture_message2').style.visibility="hidden";
                document.getElementById('picture_message3-1').style.visibility="hidden";
                document.getElementById('picture_message3-2').style.visibility="hidden";
                document.getElementById('picture_message4-1').style.visibility="visible";
                document.getElementById('picture_message4-2').style.visibility="hidden";
            }
        }
    }
})