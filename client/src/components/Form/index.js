import React, {Component} from "react";
import { Formik,} from "formik";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Title, StyledForm, StyledField, StyledLabel, StyledInput} from './index.style'



class MainForm extends Component{
  constructor(props) {
  super(props);
  this.state = {
    startDate: '',
    endDate: ''

  };
}

handleStartDate = date => {
  this.setState({
    startDate: date,
    });
}
handleEndDate = date => {
  this.setState({
    endDate: date,
    });
}


render() {
  return(
<Formik>
<StyledForm>
<Title>Hello</Title>
<StyledInput>
  <StyledLabel>اسم النشاط</StyledLabel>
<StyledField type="text" name="ActivityName" placeholder="اسم النشاط"/>
</StyledInput>
<StyledLabel>
اختر البرنامج
<StyledField component="select" name="selectProgram">
<option value="Program1"> البرنامج الاول</option>
<option value="Program2">  البرنامج الثاني</option>
<option value="Program3">البرنامج الثاني</option>
</StyledField>
</StyledLabel>
<StyledLabel>
اختر الهدف
<StyledField component="select" name="selectObj">
<option value="obj1"> الهدف الاول</option>
<option value="obj2"> الهدف الثاني</option>
</StyledField>
</StyledLabel>
<StyledLabel>
عدد الساعات
<StyledField type="text" name="NumOH" placeholder="عدد الساعات"/>
</StyledLabel>
<StyledLabel>
اسم المدرب
<StyledField type="text" name="tranierName" placeholder="اسم المدرب"/>
</StyledLabel>
<StyledLabel>
اختر المكان
<StyledField component="select" name="selectPlace">
<option value="Place1"> مدينة</option>
<option value="Place2"> بلدة</option>
</StyledField>
</StyledLabel>
<StyledLabel>
التاريخ من
<DatePicker placeholderText="Click to select a date"
 selected={this.state.startDate}
  onChange={this.handleStartDate}/>
</StyledLabel>
<StyledLabel>
الى
<DatePicker placeholderText="Click to select a date"
selected={this.state.endDate}
onChange={this.handleEndDate} />
</StyledLabel>
<button>انشاء</button>
</StyledForm>
</Formik>
);
}
}

export default MainForm;
