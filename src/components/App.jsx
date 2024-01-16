import React from "react";
import Navbar from "./Navbar";
import SectOne from "./SectOne";
import Products from "./Products";
import ProductType from "./ProductType";
import ProductTypeObject from "./ProductTypeObject";
import ProductLogo from "./ProductLogo";
import ViewProduct from "./ViewProduct";
import ProductLogoObject from "./ProductLogoObject";
import ProductCategory from "./ProductCategory";
import ProductCategoryObject from "./ProductCategoryObject";
import HorizontalRule from "./HorizontalRule";
import ProductLogoWithViewAll from "./ProductLogoWithViewAll";
import BestSellingProduct from "./BestSellingProduct";
import BestSellingProductObject from "./BestSellingProductObject";
import ExploreProduct from "./ExploreProducts";
import ExploreProductsObject from "./ExploreProductsObject";
import Incentives from "./Incentives";
import IncentivesObject from "./IncentivesObject";
import Footer from "./Footer";
import FooterObject from "./FooterObject";



const prod = ProductTypeObject.map((item)=>{
 return <ProductType
  item = {item}
 />
})
const logo = ProductLogoObject.map((text)=>{
  return <ProductLogo
   {...text}
  />
 })
 const category = ProductCategoryObject.map((option)=>{
  return <ProductCategory
  {...option}
  />
 })
 const selling = BestSellingProductObject.map((best)=>{
  return <BestSellingProduct
  {...best}
  />
 })
 const explore = ExploreProductsObject.map((para)=>{
  return <ExploreProduct
  {...para}
  />
 })
const incent = IncentivesObject.map((incents)=>{
  return <Incentives
  {...incents}
  />
 })

 const feet = FooterObject.map((feets)=>{
  return <Footer
  
  {...feets}
  
  />

 })
export default function App(){
  
 
  return  (
  
    <div>
    <Navbar/>
   <SectOne/>

  

   <Products/>
   {logo[0]}
    {prod}
    <ViewProduct/>
    <HorizontalRule/>
   {logo[1]}
    {category}
    <HorizontalRule/>
    <ProductLogoWithViewAll/>
    {selling}
    {logo[2]}
    {explore}
    <ViewProduct/>
    {logo[3]}
    {incent}
    <div className="mainfooter"> 
   <div className="subsubfooter">
   {feet}
 </div>

 <div className="horirule">
  <hr className="hr"/>
  <div className="copyright">
  <h4>Copyright Rimel 2022. All right reserved</h4>
  </div>
 </div>
   </div>
  </div>



  )
  
  
}