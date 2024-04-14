import {configureStore, createSlice} from '@reduxjs/toolkit';

const projectSlice=createSlice({
    name:'projects',
    initialState:{
        projects:[
            {
                id:1,
                title:"Recipe Book (MERN STACK)",
                description:"The recipe book application, where you add your own recipes and also watch other users dishes.",
                imageURL:'https://cdn.pixabay.com/photo/2016/08/01/16/18/raspberries-1561457_1280.jpg'
            },
            {
                id:2,
                title:"E-commerce Website (REACT JS)",
                description:"Ecommerce Website build using React JS , where you can explore variety of products as per their category and also add your favourite one in the cart for shopping later.",
                imageURL:'https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg'
            },
            {
                id:3,
                title:"Movie Website (MERN STACK)",
                description:"It is a movie website similar to Netflix where you can watch your favourite movies and explore other movies according to the genre, also you can make your playlist",
                imageURL:'https://reactjsexample.com/content/images/2021/07/Fakeflix.png'
            },
            {
                id:4,
                title:"To-Do-List (REACT JS)",
                description:"To-do-list react application , where you can add your everyday task also you can edit and remove them using this to-do-list",
                imageURL:'https://t3.ftcdn.net/jpg/02/59/31/70/360_F_259317013_nJJaBgGGzvXMd6cAyLd6yMJtbdnd61wk.jpg'
            }
        ]
    }
});

export const projectActions=projectSlice.actions;

export const store=configureStore({
    reducer:{
        allProjects:projectSlice.reducer
    }
})