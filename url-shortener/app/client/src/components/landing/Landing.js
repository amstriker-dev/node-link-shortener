import React, { Component } from "react";
import "./landing.css";
import { createShortUrl } from "../../ApiHelper";
import constants from "../../config/config";
class Landing extends Component {
  constructor() {
    super();
    this.state = {
      showShortenUrl: false,
      shortenUrl: "",
      originalUrl: "",
      baseUrl: "",
      clickSubmit: true,
      showError: false,
      apiError: "",
      showApiError: false,
      showLoading: false,
      exShortUrl: constants.baseUrl
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  handleSubmit() {
    this.setState({ clickSubmit: true, showApiError: false });
    if (this.state.clickSubmit && this.state.originalUrl) {
      this.setState({ showLoading: true, showShortenUrl: false });
      let reqObj = {
        originalUrl: this.state.originalUrl,
        shortBaseUrl: constants.baseUrl
      };
      createShortUrl(reqObj)
        .then(json => {
          setTimeout(() => {
            this.setState({
              showLoading: false,
              showShortenUrl: true,
              shortenUrl: json.data.shortUrl
            });
          }, 0);
        })
        .catch(error => {
          this.setState({
            showLoading: false,
            showApiError: true,
            apiError: "Server Error"
          });
        });
        
        this.setState({ showError: false });
    } else {
      this.setState({ showError: true });
    }
  }
  renderButton() {
    if (!this.state.showLoading) {
      return (
        <button
          className="btn waves-effect waves-light #424242 grey darken-3 submit-btn"
          name="action"
          onClick={this.handleSubmit}
        >
          SHORTEN URL
        </button>
      );
    } else {
      return (
        <div className="loader">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="landing">
        <div>
          <h5> Original Url</h5>
        </div>

        <input
          name="originalUrl"
          field="originalUrl"
          placeholder="Paste your link.."
          value={this.state.originalUrl}
          onChange={this.handleUserInput.bind(this)}
        />

        {this.state.showError && (
          <div className="formError">Original Url is required</div>
        )}


        {this.renderButton()}
        {this.state.showApiError && (
          <div className="shorten-error">{this.state.apiError}</div>
        )}
        {this.state.showShortenUrl && (
          <div className="shorten-title">
            Shortened Url is ->{` `}
            <a target="_blank" href={this.state.shortenUrl}>
              {this.state.shortenUrl}
            </a>
          </div>
        )}

      </div>
    );
  }
}

export default Landing;
