import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"; // Added
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrol from "../components/Scrol";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import "./style.css";
import { setSearchField, requestRobots } from "../actions"; // Combined import

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isLoading: state.requestRobots.isPending, // Corrected
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isLoading, error, searchField, onSearchChange } = this.props;

    if (isLoading) return <h1>Loading...</h1>;

    if (error) return <h1>Error loading robots: {error?.message || "Unknown error"}</h1>;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //if (!filteredRobots.length) return <h1>No robots found</h1>;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scrol>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scrol>
      </div>
    );
  }
}

App.propTypes = {
  searchField: PropTypes.string.isRequired,
  robots: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  onSearchChange: PropTypes.func.isRequired,
  onRequestRobots: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
