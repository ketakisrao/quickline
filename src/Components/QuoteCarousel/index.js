import React, { useState } from 'react';
import './index.scss';
import { Carousel } from "react-bootstrap";

function QuoteCarousel(props) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    var quotes = props.info;
    let i = 0;
    let quotes_array = [];
    for (i = 0; i < quotes.length; i++) {
        quotes_array.push(
            <Carousel.Item>
                <div className="carousel-i">
                    <div>
                        <p>
                            <span className="quote-open">“</span>
                            {quotes[i]}
                            <span className="quote-close">”</span>
                        </p>
                    </div>
                </div>
            </Carousel.Item>
        );
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} pasue={'hover'}>
            {quotes_array}
        </Carousel>
    );
}

export default QuoteCarousel;