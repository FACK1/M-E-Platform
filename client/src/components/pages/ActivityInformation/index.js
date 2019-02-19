import React, { Component } from 'react';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import Button from '../../Button';

 class ActivityInformation extends Component {

   constructor(props) {
     super(props);
     this.state = {
       suggestions: [],
       userId: null,
     };
     this.renderSuggestions = this.renderSuggestions.bind(this);
     this.onChangeAction = this.onChangeAction.bind(this);
     this.onSubmitAddStudent = this.onChangeAction.bind(this);
   }

   onChangeAction({ target: { value } }) {
     if(value){
       axios.get('/users/searchByName/' + value)
       .then(({ data }) => {
         if (data.success) {
           this.setState({ suggestions: data.data });
         } else {
           alert(`Getting Data Error: ${data.err}`);
         }
       })
       .catch((err) => {
         alert(`Getting Data Error: ${err.message}`);
       });
     }
     console.log("State:", this.state.suggestions);
   }



   onSubmitAddStudent({ userName }) {
     const userNameWithDate = userName;
     const choosenUsersList = this.state.suggestions.filter((user) => {
       return (userNameWithDate === `${user.name - user.dateOfBirth}`);
     });
     this.setState({ userId: choosenUsersList[0].id });
     console.log(this.state);
   }

   renderSuggestions() {
     return this.state.suggestions.map((suggestion, key) => {
       return <option value={`${suggestion.name} - ${suggestion.dateOfBirth}`} key={key} />;
     });
   }

   render() {
     const { id } = this.props.match.params;
     const columns = [
       {
         Header: 'id',
         accessor: '__id',
         show: false
       },
       {
         Header: 'اسم الطالب',
         accessor: 'name'
       },
       {
         Header: 'العمر',
         accessor: 'age'
       },
       {
         Header: 'الجنس',
         accessor: 'gender'
       },
     ];

     return (
       <React.Fragment>
         <Header/>
         <StyledActivityDetailsNav>
           <ActivityDetails activityId={id}/>
         </StyledActivityDetailsNav>
         <StyledPage>
           <Formik onSubmit={this.onSubmitAddStudent}>
             <Form>
               <Field type="text" name="userName" placeholder="اكتب اسم الطالب"
                      onChange={this.onChangeAction} list="userNames"/>
               <Button value="إضافة">اضافة</Button>
               <datalist id="userNames">
                 {this.renderSuggestions()}
               </datalist>
             </Form>
           </Formik>
           <Table columns={columns} data={[]}/>
         </StyledPage>
       </React.Fragment>

     );
   }
 }
 export default ActivityInformation;
