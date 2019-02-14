import React,{Component} from "react";

import StyledButton from "./index.style";

class Button extends Component {
  constructor(props){
    super(props);
  }
    render () {
      return(
        <StyledButton>
          {this.props.value}
        </StyledButton>
      )
    }
}

export default Button;
