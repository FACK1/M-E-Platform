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
       usersList: [],
     };
   }

   dateParser = (date) => {
     const isoDate = ((new Date(date).toLocaleString()).split(',')[0]).split('/');
     return (isoDate[2] + '/' + isoDate[0] + '/' + isoDate[1]);
   };

   generateUserWithDate = (user) => {
     return `${user.name} (${this.dateParser(user.dateOfBirth)})`;
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
       const { id } = this.props.match.params;
       axios.get(`/users/searchByName/${value}/${id}`)
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
     this.setState({ userNameInput: '' });
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
           this.getStudents();
         } else {
           alert(`Adding user to activity Error: ${data.err}`);
         }
       })
       .catch((err) => {
         alert(`Send request Error: ${err.message}`);
       });
   };

   componentDidMount() {
     this.getStudents();
   }

   getStudents = () => {
     const { id } = this.props.match.params;
     axios.get('/users/getUsersByActivityId/' + id)
       .then(({ data }) => {
         if(data.success){
           const usersList = data.data.users.map((u) => ({ ...u, gender: u.gender === 'male' ? 'ذكر' : 'أنثى' }));
           this.setState({ usersList: usersList });
         } else {
           alert("Server Error, cannot get users.\n Error: " + data.err);
         }
       })
       .catch((err) => {
         alert("Problem with get users, check your internet connection.\n Error: " + err.message);
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
               <datalist id="userNames"> {this.renderSuggestions()}</datalist>
                onChange={this.onChangeAction}
                 list="userNames"
                 autocomplete="off"
                 value={this.state.userNameInput}
               />
               <button>اضافة</button>
               <datalist id="userNames"> {this.renderSuggestions()} </datalist>

           </form>
           <Table columns={columns} data={this.state.usersList}/>
         </StyledPage>
       </React.Fragment>

     );
   }
 }
 export default ActivityInformation;
