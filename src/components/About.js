
export default function About(props) {

    // Using dark mode feature in the about section
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#27374D',
        backgroundColor: props.mode === 'dark' ? '#27374D' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#27374D'
    }

    return (
        <div classNameName="container">
            <h2 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#27374D' }}>About Us</h2>
            {/* Use of accordions from Bootstrap to show information about the app */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextoPolis gives you a way to analyse your text quickly and efficiently. Be it word count, character count or even the average human time one may require to read your text!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextoPolis is a free character counter tool that provides instant word count and character count statistics for a given text. TextoPolis reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software runs in any web browsers such as Chrome, Safari, Internet Explorer, Mozilla Firefox, Opera. It suits to count characters in Facebook, blogs, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
