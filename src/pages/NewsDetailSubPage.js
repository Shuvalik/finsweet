import img1 from './../assets/images/news/img1.jpg';
function NewsDetail() {
    return (
        <>
        <section>
            <div className="container">
                <div className="stylishCornerTreeColor rightCorner bigger">
                    <div className="titleSectionHolder mainNews pixelOrange">
                        <h1 className="h2">
                            Breaking the code How did we build our Figma plugin  
                        </h1>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients
                        </p>
                        <div className="authorInfo">
                                <span className="name">Andrew Jonson</span>
                                <span className="publishDate">Posted on 27th January 2021</span>
                        </div>
                    </div>
                </div>
                <div className="newsDetailsPage">
                    <div className="imageHolder bottonRightColorLine">
                        <img src={img1} alt="" />
                    </div>
                    <div className="contentHolder">
                        <h3 className="h3">
                            Transform Your Idea Into Reality with Ether a Leading Digital Agency
                        </h3>
                        <p>
                            Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.
                        </p>
                    </div>
                </div>

            
            </div>    
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
        </>
    )
}
export default NewsDetail;