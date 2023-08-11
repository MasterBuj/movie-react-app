import PropTypes from 'prop-types';
import { useState } from 'react';


Accordion.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
    expand: PropTypes.bool,
};

function Accordion({ title, content, expand }) {
    const [isActive, setIsActive] = useState(expand ? true : false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <h3 className='title'>{title}<span>{isActive ? '-' : '+'}</span></h3>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
}

export default Accordion;