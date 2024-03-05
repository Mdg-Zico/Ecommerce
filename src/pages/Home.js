import Products from "../components/Products";
import ProductType from "../components/ProductType";
import ProductTypeObject from "../components/ProductTypeObject";
import ProductLogo from "../components/ProductLogo";
import ViewProduct from "../components/ViewProduct";
import ProductLogoObject from "../components/ProductLogoObject";
import ProductCategory from "../components/ProductCategory";
import ProductCategoryObject from "../components/ProductCategoryObject";
import HorizontalRule from "../components/HorizontalRule";
import ProductLogoWithViewAll from "../components/ProductLogoWithViewAll";
import BestSellingProduct from "../components/BestSellingProduct";
import BestSellingProductObject from "../components/BestSellingProductObject";
import ExploreProduct from "../components/ExploreProducts";
import ExploreProductsObject from "../components/ExploreProductsObject";
import Incentives from "../components/Incentives";
import IncentivesObject from "../components/IncentivesObject";
import NewArrival from "../components/NewArrival";




const prod = ProductTypeObject.map((item) => (
    <ProductType key={item.id} {...item} />
  ));
  const logo = ProductLogoObject.map((text, index) => (
    <ProductLogo key={index} {...text} />
  ));
  const category = ProductCategoryObject.map((option) => (
    <ProductCategory key={option.id} {...option} 
      className={option.className || ''}
    />
  ));
  const selling = BestSellingProductObject.map((best) => (
    <BestSellingProduct key={best.id} {...best} />
  ));
  const explore = ExploreProductsObject.map((para) => (
    <ExploreProduct key={para.id} {...para} />
  ));
  const incent = IncentivesObject.map((incents) => (
    <Incentives key={incents.id} {...incents} />
  ));
  
 


  export default function Home(){

    return(
        <div>    
            
         <Products/>
         
        {logo[0]}

        {prod}
        <ViewProduct />
        <HorizontalRule />
        {logo[1]}
        {category}
        <HorizontalRule />
        <ProductLogoWithViewAll />
        <div>
        {selling}
        </div>
        {logo[2]}
        {explore}
        <ViewProduct />
        {logo[3]}
        <NewArrival/>
        {incent}
        
</div>
    )
    
  }