import React, { Component } from "react"
import axios from "axios"

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      resume:[]
    };
  }

  componentDidMount() {
    axios.get('./src/data/resume.json')
        .then(response => {
          this.setState({
            resume: response.data
          })
        })
  }
  render() {
    let resume = resume
    const resume = this.state.resume
  }
}

export default Resume 
