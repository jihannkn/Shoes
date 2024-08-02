import image1 from '../../../public/assets/images/image1.png'
import ProductContent from '../elements/ProductContent'



export default function PruductList() {
    return(
        <div className="cardd flex justify-between w-[100%] h-[33vh]">
            <ProductContent>
            <ProductContent.Image image={image1}/>
            <ProductContent.Descripsion title="Nike Air" price="$149.00" discon="$199.00"/>
            <ProductContent.color col="bg-blue-500"/>
            </ProductContent>
            <ProductContent>
            <ProductContent.Image image={image1}/>
            <ProductContent.Descripsion title="Nike Air" price="$149.00" discon="$199.00"/>
            <ProductContent.color col="bg-blue-500"/>
            </ProductContent>
            <ProductContent>
            <ProductContent.Image image={image1}/>
            <ProductContent.Descripsion title="Nike Air" price="$149.00" discon="$199.00"/>
            <ProductContent.color col="bg-blue-500"/>
            </ProductContent>
            <ProductContent>
            <ProductContent.Image image={image1}/>
            <ProductContent.Descripsion title="Nike Air" price="$149.00" discon="$199.00"/>
            <ProductContent.color col="bg-blue-500"/>
            </ProductContent>
</div>
    )
}