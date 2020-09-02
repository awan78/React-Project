import React , {Component} from 'react'
import {connect} from 'react-redux' 
import {loadcategories} from '../actions/categoryActionCreater'
import '../styles/style.css'
import Display from './Display'

class Categories extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let categoryarray = [];
    let itemsarray = [];
    let blank = [];
    if(Object.keys(this.props.categories).length > 0 && 
    Object.keys(this.props.items).length > 0)  {
    Object.keys(this.props.items).reduce((array, key) => {
      itemsarray.push(this.props.items[key])
    }, [] )  
    Object.keys(this.props.categories).reduce((array, key) => {
      categoryarray.push(this.props.categories[key])
    }, [] )  
    return(
      <Display items={itemsarray} categories={categoryarray} blankarray={blank}/>
    )  
    }
    return(
      <button onClick={this.props.loadcategories}>Get Data </button>
    )
  }
}
const mapStateToProps=({isLoading , categories, error ,isitemloading,items,itemerror})=>({
  isLoading,
  categories,
  isitemloading,
  items,
  itemerror})
const mapDispatchToProps= dispatch=>({
    loadcategories:()=> dispatch(loadcategories())
})
export default connect(mapStateToProps,mapDispatchToProps)(Categories)

