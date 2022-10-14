import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

function Category({ name, price, img, width, path, padding }) {
  return (
    <Link to={path}>
      <div
        className={`${
          padding && 'py-8'
        } cursor-pointer  hover:shadow-lg p-8 transition-shadow ease-linear duration-400`}
      >
        <img src={img} alt="category" width={width} />
        <div className="mt-8">
          <h4 className="space-y-8 uppercase text-blue-500 font-medium">
            {name}
          </h4>
          <p className="capitalize">{price}</p>
        </div>
      </div>
    </Link>
  )
}

Category.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  width: PropTypes.string,
}

export default Category
