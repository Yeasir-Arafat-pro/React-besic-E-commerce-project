
const date = new Date()
const dateName = date.getDate()
const dateMonth = date.getMonth()
const dateYear = date.getFullYear()

const Cart = (props) => {
    const {title,  desc} = props
    return <div className='cart'>
        <h3 className="cartTitle">{title}</h3>
        <p className="cartDesc"> {desc}</p>
        <p className="cartFooter">{dateName +'/'+ dateMonth +'/'+ dateYear}</p>
    </div>
}

export default Cart

