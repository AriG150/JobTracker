


// class Homepage extends React.Component{
//   state= {
//     name: '',
//     company: ''
//   }

// componentDidMount = () => {
//   let config = {
//     headers: {
//       Authorization: `Bearer ${this.props.token}`
//     }
//   }
//   axios.get('/api/apps', config)
//     .then(res => {
//       this.setState({name: res.data.name, title: res.data.company})
//     })
// }

// render(){
//   var mappedApps;
//   if(this.state.length){
//     mappedApps = this.props.state.map((app, id) => <div key={id}> {app.name} - {app.company} </div>)
//   } else {
//     mappedApps = <div> Start your job hunt! <Link to='/AddApp'> Add an Application </Link>  </div>
//   }

//   return(
//     <div>
//       <h1>Hi, i'm here</h1>
//       {mappedApps}
//     </div>
//   )
// }

// }

// export default Homepage;
