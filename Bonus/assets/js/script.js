let app = new Vue ({


    el: "#root",
    
    data: {

        cdList : [],
        genreList: ['All'],
    },
    methods: {
    

    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {
            // console.log(response.data.response);
            this.cdList = response.data.response;

            this.cdList.forEach(element => {
                element.visible='true';
                if(this.genreList.indexOf(element.genre)== -1){
                    this.genreList.push(element.genre)
                }
            });

            console.log(this.genreList);
            console.log(this.cdList);   

        }).catch(error=>{
            console.log(error);
        })
    },
    

})



// TODO:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.

// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music