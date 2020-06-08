import React from "react";
import { connect } from "react-redux";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import search from "../../actions/searchActions";
import select from "../../actions/selectAction";
import Planet from "../Planet";
class Search extends React.Component {
  state = { searchCount: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ searchCount: 0 }, () => {
        this.props.select({}, this.state.searchCount);
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <AsyncTypeahead
          disabled={
            this.props.searchCount >= 30 && this.props.user !== "Luke Skywalker"
              ? true
              : false
          }
          id="search"
          isLoading={this.props.isLoading}
          minLength={2}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          className="star-wars-search__form"
          labelKey="name"
          placeholder="Click here and search!"
          renderMenuItemChildren={this.renderMenuItemChildren}
          options={this.props.searchOptions}
        />
        {this.props.searchCount >= 30 &&
        this.props.user !== "Luke Skywalker" ? (
          <div className="alert alert-dark" role="alert">
            {`${this.props.user}, you have exhausted the search options. Wait for
            minute`}
          </div>
        ) : (
          ""
        )}
        <Planet />
      </>
    );
  }

  handleSearch = (query) => {
    if (!query) return;
    this.props.search(query);
  };

  renderMenuItemChildren = (option, id, index) => {
    //console.log(option["rotation_period"]);
    return (
      <div key={id}>
        <span
          style={{
            fontSize: option["rotation_period"]
              ? `${option["rotation_period"]}px`
              : `12px`,
          }}
        >
          {option.name}
        </span>
      </div>
    );
  };

  handleChange = (data) => {
    this.setState(
      (prevState) => {
        return {
          searchCount: prevState.searchCount + 1,
        };
      },
      () => {
        this.props.select(data, this.state.searchCount);
      }
    );
  };
}
const mapStateToProps = (state) => {
  const { options, isLoading } = state.searchOptions;
  const { userSearchCount } = state.selectedPlanet;
  const { user, count } = userSearchCount;

  return {
    searchOptions: options,
    isLoading: isLoading,
    user: user,
    searchCount: count,
  };
};
export default connect(mapStateToProps, { search, select })(Search);
