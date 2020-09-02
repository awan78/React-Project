import React,{Component} from 'react'
import images from './images.jpeg'
class ItemsDetail extends Component {
	constructor(props) {
		super(props)
	} 
  render() {
  	if(this.props.item.availability==true) {
  		const avaialbe="In Stock"
  	}
  	else {
  		const avaialbe = "Not in stock"
  	}
		return(
      <div classNAme="detailed-card-block">
        <div className="border detailed-image-block">
          <img src={images} alt="image" width="350px" height="430px" />
        </div>
        <div className="detailed-card-text">
          <p><h3>{this.props.item.title}</h3></p>
          <p><span style={{color: "red"}}>{this.props.item.discountedprice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span className="discount">{this.props.item.actualprice}</span></p>
          <p><strong>Item Code:</strong>&nbsp;&nbsp;{this.props.item.itemcode}</p>
          <p><strong>Availability:</strong>&nbsp;&nbsp;{this.props.item.availability ? 'In Stock' : 'Out of Stock'}</p>
          <p><strong>Condition:</strong>&nbsp;&nbsp;{this.props.item.condition}</p>
          <hr />
          <p>It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <hr />
        </div>
      </div>
			)
	}
}
export default ItemsDetail