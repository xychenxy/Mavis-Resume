import React from 'react';
import Title from "../components/Title";
export default function Profile(){
    return (
        <>
            <div className="container mt-5" id='profile'>

                <Title title={"Profile"} subtitle={"I am a web developer"}/>

                <div className="row">
                    <div className="col-lg-6 my-5 px-5">
                        <h3>About me</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur doloribus ea est laboriosam molestias neque, non recusandae? Cumque dolores impedit ipsum laborum nostrum, numquam placeat reprehenderit temporibus! Animi blanditiis eius, eos laborum modi officiis omnis perspiciatis quisquam tempora vitae.
                        </p>
                    </div>
                    <div className="col-lg-6 my-5">
                        <div className="about-img-container"></div>
                    </div>

                </div>
            </div>
        </>
    )
}