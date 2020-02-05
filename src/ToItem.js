import  React,{ Component} from "react";
import  PropTypes from 'prop-types'
class  ToItem extends Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        const  { deleItems ,index} = this.props;
        deleItems(index);
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}  key  = {this.props.index} >{this.props.test}-{this.props.content} </div>
        )
    }

}
//PropTypes校验
ToItem.propTypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
}
//Props默认值
ToItem.defaultProps = {
    test:'hello world'
}
export  default ToItem