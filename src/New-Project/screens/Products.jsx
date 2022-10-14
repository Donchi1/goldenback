import React, { useContext } from 'react'
import { goldenContext } from '../context/GoldenProvider'
import SingleProduct from './SingleProduct'

function Products() {
  const { mobile, addToCart, modalFile, setOpenModal } = useContext(
    goldenContext,
  )
  const [a, b, c, d, e, f, g, h, i, j, k, l] = mobile
  const latest = [a, b, i, j]
  const recent = [c, d, e, f, g]
  const popular = [k, l]

  return (
    <>
      <SingleProduct
        item={popular}
        modalFile={modalFile}
        addToCart={addToCart}
        setOpenModal={setOpenModal}
        title="popular"
      />
      <SingleProduct
        item={latest}
        modalFile={modalFile}
        addToCart={addToCart}
        setOpenModal={setOpenModal}
        title="Latest"
      />
      <SingleProduct
        item={recent}
        modalFile={modalFile}
        addToCart={addToCart}
        setOpenModal={setOpenModal}
        title="recent"
        shadow={'shadow'}
      />
    </>
  )
}

export default Products
