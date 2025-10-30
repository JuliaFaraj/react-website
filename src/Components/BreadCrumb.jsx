// src/Components/Breadcrumb.jsx  (eller BreadCrumb.jsx – välj ETT namn och håll det överallt)
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Breadcrumb = () => {
  const location = useLocation()

  // Visa inte breadcrumb på startsidan
  if (location.pathname === '/') return null

  const pathnames = location.pathname.split('/').filter(Boolean)

  // inne i return – ta bort <h1>...</h1> helt
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((seg, i) => {
        const to = '/' + pathnames.slice(0, i + 1).join('/');
        const label = seg.replace(/-/g, ' ');
        return (
          <span key={to}>
            {' / '}
            {i === pathnames.length - 1 ? (
              <span aria-current="page">{label}</span>
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb

