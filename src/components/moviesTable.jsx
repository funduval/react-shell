import React, { Component } from 'react';
import Table from "./common/table"

class MoviesTable extends Component {

    columns = [{ path: 'title', label: 'Title' }, { path: 'genre.name', label: 'Genre' }, { path: 'numberInStock', label: 'Stock' }, { path: 'dailyRentalRate', label: 'Rate' }, { key: "delete", content: movie => <button onClick={() => this.props.onDelete(movie._id)} className="btn btn-sm btn-outline-danger"> Delete </button> }]

    render() {
        const { movies, sortColumn, onSort } = this.props
        return (
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}

export default MoviesTable;