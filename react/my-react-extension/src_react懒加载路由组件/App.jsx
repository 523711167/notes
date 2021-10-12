import React, {lazy,Suspense}  from "react";
import {Route} from "react-router-dom"

import MyNavLink from "./component/MyNavLink";
import Header from "./component/Header";
import Loading from "./component/Loading";
// 懒加载
const About = lazy(() => {
    import('./pages/About')
})
const Home = lazy(() => {
    import('./pages/Home')
})



export default class App extends React.Component {

    render() {
        return (
            <div className="container py-3" style={{ backgroundColor: '#EEE' }}>
                <div className="row my-2">
                    <div className="col-12" style={{border: '1px solid red', backgroundColor: '#DFD'}}>
                            <Header/>
                    </div>
                </div>
                <div className="row my-2" >
                    <div className="col-3" style={{border: '1px solid red'}}>
                        <div className="d-flex flex-column">
                            <MyNavLink to="/about" >About</MyNavLink>
                            <MyNavLink to="/home" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-9" style={{border: '1px solid red'}}>
                        <div className="tab-content">
                            {/* 正在加载中的等待页面 */}
                            <Suspense fallback={Loading}>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}