import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../store/reducer/product'

class ProductList extends Component {
    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        const {products} = this.props
        return(
            <div>
                {products.map(product => {
                return <div>{product.name}</div>
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        products: state.product.products
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getAllProducts: () => dispatch(getAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)