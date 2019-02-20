import axios from 'axios';
import React, {	Component} from "react";
import {	Link} from 'react-router-dom'
import Header from "../../Header";
import Table from "../../Table";
import {	StyledPage,	StyledTilte} from "./index.style";


class ViewUsers extends Component {
	state = {
		result: [],
	};

	componentDidMount() {
		axios
			.get("/users")
			.then(data => {
				const result = data.data;
				result.data.forEach((item) => {
					switch (item.type) {
						case "student":
							item.type = 'طالب';
							break;
						case "admin":
							item.type = 'ادمن';
							break;
						case "trainer":
							item.type = 'مدرب';
							break;
						case "employee":
							item.type = 'موظف';
							break;
					}
					switch (item.gender) {
						case "female":
							item.gender = 'أنثى';
							break;
						case "male":
							item.gender = 'ذكر';
							break;
					}
					switch (item.living) {
						case "city":
							item.living = 'مدينة';
							break;
						case "camp":
							item.living = 'مخيم';
							break;
						case "village":
							item.living = 'قرية';
							break;
					}
				});
				this.setState({result: result.data});
			}).catch(() => {
				alert("error");
			});
	}

	render() {
		const columns = [
      {Header: 'id',accessor: 'id',show: false},
			{Header: 'اسم الطالب',accessor: 'name'},
			{Header: 'النوع',accessor: 'type'},
			{Header: 'مكان السكن',accessor: 'living'},
			{Header: 'العنوان',accessor: 'address'},
			{Header: 'الجنس',accessor: 'gender'},
			{Header: 'تاريخ الميلاد',accessor: 'dateOfBirth'},
			{Header: 'رقم الهاتف',accessor: 'phoneNo'},
			{Header: 'الايميل',	accessor: 'email'}
		];

		return ( <
			React.Fragment >
			<Header/>
			<StyledPage>
			<StyledTilte> جميع المستخدمين </StyledTilte>
      <Table columns = {columns} data = {this.state.result}/>
			<li> <Link to = "/CreateUser"> إضافة مستخدم جديد </Link></li>
			</StyledPage>
      </React.Fragment>
		);
	}
}
export default ViewUsers;
