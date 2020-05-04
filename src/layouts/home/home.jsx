import React from "react";

const Home = () => {

    return (
        <div className="container left-align">
            <div className="row">
                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"
                                 alt="cat"/>
                            {/*<img src="https://cdn.sm-news.ru/wp-content/uploads/2019/12/06/wp4455257-1300x675.jpg" alt="cat"/>*/}
                            {/*<img src="https://images4.alphacoders.com/100/1001740.jpg" alt="cat"/>*/}
                            <a className="btn-floating halfway-fab waves-effect waves-light pink accent-3 pulse"><i
                                className="material-icons">sms</i></a>
                        </div>
                        <div className="card-content center">
                            <span className="card-title">Kristen</span>
                            <p>Moscow, 12 km from you</p>
                        </div>
                    </div>
                </div>

                <div className="col s12 m8 l8 xl8">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">About</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            <br/>
                            <div className="chip">
                                Star Wars
                                <i className="close material-icons">close</i>
                            </div>
                            <div className="chip">
                                Marvel
                                <i className="close material-icons">close</i>
                            </div>
                            <div className="chip">
                                Fortnite
                                <i className="close material-icons">close</i>
                            </div>
                            <div className="chip">
                                DC
                                <i className="close material-icons">close</i>
                            </div>
                            <div className="chip">
                                Lord of the Rings
                                <i className="close material-icons">close</i>
                            </div>
                            <div className="chip">
                                World of Wacraft
                                <i className="close material-icons">close</i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 m12 l12 xl12">
                    <div className="card">
                        <div className="card-content pink accent-3 white-text">
                            <span className="card-title">Gallery</span>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://24smi.org/public/media/celebrity/2017/12/11/1yughuj5gile-naomi-skott.jpg"
                                 alt="cat"/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://placefun.ru/uploads/posts/2020-01/1579244776_00.jpg" alt="cat"/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Naomi_Scott.jpg" alt="cat"/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://biografii.net/wp-content/uploads/2018/09/03_PN2w2wC.jpg" alt="cat"/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4 l4 xl4">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://cdn.sm-news.ru/wp-content/uploads/2019/12/06/wp4455257-1300x675.jpg" alt="cat"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;