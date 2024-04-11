import React from "react";
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";

const App = (props)=>{
    return(
        <div>
            <Layout>
                <Shopping />
            </Layout>
        </div>
    )
};

export default App;