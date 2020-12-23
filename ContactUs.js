new Vue({
    el: "#app",
    data: {
      activeItem: 'Taichung'
    },
    mounted() {
        document.getElementById("Taichung_card").className="change";  
    },
    methods: {
        isActive (menuItem) {
            return this.activeItem === menuItem;
            
        },
        setActive (menuItem) {
            this.activeItem = menuItem
            if(this.activeItem =="Taichung"){
                document.getElementById("Taichung_card").className="change";
                document.getElementById("Tainan_card").className="default";
                document.getElementById("Pingtung_card").className="default";
            }   
            else if(this.activeItem =="Tainan"){
                document.getElementById("Taichung_card").className="default";
                document.getElementById("Tainan_card").className="change";
                document.getElementById("Pingtung_card").className="default";
            }  
            else if(this.activeItem =="Pingtung"){
                document.getElementById("Taichung_card").className="default";
                document.getElementById("Tainan_card").className="default";
                document.getElementById("Pingtung_card").className="change";
            }   
        }
    }
  })