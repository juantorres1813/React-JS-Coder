import detailmock from '../../utils/details.mock';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './CategoryListContainer.css'


const CategoryListContainer = () => {
    const getCategory = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(detailmock)
        }, 2000)
    })

    const {category} = useParams()

    const [CategoryData, setCategoryData] = useState([])

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
        const filter = detailmock.filter((products) => products.category === category);
        setCategoryData(filter);
            }
    
    return (
    <div className='list-products'>
        {CategoryData?.map((product)=>{
            return <Item data={product} key={product?.id} />
        })}
    </div>
    )
}

export default CategoryListContainer