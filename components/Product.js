export default function Product({product}){
    const {title, height, key, width, image} = product.attributes
    console.log (image)
    return (
        <div>
            <div>
                <img src={image.data.attributes.formats.small.url} alt="" />
            <h2>{title}</h2>
            <h3>{key}</h3>
            </div>
            </div>
    )
}