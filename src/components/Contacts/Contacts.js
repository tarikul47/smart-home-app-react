import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import SingleContact from './SingleContact';

const Contacts = () => {

    const contacts = {
        C1:{
            name:'Email',
            email:'email@yoursite.com',
            icon:'fas fa-envelope-square'
        },
        C2:{
            name:'Office',
            email:'South Carolina 3531 Street 54',
            icon:'fas fa-headset'
        },
        C3:{
            name:'Phone',
            email:'+1 (234) 567 89 01',
            icon:'fas fa-phone-alt'
        },
    }
    return (
        <section className="contact5 cid-svMHuAElzZ" id="contacts05-i">
        <div className="container">
            <div className="row">
                <div className="col-12 pb-5 col-lg-9">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-1">
                    <SectionTitle name="Contacts"></SectionTitle>
                    </h3>
                    <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7"><strong>Lorem
                            ipsum dolor sit amet,
                            consectetur adipiscing elit.</strong></h5>
                </div>
            </div>
            <div className="row justify-content-center">
                <SingleContact socialIcon={contacts.C1.icon} name={contacts.C1.name} email={contacts.C1.email}></SingleContact>
                <SingleContact socialIcon={contacts.C1.icon} name={contacts.C2.name} email={contacts.C2.email}></SingleContact>
                <SingleContact socialIcon={contacts.C3.icon} name={contacts.C3.name} email={contacts.C3.email}></SingleContact>  
            </div>
        </div>
    </section>
    );
};

export default Contacts;