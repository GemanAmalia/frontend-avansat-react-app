import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase-config";
import TestimonialComponent from "./TestimonialComponent";
import Contact from "./Contact";
import "./Home.css";

export const Home = () => {
    const [testimonials, setTestimonials] = useState([]);
    const testimonialsCollectionRef = collection(db, "testimonials");
    const [jwtToken, setJwtToken] = useState([]);
    const history = useNavigate();

    useEffect(() => {

            const getTestimonials = async () => {
            const data = await getDocs(testimonialsCollectionRef);
            setTestimonials(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getTestimonials();

        const auxjwtToken = auth.onAuthStateChanged(function(user) {
            if (user) {
            user.getIdToken().then(function(idToken) {  
                // console.log("id token: ", idToken);                
                if(idToken !== "") {
                    setJwtToken(idToken);
                } else {
                    history("/Authentication/Login");
                }

                return idToken;
            });
            }
        });
    }, [])
    

    if ( jwtToken && jwtToken?.length !== 0) {
        // {console.log("jwt token ", jwtToken)}
        return (
            <>
                <div className="home-div">
                    <Navbar></Navbar>
                    <h1 className="home-title">Home</h1>
                    <p className="page-intro-home">At Therapy Hub, we believe that everyone deserves access to quality mental health care. That's why we've created an innovative platform that connects individuals with licensed therapists, right from the comfort of their own home. Our mission is to improve the lives of those we serve, and we're proud of the positive impact we've had on so many people.</p>
                    <p className="page-intro-home">Our clients come to us with a wide range of mental health challenges, from stress and anxiety to depression and trauma. But what they all have in common is a desire for a better life, and a willingness to invest in their mental health. With the support and guidance of our therapists, our clients are able to make real and lasting change. They learn new coping strategies, gain new insights into their thoughts and emotions, and develop greater resilience in the face of life's challenges.</p>
                    <p className="page-intro-home">We're humbled by the stories of hope and healing that we hear from our clients every day. Here are just a few of their testimonials:</p>
                    <div className="testimonials">
                        {testimonials.map((testimonial, i) => <TestimonialComponent {...testimonial} key={i}/>)}
                    </div>
                    <p className="page-intro-home">If you're ready to invest in your mental health and wellbeing, we'd love to help. Browse our directory of therapists today, and take the first step towards a happier, healthier life.</p>
                </div>
                <Contact></Contact>
            </>
        )
    } else {
        history("/Authentication/Login");
    }
}