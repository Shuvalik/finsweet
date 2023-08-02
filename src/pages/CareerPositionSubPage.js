function CareerPosition() {
    return (
        <>
        <section>
            <div className="container positionFirstSection">
                <div className="titleSectionHolder subSection ">
                    <p className="sectionTitle">job position</p>
                    <h1 className="h2">
                        Front-end Developer
                    </h1>
                    <p>
                        We are passionate about continuing the development of our staff and always welcoming more talent.
                    </p>
                    <div className="stylishCornerTreeColor">
                        <button type="button" className="btn arrowLink">Apply Now</button>
                    </div>
                </div>
                <div className="colorTeaser stylishCornerTreeColor rightCorner bigger">
                    <h4 className="h4">Job Description</h4>
                    <ul>
                        <li>Remote, India , 4 to 5 Years Of Experience</li>
                        <li>Department: Product Engineering</li>
                        <li>Full Time 5 Position Available.</li>
                    </ul>
                </div>
            </div>
            <div id="tabContainer" className="container bg-turquoise">
                <ul className="tabTitle">
                    <li className="active">Details</li>
                    <li>Requirements</li>
                    <li>Responsibilities</li>
                </ul>
                <div className="tabContent">
                    <div className="active">
                        <ul>
                            <li>
                                Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).
                            </li>
                            <li>
                                Design & Create highly engaging industry-related content in both photo, gif & video format
                            </li>
                            <li>
                                Publish Posts on various social media channels
                            </li>
                            <li>
                                Promote content on social networks and monitor engagement (e.g. comments and shares)
                            </li>
                            <li>
                                Research industry-related topics
                            </li>
                            <li>
                                Editing audio and sound design on projects
                            </li>
                            <li>
                                Engage in opportunities to develop original content and concepts for web and mobile
                            </li>
                            <li>
                                Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.
                            </li>
                            <li>
                                Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels  
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                At least 5 years of experience in developing and maintaining the front end of web applications.
                            </li>
                            <li>
                                Expertise in HTML, CSS, and JavaScript (ES6+).
                            </li>
                            <li>
                                3+ years experience with Reactjs.
                            </li>
                            <li>
                                2+ years experience with Nextjs.
                            </li>
                            <li>
                                Experience with Typescript.
                            </li>
                            <li>
                                Knowledge of React tools including React.js, Webpack, and Redux.
                            </li>
                            <li>
                                Experience with JavaScript libraries such as jQuery and Bootstrap.
                            </li>
                            <li>
                                Familiarity with CSS pre processor Sass.
                            </li>
                            <li>
                                Working knowledge of SEO principles.
                            </li>
                            <li>
                                Experience with build tools such as Gulp or Webpack.
                            </li>
                            <li>
                                Experience with version control such as Git.
                            </li>
                            <li>
                                Experience with cross-browser compatibility testing.
                            </li>
                            <li>
                                Experience code reviewing, leading, and mentoring junior front-end developers.
                            </li>
                            <li>
                                Strong communication and collaboration skills, with the ability to work effectively in cross-functional teams.
                            </li>
                            <li>
                                Experience with cloud-based platforms like Netlify and Vercel is a plus
                            </li>
                            <li>
                                Experience with Containerized solutions (Docker) and Kubernetes is a plus
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul> 
                            <li>
                                Develop high-quality, responsive, and user-friendly web applications using HTML, CSS, and JavaScript.
                                </li> 
                                <li>Build code pattern libraries, responsive page templates, and single-page web applications from annotated visual designs using Reactjs and Nextjs.
                                </li> 
                                <li>Write clean, well-documented, and maintainable code that follows software engineering best practices.
                                </li> 
                                <li>Stay up-to-date with the latest trends and technologies in front-end development and provide recommendations for improvement.
                                </li> 
                                <li>Work closely and collaborate with product managers, designers, and backend engineers to identify and define application requirements.
                            </li> 
                            <li>Debug errors, troubleshoot issues, and perform routine performance optimizations.</li> 
                            <li>On-site search engine optimization (SEO).</li> 
                            <li>Write high-quality, scalable, and reusable code.</li> 
                            <li>Stay plugged into emerging technologies and industry trends.</li> 
                            <li>Have great problem-solving skills and you work well in a team.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="applyNow" className="container">
                <h3 className="h3">Apply Now</h3>
                <form action="/">
                    <div className="imputHolder">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="email">Email Id</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="number">Mobile No</label>
                        <input type="text" id="number" />
                    </div>
                    <div className="textareaHolder">
                    <textarea placeholder="Why do you thing you are good fit for Finsweet?" />
                    </div>
                    <div className="checkboxHolder">
                            <input type="checkbox" id="Iagree" checked={false}/>
                        <label htmlFor="Iagree">
                            I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.
                        </label>
                    </div>
                    <div className="stylishCornerTreeColor">
                        <button type="submit" className="btn arrowLink">Submit Application</button>
                    </div>
                </form>
            </div>
            
        <section>
            <div className="container stylishCornerTreeColor subScribe">
                <div className="twoColumns rightColorFullLine">
                <div>
                    <p className="sectionTitle">
                    NEWSLETTER
                    </p>
                    <h3 className="h3">Subscribe our News Letter to get Latest Updates.</h3>
                </div>

                <form action="/" id="subScribe">
                    <input type="email" name="" id="" placeholder='Paresh@Pixeto.com' />
                </form>
                </div>
            </div>
        </section>
        </section>
        </>
    );
}
export default CareerPosition;