function Contact() {
    return (
        <>
        <section>
            <div className="container">
                <div className="titleSectionHolder pixelOrange">
                    <p className="sectionTitle">CONTACT US</p>
                    <h1 className="h2">
                        Have a Question ? <br/>
                        Let’s Get in Touch with us <span className="smodzi">👋</span>
                    </h1>
                    <p>
                        Fill up the Form  and ou team will get back to within 24 hrs
                    </p>
                    <form action="/" id="contact">
                        <div className="fildSection">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value="Paresh Srichandan" />
                        </div>
                        <div className="fildSection">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" value="Paresh@pixeto.com" />
                        </div>
                        <div className="fildSection">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" value="For web design work Enquire" />
                        </div>
                        <div className="fildSection">
                            <label htmlFor="messege">Messege</label>
                            <textarea id="messege"  placeholder="Type your Messege">

                            </textarea>
                        </div>
                        <div className="stylishCornerTreeColor">
                            <button type="submit" className="btn arrowLink">Request Quote</button>
                        </div>

                    </form>
                </div>
            </div>    
        </section>
        </>
    )
}
export default Contact;