const {Router, Route, Link} = ReactRouter;
const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to Forks, Transylvania</h1>
        <h3>The Best Vampire Wiki on the Web</h3>
        <ul>
        	<li><Link to="/">Home</Link></li>
        	<li><Link to="/vampires">Vampires</Link></li>
          <li><Link to="/vampires/new">Create a New Vampire</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
const Vampires = React.createClass({
	getInitialState: function () {
		return {data: []};
	},
	componentDidMount: function() {
		$.ajax({
			url: 'mongodb://localhost:27017/monsters',
			method: 'GET',
			success: function(result) {
				this.setState({data: result});
			}.bind(this)
		});
	},
	render: function() {
		var vampireComponents = this.state.data.map(function(vampire){
			return <Vampire title={vampire.title} author={vampire.author} content={vampire.content}/>;
		});
		return (
			<ul>
				{vampireComponents}
			</ul>
		);
	}
});
const Vampire = React.createClass({
	render: function() {
		return (
			<li>
				<h2>{this.props.title} <small>by {this.props.author}</small></h2>
				<p>{this.props.content}</p>
			</li>
		);
	}
})

const NewVamp = React.createClasss({
  render: function(){
    return (

    );
  }
});
React.render((
  <Router>
  	<Route path="/" component={App}>
  		<Route path="vampires" component={Vampires}/>
      <Route path="vampires/new" component={NewVamp}/>
  	</Route>
  </Router>
), document.body);
