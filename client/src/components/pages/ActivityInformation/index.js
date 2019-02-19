import React, { Component } from 'react';
import axios from 'axios';
import {StyledPage, StyledActivityDetailsNav} from "./index.style";
import Header from "../../Header";
import ActivityDetails from "../../ActivityDetails"
import Table from '../../Table';

 class ActivityInformation extends Component {

   constructor(props) {
     super(props);
     this.state = {
       suggestions: [],
       userId: null,
       userNameInput: '',
     };
   }

   generateUserWithDate = (user) => {
     return `${user.name} - ${user.dateOfBirth}`;
   };

   checkSuggestionsClick = (inputValue) => {
     let checked = false;
     this.state.suggestions.forEach((suggestion) => {
       checked = checked ? checked : this.generateUserWithDate(suggestion) === inputValue;
     });
     return checked;
   };

   onChangeAction = ({ target: { value } }) => {
     this.setState({ userNameInput: value });
     if(value && !this.checkSuggestionsClick(value)){
       axios.get(`/users/searchByName/${value}`)
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
   };

   onSubmitAddStudent = (event) => {
     event.preventDefault();
     const userNameWithDate = this.state.userNameInput;
     const chosenUsersList = this.state.suggestions.filter((user) => {
       return (userNameWithDate === this.generateUserWithDate(user));
     });
     this.setState({ userId: chosenUsersList[0]._id }, () => {
       const { id } = this.props.match.params;
       this.addUserToActivity(this.state.userId, id);
     });
   };

   renderSuggestions = () => {
     return this.state.suggestions.map((suggestion, key) => {
       return <option value={this.generateUserWithDate(suggestion)} key={key} />;
     });
   };

   addUserToActivity = (userId, activityId) => {
     axios.post('/activities/addUserToActivity', { userId, activityId })
       .then(({ data }) => {
         if(data.success){
           alert("User Added successfully!");
         } else {
           alert(`Adding user to activity Error: ${data.err}`);
         }
       })
       .catch((err) => {
         alert(`Send request Error: ${err.message}`);
       });
   };

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
           <form onSubmit={this.onSubmitAddStudent}>
               <input
                 type="text"
                 name="userName"
                 placeholder="اكتب اسم الطالب"
                 onChange={this.onChangeAction} list="userNames"
               />
               <button value="إضافة">اضافة</button>
               <datalist id="userNames"> {this.renderSuggestions()} </datalist>
           </form>
           <Table columns={columns} data={[]}/>
         </StyledPage>
       </React.Fragment>

     );
   }
 }
 export default ActivityInformation;
