//import React from 'react';
import {createSlice} from '@reduxjs/toolkit'
//import FlatCard from '../Components/flatCard'

const initialState = {
    flatItems:[
        {
            id:1,
            title:"4-Bedroom Duplex",
            descr:"",
            location:"LEKKI",
            price:"7,000,000 per anum",
            front:require("../assets/image1.jpg"),
            dining:require("../assets/dining1.jpg"),
            living:require("../assets/living10.jpg"),
            room:require("../assets/room8.webp")
        },
        {
            id:2,
            title:"3-Bedroom flat",
            descr:"",
            location:"AJAH",
            price:"2,000,000 per anum",
            front:require("../assets/image2.jpg"),
            dining:require("../assets/dining2.jpg"),
            living:require("../assets/living2.webp"),
            room:require("../assets/room2.webp")
        },
        {
            id:3,
            title:"3-Bedroom Duplex",
            descr:"",
            location:"LEKKI",
            price:"3,500,000 per anum",
            front:require("../assets/image3.jpg"),
            dining:require("../assets/dining3.webp"),
            living:require("../assets/living3.webp"),
            room:require("../assets/room3.webp")
        },
        {
            id:4,
            title:"3-Bedroom flat",
            descr:"",
            price:"3,500,000 per anum",
            location:"VICTORIA ISLAND",
            front:require("../assets/image4.jpg"),
            dining:require("../assets/dining4.webp"),
            living:require("../assets/living4.webp"),
            room:require("../assets/room4.webp")
        },
        {
            id:5,
            title:"2-Bedroom flat",
            descr:"",
            location:"IKOYI",
            price:"1,500,000 per anum",
            front:require("../assets/image5.jpg"),
            dining:require("../assets/dining5.jpg"),
            living:require("../assets/living5.webp"),
            room:require("../assets/room5.webp")
        },
        {
            id:6,
            title:"5-Bedroom Duplex",
            descr:"",
            location:"LEKKI",
            price:"8,500,000 per anum ",
            front:require("../assets/image6.jpg"),
            dining:require("../assets/dining6.webp"),
            living:require("../assets/living6.webp"),
            room:require("../assets/room6.webp")
        }, {
            id:7,
            title:"3-Bedroom Duplex",
            descr:"",
            location:"IKOYI",
            price:"2,500,000 per anum",
            front:require("../assets/image7.jpg"),
            dining:require("../assets/dining7.webp"),
            living:require("../assets/living7.webp"),
            room:require("../assets/room7.webp")
        },
        {
            id:8,
            title:"2-Bedroom flat",
            descr:"",
            location:"LEKKI",
            price:"1,300,000 per anum",
            front:require("../assets/image8.jpg"),
            dining:require("../assets/dining8.jpg"),
            living:require("../assets/living8.webp"),
            room:require("../assets/room8.webp")
        },
        {
            id:9,
            title:"2-Bedroom flat",
            descr:"",
            location:"IKEJA",
            price:"900,000 per anum per flat",
            front:require("../assets/image9.jpg"),
            dining:require("../assets/dining8.jpg"),
            living:require("../assets/living9.webp"),
            room:require("../assets/room9.webp")
        },
        {
            id:10,
            title:"2-Bedroom flat",
            descr:"",
            location:"IKEJA",
            price:"700,000 per anum",
            front:require("../assets/images.jpg"),
            dining:require("../assets/dining5.jpg"),
            living:require("../assets/living10.jpg"),
            room:require("../assets/room10.webp")
        }

    ]
}

const FlatSlice= createSlice({
    name:"flat",
    initialState,
    reducers:{
        handleFilter:(state,action)=>{
            const loc= action.payload;
            
            return{
                 ...state,
                 flatItems:[...state.flatItems].filter((flatitem)=>flatitem.location===action.payload)

            }            
            
            
                
            
        }

    }
})
export const {handleFilter}=FlatSlice.actions;
export default FlatSlice.reducer;