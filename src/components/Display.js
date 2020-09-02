import React,{Component} from 'react'
import images from './images.jpeg'
import ItemsDetail from './ItemsDetail'

class Display extends Component {
	constructor(props) {
		super(props)
		this.state = {  
			items:this.props.items,
			filtered:this.props.items,
			categories:this.props.categories,
			itemsDetail:false,
			selecteditem:'',
			previosly_selected_items:this.props.blankarray,
			class: ["someclass2","someclass", "someclass", "someclass", "someclass", "someclass", "someclass", "someclass"]

		}
	}
  handleStateChange(array,id) {
    if(id!=100) { 
    	var flag=false
    	var items = []
    	var filteredItems = []
    	console.log('previos ', this.state.previosly_selected_items)
    	var size = this.state.previosly_selected_items.length
    	console.log('size',size)
    	if(size > 0) {
    		console.log('if ', size)
    	  filteredItems = this.state.previosly_selected_items
        filteredItems.forEach(item => {
    		  if(item.categoryId===id) {
            flag = true 
    		  }
    	  })
    	}
    	if(flag === true) {
    	  console.log('flag' , flag)
        filteredItems.forEach(item => {
  	  	  if(item.categoryId != id) {
  	  		  items.push(item)
  	      }
  	    })
  	    if(items.length === 0) {
  	    	items = array
  	    }
    		this.setState ({
	  		  filtered:items,
	  		  itemsDetail:false,
	  		  selecteditem:'',
	        previosly_selected_items:items 
        })
    	}
      else {
  	    array.forEach(item => {
  	  	  if(item.categoryId===id) {
  	  		  filteredItems.push(item)
  	  	  }
  	    })
  	    this.setState ({
  		    filtered:filteredItems,
  		    itemsDetail:false,
  		    selecteditem:'',
          previosly_selected_items:filteredItems 
        })
  	  }
    }  
    else{
    	const some_array = [...this.state.class]
			some_array[id-100] = "someclass2"
    	this.setState ({
  		  filtered:array,
  		  itemsDetail:false,
  		  selecteditem:'',
  		  previosly_selected_items:[],
  		  class:some_array
  		})
    }
  }
  handleComponentChange(item) {
    this.setState({
    	itemsDetail:true,
      selecteditem:item
    })
  }
	render() {
		let itemsarray=this.state.items
		let obj=this
		let arrayofcategories = this.state.categories.map((filters,i) => {
			return( 
				<div className = "sideborder opacity">
				  <a className={this.state.class[i]} onClick={this.handleStateChange.bind(obj,itemsarray,obj.state.categories[i].id)}> &nbsp;&nbsp;> &nbsp;&nbsp;  {this.state.categories[i].title}</a>
        </div>)
    })
    if(this.state.itemsDetail == false){
    let arrayofitems=this.state.filtered.map((filters,i) => {
      return(
      	<div className="items-main-div">
          <div className="border image-block">
	          <img src={images} alt="image" width="220px" height="250" onClick={this.handleComponentChange.bind(obj , obj.state.filtered[i] )}/>
	          <center><p>{this.state.filtered[i].title}</p></center>
	          <p><span style={{color: "red"}}>{this.state.filtered[i].discountedprice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <span className="discount">{this.state.filtered[i].actualprice}</span></p>
          </div>
        </div>)
    })
		  return(
			  <React.Fragment>
			  <div className="vertical-menu">
          <p className="border margin-bottom" href="#"><b>&nbsp;&nbsp;PRODUCT TYPES</b></p>
          {arrayofcategories}
          <hr />
        </div>
        {arrayofitems}
        </React.Fragment>
		  )
		}
		else{
			return(
			  <React.Fragment>
			  <div className="vertical-menu">
          <p className="border margin-bottom" href="#"><b>&nbsp;&nbsp;PRODUCT TYPES</b></p>
          {arrayofcategories}
          <hr />
        </div>
        <ItemsDetail item={this.state.selecteditem}/>
        </React.Fragment>
			)
		}	
	}
}
export default Display