import '../src/style.css';
import '../src/component.css';
import React from 'react';

export default function Nav() {
    return (
        <>
            <div className="search-bar"><img src="/assets/desktop/icon-search.svg" alt="" /><input type="text" placeholder='Filter by title, companies, expertise...' /></div>
            <div className="filter-location"><img src="/assets/desktop/icon-location.svg" alt="" /><input type="text" placeholder='Filter by location...' /></div>
            <div className="full-time-only"><input type="checkbox" id="myCheckbox" className="custom-checkbox" /><label htmlFor="myCheckbox" className="checkbox-label"></label><h3>Full Time Only</h3><a href="#" className="padded-anchor">Search</a></div>
        </>
    )
}