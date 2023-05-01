import React from 'react';
import '../../App.css';
import './LearnMore.css'

function LearnMore () {
    return (
        <>
        <h2 className="what-is-refyne-text">What is Refyne</h2>
        <div className="container">
            <div className="image-container">
                <img
                    src='/images/logo512.jpeg'
                    alt="placeholder"
                    className="image"
                />
            </div>
                <div className="line line-top-left"></div>
                <div className="line line-top-right"></div>
                <div className="line line-bottom-left"></div>
                <div className="line line-bottom-right"></div>
            <div className="text text-top-left">*Refyne* aims to offer AI text processing tools for businesses or individuals 
                                                to gather further insights from their customer to business (C2B) interactions. 
                                                C2B interactions can be defined for this system as anything from direct contact via email, 
                                                website contact forms, product or business reviews, to any text based communication related to 
                                                C2B interactions.</div>
            <div className="text text-top-right">Gathering valuable information such as location, 
                                                sentiment score, and topic counts from communications helps a business achieve 
                                                their company goals due to a deeper and better understanding of their customers.</div>
            <div className="text text-bottom-left">The context of the system is the technology used to power the Refyne product. 
                                                Refyne aims to provide an easy to use, powerful C2B AI management suite to 
                                                its customers who receive high volumes of messages and other textual data on a regular basis. 
                                                Refyne is industry-agnostic, which allows it to serve a vast demographic of businesses with email, 
                                                form, and manual file upload capabilities.</div>
            <div className="text text-bottom-right">On the backend, Refyne's system scales intelligently to high 
                                                    throughput and provides features like emailing customers to acknowledge receipt. 
                                                    Additionally, it includes a powerful AI model that intelligently labels messages with 
                                                    suggested keywords, assigns a sentiment score, and attaches location attributes to 
                                                    the message. On the frontend, customers enjoy a streamlined, intuitive user interface 
                                                    with account management features.</div>
            </div>
        
        </>
    )
}
export default LearnMore;