import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import TherpistComponent from "./TherapistComponent";
import "./Therapists.css";

export const Therapists = () => {
    const [therapists, setTherapists] = useState([]);
    const therapistsCollectionRef = collection(db, "therapists");
    
    useEffect(() => {
    
        const getTherapists = async () => {
        const data = await getDocs(therapistsCollectionRef);
        setTherapists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTherapists();
    }, [])


    return (
        <div className="therapists-div">
            <Navbar></Navbar>
            <h1 className="therapists-title">Therapists</h1>
            <p className="page-intro">Welcome to our directory of highly qualified therapists! Our team of professionals offers a wide range of specialties and approaches to help you achieve your mental health and wellness goals. From relationship counseling to trauma recovery, our therapists have the expertise and experience to support you. Browse through our list of therapists to learn more about their backgrounds, specialties, and approaches. Whether you're looking for individual therapy, couples therapy, or family therapy, you'll find a therapist who can help. With a focus on compassion, empathy, and evidence-based practices, our therapists are here to provide the care and support you need to lead a happier, healthier life.</p>

            <div className="">
                {therapists.map((therap, i) => <TherpistComponent {...therap} key={i}/>)}
            </div>
        </div>
    );
}