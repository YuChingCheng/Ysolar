var app = new Vue({
    name:'HomePage',
    el: '#app',
    data: {
        imgSrc:[
            'image/service1.png',
            'image/service2.png',
            'image/service3.png',
        ],
        startPointX: 0,
        changePointX: 0,
        showIndex: 0,
        slides: 5,
        active: 1
    },
    mounted: function() {
        
    },
    
    methods: {
        move(amount) {
            let newActive
            const newIndex = this.active + amount
            if (newIndex > this.slides) newActive = 1
            if (newIndex === 0) newActive = this.slides
            this.active = newActive || newIndex
        },
        jump(index) {
        this.active = index
        },
        addSlide() {
        this.slides = this.slides + 1
        },
        removeSlide() {
        this.slides = this.slides - 1 
        }

    },

})