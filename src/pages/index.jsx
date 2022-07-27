import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./route";
import { getGeo } from '@/utils'

class Page extends React.Component {
  state = {
    geo: {}
  }
  constructor(porps) {
    super(porps);

  }
  componentDidMount() {
    getGeo().then(data => {
      console.log('------Geo------', data)
      this.setState({geo: data});
    })
 

    // 模拟再次请求，从缓存中拿数据
    setTimeout(() => {
      getGeo().then(data => {
        console.log('------第二次请求从缓存中拿数据, network中对geo文件的请求只有一次-----', data)
      })
    }, 2000)
  }
   render() {
    return (
      <>
        { JSON.stringify(this.state.geo)}
        <Switch>
        {Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      </>
    );
  }
}

export default Page;
