import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Profile from './Profile';

const Team = () => {
    const profiles = {
        p1:{
            name: 'James Ford',
            desination: 'General Director',
            img:'assets/images/team1.jpg',
        },
        p2:{
            name: 'Ann Brown',
            desination: 'General Director',
            img:'assets/images/team2.jpg',
        },
        p3:{
            name: 'Ben Jason',
            desination: 'Manager',
            img:'assets/images/team3.jpg'
        },
    }
    return (
        <section className="team1 cid-svGOyiGS51" id="team01-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h2 className="title align-left mbr-fonts-style mb-5 display-2"><SectionTitle name="Our Team"></SectionTitle></h2>
                </div>
                <Profile img ={profiles.p1.img} name ={profiles.p1.name} desination={profiles.p1.desination}></Profile>
                <Profile img ={profiles.p2.img} name ={profiles.p1.name} desination={profiles.p1.desination}></Profile>
                <Profile img ={profiles.p3.img} name ={profiles.p1.name} desination={profiles.p1.desination}></Profile>
            </div>
        </div>
    </section>
    );
};

export default Team;