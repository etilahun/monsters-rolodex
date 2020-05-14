import React from 'react';
import './search-box.styles.css';

/*
functional components, unlike class components such as App.js component,
they don't have access to state b/c they don't have access to constructor(),
which is a class method on Component that we import from 'react' that we
extend our class from. 
functional components don't also have lifecycle methods. They don't have
internal state and lifecycle methods b/c we don't always use these.
Sometimes all we want to do is render some HTML. That is what a functional
component really is. A functional component is just something that gets some
props and returns some HTML. If you don't think you need internal state nor
access a lifecycle methods, use functional components.
*/
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type="search"
        placeholder={placeholder} //'search monsters'
        onChange={handleChange}
        /*{e => this.setState({ searchField: e.target.value }
          ,() => console.log(this.state))}
        */
        >
    </input>
)