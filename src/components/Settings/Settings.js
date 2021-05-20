import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Settings.css';
import Navbar from '../Navbar/Navbar';
class Settings extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            activeTab: '1',
            firstname:'',
            lastname:'',
            email:'',
            city:'',
            modal : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleModal() { 
        this.setState({
            modal : !this.state.modal
        });
    }

    handleSubmit(event)
    {
      event.preventDefault();
      fetch(`https://streax-app.herokuapp.com/updateInfo`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
            firstName:this.state.firstname,
            lastName:this.state.lastname,
            Email:this.state.email,
            City:this.state.city
           
          }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
    }

    handleChangeFirstName(event)
    {
      this.setState({firstname:event.target.value})
    }

    handleChangeLastName(event)
    {
      this.setState({lastname:event.target.value})
    }

    handleChangeEmail(event)
    {
      this.setState({email:event.target.value})
    }

    handleChangeCity(event)
    {
      this.setState({city:event.target.value})
    }



    render() {

        return (
            <React.Fragment>
                <Navbar />
                <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <section className="py-5 my-5">
                        <div className="container">
                            <h1 className="mb-5 d-none">slknd</h1>
                            <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                                <div>
                                    <h3 className="mb-4 setting-h3">Account Settings</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input placeholder="Fuckin" type="text" className="form-control" value={this.state.firstname} onChange={this.handleChangeFirstName} required/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input placeholder="Nobody" type="text" className="form-control" value={this.state.lastname} onChange={this.handleChangeLastName}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input placeholder="fuckin_nobody@gmail.com" type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input placeholder="Gotham" type="text" className="form-control" value={this.state.city} onChange={this.handleChangeCity} required/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="setting-bttn">
                                        <button onClick={this.toggleModal} className="btn setting-btn">Update</button>
                                        <button className="btn btn-light setting-btn">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </form>
                {/* Modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalBody>
                            Your Settings are updated successfully
                    </ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Settings;