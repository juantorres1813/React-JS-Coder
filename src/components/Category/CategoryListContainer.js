import detailmock from '../../utils/details.mock';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';


const CategoryListContainer = () => {
    const getCategory = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(detailmock)
        }, 2000)
    })

    const {category} = useParams()

    useEffect(()=>{
        getCategory
        .then((res)=>{
            //console.log(res)
            FilterbyCategory(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [category])

    const FilterbyCategory = () =>{
        detailmock.some((product)=>{
            if (product.category === category) {
                setCategoryData(product)
            }
        })
    }

    const [CategoryData, setCategoryData] = useState([])
    
    return (
    <div>
        <ItemList dataProducts={CategoryData}/>
    </div>
    )
}

export default CategoryListContainer