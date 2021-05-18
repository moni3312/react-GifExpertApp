import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories = []})=>{

const [categories, setCategories] = useState(defaultCategories)


return  <>
            <h2 className= "titulo">GifExpertApp</h2>
            <br />
            <AddCategory setCategories={setCategories} />
            <hr />
            <nl>
                {   
                    categories.map(category =>
                        <GifGrid
                        key= {category} 
                        category = {category} 
                        />
                    )
                }
            </nl>
        </>

}; 
export default GifExpertApp;