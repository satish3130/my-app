import React, { Component } from "react";
import "./pratice.css";

class Pratice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const url = "https://finalspaceapi.com/api/v0/character";
    const res = await fetch(url);
    const posts = await res.json();
    this.setState({ posts });
  }
  render() {
    const { posts } = this.state;
    return (
      <>
        <h3 className="h3">Details of Finalspace Api</h3>

        {/* <h3 className="h3">Details of Finalspace Api</h3> */}
        {/* {posts && posts.length > 0 &&*/}
        <div className="grid-item">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <img className="img" src={post.img_url} alt="" />
              <br />

              <span>id:{post.id}</span>
              <br />
              <span>Name:{post.name}</span>
              <br />
              <span>species:{post.species}</span>
              <br />
              <span>hair:{post.hair}</span>
              <br />
              <span>origin:{post.origin}</span>
              <br />
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Pratice;
